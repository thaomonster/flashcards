const Card = require('./Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = 0;
  };

  startGame() {
    this.currentRound++

    const cards = prototypeQuestions.map((question) => {
      return new Card(question.id, question.question, question.possibleAnswer, question.correctAnswer)
    });

    let deck = new Deck(cards);
    let round = new Round(deck);
  };

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  };

  printQuestion(round) {
      util.main(round);
  };
};

module.exports = Game;