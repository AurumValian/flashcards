const chai = require('chai');
const should = chai.should();

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

  it('should be a function', function() {
    (Deck).should.be.a('function');
  })

  it('should be an instance of Deck', function () {
    const deck = new Deck();
    (deck).should.be.an.instanceOf(Deck);
  })

  it('should contain an array of Cards', function() {
    const cards = [
      new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method"), 
      new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method"),
      new Card(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", ["mutator method", "accessor method", "iteration method"], "iteration method")
    ];
    const deck = new Deck(cards);
    (deck.cardArray).should.deep.equal([{
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
    }])
  })

  it('should be able to count the number of cards in the deck', function() {
    const cards = [
      new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method"),
      new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method"),
      new Card(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", ["mutator method", "accessor method", "iteration method"], "iteration method")
    ];
    const deck = new Deck(cards);
    const cardCount = deck.countCards();
    (cardCount).should.equal(3);
  })

})