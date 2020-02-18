'use strict';

var Document = require('./document');

var parse = function(input) {
  if (!input) {
    return input;
  }

  if (typeof input !== 'string') {
    return input;
  }

  this.doc = new Document();

  for (var pos = 0; pos < input.length; pos++) {
    
  }
}

function Parser() {
  return {
    parse: parse
  };
}

module.exports = Parser;
