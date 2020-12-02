const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', () => {
  let card1, card2, card3, deck, turn, round;
  
  beforeEach(() => { 
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    deck = new Deck([card1, card2, card3]);
    turn = new Turn();
    round = new Round(deck);
    
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should return the current card', () => {
    expect(round.returnCurrentCard()).to.equal(card1)
  });

  it('should keep track of the number of turns', () => {
    expect(round.currentTurn).to.equal(0);
    round.takeTurn();
    expect(round.currentTurn).to.equal(1);
    round.takeTurn();
    expect(round.currentTurn).to.equal(2);
  });

  it('should update the current card', () => {
    round.returnCurrentCard();
    expect(round.currentCard).to.equal(card1);
    expect(round.currentTurn).to.equal(0);
    round.takeTurn('object');    
    round.returnCurrentCard();
    expect(round.currentCard).to.equal(card2);
    expect(round.currentTurn).to.equal(1);
    round.takeTurn('array');
    round.returnCurrentCard();
    expect(round.currentCard).to.equal(card3);
    expect(round.currentTurn).to.equal(2);
  });

  it('should keep track of incorrect guesses', () => {
    round.returnCurrentCard();
    expect(round.currentCard).to.equal(card1);
    expect(round.currentTurn).to.equal(0);
    round.takeTurn('array')
    expect(round.incorrectGuesses).to.have.lengthOf(1)
  });
});