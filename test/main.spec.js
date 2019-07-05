
'use strict';

require('dotenv').config();

const expect = require('chai').expect;

describe('cryptography algorithm unit test using ` mocha ☕️ ` & ` chai 🍵 ` 👻 ..', () => {

  it('Check out Hached Data 🗝 ..', () => {
    // like 5 === 5 ..
    expect(require('../src/main')(process.env.AUTHOR)).to.equal(require('../src/main')('Imed Jaberi'));
  });

});