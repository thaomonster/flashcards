const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Game = require('../src/Game');

describe('Game', () => {

  let deck, card1, card2, card3, round, game;

  beforeEach(() => {
    card1 = new Card(1, 'What do we call when we assign variable declarations a default value of undefined while placing any functions directly in memory?', ['creation', 'execution', 'hoisting'], 'hoisting');
    card2 = new Card(2, 'What is the phase where the interpreter sets aside some space in memory to store any variables and functions we might need to access?', ['creation phase', 'execution phase', 'hoisting'], 'creation phase');
    card3 = new Card(3, 'What do we call when JavaScript executes one line at a time?', ['single-threaded', 'accessor method', 'top-bottom'], 'single-threaded');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(game).to.be.an.instanceOf(Game);
  });

  // it('should be ablt to keep track of current round' () => {

  // })
});