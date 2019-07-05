
'use strict';

const expect = require('chai').expect;
const author = require('../src/main');

describe('intial unit test using ` mocha ☕️ ` & ` chai 🍵 ` 👻 ..', () => {

  it('Checkout author is `Imed Jaberi` 🚀 ', () => {
    // like 5 === 5 ..
    expect(author).to.equal("Imed Jaberi");
  });

});
