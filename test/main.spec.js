
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

describe(' `Blockchain ❄️ ` unit test using ` mocha ☕️ ` & ` chai 🍵 ` 👻 ..', () => {

  let blockchain , blockchain2 ;

  beforeEach(() => {
    blockchain = new Blockchain();
    blockchain2 = new Blockchain();
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

  it('Validate the chain ( Sync Forks ) 💯 ', () => {
    blockchain2.addBlock(process.env.AUTHOR);

    expect(blockchain.isValidChain(blockchain2.chain)).to.be.true;
  });

  it('Invalidate a chain with a failed genesis block 💯 ', () => {
    blockchain2.chain[0].data = process.env.NOT_AUTHOR || 'Bad Data' ;

    expect(blockchain.isValidChain(blockchain2.chain)).to.be.false;
  });

  it('Invalidate a failed chain ( Async Forks ) 💯 ', () => {
    blockchain2.addBlock(process.env.AUTHOR);
    blockchain2.chain[1].data = process.env.NOT_AUTHOR;

    expect(blockchain.isValidChain(blockchain2.chain)).to.be.false;
  });

  it('Replace the chain with a valid chain 💯 ', () => {
    blockchain2.addBlock('goo');
    blockchain.ReplaceChain(blockchain2.chain);

    expect(blockchain.chain).to.equal(blockchain2.chain);
  });

  it('Doesn\'t replace the chain with one of less than or equal to length 💯 ', () => {
    blockchain.addBlock('foo');
    blockchain.ReplaceChain(blockchain2.chain);

    expect(blockchain.chain).not.to.equal(blockchain2.chain);
  });
  
}); 
