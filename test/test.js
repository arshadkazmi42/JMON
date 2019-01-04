var expect = require('chai').expect;
var JMON = require('../index');

var SAMPLE_JSON = {
  'JMON': {
    'name': 'JMON',
    'author': 'Bibek',
    'url': 'https://github.com/bibekluitel/JMON',
  },
};

var SAMPLE_JSON_TWO = {
  'JMON_TWO': {
    'name': 'JMON_TWO',
    'author': 'Bibek_TWO',
    'url': 'https://github.com/bibekluitel/JMON_TWO',
  },
};

/* eslint-disable-next-line */
var SAMPLE_JSON_STIRNGIFIED = `{"JMON":{"name":"JMON","author":"Bibek","url":"https://github.com/bibekluitel/JMON"}}`;

// Add test related set/get operations
describe('Verifies the set and get operations', function() {
  it('Prints Set Value', function() {
    var jmon = new JMON(SAMPLE_JSON);
    jmon.set(SAMPLE_JSON_TWO);
    expect(jmon.data).to.deep.equal(SAMPLE_JSON_TWO);
  });
});

// Add test related to printing and formatting operations
describe('Verify printing related operations', () => {
  it('should match the returned stringified response with defined stringified value', () => {
    var jmon = new JMON(SAMPLE_JSON);
    var response = jmon.stringify();
    expect(response).to.be.a('string');
    expect(response).to.equal(SAMPLE_JSON_STIRNGIFIED);
  });
});
