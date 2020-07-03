const chai = require('chai');
const should = chai.should();

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  
  it('should be a function', function() {
    (Turn).should.be.a('function');
  })
  
  it('should be an instance of Turn', function() {
    const turn = new Turn();
    (turn).should.be.an.instanceOf(Turn);
  })
  
  it('should store a users guess', function() {
    const turn = new Turn('array');
    (turn.guess).should.equal('array');
  })

  it('should be able to store a different guess', function() {
    const turn = new Turn('object');
    (turn.guess).should.equal('object');
  })
  
  it('should store a Card', function() {
    const card = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn = new Turn('array', card);
    (turn.currentCard).should.deep.equal({
    "id": 2,
    "question": "What is a comma-separated list of related values?",
    "answerChoices": ["array", "object", "function"],
    "correctAnswer": "array"
    })
  })

  it('should be able to store a different Card', function() {
    const card = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const turn = new Turn('mutator method', card);
    (turn.currentCard).should.deep.equal({
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answerChoices": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"
    })
  })

  it('should be able to return the guess', function() {
    const card = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn = new Turn('array', card);
    const guess = turn.returnGuess();
    (guess).should.equal('array');
  })

  it('should be able to return a different guess', function () {
    const card = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn = new Turn('object', card);
    const guess = turn.returnGuess();
    (guess).should.equal('object');
  })

  it('should be able to return the Card', function() {
    const card = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn = new Turn('object', card);
    const currentCard = turn.returnCard();
    (currentCard).should.deep.equal({
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answerChoices": ["array", "object", "function"],
      "correctAnswer": "array"
    })
  })

  it('should be able to return a different Card', function () {
    const card = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const turn = new Turn('mutator method', card);
    const currentCard = turn.returnCard();
    (currentCard).should.deep.equal({
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answerChoices": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"
    })
  })

  it('should be able to correctly evaluate the users guess', function() {
    const card = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn = new Turn('array', card);
    const turnTwo = new Turn('object', card);
    const isGuessCorrect = turn.evaluateGuess();
    const isSecondGuessCorrect = turnTwo.evaluateGuess();
    (isGuessCorrect).should.equal(true);
    (isSecondGuessCorrect).should.equal(false);
  })

  it('should be able to give feedback', function () {
    const card = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn = new Turn('array', card);
    const feedback = turn.giveFeedback();
    (feedback).should.equal("correct!");
  })

  it('should fail this test', function () {
    const card = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn = new Turn('object', card);
    (turn.currentCard).should.equal('turkey');
  })
})