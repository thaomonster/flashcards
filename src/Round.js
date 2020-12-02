class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard;
    this.currentTurn = 0;
  };

  returnCurrentCard() {
    return this.currentCard = this.deck.card[this.currentTurn]
  };

  takeTurn() {
    this.currentTurn++
  }
};

module.exports = Round;