/**
 * Sins of Round 1 — Confession Wall
 * Real, chaotic hackathon confessions from our teammates.
 */

import { soundFx } from './audio-fx.js';

export const teamConfessions = [
  {
    id: 1,
    teammate: 'Adya',
    colorClass: 'sticky-yellow',
    rotation: '-2deg',
    sin: 'I couldn\'t differentiate between logistic and linear regression',
    verdict: 'Guilty of: Terminally Online Vocabulary'
  },
  {
    id: 2,
    teammate: 'Amarnath K',
    colorClass: 'sticky-pink',
    rotation: '2.5deg',
    sin: 'I called chairperson as chairman a couple of times to a point Sasmit had to point it out multiple times. (Honest mistake guys, I\'m a 6\'4" feminist).',
    verdict: 'Guilty of: 6\'4" Feminist Slip-Up'
  },
  {
    id: 3,
    teammate: 'Anonymous Teammate',
    colorClass: 'sticky-green',
    rotation: '-1.5deg',
    sin: 'I was really sick during the interview so I literally puked directly onto the interviewer\'s laptop.',
    verdict: 'Guilty of: Biological Hardware Destruction'
  },
  {
    id: 4,
    teammate: 'Vrishan',
    colorClass: 'sticky-blue',
    rotation: '3deg',
    sin: 'I got genuinely turned on by the interviewer\'s forehead and spent the entire interview just staring at it.',
    verdict: 'Guilty of: Unlawful Cranial Attraction'
  }
];

export function initConfessions() {
  const wallContainer = document.getElementById('confessionWallGrid');
  const modal = document.getElementById('judgeSpotlightModal');
  const modalText = document.getElementById('spotlightSinText');
  const modalAuthor = document.getElementById('spotlightAuthor');
  const modalVerdict = document.getElementById('spotlightVerdict');
  const modalClose = document.getElementById('closeSpotlightBtn');
  const randomPickBtn = document.getElementById('judgeRandomPickBtn');

  if (!wallContainer) return;

  function renderWall() {
    wallContainer.innerHTML = teamConfessions.map(item => `
      <div class="sticky-note ${item.colorClass}" style="transform: rotate(${item.rotation})" data-id="${item.id}">
        <div>
          <div class="confession-author">📌 ${item.teammate}</div>
          <p class="confession-text">"${item.sin}"</p>
        </div>
        <div class="sticky-footer">
          <span>${item.verdict}</span>
          <button class="judge-pick-btn" data-id="${item.id}">READ ALOUD 📢</button>
        </div>
      </div>
    `).join('');

    wallContainer.querySelectorAll('.sticky-note').forEach(card => {
      card.addEventListener('click', () => {
        const id = parseInt(card.getAttribute('data-id'), 10);
        openSpotlight(id);
      });
    });
  }

  function openSpotlight(id) {
    const confession = teamConfessions.find(c => c.id === id) || teamConfessions[0];
    soundFx.playGavel();

    modalAuthor.textContent = `Confession of ${confession.teammate}`;
    modalText.textContent = `"${confession.sin}"`;
    modalVerdict.textContent = `⚖️ ${confession.verdict}`;
    modal.classList.add('active');
  }

  function closeSpotlight() {
    soundFx.playClick();
    modal.classList.remove('active');
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeSpotlight);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeSpotlight();
    });
  }

  if (randomPickBtn) {
    randomPickBtn.addEventListener('click', () => {
      const randomIdx = Math.floor(Math.random() * teamConfessions.length);
      openSpotlight(teamConfessions[randomIdx].id);
    });
  }

  renderWall();
}
