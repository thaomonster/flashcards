const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Game = require('../src/Game');

describe('Game', () => {

  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('shoulkd keep track of current round after game starts', () => {

    game.startGame();

    expect(game.currentRound).to.equal(1);
  });
});