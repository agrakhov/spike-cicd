import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { get } from '../utils/requestHelper';

// var should = chai.should;
const expect = chai.expect;

chai.use(chaiAsPromised);

const url = process.env.URL || 'http://localhost:8000/todos';

describe('first test', () => {
  let result;

  before(() => {
    result = get(url);
  });

  it('response = OK', () => expect(result).to.eventually.be.fulfilled);
  it('statusCode = 200', () => result.then(r => expect(r.statusCode).to.equal(200)));
});
