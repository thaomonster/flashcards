const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', () => {
  let card1, card2, card3, deck, turn, round;
  
  beforeEach(() => { 
    card1 = new Card(1, 'What do we call when we assign variable declarations a default value of undefined while placing any functions directly in memory?', ['creation', 'execution', 'hoisting'], 'hoisting');
    card2 = new Card(2, 'What is the phase where the interpreter sets aside some space in memory to store any variables and functions we might need to access?', ['creation phase', 'execution phase', 'hoisting'], 'creation phase');
    card3 = new Card(3, 'What do we call when JavaScript executes one line at a time?', ['single-threaded', 'accessor method', 'top-bottom'], 'single-threaded');
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
    round.takeTurn('hoisting');    
    round.returnCurrentCard();
    expect(round.currentCard).to.equal(card2);
    expect(round.currentTurn).to.equal(1);
    round.takeTurn('creation phase');
    round.returnCurrentCard();
    expect(round.currentCard).to.equal(card3);
    expect(round.currentTurn).to.equal(2);
  });

  it('should keep track of incorrect guesses', () => {
    round.returnCurrentCard();
    expect(round.currentCard).to.equal(card1);
    expect(round.currentTurn).to.equal(0);
    round.takeTurn('execution')
    expect(round.incorrectGuesses).to.have.lengthOf(1)
  });

  it('should return a string telling the user if its correct or incorrect', () => {
    expect(round.takeTurn('hoisting')).to.equal('correct!');
  });

  it('should calculate percentage of correct answers', () => {
    round.takeTurn('hoisting');
    round.takeTurn('creation phase');
    round.takeTurn('top-bottom');

    expect(round.calculatePercentCorrect()).to.equal(67);
  });

  it('should console log a string at the end of the round', () => {
    round.takeTurn('hoisting');
    round.takeTurn('creation phase');
    round.takeTurn('top-bottom');
    round.endRound();

    expect(round.endRound()).to.equal('** Round over! ** You answered 67% of the questions correctly!')
  });
});