const cardSelector = document.querySelectorAll("#card-one, #card-two, #card-three, #card-four, #card-five, #card-six, #card-seven, #card-eight, #card-nine, #card-ten, #card-eleven, #card-twelve");

const cardsArray = [];
const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const deck = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"];

const suitsFirstLetter = suits.map((firstLetter) => {
  return firstLetter[0];
});

deck.forEach((deckCard) => {
  for (let i = 0; i < suits.length; i++) {
    cardsArray.push({ cardName: `${deckCard} of ${suits[i]}`, cardUrl: `./cards/${deckCard + suitsFirstLetter[i]}.webp` });
  }
});

console.log(cardsArray);

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
