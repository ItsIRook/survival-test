/**
 * Auto-Apology Generator
 * Rapid-fire excuses, desperate promises, and hackathon apologies.
 */

import { soundFx } from './audio-fx.js';

export const apologies = [
  {
    quote: "Judges, it was working literally 90 seconds before you walked over to our table. We swear on our GitHub contribution graph.",
    category: "The Classic Hackathon Curse"
  },
  {
    quote: "Look, we didn't come here to write clean architecture, we came here to survive. Isn't surviving the ultimate proof of engineering grit?",
    category: "Street Fighter Logic"
  },
  {
    quote: "We unconditionally apologize for any variable named `let pleaseWorkBro = true`. Our developer was in full fight-or-flight mode.",
    category: "Syntax Trauma"
  },
  {
    quote: "If you send us to Round 3, we promise to delete every single `console.log('WHERE AM I')` currently polluting our devtools.",
    category: "The Clean Code Bribe"
  },
  {
    quote: "Our dog ate our unit tests. We don't even own a dog, that's just how desperate we are right now.",
    category: "Pure Unadulterated Panic"
  },
  {
    quote: "Technically, our code is not broken. It is merely non-deterministically defying expectations to test your patience.",
    category: "Philosophical Denial"
  },
  {
    quote: "If you cut us, our team captain's mom will literally email the organizers asking for a recount. Save us all the awkwardness.",
    category: "Mom Threat"
  }
];

export function initApologyGenerator() {
  const quoteEl = document.getElementById('apologyQuote');
  const catEl = document.getElementById('apologyCategory');
  const countEl = document.getElementById('apologyCountBadge');
  const genBtn = document.getElementById('generateApologyBtn');
  const copyBtn = document.getElementById('copyApologyBtn');

  if (!quoteEl || !genBtn) return;

  let count = 0;
  let lastIndex = -1;

  function generateNewApology() {
    soundFx.playClick(900);
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * apologies.length);
    } while (nextIndex === lastIndex && apologies.length > 1);

    lastIndex = nextIndex;
    const item = apologies[nextIndex];
    count++;

    quoteEl.style.opacity = '0';
    setTimeout(() => {
      quoteEl.textContent = `"${item.quote}"`;
      if (catEl) catEl.textContent = `Apology #${count} • ${item.category}`;
      if (countEl) countEl.textContent = `${count} EXCUSES FILED`;
      quoteEl.style.opacity = '1';
    }, 150);
  }

  function copyToClipboard() {
    soundFx.playClick(1200);
    const textToCopy = quoteEl.textContent.replace(/^"|"$/g, '');
    navigator.clipboard.writeText(textToCopy).then(() => {
      const origText = copyBtn.textContent;
      copyBtn.textContent = 'COPIED TO CLIPBOARD! 📋';
      setTimeout(() => {
        copyBtn.textContent = origText;
      }, 2000);
    });
  }

  genBtn.addEventListener('click', generateNewApology);
  if (copyBtn) copyBtn.addEventListener('click', copyToClipboard);

  // Initial display
  generateNewApology();
}
