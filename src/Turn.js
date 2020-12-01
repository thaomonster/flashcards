const Card = require("./Card");

class Turn {
  constructor(userGuess, card) {
    this.userGuess = userGuess;
    this.card = card;
  };

  returnGuess() {
    return this.userGuess;
  };

  returnCard() {
    return this.card;
  };

  evaluateGuess() {
    return this.userGuess === this.card.correctAnswer ? true : false
  };

  giveFeedback() {
    return this.evaluateGuess() ? 'correct!' : 'incorrect!';
  };
};



module.exports = Turn;