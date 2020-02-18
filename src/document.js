var NodeType = require('./node-type');
var Node = require('./node');

var Document = function() {
  return new Node(NodeType.DOCUMENT, [[1, 1], [0, 0]]);
}

module.exports = Document;
