const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
  let card, turn;

  beforeEach(() => {
     card = new Card(9, 'What does the callback function for find() return?', ['boolean', 'array', 'object'], 'boolean');
     turn = new Turn('boolean', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return userGuess', () => {
    expect(turn.returnGuess()).to.equal('boolean')
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