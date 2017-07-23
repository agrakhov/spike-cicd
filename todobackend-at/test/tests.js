import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { get, options, post } from '../utils/requestHelper';

// chai.should();
const expect = chai.expect;
chai.use(chaiAsPromised);

const url = process.env.URL || 'http://localhost:8000/todos';

describe('CORS test', () => {
  let result;

  before(() => {
    result = options(url);
  });

  it('should return set of CORS headers', () =>
    result.then((r) => {
      expect(r.headers).to.contain.all.keys([
        'access-control-allow-origin',
        'access-control-allow-methods',
        'access-control-allow-headers',
      ]);
      expect(r.headers['access-control-allow-origin']).to.equal('*');
    }));
});

describe('GET test', () => {
  let result;

  before(() => {
    result = get(url);
  });

  it('response = OK', () => expect(result).to.eventually.be.fulfilled);
  it('statusCode = 200', () => result.then(r => expect(r.statusCode).to.equal(200)));
});

describe('POST test', () => {
  let result;

  before(() => {
    result = post(url, { title: 'do the test' });
  });

  it('return 201 and link', () => result.then((r) => {
    expect(r.statusCode).to.equal(201);
    expect(r.headers.location).to.match(/^https?:\/\/.*\/todos\/[\d]+$/);
  }));

  it('should create item', () => {
    const item = result.then(r => get(r.headers.location));
    return item.then((r) => {
      console.log(JSON.stringify(r));
      expect(r.statusCode).to.equal(200);
      expect(r.body.title).to.equal('do test');
    });
  });
});
