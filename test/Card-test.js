const chai = require('chai');
const should = chai.should();

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
    let card = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], "array");
    (card.question).should.equal('What is a comma-separated list of related values?');
  });  

  it('should store a list of possible answers', function() {
    let card = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], "array");
    (card.answerChoices).should.deep.equal(["array", "object", "function"]);
  });  

  it('should store the correct answer', function() {
    let card = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], "array");
    (card.correctAnswer).should.equal('array');
  });
});