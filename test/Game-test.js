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

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('currrent round should be defaulted to undefined before starting a game', () => {
    expect(game.currentRound).to.equal(undefined);
  });

  it('should keep track of current round after game starts', () => {

    game.startGame();

    expect(game.currentRound).to.be.an.instanceOf(Round);
  });
});