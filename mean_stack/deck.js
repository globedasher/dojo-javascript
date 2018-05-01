/******************Deck of Cards******************
 * DONE: Deck should contain 52 cards
 * DONE: Shuffle deck
 * DONE: Reset deck
 * DONE: Deck deal random card
 *   DONE: Card dealt needs to be returned and removed from the deck.
 *
 * DONE: Create a playerConstructor
 * DONE: Create Player name
 * DONE: Create Player hand
 * DONE: Player can take a card... use the deck.deal method
 * TODO: Player can discard a card
 *
 * Optional: Blackjack!
 *
 ***********************END**********************/

class DeckOfCards{
  constructor(deck){
    this.deck = ['s1','s2','s3','s4','s5','s6','s7', 's8', 's9', 's10', 'sj', 'sq', 'sk','c1','c2','c3','c4','c5','c6','c7', 'c8', 'c9', 'c10', 'cj', 'cq', 'ck','d1','d2','d3','d4','d5','d6','d7', 'd8', 'd9', 'd10', 'dj', 'dq', 'dk','h1','h2','h3','h4','h5','h6','h7', 'h8', 'h9', 'h10', 'hj', 'hq', 'hk'];
    this.card = undefined;
    this.discard_pile = [];
  }
  show() {
    console.log(this.deck);
    return this;
  }
  shuffle() {
    var m = this.deck.length, t, i;

    while(m){
    
      i = Math.floor(Math.random() * m--);
      t = this.deck[m];
      this.deck[m] = this.deck[i];
      this.deck[i] = t;
    }
    return this;
  }
  reset(){
    this.deck = ['s1','s2','s3','s4','s5','s6','s7', 's8', 's9', 's10', 'sj', 'sq', 'sk','c1','c2','c3','c4','c5','c6','c7', 'c8', 'c9', 'c10', 'cj', 'cq', 'ck','d1','d2','d3','d4','d5','d6','d7', 'd8', 'd9', 'd10', 'dj', 'dq', 'dk','h1','h2','h3','h4','h5','h6','h7', 'h8', 'h9', 'h10', 'hj', 'hq', 'hk'];
    return this;
  }
  deal(){
    // I had originally written this with the same Fisher-Yates Shuffle
    // algorithm to choose a random card to deal, but I realized dealing is a
    // sequential operation. Then I chose to just use .splice() since it's
    // easy and the deck should be shuffled before dealing anyway.
    return this.deck.splice(0,1);
  }
  showCard(){
    console.log(this.card + " this.card!");
    return this;
  }
  showDiscard(){
    console.log(this.discard_pile + " discard pile");
    return this;
  }
}

class Player{
  constructor(name, hand){
    this.name = name;
    this.hand = [];
  }
  sayName(){
    console.log(this.name);
    return this;
  }
  showHand(){
    console.log(this.hand);
    return this;
  }
  draw(){
    this.hand.push(deck.deal()[0]);
    return this;
  }
  discard(index){
    deck.discard_pile = this.hand.splice(index,1);
    return this;
  }
}

var deck = new DeckOfCards();
deck.shuffle();

var david_pumpkins = new Player('David S. Pumpkins');
var claypool = new Player('Les Claypool');
var violet = new Player('Violet the Pilot');
var karen = new Player('Karen Morley');

david_pumpkins.draw();
claypool.draw();
violet.draw();
karen.draw();
david_pumpkins.draw();
claypool.draw();
violet.draw();
karen.draw();
david_pumpkins.draw();
claypool.draw();
violet.draw();
karen.draw();
david_pumpkins.draw();
claypool.draw();
violet.draw();
karen.draw();
david_pumpkins.draw();
claypool.draw();
violet.draw();
karen.draw();


david_pumpkins.showHand();
claypool.showHand();
violet.showHand();
karen.showHand();

karen.discard(0);
deck.showDiscard();
karen.showHand().draw().showHand();
