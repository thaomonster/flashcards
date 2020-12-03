const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {

  let card;

  beforeEach(() => {
    card = new Card(1, 'Process of assigning variable declaration a default value of undefined?', ['creation', 'execution', 'hoisting'], 'hoisting');
  });

  it('should be a function', function() {
    card = new Card();
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    card = new Card();
    expect(card).to.be.an.instanceof(Card);
  }); 

  it('should store a question', function() {
    expect(card.question).to.equal('Process of assigning variable declaration a default value of undefined?');
  });  

  it('should store a list of possible answers', function() {
    expect(card.answers).to.deep.equal(['creation', 'execution', 'hoisting']);
  });  

  it('should store the correct answer', function() {
    expect(card.correctAnswer).to.equal('hoisting');
  });
});