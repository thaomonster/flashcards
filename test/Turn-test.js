const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
  const card = new Card(9, 'What does the callback function for find() return?', ['boolean', 'array', 'object'], 'boolean');
  const turn = new Turn('boolean', card);

  it('should be a function', () => {
    const turn = new Turn('boolean', card);
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    const turn = new Turn('boolean', card);
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return userGuess', () => {
    const turn = new Turn('boolean', card);
    expect(turn.returnGuess()).to.equal('boolean')
  });

  it('should return current card', () => {
    const card = new Card(9, 'What does the callback function for find() return?', ['boolean', 'array', 'object'], 'boolean');
    const turn = new Turn('boolean', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should compare user guess to correctAnswer and return a boolean value', () => {
    const card = new Card(9, 'What does the callback function for find() return?', ['boolean', 'array', 'object'], 'boolean');
    const turn = new Turn('boolean', card);
    expect(turn.evaluateGuess()).to.equal(true)
  });

  it('should return a string to tell the user their result', () => {
    const card = new Card(9, 'What does the callback function for find() return?', ['boolean', 'array', 'object'], 'boolean');
    const turn = new Turn('boolean', card);
    expect(turn.giveFeedback()).to.equal('correct!')
  });
});