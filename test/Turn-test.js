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
    const card = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 
});