require('dotenv').config();

const SHA256 = require('crypto-js/sha256');
// const uuid = require('uuid/v4');

class Block {

  constructor(/* index, */timestamp, previousHash, hash, data) {
   // this.index = index;
    this.timestamp = timestamp;
    this.previousHash = previousHash;
    this.hash = hash;
    this.data = data;
  }

  toString(){
    return ` Block N°: ${process.env.DEFAULT_INDEX/* this.index */} -- 
    Timestamp     : ${this.timestamp} 
    Previous Hash : ${this.previousHash.substring(0,10)} 
    Hash          : ${this.hash.substring(0,10)} 
    Data          : ${this.data} 
    `;
  }

  static GenerateGenesisBlock() {
    const { /* INDEX, */ TIMESTAMP, PREVIOUS_HASH, HASH, DATA } = process.env ; 
    return new this (/* INDEX, */TIMESTAMP,PREVIOUS_HASH,HASH,DATA);
  }

  static MineBlock(previousBlock,data){
    // const index = uuid().substring(0,5); 
    const timestamp = Date.now();
    const previousHash = previousBlock.hash;
    const hash =  Block.Hash(/* index, */Date.now(),previousHash,data);

    return new this (/* index, */timestamp,previousHash,hash,data);
  }

  Hash (/* index, */timestamp,previousHash,data) { 
   // return SHA256( `${this.index}${this.timestamp}${this.previousHash}${JSON.stringify(this.data)}`).toString();
   return SHA256( `${timestamp}${previousHash}${JSON.stringify(data)}`).toString();
  }

}

module.exports = Block ;
