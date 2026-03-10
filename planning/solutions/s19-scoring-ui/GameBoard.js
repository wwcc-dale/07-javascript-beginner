// GameBoard.js — Session 19 Example Solution

export class GameBoard {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  getSuitSymbol(suit) {
    const symbols = { Spades: "♠", Hearts: "♥", Diamonds: "♦", Clubs: "♣" };
    return symbols[suit] || suit;
  }

  createCardElement(card, isPlayable = false) {
    const div = document.createElement("div");
    div.className = "card";
    const isRed = card.getSuit() === "Hearts" || card.getSuit() === "Diamonds";
    div.style.color = isRed ? "red" : "black";
    div.textContent = `${card.getRank()}${this.getSuitSymbol(card.getSuit())}`;
    if (isPlayable) div.classList.add("playable");
    div.dataset.suit = card.getSuit();
    div.dataset.rank = card.getRank();
    return div;
  }

  updatePlayerHand(player, validCards, onCardClick) {
    const handDiv = document.getElementById(`hand-${player.name}`);
    if (!handDiv) return;
    handDiv.innerHTML = "";

    const validSet = new Set(validCards.map(c => c.toString()));
    for (const card of player.hand) {
      const el = this.createCardElement(card, validSet.has(card.toString()));
      if (validSet.has(card.toString()) && onCardClick) {
        el.addEventListener("click", () => onCardClick(card));
        el.style.cursor = "pointer";
      }
      handDiv.appendChild(el);
    }
  }

  updateScoreboard(teamScores, teamBags) {
    const el = document.getElementById("scoreboard");
    if (!el) return;
    el.innerHTML = `
      <strong>Scores:</strong>
      Team 1: ${teamScores[0]} (${teamBags[0]} bags) |
      Team 2: ${teamScores[1]} (${teamBags[1]} bags)
    `;
  }

  showTrickWinner(playerName) {
    const el = document.getElementById("trickWinner");
    if (!el) return;
    el.textContent = `${playerName} wins the trick!`;
    el.style.display = "block";
    setTimeout(() => { el.style.display = "none"; }, 1500);
  }

  // Returns a Promise that resolves with the bid value the user selects
  getBidFromUser(playerName, handSize) {
    return new Promise(resolve => {
      const area = document.getElementById("biddingArea");
      area.innerHTML = `<p>${playerName}, enter your bid (0–${handSize}):</p>`;
      for (let i = 0; i <= handSize; i++) {
        const btn = document.createElement("button");
        btn.textContent = i === 0 ? "Nil" : i;
        btn.addEventListener("click", () => {
          area.innerHTML = "";
          resolve(i);
        });
        area.appendChild(btn);
      }
    });
  }

  // Returns a Promise that resolves when the human clicks a valid card
  getCardFromUser(player, validCards) {
    return new Promise(resolve => {
      this.updatePlayerHand(player, validCards, (card) => {
        this.updatePlayerHand(player, [], null); // remove click handlers
        resolve(card);
      });
    });
  }
}
