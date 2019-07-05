require('dotenv').config();

'use strict';

const SHA256 = require('crypto-js/sha256');

const isValid = (transactions) => {
  if (transactions.length > 1 && transactions.length % 2 != 0) {
    console.log(`Cannot build Merkle Tree for odd number of data elements.`);
    console.log(`Resolved the problem ( add one node in the end ) .. `); 
    transactions.push(transactions[transactions.length - 1])
  }
}

const txs = [ "tx1", "tx2", "tx3", "tx4", "tx5", "tx6", "tx7", "tx8" ];

module.exports = ((txs) => {

  let hashedtxs = [], branches = [], branchCounter = 0, merkleRoot ;


  if (txs.length == 0) {
    console.log(`There are no transactions ..`)
  }else {
    
    console.log(`Transactions List: ${txs}`);
    isValid(txs)
    console.log(`Leaf nodes: ${txs}`);

    // hashed the first blocks ligne 
    for (const tx of txs) {
      hashedtxs.push(SHA256(SHA256(tx)).toString());
    }

    console.log("Leaf nodes hashed using double-SHA256 algorithm:")
    console.log(hashedtxs)
     
    let nbBranches = Math.ceil(Math.log2(txs.length))

    for (let i = 0; i <= nbBranches; i += 1) {

      if (hashedtxs.length == 1) {

          merkleRoot = hashedtxs[0];
          console.log(`The Merkle Root is ${merkleRoot}`);

      }else if (branches.length == 1) {

        merkleRoot = branches[0];
        console.log(`The Merkle Root is ${merkleRoot}`);

      }else if (hashedtxs.length > 1 && branches.length == 0) {

        hashedtxs.forEach((item, index) => {
          if (index % 2 == 0) {
            branches.push(SHA256(SHA256(hashedtxs[index].concat(hashedtxs[index + 1]))).toString());
          }
        });

        console.log(`Branch: ${(branchCounter += 1)}`,branches);

      }else if (branches.length > 0) {

        let branchesCopy = Array.from(branches);

        branches = [];

        branchesCopy.forEach((item, index) => {
          if (index % 2 == 0) {
            branches.push(SHA256(SHA256(branchesCopy[index].concat(branchesCopy[index + 1]))).toString())
          }
        });

        console.log(`Branch: ${(branchCounter += 1)}`,branches);

        if (branches.length > 1 && branches.length % 2 != 0) {
          isValid(branches)
          console.log(`Now, Branch ${branchCounter} is: `,branches)
        }

      }

    }
  }
  return merkleRoot ;
})(txs);