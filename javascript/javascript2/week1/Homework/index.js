const cardSelector = document.querySelectorAll("#card-one, #card-two, #card-three, #card-four, #card-five, #card-six, #card-seven, #card-eight, #card-nine, #card-ten, #card-eleven, #card-twelve");

const cardsArray = [
  { cardName: "Ace of Spades", cardUrl: "./cards/AS.jpg" },
  { cardName: "Two of Spades", cardUrl: "./cards/2S.jpg" },
  { cardName: "Three of Spades", cardUrl: "./cards/3S.jpg" },
  { cardName: "Four of Spades", cardUrl: "./cards/4S.jpg" },
  { cardName: "Five of Spades", cardUrl: "./cards/5S.jpg" },
  { cardName: "Six of Spades", cardUrl: "./cards/6S.jpg" },
  { cardName: "Seven of Spades", cardUrl: "./cards/7S.jpg" },
  { cardName: "Eight of Spades", cardUrl: "./cards/8S.jpg" },
  { cardName: "Nine of Spades", cardUrl: "./cards/9S.jpg" },
  { cardName: "Ten of Spades", cardUrl: "./cards/10S.jpg" },
  { cardName: "Jack of Spades", cardUrl: "./cards/JS.jpg" },
  { cardName: "Queen of Spades", cardUrl: "./cards/QS.jpg" },
  { cardName: "King of Spades", cardUrl: "./cards/KS.jpg" },

  { cardName: "Ace of Hearts", cardUrl: "./cards/AH.jpg" },
  { cardName: "Two of Hearts", cardUrl: "./cards/2H.jpg" },
  { cardName: "Three of Hearts", cardUrl: "./cards/3H.jpg" },
  { cardName: "Four of Hearts", cardUrl: "./cards/4H.jpg" },
  { cardName: "Five of Hearts", cardUrl: "./cards/5H.jpg" },
  { cardName: "Six of Hearts", cardUrl: "./cards/6H.jpg" },
  { cardName: "Seven of Hearts", cardUrl: "./cards/7H.jpg" },
  { cardName: "Eight of Hearts", cardUrl: "./cards/8H.jpg" },
  { cardName: "Nine of Hearts", cardUrl: "./cards/9H.jpg" },
  { cardName: "Ten of Hearts", cardUrl: "./cards/10H.jpg" },
  { cardName: "Jack of Hearts", cardUrl: "./cards/JH.jpg" },
  { cardName: "Queen of Hearts", cardUrl: "./cards/QH.jpg" },
  { cardName: "King of Hearts", cardUrl: "./cards/KH.jpg" },

  { cardName: "Ace of Diamonds", cardUrl: "./cards/AD.jpg" },
  { cardName: "Two of Diamonds", cardUrl: "./cards/2D.jpg" },
  { cardName: "Three of Diamonds", cardUrl: "./cards/3D.jpg" },
  { cardName: "Four of Diamonds", cardUrl: "./cards/4D.jpg" },
  { cardName: "Five of Diamonds", cardUrl: "./cards/5D.jpg" },
  { cardName: "Six of Diamonds", cardUrl: "./cards/6D.jpg" },
  { cardName: "Seven of Diamonds", cardUrl: "./cards/7D.jpg" },
  { cardName: "Eight of Diamonds", cardUrl: "./cards/8D.jpg" },
  { cardName: "Nine of Diamonds", cardUrl: "./cards/9D.jpg" },
  { cardName: "Ten of Diamonds", cardUrl: "./cards/10D.jpg" },
  { cardName: "Jack of Diamonds", cardUrl: "./cards/JD.jpg" },
  { cardName: "Queen of Diamonds", cardUrl: "./cards/QD.jpg" },
  { cardName: "King of Diamonds", cardUrl: "./cards/KD.jpg" },

  { cardName: "Ace of Clubs", cardUrl: "./cards/AC.jpg" },
  { cardName: "Two of Clubs", cardUrl: "./cards/2C.jpg" },
  { cardName: "Three of Clubs", cardUrl: "./cards/3C.jpg" },
  { cardName: "Four of Clubs", cardUrl: "./cards/4C.jpg" },
  { cardName: "Five of Clubs", cardUrl: "./cards/5C.jpg" },
  { cardName: "Six of Clubs", cardUrl: "./cards/6C.jpg" },
  { cardName: "Seven of Clubs", cardUrl: "./cards/7C.jpg" },
  { cardName: "Eight of Clubs", cardUrl: "./cards/8C.jpg" },
  { cardName: "Nine of Clubs", cardUrl: "./cards/9C.jpg" },
  { cardName: "Ten of Clubs", cardUrl: "./cards/10C.jpg" },
  { cardName: "Jack of Clubs", cardUrl: "./cards/JC.jpg" },
  { cardName: "Queen of Clubs", cardUrl: "./cards/QC.jpg" },
  { cardName: "King of Clubs", cardUrl: "./cards/KC.jpg" },
];

// for (let i = 1; i <= 12; i++) {
//   let card = document.getElementById(`card-${i}`);
//   console.log(card);
// }

const cardOne = document.getElementById("card-one");
const cardTwo = document.getElementById("card-two");
const cardThree = document.getElementById("card-three");
const cardFour = document.getElementById("card-four");
const cardFive = document.getElementById("card-five");
const cardSix = document.getElementById("card-six");
const cardSeven = document.getElementById("card-seven");
const cardEight = document.getElementById("card-eight");
const cardNine = document.getElementById("card-nine");
const cardTen = document.getElementById("card-ten");
const cardEleven = document.getElementById("card-eleven");
const cardTwelve = document.getElementById("card-twelve");

const duplicateCheckArray = [cardOne.src, cardTwo.src, cardThree.src, cardFour.src, cardFive.src, cardSix.src, cardSeven.src, cardEight.src, cardNine.src, cardTen.src, cardEleven.src, cardTwelve.src];
console.log(duplicateCheckArray);
const cardStorageArray = [{}];
console.log(cardStorageArray);
const backSrc = "./cards/cardBack.png";

function toggleCard(event) {
  const card = event.target;
  const cardSrc = card.src.split("/").pop();

  for (let i = 0; i < cardStorageArray.length; i++) {
    if (cardStorageArray[i].cardId === card.id) {
      if (card.src.includes("cardBack")) {
        card.src = cardStorageArray[i].cardSource;
        card.alt = cardStorageArray[i].cardAlt;
      } else {
        card.src = backSrc;
        card.alt = `back side of a playing card`;
      }
      return;
    }
  }

  if (cardSrc.includes("cardBack")) {
    if (!sixCards.length) return;

    const random = Math.floor(Math.random() * sixCards.length);
    const selectedCard = sixCards[random];

    card.src = selectedCard.cardUrl;
    card.alt = selectedCard.cardName;
    console.log(card);

    const cardStorageObject = {
      cardId: card.id,
      cardSource: card.src,
      cardAlt: card.alt,
    };

    cardStorageArray.push(cardStorageObject);
    sixCards.splice(random, 1);
  } else {
    card.src = backSrc;
  }
}

cardSelector.forEach((card) => {
  card.addEventListener("click", toggleCard);
});

const sixCards = [];
function generateRandomCard() {
  if (sixCards.length === 0) {
    for (let i = 0; i < 6; i++) {
      const randomNumber = Math.floor(Math.random() * cardsArray.length);
      sixCards.push(cardsArray[randomNumber]);
      sixCards.push(cardsArray[randomNumber]);
    }
  }
  return;
}
generateRandomCard();
