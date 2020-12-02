const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {

  it('should be a function', function() {
    const card = new Card();
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const card = new Card();
    expect(card).to.be.an.instanceof(Card);
  }); 

  it('should store a question', function() {
    const card = new Card(1, 'What do we call when we assign variable declarations a default value of undefined while placing any functions directly in memory?', ['creation', 'execution', 'hoisting'], 'hoisting');
    expect(card.question).to.equal('What do we call when we assign variable declarations a default value of undefined while placing any functions directly in memory?');
  });  

  it('should store a list of possible answers', function() {
    const card = new Card(1, 'What do we call when we assign variable declarations a default value of undefined while placing any functions directly in memory?', ['creation', 'execution', 'hoisting'], 'hoisting');
    expect(card.answers).to.deep.equal(['creation', 'execution', 'hoisting']);
  });  

  it('should store the correct answer', function() {
    const card = new Card(1, 'What do we call when we assign variable declarations a default value of undefined while placing any functions directly in memory?', ['creation', 'execution', 'hoisting'], 'hoisting');
    expect(card.correctAnswer).to.equal('hoisting');
  });
});