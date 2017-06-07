const chai = require('chai');
var Promise = require('bluebird');
// import Promise from 'bluebird';
var request = require('superagent-promise')(require('superagent'), Promise);
var chaiAsPromised = require('chai-as-promised');
var should = chai.should;
var expect = chai.expect;

chai.use(chaiAsPromised);

const url = process.env.URL || 'http://localhost:8000/todos';

