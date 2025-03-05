let gameSize = 0;

function choseDifficulty() {
  if (!gameSize) {
    let input = prompt("Please enter the amount of pairs you want to play with!", "8");

    if (input !== null && input.trim() !== "" && !isNaN(input) && Number(input) > 0) {
      gameSize = Number(input);
      document.getElementById("landing-text").style.display = "none";
      gameDifficulty(gameSize);
      generateRandomCard();
    } else {
      alert("Please enter a valid number.");
    }
  }
}

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
    if (!randomCardsArray.length) return;

    const random = Math.floor(Math.random() * randomCardsArray.length);
    const selectedCard = randomCardsArray[random];

    card.src = selectedCard.cardUrl;
    card.alt = selectedCard.cardName;
    console.log(card);

    const cardStorageObject = {
      cardId: card.id,
      cardSource: card.src,
      cardAlt: card.alt,
    };

    cardStorageArray.push(cardStorageObject);
    randomCardsArray.splice(random, 1);
  } else {
    card.src = backSrc;
  }
}

const randomCardsArray = [];
function generateRandomCard() {
  if (randomCardsArray.length === 0) {
    for (let i = 0; i < gameSize; i++) {
      const randomNumber = Math.floor(Math.random() * cardsArray.length);
      const luckyCard = cardsArray[randomNumber];
      randomCardsArray.push(luckyCard, luckyCard);
    }
  }
  return;
}

const cardId = 0;
const img = document.createElement("img");
const cardDiv = document.getElementById("cards-grid");

function gameDifficulty(cardPairs) {
  for (let i = 0; i < cardPairs * 2; i++) {
    const img = document.createElement("img");
    img.src = backSrc;
    img.alt = "Back side of a playing Card";
    img.classList.add("card__info");
    img.id = `card-${i + 1}`;
    img.addEventListener("click", toggleCard);
    cardDiv.appendChild(img);
  }
}
gameDifficulty(gameSize);

function preloadImages() {
  cardsArray.forEach((card) => {
    const img = new Image();
    img.src = card.cardUrl;
  });
}

preloadImages();
