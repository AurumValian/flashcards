const chai = require('chai');
const should = chai.should();

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  
  it('should be a function', function() {
    let turn = new Turn();
    (Turn).should.be.a('function');
  })
  
  it('should be an instance of Turn', function() {
    let turn = new Turn();
    (turn).should.be.an.instanceOf(Turn);
  })
  
  it('should store a users guess', function() {
    let turn = new Turn('array');
    (turn.guess).should.equal('array');
  })

  it('should be able to store a different guess', function() {
    let turn = new Turn('object');
    (turn.guess).should.equal('object');
  })
  
  it('should store a Card', function() {
    let card = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    let turn = new Turn('array', card);
    (turn.currentCard).should.deep.equal({
    "id": 2,
    "question": "What is a comma-separated list of related values?",
    "answerChoices": ["array", "object", "function"],
    "correctAnswer": "array"
    })
  })

  it('should be able to store a different Card', function() {
    let card = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    let turn = new Turn('mutator method', card);
    (turn.currentCard).should.deep.equal({
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answerChoices": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"
    })
  })

  it('should be able to return the guess', function() {
    let card = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    let turn = new Turn('array', card);
    let guess = turn.returnGuess();
    (guess).should.equal('array');
  })

  it('should be able to return a different guess', function () {
    let card = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    let turn = new Turn('object', card);
    let guess = turn.returnGuess();
    (guess).should.equal('object');
  })

  it('should be able to return the Card', function() {
    let card = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    let turn = new Turn('object', card);
    let currentCard = turn.returnCard();
    (currentCard).should.deep.equal({
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answerChoices": ["array", "object", "function"],
      "correctAnswer": "array"
    })
  })

  it('should be able to return a different Card', function () {
    let card = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    let turn = new Turn('mutator method', card);
    let currentCard = turn.returnCard();
    (currentCard).should.deep.equal({
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answerChoices": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"
    })
  })

  it('should be able to correctly evaluate the users guess', function() {
    let card = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    let turn = new Turn('array', card);
    let turnTwo = new Turn('object', card);
    let isGuessCorrect = turn.evaluateGuess();
    let isSecondGuessCorrect = turnTwo.evaluateGuess();
    (isGuessCorrect).should.equal(true);
    (isSecondGuessCorrect).should.equal(false);
  })

  it('should be able to give feedback', function () {
    let card = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    let turn = new Turn('object', card);
    let feedback = turn.giveFeedback();
    (feedback).should.equal("incorrect!");
  })

  it('should fail this test', function () {
    let card = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    let turn = new Turn('object', card);
    (turn.currentCard).should.equal('turkey');
  })
})