require('dotenv').config();

/**
 * Basic Example With IIFE .. 
 */

console.log(require('./src/main')(process.env.AUTHOR));