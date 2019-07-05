
const uuid = require('uuid/v4');
const Block = require('./src/Block');

// const block = new Block('100','2007-07-31','last-hash-demo','current-hash-demo','jawher jaberi <brother> ..');

const block = new Block(uuid().substring(0,5),Date.now(),'last-hash-demo','current-hash-demo','jawher jaberi <brother> ..');

console.log(block.toString());

// const block = new Block(uuid().substring(0,5),Date.now(),'last-hash-demo','current-hash-demo','jawher jaberi <brother> ..');