
'use strict';

require('dotenv').config();

const expect = require('chai').expect;


const Block = require('../src/Block');
const Blockchain = require('../src/Blockchain');




//___ Block Test ___//

describe(' `Block 🎲 ` unit test using ` mocha ☕️ ` & ` chai 🍵 ` 👻 ..', () => {

  let data, previousBlock, block;

  beforeEach(() => {
    data = process.env.AUTHOR;
    previousBlock = Block.GenerateGenesisBlock();
    block = Block.MineBlock(previousBlock, data);
  });

  it('set `data` to match the input 💯', () => {
    expect(block.data).to.equal(data);
  });

  it('set the `previousHash` to match the hash of the pevious block 💯', () => {
    expect(block.previousHash).to.equal(previousBlock.hash);
  });

});




//___ Blockchain Test ___//

describe(' `Block ❄️ ` unit test using ` mocha ☕️ ` & ` chai 🍵 ` 👻 ..', () => {

  let blockchain;

  beforeEach(() => {
    blockchain = new Blockchain();
  });

  it('`Blockchain` should be start with `Genesis Block` 💯 ', () => {
    // use deep here because we are testing that's the same object in memory .. 
    expect(blockchain.chain[0]).to.deep.equal(Block.GenerateGenesisBlock());
  });

  it('Add new block 💯 ', () => {
    const data = process.env.AUTHOR;
    blockchain.addBlock(data);

    expect(blockchain.chain[blockchain.chain.length-1].data).to.equal(data);
  });

}); 
