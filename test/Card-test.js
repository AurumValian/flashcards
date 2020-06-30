const chai = require('chai');
var should = require('chai').should();

const Card = require('../src/Card');

describe('Card', function() {

  it.skip('should be a function', function() {
    const card = new Card();
    (Card).should.be.a('function');
  });

  it.skip('should be an instance of Card', function() {
    const card = new Card();
    (card).should.be.an.instanceof(Card);
  }); 

  it.skip('should store a question', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    (card.question).should.equal('What allows you to define a set of related information using key-value pairs?');
  });  

  it.skip('should store a list of possible answers', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    (card.answers).should.deep.equal(['object', 'array', 'function']);
  });  

  it.skip('should store the correct answer', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    (card.correctAnswer).should.equal('object');
  });
});