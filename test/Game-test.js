const chai = require('chai');
const should = chai.should();

const Game = require('../src/Game');

describe('Game', function() {

  it('should be a function', function() {
    (Game).should.be.a('function');
  })

  it('should create an instance of Game', function() {
    const game = new Game();
    (game).should.be.an.instanceOf(Game);
  })
})