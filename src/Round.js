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

  takeTurn(guess) {
    if (typeof(guess) === 'string') {
      this.turns++;
      let turn = new Turn(guess, this.returnCurrentCard());
    } else {
      return 'Answer must be in form of a string';
    }
  }
}

module.exports = Round;