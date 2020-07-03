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
      const turn = new Turn(guess, this.returnCurrentCard());
      const response = turn.giveFeedback();
      this.removeCurrentCard(response);
      return response;
    } else {
      return 'Answer must be in form of a string';
    }
  }

  removeCurrentCard(turn) {
    if (turn === 'incorrect!') {
      const incorrectCard = this.deck.cardArray.shift();
      this.incorrectGuesses.push(incorrectCard.id);
    } else {
      this.deck.cardArray.shift();
    }
  }

  calculatePercentCorrect() {
    const percent = this.incorrectGuesses.length > 0 ? (this.incorrectGuesses.length / this.turns) * 100 : 100;
    return percent;
  }

  endRound() {
    if (this.deck.cardArray.length === 0) {
      return `** Round Over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    }
  }
}

module.exports = Round;