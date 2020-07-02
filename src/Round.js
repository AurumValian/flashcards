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
      this.removeCurrentCard(turn);
      return turn.giveFeedback();
    } else {
      return 'Answer must be in form of a string';
    }
  }

  removeCurrentCard(turn) {
    if (turn === 'incorrect') {
      this.incorrectGuesses.push(this.deck.cardArray.shift());
    } else {
      this.deck.cardArray.shift();
    }
  }
}

module.exports = Round;