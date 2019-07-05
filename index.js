require('dotenv').config();


const Block = require('./src/Block');

const __ISAMM_BLOCK__ = Block.MineBlock(Block.GenerateGenesisBlock(),process.env.MB_DATA);

console.log(__ISAMM_BLOCK__.toString());
