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
    expect(Deck).to.be.a('function')
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceOf(Deck)
  });

  it('should know how many cards are in a deck', () => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');

    let deck = new Deck([card1, card2, card3]);
    
    expect(deck.countCards()).to.equal(3);
  });
});