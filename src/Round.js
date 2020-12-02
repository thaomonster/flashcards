const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard;
    this.currentTurn = 0;
    this.incorrectGuesses = [];
  };

  returnCurrentCard() {
    return this.currentCard = this.deck.card[this.currentTurn]
  };

  takeTurn(userGuess) {
    let turn = new Turn(userGuess, this.returnCurrentCard());
    this.currentTurn++

    turn.evaluateGuess() ? null : this.incorrectGuesses.push(this.currentCard.id)
  };
};

module.exports = Round;