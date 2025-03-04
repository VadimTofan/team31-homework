const cardSelector = document.querySelectorAll("#card-one, #card-two, #card-three, #card-four, #card-five, #card-six, #card-seven, #card-eight, #card-nine, #card-ten, #card-eleven, #card-twelve");

const cardsArray = [
  { cardName: "Ace of Spades", cardUrl: "./cards/AS.webp" },
  { cardName: "Two of Spades", cardUrl: "./cards/2S.webp" },
  { cardName: "Three of Spades", cardUrl: "./cards/3S.webp" },
  { cardName: "Four of Spades", cardUrl: "./cards/4S.webp" },
  { cardName: "Five of Spades", cardUrl: "./cards/5S.webp" },
  { cardName: "Six of Spades", cardUrl: "./cards/6S.webp" },
  { cardName: "Seven of Spades", cardUrl: "./cards/7S.webp" },
  { cardName: "Eight of Spades", cardUrl: "./cards/8S.webp" },
  { cardName: "Nine of Spades", cardUrl: "./cards/9S.webp" },
  { cardName: "Ten of Spades", cardUrl: "./cards/10S.webp" },
  { cardName: "Jack of Spades", cardUrl: "./cards/JS.webp" },
  { cardName: "Queen of Spades", cardUrl: "./cards/QS.webp" },
  { cardName: "King of Spades", cardUrl: "./cards/KS.webp" },

  { cardName: "Ace of Hearts", cardUrl: "./cards/AH.webp" },
  { cardName: "Two of Hearts", cardUrl: "./cards/2H.webp" },
  { cardName: "Three of Hearts", cardUrl: "./cards/3H.webp" },
  { cardName: "Four of Hearts", cardUrl: "./cards/4H.webp" },
  { cardName: "Five of Hearts", cardUrl: "./cards/5H.webp" },
  { cardName: "Six of Hearts", cardUrl: "./cards/6H.webp" },
  { cardName: "Seven of Hearts", cardUrl: "./cards/7H.webp" },
  { cardName: "Eight of Hearts", cardUrl: "./cards/8H.webp" },
  { cardName: "Nine of Hearts", cardUrl: "./cards/9H.webp" },
  { cardName: "Ten of Hearts", cardUrl: "./cards/10H.webp" },
  { cardName: "Jack of Hearts", cardUrl: "./cards/JH.webp" },
  { cardName: "Queen of Hearts", cardUrl: "./cards/QH.webp" },
  { cardName: "King of Hearts", cardUrl: "./cards/KH.webp" },

  { cardName: "Ace of Diamonds", cardUrl: "./cards/AD.webp" },
  { cardName: "Two of Diamonds", cardUrl: "./cards/2D.webp" },
  { cardName: "Three of Diamonds", cardUrl: "./cards/3D.webp" },
  { cardName: "Four of Diamonds", cardUrl: "./cards/4D.webp" },
  { cardName: "Five of Diamonds", cardUrl: "./cards/5D.webp" },
  { cardName: "Six of Diamonds", cardUrl: "./cards/6D.webp" },
  { cardName: "Seven of Diamonds", cardUrl: "./cards/7D.webp" },
  { cardName: "Eight of Diamonds", cardUrl: "./cards/8D.webp" },
  { cardName: "Nine of Diamonds", cardUrl: "./cards/9D.webp" },
  { cardName: "Ten of Diamonds", cardUrl: "./cards/10D.webp" },
  { cardName: "Jack of Diamonds", cardUrl: "./cards/JD.webp" },
  { cardName: "Queen of Diamonds", cardUrl: "./cards/QD.webp" },
  { cardName: "King of Diamonds", cardUrl: "./cards/KD.webp" },

  { cardName: "Ace of Clubs", cardUrl: "./cards/AC.webp" },
  { cardName: "Two of Clubs", cardUrl: "./cards/2C.webp" },
  { cardName: "Three of Clubs", cardUrl: "./cards/3C.webp" },
  { cardName: "Four of Clubs", cardUrl: "./cards/4C.webp" },
  { cardName: "Five of Clubs", cardUrl: "./cards/5C.webp" },
  { cardName: "Six of Clubs", cardUrl: "./cards/6C.webp" },
  { cardName: "Seven of Clubs", cardUrl: "./cards/7C.webp" },
  { cardName: "Eight of Clubs", cardUrl: "./cards/8C.webp" },
  { cardName: "Nine of Clubs", cardUrl: "./cards/9C.webp" },
  { cardName: "Ten of Clubs", cardUrl: "./cards/10C.webp" },
  { cardName: "Jack of Clubs", cardUrl: "./cards/JC.webp" },
  { cardName: "Queen of Clubs", cardUrl: "./cards/QC.webp" },
  { cardName: "King of Clubs", cardUrl: "./cards/KC.webp" },
];

const cardStorageArray = [{}];
const backSrc = "./cards/cardBack.webp";

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

function preloadImages() {
  cardsArray.forEach((card) => {
    const img = new Image();
    img.src = card.cardUrl;
  });
}

preloadImages();
