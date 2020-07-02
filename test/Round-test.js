const chai = require('chai');
const should = chai.should();

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {

  it('should be a function', function() {
    (Round).should.be.a('function');
  })

  it('should create an instance of Round', function() {
    const round = new Round();
    (round).should.be.an.instanceOf(Round); 
  })

  it('should contain a deck object', function() {
    const deck = new Deck([{
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answerChoices": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"
    }, {
      "id": 4,
      "question": "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
      "answerChoices": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "accessor method"
    }, {
      "id": 5,
      "question": "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",
      "answerChoices": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "iteration method"
    }]);
    const round = new Round(deck);
    (round.deck).should.deep.equal(deck);
  })

  it('should list the current card', function() {
    const deck = new Deck([{
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answerChoices": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"
    }, {
      "id": 4,
      "question": "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
      "answerChoices": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "accessor method"
    }, {
      "id": 5,
      "question": "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",
      "answerChoices": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "iteration method"
    }]);
    const round = new Round(deck);
    (round.deck.cardArray[0]).should.deep.equal({
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answerChoices": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"
    });
  })

  it('should list the number of turns as 0 by default', function() {
    const round = new Round();
    (round.turns).should.equal(0);
  })

  it('should have an empty array of incorrect guesses by default', function() {
    const round = new Round();
    (round.incorrectGuesses).should.deep.equal([]);
  })
  
  it('should be able to return the current card', function() {
    const deck = new Deck([{
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answerChoices": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"
    }, {
      "id": 4,
      "question": "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
      "answerChoices": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "accessor method"
    }, {
      "id": 5,
      "question": "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",
      "answerChoices": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "iteration method"
    }]);
    const round = new Round(deck);
    const currentCard = round.returnCurrentCard();
  })
})