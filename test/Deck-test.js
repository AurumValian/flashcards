const chai = require('chai');
const should = chai.should();

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

  it('should be a function', function() {
    (Deck).should.be.a('function');
  })

  it('should be an instance of Deck', function () {
    let deck = new Deck();
    (deck).should.be.an.instanceOf(Deck);
  })
})