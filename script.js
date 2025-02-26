/* 
1. There will be only two players. One human and one computer (for the Base solution).

2. The computer will always be the dealer.

3. Each player gets dealt two cards to start.

4. The player goes first, and decides if they want to hit (draw a card) or stand (end their turn).

5. The dealer has to hit if their hand is below 17.

6. Each player's score is the total of their card ranks. Jacks/Queen/Kings are 10. Aces can be 1 or 11.

7. The player who is closer to, but not above 21, wins the hand.

*/

// Declare game modes
var inputUserName = "input username";
var drawCards = "draw cards";
var showResults = "show results";
var hitOrStand = "hit or stand";
var gameResults = "game results";
var gameMode = inputUserName;

var cardDeck = [];
var playerHand = [];
var dealerHand = [];

// Function that creates a deck of cards, used by createNewDeck function
var createDeck = [
  {
    name: "ace",
    suit: "hearts",
    rank: 1,
  },
  {
    name: "2",
    suit: "hearts",
    rank: 2,
  },
  {
    name: "3",
    suit: "hearts",
    rank: 3,
  },
  {
    name: "4",
    suit: "hearts",
    rank: 4,
  },
  {
    name: "5",
    suit: "hearts",
    rank: 5,
  },
  {
    name: "6",
    suit: "hearts",
    rank: 6,
  },
  {
    name: "7",
    suit: "hearts",
    rank: 7,
  },
  {
    name: "8",
    suit: "hearts",
    rank: 8,
  },
  {
    name: "9",
    suit: "hearts",
    rank: 9,
  },
  {
    name: "10",
    suit: "hearts",
    rank: 10,
  },
  {
    name: "jack",
    suit: "hearts",
    rank: 11,
  },
  {
    name: "queen",
    suit: "hearts",
    rank: 12,
  },
  {
    name: "king",
    suit: "hearts",
    rank: 13,
  },
  {
    name: "ace",
    suit: "diamonds",
    rank: 1,
  },
  {
    name: "2",
    suit: "diamonds",
    rank: 2,
  },
  {
    name: "3",
    suit: "diamonds",
    rank: 3,
  },
  {
    name: "4",
    suit: "diamonds",
    rank: 4,
  },
  {
    name: "5",
    suit: "diamonds",
    rank: 5,
  },
  {
    name: "6",
    suit: "diamonds",
    rank: 6,
  },
  {
    name: "7",
    suit: "diamonds",
    rank: 7,
  },
  {
    name: "8",
    suit: "diamonds",
    rank: 8,
  },
  {
    name: "9",
    suit: "diamonds",
    rank: 9,
  },
  {
    name: "10",
    suit: "diamonds",
    rank: 10,
  },
  {
    name: "jack",
    suit: "diamonds",
    rank: 11,
  },
  {
    name: "queen",
    suit: "diamonds",
    rank: 12,
  },
  {
    name: "king",
    suit: "diamonds",
    rank: 13,
  },
  {
    name: "ace",
    suit: "clubs",
    rank: 1,
  },
  {
    name: "2",
    suit: "clubs",
    rank: 2,
  },
  {
    name: "3",
    suit: "clubs",
    rank: 3,
  },
  {
    name: "4",
    suit: "clubs",
    rank: 4,
  },
  {
    name: "5",
    suit: "clubs",
    rank: 5,
  },
  {
    name: "6",
    suit: "clubs",
    rank: 6,
  },
  {
    name: "7",
    suit: "clubs",
    rank: 7,
  },
  {
    name: "8",
    suit: "clubs",
    rank: 8,
  },
  {
    name: "9",
    suit: "clubs",
    rank: 9,
  },
  {
    name: "10",
    suit: "clubs",
    rank: 10,
  },
  {
    name: "jack",
    suit: "clubs",
    rank: 11,
  },
  {
    name: "queen",
    suit: "clubs",
    rank: 12,
  },
  {
    name: "king",
    suit: "clubs",
    rank: 13,
  },
  {
    name: "ace",
    suit: "spades",
    rank: 1,
  },
  {
    name: "2",
    suit: "spades",
    rank: 2,
  },
  {
    name: "3",
    suit: "spades",
    rank: 3,
  },
  {
    name: "4",
    suit: "spades",
    rank: 4,
  },
  {
    name: "5",
    suit: "spades",
    rank: 5,
  },
  {
    name: "6",
    suit: "spades",
    rank: 6,
  },
  {
    name: "7",
    suit: "spades",
    rank: 7,
  },
  {
    name: "8",
    suit: "spades",
    rank: 8,
  },
  {
    name: "9",
    suit: "spades",
    rank: 9,
  },
  {
    name: "10",
    suit: "spades",
    rank: 10,
  },
  {
    name: "jack",
    suit: "spades",
    rank: 11,
  },
  {
    name: "queen",
    suit: "spades",
    rank: 12,
  },
  {
    name: "king",
    suit: "spades",
    rank: 13,
  },
];

