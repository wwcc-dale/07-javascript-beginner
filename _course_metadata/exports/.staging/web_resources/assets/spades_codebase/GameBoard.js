class GameBoard {
  constructor() {
    this.buildBidButtons();
  }

  // Build bid buttons 0-13 dynamically
  buildBidButtons() {
    const container = document.getElementById('bid-buttons');
    container.innerHTML = '';
    for (let i = 0; i <= 13; i++) {
      const btn = document.createElement('button');
      btn.className = 'bid-btn';
      btn.dataset.bid = i;
      btn.textContent = i === 0 ? 'Nil' : i;
      container.appendChild(btn);
    }
  }

  // Show bidding UI and wait for the user to click a bid button
  getBidFromUser(hand) {
    this.showHandSummary(hand);
    this.updatePlayerHand(hand, []); // Show hand (non-interactive) during bidding
    const bidArea = document.getElementById('bidding-area');
    bidArea.classList.remove('hidden');

    return new Promise(resolve => {
      const handleClick = (e) => {
        const btn = e.target.closest('.bid-btn');
        if (!btn) return;
        bidArea.classList.add('hidden');
        bidArea.removeEventListener('click', handleClick);
        resolve(parseInt(btn.dataset.bid));
      };
      bidArea.addEventListener('click', handleClick);
    });
  }

  showHandSummary(hand) {
    const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
    const summary = suits.map(suit => {
      const cards = hand.filter(c => c.getSuit() === suit).map(c => c.getRank());
      if (cards.length === 0) return null;
      return `${this.getSuitSymbol(suit)} ${cards.join(' ')}`;
    }).filter(Boolean).join('  ');
    document.getElementById('bid-hand-summary').textContent = summary;
  }

  // Show the hand and wait for the user to click a valid card
  getCardFromUser(hand, validCards) {
    this.updatePlayerHand(hand, validCards, true);
    document.getElementById('play-hint').textContent = 'Click a highlighted card to play it';

    return new Promise(resolve => {
      const handDiv = document.getElementById('player-hand');
      const handleClick = (e) => {
        const cardEl = e.target.closest('.card');
        if (!cardEl || cardEl.classList.contains('disabled')) return;

        const suit = cardEl.dataset.suit;
        const rank = cardEl.dataset.rank;
        const card = validCards.find(c => c.getSuit() === suit && c.getRank() === rank);
        if (!card) return;

        handDiv.removeEventListener('click', handleClick);
        document.getElementById('play-hint').textContent = '';
        resolve(card);
      };
      handDiv.addEventListener('click', handleClick);
    });
  }

  // Render the human player's hand
  // If interactive=true, highlight validCards and gray out others
  updatePlayerHand(hand, validCards, interactive = false) {
    const handDiv = document.getElementById('player-hand');
    handDiv.innerHTML = '';

    hand.forEach(card => {
      const cardEl = this.createCardElement(card);
      if (interactive) {
        const isValid = validCards.some(v => v.getSuit() === card.getSuit() && v.getRank() === card.getRank());
        cardEl.classList.add(isValid ? 'playable' : 'disabled');
      }
      handDiv.appendChild(cardEl);
    });

    const countEl = document.getElementById('hand-count');
    if (countEl) countEl.textContent = hand.length > 0 ? `(${hand.length})` : '';
  }

  createCardElement(card) {
    const div = document.createElement('div');
    div.className = `card ${card.getSuit().toLowerCase()}`;
    div.dataset.suit = card.getSuit();
    div.dataset.rank = card.getRank();
    const sym = this.getSuitSymbol(card.getSuit());
    div.innerHTML = `
      <span class="card-corner top-left">${card.getRank()}<br>${sym}</span>
      <span class="card-center">${sym}</span>
      <span class="card-corner bottom-right">${card.getRank()}<br>${sym}</span>
    `;
    return div;
  }

  showCardInTrick(playerIndex, player, card) {
    const cardSlot = document.getElementById(`trick-card-${playerIndex}`);
    const labelEl = document.getElementById(`trick-label-${playerIndex}`);
    if (cardSlot) {
      cardSlot.innerHTML = '';
      cardSlot.appendChild(this.createCardElement(card));
    }
    if (labelEl) labelEl.textContent = player.name;
  }

  showTrickWinner(playerName) {
    const msg = document.getElementById('trick-winner-msg');
    if (msg) msg.textContent = `${playerName} wins!`;
  }

  clearTrick() {
    for (let i = 0; i < 4; i++) {
      const cardSlot = document.getElementById(`trick-card-${i}`);
      const labelEl = document.getElementById(`trick-label-${i}`);
      if (cardSlot) cardSlot.innerHTML = '';
      if (labelEl) labelEl.textContent = '';
    }
    const msg = document.getElementById('trick-winner-msg');
    if (msg) msg.textContent = '';
  }

  setTrickNumber(num) {
    const el = document.getElementById('trick-number');
    if (el) el.textContent = `${num} / 13`;
  }

  updateScoreboard(teams) {
    teams.forEach((team, i) => {
      const el = document.getElementById(`team${i}-score`);
      if (el) el.textContent = team.score;
      const bagsEl = document.getElementById(`team${i}-bags`);
      if (bagsEl) bagsEl.textContent = `Bags: ${team.bags}`;
    });
  }

  updateBidInfo(players, teams) {
    teams.forEach((team, i) => {
      const el = document.getElementById(`team${i}-bids`);
      if (!el) return;
      el.innerHTML = team.players.map(p => {
        const bid = p.bid !== null ? (p.bid === 0 ? 'Nil' : p.bid) : '?';
        return `<span>${p.name}: ${bid} bid / ${p.tricksWon} won</span>`;
      }).join('');
    });
  }

  updateRoundInfo(roundNumber, teams) {
    const el = document.getElementById('round-info');
    if (el) el.textContent = `Round ${roundNumber}`;
  }

  setStatus(message) {
    document.getElementById('game-status').textContent = message;
  }

  log(message) {
    const logContent = document.getElementById('log-content');
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.textContent = message;
    logContent.appendChild(entry);
    logContent.scrollTop = logContent.scrollHeight;
  }

  clearLog() {
    document.getElementById('log-content').innerHTML = '';
  }

  getSuitSymbol(suit) {
    return { Spades: '♠', Hearts: '♥', Diamonds: '♦', Clubs: '♣' }[suit] || suit;
  }
}
