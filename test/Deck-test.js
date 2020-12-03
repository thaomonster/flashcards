const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {
  let deck;

  beforeEach(() => {
    deck = new Deck;
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should know how many cards are in a deck', () => {
    const card1 = new Card(1, 'Process of assigning variable declaration a default value of undefined?', ['creation', 'execution', 'hoisting'], 'hoisting');
    const card2 = new Card(2, 'What is the phase where the interpreter sets aside some space in memory to store any variables and functions we might need to access?', ['creation phase', 'execution phase', 'hoisting'], 'creation phase');
    const card3 = new Card(3, 'What do we call when JavaScript executes one line at a time?', ['single-threaded', 'accessor method', 'top-bottom'], 'single-threaded');

    deck = new Deck([card1, card2, card3]);

    expect(deck.countCards()).to.equal(3);
  });
});