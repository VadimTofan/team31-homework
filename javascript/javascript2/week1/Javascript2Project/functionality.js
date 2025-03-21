// Creating a card deck from cards and suits
function createCardDeck() {
  cardsArray.length = 0;
  cards.forEach((deckCard) => {
    suits.forEach((suit, index) => {
      cardsArray.push({
        cardName: `${deckCard} of ${suit}`,
        cardUrl: `./cards/${deckCard}${suitsFirstLetter[index]}.webp`,
      });
    });
  });
}

// Generate random cards from the deck, the amount of cards is determined by user in gameSize
function generateRandomCard() {
  if (randomCardsArray.length) return;

  let shuffledCards = [...cardsArray].sort(() => Math.random() - 0.5); // Shuffle the deck

  for (let i = 0; i < gameSize; i++) {
    const selectedCard = shuffledCards[i]; // Pick a unique card
    randomCardsArray.push(selectedCard, selectedCard); // Add the pair
  }
}

// Setting up the game, according to the gameSize
function choseGameDifficulty(cardPairs) {
  if (!cardDiv) return;

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

// Check if all cards matched.
function checkWinCondition() {
  const allCards = document.querySelectorAll(".card__info");
  const matchedCards = document.querySelectorAll(".matched");

  if (matchedCards.length === allCards.length) {
    setTimeout(() => {
      alert(`You won! Total moves: ${moveCounter}`);
      resetGame();
      const timerDiv = document.getElementById("timer");
      timerDiv.style.opacity = "0";
    }, 500);
  }
}

// If all cards matched, the game reloads.
function resetGame() {
  const allCards = document.querySelectorAll(".card__info");
  const hiddenCards = Array.from(allCards).filter((card) => card.style.opacity === "0.1");

  if (hiddenCards.length !== allCards.length) return;
  cardDiv.innerHTML = "";
  gameSize = 0;
  moveCounter = 0;
  cardStorageArray.length = 0;
  randomCardsArray.length = 0;
  resetTimer();
  if (landingMenu) landingMenu.style.display = "block";
}

// Add html for timer
function addTimer() {
  if (document.getElementById("timer")) return;

  const cardsDiv = document.getElementById("cards");
  const timerDiv = document.createElement("div");
  timerDiv.innerText = "0 seconds";
  timerDiv.id = "timer";
  timerDiv.classList.add("timer");
  cardsDiv.appendChild(timerDiv);
  timerDiv.style.opacity = "0";
}

// Creating a timer
function startTimer() {
  startTime = Date.now();
  timer = setInterval(() => {
    const time = Math.floor((Date.now() - startTime) / 1000);

    // Calculate hours, minutes, and seconds
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    let timeString = "";
    if (hours > 0) {
      if (hours === 1) {
        timeString += `${hours} hour `;
      } else {
        timeString += `${hours} hours `;
      }
    }
    if (minutes > 0) {
      if (minutes === 1) {
        timeString += `${minutes} minute `;
      } else {
        timeString += `${minutes} minutes `;
      }
    }
    if (seconds >= 0) {
      if (seconds === 1) {
        timeString += `${seconds} second`;
      } else {
        timeString += `${seconds} seconds`;
      }
    }

    document.getElementById("timer").textContent = timeString.trim();
  }, 1000);
}

// Resetting the timer
function resetTimer() {
  clearInterval(timer);
  startTime = 0;
  document.getElementById("timer").textContent = "0 seconds";
  document.getElementById("timer").style.display = "none";
}
