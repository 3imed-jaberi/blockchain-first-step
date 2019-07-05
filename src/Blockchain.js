
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

  isValidChain(chain){

    if(JSON.stringify(chain[0]) !== JSON.stringify(Block.GenerateGenesisBlock())) return false;

    for (let i=1; i<chain.length; i++) {
      const currentBlock = chain[i];
      const previousBlock = chain[i-1];

      if (
            currentBlock.previousHash !== previousBlock.hash 
                                   ||
            currentBlock.hash !== Block.BlockHash(currentBlock)
          ){
                    return false;
          }
    }

    return true;     
  }

  
  ReplaceChain(newChain) {
    if (newChain.length <= this.chain.length) {
      console.log('The new chain is required update beceaus is less length than current chain ..');
      return;
    } else if (!this.isValidChain(newChain)) {
      console.log('The received chain is not valid. ( not sync )');
      return;
    }

    console.log('Replacing the current chain with the new chain.');
    this.chain = newChain;
  }

}

module.exports = Blockchain ;
