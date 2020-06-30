const chai = require('chai');
var should = chai.should();

const Card = require('../src/Card');

describe('Card', function() {

  it('should be a function', function() {
    let card = new Card();
    (Card).should.be.a('function');
  });

  it('should be an instance of Card', function() {
    let card = new Card();
    (card).should.be.an.instanceof(Card);
  }); 

  it('should store a question', function() {
    let card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    (card.question).should.equal('What allows you to define a set of related information using key-value pairs?');
  });  

  it('should store a list of possible answers', function() {
    let card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    (card.answerChoices).should.deep.equal(['object', 'array', 'function']);
  });  

  it('should store the correct answer', function() {
    let card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    (card.correctAnswer).should.equal('object');
  });
});