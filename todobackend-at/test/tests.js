import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { get, options } from '../utils/requestHelper';

// var should = chai.should;
const expect = chai.expect;

chai.use(chaiAsPromised);

const url = process.env.URL || 'http://localhost:8000/todos';

describe('CORS test', () => {
  let result;

  before(() => {
    result = options(url);
  });

  it('should return set of CORS headers', () =>
    result.then(r => expect(r.headers).to.contain.all.keys([
      'access-control-allow-origin',
      'access-control-allow-methods',
      'access-control-allow-headers',
    ])));
  it('should allow all origins', () =>
    result.then(r => expect(r.headers['access-control-allow-origin']).to.equal('*')));
});


describe('GET test', () => {
  let result;

  before(() => {
    result = get(url);
  });

  it('response = OK', () => expect(result).to.eventually.be.fulfilled);
  it('statusCode = 200', () => result.then(r => expect(r.statusCode).to.equal(200)));
});
