const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
  let card, turn;

  beforeEach(() => {
     card = new Card(1, 'What do we call when we assign variable declarations a default value of undefined while placing any functions directly in memory?', ['creation', 'execution', 'hoisting'], 'hoisting');
     turn = new Turn('hoisting', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return userGuess', () => {
    expect(turn.returnGuess()).to.equal('hoisting')
  });

  it('should return current card', () => {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should compare user guess to correctAnswer and return a boolean value', () => {
    expect(turn.evaluateGuess()).to.equal(true)
  });

  it('should return a string to tell the user their result', () => {
    expect(turn.giveFeedback()).to.equal('correct!')
  });
});