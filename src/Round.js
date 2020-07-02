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
      let response = turn.giveFeedback();
      this.removeCurrentCard(response);
      return response;
    } else {
      return 'Answer must be in form of a string';
    }
  }

  removeCurrentCard(turn) {
    if (turn === 'incorrect!') {
      let incorrectCard = this.deck.cardArray.shift();
      this.incorrectGuesses.push(incorrectCard.id);
    } else {
      this.deck.cardArray.shift();
    }
  }
}

module.exports = Round;