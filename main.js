// ch10
let cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "dimonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "dimonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
// console.log(cards);
// all .ranks are from ch 10

//steps 4 and 5 ch 8 not sure if correct
let cardsInPlay = [];
let cardOne = cards[0];
// console.log(cardOne);
let cardTwo = cards[2];
cardsInPlay.push(cardOne);
// console.log(cardsInPlay);
cardsInPlay.push(cardTwo);
// cardsInPlay.push (cards.rank);

//step 7 ch 9
let checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
}

//step 10 ch 8
 let flipCard = function () {
  let cardId = this.getAttribute('data-id');
  console.log(cards[cardId]);
  let cardImage = this.setAttribute('src', cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId]);
   if (cardsInPlay.length === 2) {
     checkForMatch();
    //  console.log("User flipped " + cards[cardId].rank);
   }
 }

//.rank ch10


//step 2 ch 11
let createBoard = function (){
  let gameBoard = document.getElementById('game-board');
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement ('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    gameBoard.appendChild(cardElement);
    cardElement.addEventListener('click', flipCard);
  }
}

createBoard();
