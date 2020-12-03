const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard;
    this.currentTurn = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard = this.deck.card[this.currentTurn]
  }

  takeTurn(userGuess) {
    let turn = new Turn(userGuess, this.returnCurrentCard());
    this.currentTurn++

    turn.evaluateGuess() ? null : this.incorrectGuesses.push(this.currentCard.id)

    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    let num = Math.round(this.incorrectGuesses.length / this.deck.card.length * 100)
    
    return 100 - num;
  }

  endRound() {	
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly! \n Below is the index of the questions that you answered wrong: \n
    ${this.incorrectGuesses}`);
    process.exit();
    }
  }

module.exports = Round;