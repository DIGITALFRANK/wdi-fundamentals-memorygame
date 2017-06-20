

var cardOne = 'queen';
var cardTwo = 'king';
var cardThree = 'queen';
var cardFour = 'king';

console.log('User flipped ' + cardFour);
console.log('User flipped ' + cardTwo);





var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[2];


cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log(cardsInPlay);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("sorry, try again!");
	}
}