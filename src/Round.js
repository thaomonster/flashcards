class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard;
  };

  returnCurrentCard() {
    return this.currentCard = this.deck.card[0]
  }
};

module.exports = Round;