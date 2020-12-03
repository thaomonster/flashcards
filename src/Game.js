const Card = require('./Card');
const Round = require('./Round');
const Deck = require('./Deck');

const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound;
  };

  startGame() {
    const cards = prototypeQuestions.map(question => {
      return new Card(question.id, question.question, question.answers, question.correctAnswer)
    })
    
    let deck = new Deck(cards);
    let round = new Round(deck);

    this.currentRound = round;
    this.printMessage(deck, round)
    this.printQuestion(round)
  };

  printMessage(deck) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  };

  printQuestion(round) {
      util.main(round);
  };
};

module.exports = Game;