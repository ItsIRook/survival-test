/**
 * Roast Our Rivals & Rival Team Trial
 * Funny, good-natured roasts and mock trials of other teams in the room.
 */

import { soundFx } from './audio-fx.js';

export const rivalPresets = [
  {
    name: 'Team 404: Brain Not Found',
    charge: '1st Degree Spending 50 Minutes on Canva Logo Design Instead of Writing Code',
    evidence: 'Exhibit A: Their repo has 1 commit from 45 minutes ago containing a single README with spelling errors.',
    roast: 'They spent the entire hackathon debating whether dark mode looks more "senior developer" while their submit button doesn\'t even have an onClick handler.',
    verdict: 'GUILTY AS CHARGED',
    sentence: 'Sentenced to write all future frontend code in raw Windows Notepad without syntax highlighting.'
  },
  {
    name: 'Team Overthinkers: Redux Specialists',
    charge: 'Aggravated Installation of 84 NPM Packages for a Single Counter Button',
    evidence: 'Exhibit B: A 400MB node_modules folder containing 7 deprecated state management libraries.',
    roast: 'They are still drawing UML architecture diagrams on a whiteboard. By the time they finish their first pull request, Round 3 will already be over.',
    verdict: 'CONVICTED OF OVER-ENGINEERING',
    sentence: 'Sentenced to build their next 5 projects in pure Vanilla JS and HTML tables.'
  },
  {
    name: 'The "AI Prompt Bro" Squad',
    charge: 'Reckless Copy-Pasting of ChatGPT Hallucinations Into Production',
    evidence: 'Exhibit C: 3 imported Python packages that do not exist on this earthly plane.',
    roast: 'They paste the prompt into Claude, it breaks, they paste the error back into ChatGPT, and now nobody in the room understands the code.',
    verdict: 'UNANIMOUSLY CONDEMNED',
    sentence: 'Sentenced to explain what their code actually does line-by-line without looking at their notes.'
  }
];

export function initCourtroom() {
  const rivalSelect = document.getElementById('rivalSelect');
  const targetNameEl = document.getElementById('roastTargetName');
  const burnTextEl = document.getElementById('roastBurnText');
  const trialDefendantEl = document.getElementById('trialDefendant');
  const chargeEl = document.getElementById('trialCharge');
  const evidenceEl = document.getElementById('trialEvidence');
  const verdictEl = document.getElementById('trialVerdict');
  const sentenceEl = document.getElementById('trialSentence');
  const gavelBtn = document.getElementById('strikeGavelBtn');
  const stampOverlay = document.getElementById('guiltyStampOverlay');
  const courtroomCard = document.getElementById('courtroomCard');

  if (!rivalSelect || !gavelBtn) return;

  function loadRival(index) {
    const r = rivalPresets[index] || rivalPresets[0];

    if (targetNameEl) targetNameEl.textContent = `TARGET: ${r.name}`;
    if (burnTextEl) burnTextEl.textContent = `"${r.roast}"`;
    if (trialDefendantEl) trialDefendantEl.textContent = r.name;
    if (chargeEl) chargeEl.textContent = r.charge;
    if (evidenceEl) evidenceEl.textContent = r.evidence;
    if (verdictEl) verdictEl.textContent = r.verdict;
    if (sentenceEl) sentenceEl.textContent = r.sentence;

    if (stampOverlay) stampOverlay.classList.remove('stamped');
  }

  rivalSelect.addEventListener('change', (e) => {
    soundFx.playClick(850);
    loadRival(parseInt(e.target.value, 10));
  });

  gavelBtn.addEventListener('click', () => {
    soundFx.playGavel();

    if (courtroomCard) {
      courtroomCard.classList.remove('shake-active');
      void courtroomCard.offsetWidth;
      courtroomCard.classList.add('shake-active');
    }

    if (stampOverlay) {
      stampOverlay.classList.remove('stamped');
      void stampOverlay.offsetWidth;
      stampOverlay.classList.add('stamped');
    }
  });

  loadRival(0);
}
