const Turn = require('../src/Turn');

class Round {
  constructor(deck = []) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cardArray[0];
  }

  takeTurn(answer) {
    if (typeof(answer) === 'string') {

    } else {
      return 'Answer must be in form of a string';
    }
  }
}

module.exports = Round;