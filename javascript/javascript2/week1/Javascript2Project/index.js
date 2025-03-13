let gameSize = 0;

const cardId = 0;
const cardDiv = document.getElementById("cards-grid");
const cardStorageArray = [];
const randomCardsArray = [];
const backSrc = "./cards/cardBack.webp";
const cardsArray = [];
const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const deck = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"];

const suitsFirstLetter = suits.map((firstLetter) => {
  return firstLetter[0];
});

function startGame() {
  if (!gameSize) {
    const input = prompt("Please enter the amount of pairs you want to play with!", "8");

    if (isNaN(input) || input <= 0) {
      alert("Please enter a valid number.");
    } else {
      createCardDeck();
      gameSize = Number(input);
      document.getElementById("landing-text").style.display = "none";
      choseGameDifficulty(gameSize);
      generateRandomCard();
    }
  }
}

function createCardDeck() {
  deck.forEach((deckCard) => {
    suits.forEach((suit, index) => {
      cardsArray.push({
        cardName: `${deckCard} of ${suit}`,
        cardUrl: `./cards/${deckCard}${suitsFirstLetter[index]}.webp`,
      });
    });
  });
}

function toggleCard(event) {
  const card = event.target;
  const cardSrc = card.src.split("/").pop();
  card.classList.add("card__info--flipped");

  // Check if the card was already flipped before
  for (let i = 0; i < cardStorageArray.length; i++) {
    if (cardStorageArray[i].cardId === card.id) {
      if (card.src.includes("cardBack")) {
        card.src = cardStorageArray[i].cardSource;
        card.alt = cardStorageArray[i].cardAlt;
      }
      // The below block of code is disabled for now
      // Normally it flips the card back.
      // else {
      //   card.src = backSrc;
      //   card.alt = `back side of a playing card`;
      // }
      return;
    }
  }

  if (cardSrc.includes("cardBack")) {
    const random = Math.floor(Math.random() * randomCardsArray.length);
    const selectedCard = randomCardsArray[random];

    card.src = selectedCard.cardUrl;
    card.alt = selectedCard.cardName;

    const cardStorageObject = {
      cardId: card.id,
      cardSource: card.src,
      cardAlt: card.alt,
    };

    cardStorageArray.push(cardStorageObject);
    randomCardsArray.splice(random, 1);

    let openedCards = [];
    document.querySelectorAll(".card__info").forEach((img) => {
      if (img.src === card.src) {
        openedCards.push(img);
      }
    });

    if (openedCards.length % 2 === 0) {
      setTimeout(() => {
        openedCards.forEach((img) => {
          img.style.opacity = "0.1";
          img.removeEventListener("click", toggleCard);
        });
        openedCards.length = 0;
        resetGame();
      }, 1000);
    }
  } else {
    card.src = backSrc;
  }
}

function generateRandomCard() {
  if (randomCardsArray.length === 0) {
    for (let i = 0; i < gameSize; i++) {
      const randomNumber = Math.floor(Math.random() * cardsArray.length);
      const luckyCard = cardsArray[randomNumber];
      randomCardsArray.push(luckyCard, luckyCard);
    }
  }
}

function choseGameDifficulty(cardPairs) {
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

function preloadImages() {
  cardsArray.forEach((card) => {
    const img = new Image();
    img.src = card.cardUrl;
  });
}

function resetGame() {
  const allCards = document.querySelectorAll(".card__info");
  const hiddenCards = Array.from(allCards).filter((card) => card.style.opacity === "0.1");

  if (hiddenCards.length === allCards.length) {
    setTimeout(() => {
      cardDiv.innerHTML = "";
      gameSize = 0;
      cardStorageArray.length = 0;
      randomCardsArray.length = 0;
      document.getElementById("landing-text").style.display = "block";
    }, 400);
  }
}

preloadImages();
