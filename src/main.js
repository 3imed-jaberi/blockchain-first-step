require('dotenv').config();

const { createHash } = require('crypto');

/**
 * crypto is native cryptography nodejs library 
 * @param {string} data 
 */

const SHA256 = (data) => createHash(process.env.CRYPTOGRAPHY_ALGORITHM).update(data).digest('hex');

module.exports = SHA256 ; 