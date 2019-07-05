
const Block = require('./Block');

class Blockchain {

  constructor(){
    this.chain = [Block.GenerateGenesisBlock()]          
  }

  addBlock(data){
    const block = Block.MineBlock(this.chain[this.chain.length-1],data);
    this.chain.push(block);

    return block;
  }

}

module.exports = Blockchain ;