// Function that generates a random number, used by shuffle deck function
var getRandomIndex = function (size) {
  return Math.floor(Math.random() * size);
};

// Function that shuffles a deck, used by createNewDeck function
var shuffleDeck = function (cards) {
  var index = 0;
  while (index < cards.length) {
    var randomIndex = getRandomIndex(cards.length);
    var currentItem = cards[index];
    var randomItem = cards[randomIndex];
    cards[index] = randomItem;
    cards[randomIndex] = currentItem;
    index = index + 1;
  }
  return cards;
};

// Function that creates and shuffles a deck
var createNewDeck = function () {
  var shuffledDeck = shuffleDeck(createDeck);
  return shuffledDeck;
};

// Displays cards drawn by player and dealer (name and suit)
var displayHands = function (playerHand, dealerHand) {
  var playerHandValue = calcHandValues(playerHand);
  var dealerHandValue = calcHandValues(dealerHand);

  var playerMessage = `<u><b>Your hand (${playerHandValue}):</b></u><br>`;
  var index = 0;
  while (index < playerHand.length) {
    playerMessage =
      playerMessage +
      `${playerHand[index].name} of ${playerHand[index].suit}<br>`;
    index += 1;
  }
  var index = 0;
  var dealerMessage = `<u><b>Dealer hand (${dealerHandValue}):</b></u><br>`;
  while (index < dealerHand.length) {
    dealerMessage =
      dealerMessage +
      `${dealerHand[index].name} of ${dealerHand[index].suit}<br>`;
    index += 1;
  }
  return `${playerMessage} <br> ${dealerMessage}`;
};

// Calculate hand values
var calcHandValues = function (hand) {
  var totalHandValue = 0;
  var aceCounter = 0;
  var index = 0;

  while (index < hand.length) {
    var currentCard = hand[index];
    if (
      currentCard.name == "king" ||
      currentCard.name == "queen" ||
      currentCard.name == "jack"
    ) {
      totalHandValue = totalHandValue + 10;
    } else if (currentCard.name == "ace") {
      totalHandValue = totalHandValue + 11;
      aceCounter += 1;
    } else {
      totalHandValue = totalHandValue + currentCard.rank;
    }
    index += 1;
  }

  index = 0;
  while (index < aceCounter) {
    if (totalHandValue > 21) {
      totalHandValue = totalHandValue - 10;
    }
    index += 1;
  }

  return totalHandValue;
};

// Checks first two cards for blackjack
var checkBlackJack = function (hand) {
  var firstCard = hand[0];
  var secondCard = hand[1];

  // blackjack when ace (11) + 10/king/queen/jack (10)
  if (
    (firstCard.name == "ace" && secondCard.rank >= 10) ||
    (secondCard.name == "ace" && firstCard.rank >= 10)
  ) {
    var isBlackJack = true;
  } else isBlackJack = false;

  return isBlackJack;
};

