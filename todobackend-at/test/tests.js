import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { get } from '../utils/requestHelper';

var should = chai.should;
var expect = chai.expect;

chai.use(chaiAsPromised);

const url = process.env.URL || 'http://localhost:8000/todos';

describe('first test', () => {
  let result;

  before(() => {
    result = get(url);
  });

  it('response = 200', () => expect(result).to.eventually.be.fulfilled);
  it('statusCode = 200', () => expect(result.statusCode).to.eventually.equals(200));
});
