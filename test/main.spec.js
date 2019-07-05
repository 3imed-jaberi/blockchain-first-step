
'use strict';

require('dotenv').config();

const expect = require('chai').expect;
const Block = require('../src/Block');


describe(' `Block 🎲 ` unit test using ` mocha ☕️ ` & ` chai 🍵 ` 👻 ..', () => {

  let data, previousBlock, block;

  beforeEach(() => {
    data = process.env.AUTHOR;
    previousBlock = Block.GenerateGenesisBlock();
    block = Block.MineBlock(previousBlock, data);
  });

  it('set `data` to match the input', () => {
    expect(block.data).to.equal(data);
  });

  it('set the `previousHash` to match the hash of the pevious block', () => {
    expect(block.previousHash).to.equal(previousBlock.hash);
  });

});