var main = function (input) {
  var myOutputValue = ``;

  var shuffledDeck = createNewDeck();

  // Mode 1: Input username
  if (gameMode == inputUserName) {
    // Update game mode to Mode 2: Draw cards

    myOutputValue = `Hi <b>${input}</b>! Hope you're ready for a round of Blackjack!<br><br> Click <b>"Submit"</b> to draw your cards.`;

    gameMode = drawCards;

    return myOutputValue;
  }

  // Mode 2: Draw cards
  if (gameMode == drawCards) {
    // Draw cards from the top of the deck
    playerHand.push(shuffledDeck.pop());
    dealerHand.push(shuffledDeck.pop());
    playerHand.push(shuffledDeck.pop());
    dealerHand.push(shuffledDeck.pop());
    /*
    playerHand[0] = {
      name: "ace",
      suit: "diamonds",
      rank: 1,
    };

    playerHand[1] = {
      name: "king",
      suit: "hearts",
      rank: 12,
    };

    dealerHand[0] = {
      name: "ace",
      suit: "hearts",
      rank: 1,
    };

    dealerHand[1] = {
      name: "queen",
      suit: "diamonds",
      rank: 11,
    };
    */

    myOutputValue = `Your cards have been drawn!<br><br> Click <b>"Submit"</b> to see your results.`;

    // Update game mode to Mode 3: Show results
    gameMode = showResults;

    return myOutputValue;
  }

  // Mode 3: Check for Blackjacks; Show results
  if (gameMode == showResults) {
    var playerHasBlackJack = checkBlackJack(playerHand);
    var dealerHasBlackJack = checkBlackJack(dealerHand);

    if (playerHasBlackJack == true || dealerHasBlackJack == true) {
      outputMsg = displayHands(playerHand, dealerHand);

      // 3 scenarios regarding Blackjack wins

      if (playerHasBlackJack == true && dealerHasBlackJack == true) {
        outputMsg = outputMsg + "<br>It's a Blackjack tie!";
      } else if (playerHasBlackJack == true && dealerHasBlackJack == false) {
        outputMsg = outputMsg + `<br>Congrats! You win by Blackjack! 🥳`;
        gameMode = gameResults;
      } else
        outputMsg =
          outputMsg +
          `<br>Dealer wins by Blackjack.<br><br> Better luck next time!`;
      gameMode = gameResults;
      return outputMsg;
    } else {
      outputMsg = `${displayHands(
        playerHand,
        dealerHand
      )} <br>There are no Blackjacks. <br><br> To continue, please input <b>"hit"</b> or <b>"stand"</b>.`;
      gameMode = hitOrStand;
      return outputMsg;
    }
  }

  // Mode 4: Hit or Stand
  if (gameMode == hitOrStand) {
    // Input validation (either "hit" or "stand")
    if (!(input == "hit" || input == "stand")) {
      outputMsg = `Please input either <b>"hit"</b> or <b>"stand"</b>. <br><br> ${displayHands(
        playerHand,
        dealerHand
      )}`;
      return outputMsg;
    }

    // If player enters "Hit"
    if (input == "hit") {
      playerHand.push(shuffledDeck.pop());

      outputMsg = "You have drawn another card.<br><br>";

      var playerHandValue = calcHandValues(playerHand);

      if (playerHandValue < 21) {
        outputMsg =
          outputMsg +
          displayHands(playerHand, dealerHand) +
          '<br>Please input <b>"hit"</b> or <b>"stand"</b>.<br><br>';
      }

      if (playerHandValue == 21) {
        var dealerHandValue = calcHandValues(dealerHand);
        // Dealer continues drawing if their hand is below 17
        while (dealerHandValue < 17) {
          dealerHand.push(shuffledDeck.pop());
          dealerHandValue = calcHandValues(dealerHand);
        }
        if (dealerHandValue == 21) {
          outputMsg =
            outputMsg +
            displayHands(playerHand, dealerHand) +
            "<br>It's a Blackjack tie!";
        } else {
          outputMsg =
            outputMsg +
            displayHands(playerHand, dealerHand) +
            `<br>Congrats! You win by Blackjack! 🥳`;
        }
        gameMode = gameResults;
      }

      if (playerHandValue > 21) {
        var dealerHandValue = calcHandValues(dealerHand);
        // Dealer continues drawing if their hand is below 17
        while (dealerHandValue < 17) {
          dealerHand.push(shuffledDeck.pop());
          dealerHandValue = calcHandValues(dealerHand);
        }

        if (dealerHandValue > 21) {
          outputMsg =
            outputMsg +
            displayHands(playerHand, dealerHand) +
            "<br>Both bust - it's a tie!";
        } else {
          outputMsg =
            outputMsg +
            displayHands(playerHand, dealerHand) +
            `<br>Oops, it's a bust! 🙈 <br><br>Better luck next time!`;
        }
        gameMode = gameResults;
      }
    }
    // If player enters "Stand"
    else if (input == "stand") {
      var playerHandValue = calcHandValues(playerHand);
      var dealerHandValue = calcHandValues(dealerHand);
      // Dealer continues drawing if their hand is below 17
      while (dealerHandValue < 17) {
        dealerHand.push(shuffledDeck.pop());
        dealerHandValue = calcHandValues(dealerHand);
      }

      // Calculates if it is a tie (same value or both bust)
      if (
        playerHandValue == dealerHandValue ||
        (playerHandValue > 21 && dealerHandValue > 21)
      ) {
        outputMsg = `It's a tie!<br><br>Your hand value: ${playerHandValue}<br>Dealer hand value: ${dealerHandValue}<br><br>${displayHands(
          playerHand,
          dealerHand
        )}`;
      }
      // Checks if player or dealer wins
      else if (
        (playerHandValue <= 21 && playerHandValue > dealerHandValue) ||
        (playerHandValue <= 21 && dealerHandValue > 21)
      ) {
        outputMsg = `You win! 🎉<br><br>Your hand value: ${playerHandValue}<br>Dealer hand value: ${dealerHandValue}<br><br>${displayHands(
          playerHand,
          dealerHand
        )}`;
      } else
        outputMsg = `Sorry, the dealer wins. <br><br>Your hand value: ${playerHandValue}<br>Dealer hand value: ${dealerHandValue}<br><br>${displayHands(
          playerHand,
          dealerHand
        )} <br>Better luck next time!`;

      gameMode = gameResults;
    }

    return outputMsg;
  }

  if (gameMode == gameResults) {
    myOutputValue = `Game END!`;
  }

  return myOutputValue;
};
