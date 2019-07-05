require('dotenv').config();

class Block {

  constructor(index,timestamp, previousHash, hash, data) {
    this.index = index
    this.timestamp = timestamp;
    this.previousHash = previousHash;
    this.hash = hash;
    this.data = data;
  }

  toString(){
    return ` Block N°: ${this.index} -- 
    Timestamp     : ${this.timestamp} 
    Previous Hash : ${this.previousHash.substring(0,10)} 
    Hash          : ${this.hash.substring(0,10)} 
    Data          : ${this.data} 
    `;
  }

  static GenerateGenesisBlock() {
    const { INDEX, TIMESTAMP, PREVIOUS_HASH, HASH, DATA } = process.env ; 
    return new this (INDEX,TIMESTAMP,PREVIOUS_HASH,HASH,DATA);
  }

}

module.exports = Block ;