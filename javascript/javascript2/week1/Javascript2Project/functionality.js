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
  document.getElementById("cards-grid").style.display = "";
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
      // Stop the timer
      clearInterval(timer);
      updateScoreboard();
    }, 500);
  }
}

function updateScoreboard() {
  // Calculate the score
  const timeTaken = Math.floor((Date.now() - startTime) / 1000);
  let score = gameSize * gameSize;

  if (score >= 150) {
    score = score / 1.5;
  }

  const finalScore = Math.max(score * 2 - timeTaken - moveCounter, 0);

  document.getElementById("cards-grid").style.display = "none";
  document.getElementById("timer").style.display = "none";

  const scoreboard = document.createElement("section");
  scoreboard.id = "scoreboard";
  scoreboard.classList.add("scoreboard");
  scoreboard.innerHTML = `
        <h3>Congratulations</h3>
        <p id="level-difficulty">You just won the game on level: <strong>${getDifficultyLabel(gameSize)}</strong></p>
        <div class="score">
          <p>Score:</p>
          <p id="score">${finalScore} Points</p>
        </div>
        <div class="score">
          <p>Time:</p>
          <p id="time">${timeTaken} seconds</p>
        </div>
        <div class="score">
          <p>Steps:</p>
          <p id="moves">${moveCounter} Moves</p>
        </div>
        <button id="reset" class="reset">Restart Game</button>
      `;

  // Append scoreboard to the body
  document.body.appendChild(scoreboard);

  // Add event listener for reset button
  document.getElementById("reset").addEventListener("click", resetGame);
}

// Function to get the difficulty label based on game size
function getDifficultyLabel(size) {
  const difficultyLevels = {
    4: "Easy",
    6: "Medium",
    8: "Hard",
    10: "Very Hard",
    12: "Insane",
    16: "Hell",
    20: "Nightmare",
    24: "Impossible",
  };
  return difficultyLevels[size] || "Unknown";
}

// If all cards matched, the game reloads.
function resetGame() {
  const scoreboard = document.getElementById("scoreboard");
  const timer = document.getElementById("timer");

  cardDiv.innerHTML = "";
  scoreboard.remove();
  timer.remove();
  gameSize = 0;
  moveCounter = 0;
  cardStorageArray.length = 0;
  randomCardsArray.length = 0;
  if (landingMenu) landingMenu.style.display = "block";
  resetTimer();
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
  }, 100);
}

// Resetting the timer
function resetTimer() {
  clearInterval(timer);
  startTime = 0;

  if (document.getElementById("timer")) {
    timer.textContent = "0 seconds";
    timer.style.display = "none";
  }
}
