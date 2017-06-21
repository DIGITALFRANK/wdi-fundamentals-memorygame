
/*
var cardOne = 'queen';
var cardTwo = 'king';
var cardThree = 'queen';
var cardFour = 'king';

console.log('User flipped ' + cardFour);
console.log('User flipped ' + cardTwo);
*/




var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
  } else {
      alert("Sorry, try again.");
  }
}

var flipCard = function(cardId) {
	cardsInPlay.push(cards[cardId]);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}

	console.log("User flipped " + cards[cardId]);
};

flipCard(0);
flipCard(2);