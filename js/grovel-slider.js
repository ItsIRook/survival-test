/**
 * The Groveling Slider
 * Hand-drawn doodle face that degrades from confident to a sobbing mess.
 */

import { soundFx } from './audio-fx.js';

export function initGrovelSlider() {
  const slider = document.getElementById('grovelSlider');
  const stageLabel = document.getElementById('grovelStageLabel');
  const subtextLabel = document.getElementById('grovelSubtext');
  const faceContainer = document.getElementById('grovelFaceSvg');

  if (!slider || !faceContainer) return;

  const stages = [
    {
      max: 20,
      title: '😎 STAGE 1: TOTALLY CHILL',
      subtext: '"We cooked. We actually read the brief. We\'re good."',
      color: 'var(--stamp-green)',
      expression: 'confident'
    },
    {
      max: 45,
      title: '😅 STAGE 2: NERVOUS SWEATING',
      subtext: '"Wait, why is Judge #2 squinting at our code like that?"',
      color: '#c27b00',
      expression: 'nervous'
    },
    {
      max: 70,
      title: '😰 STAGE 3: STRESS-EATING FINGERNAILS',
      subtext: '"Did anyone test if this actually works on Safari?! DID ANYONE?!"',
      color: '#d35400',
      expression: 'panicked'
    },
    {
      max: 92,
      title: '🧎 STAGE 4: ON OUR HANDS AND KNEES',
      subtext: '"We will fix your office printer. We will water your plants. PLEASE."',
      color: 'var(--stamp-red)',
      expression: 'kneeling'
    },
    {
      max: 100,
      title: '😭 STAGE 5: PLEASE GOD NO',
      subtext: '"HAVE MERCY! OUR MOMS ARE WATCHING THE LIVESTREAM!"',
      color: 'var(--stamp-red)',
      expression: 'crying'
    }
  ];

  function renderFace(val, expression) {
    let eyeLeft = '<circle cx="42" cy="48" r="5" fill="#111" />';
    let eyeRight = '<circle cx="78" cy="48" r="5" fill="#111" />';
    let mouth = '<path d="M 38 74 Q 60 92 82 74" fill="none" stroke="#111" stroke-width="4" stroke-linecap="round" />';
    let extras = '';
    let trembleClass = '';

    if (expression === 'confident') {
      extras = `
        <rect x="30" y="40" width="26" height="18" rx="4" fill="#111" />
        <rect x="64" y="40" width="26" height="18" rx="4" fill="#111" />
        <line x1="54" y1="46" x2="66" y2="46" stroke="#111" stroke-width="3" />
        <line x1="20" y1="46" x2="30" y2="46" stroke="#111" stroke-width="2" />
        <line x1="90" y1="46" x2="100" y2="46" stroke="#111" stroke-width="2" />
      `;
      mouth = '<path d="M 38 75 Q 60 90 82 75" fill="none" stroke="#111" stroke-width="4" stroke-linecap="round" />';
    } else if (expression === 'nervous') {
      mouth = '<line x1="42" y1="76" x2="78" y2="76" stroke="#111" stroke-width="4" stroke-linecap="round" />';
      extras = `
        <path d="M 92 36 Q 96 32 92 28 Q 88 32 92 36 Z" fill="#3498db" stroke="#111" stroke-width="1.5" />
      `;
    } else if (expression === 'panicked') {
      mouth = '<path d="M 38 78 Q 48 68 60 78 Q 72 88 82 78" fill="none" stroke="#111" stroke-width="4" stroke-linecap="round" />';
      eyeLeft = '<circle cx="42" cy="46" r="9" fill="#fff" stroke="#111" stroke-width="3"/><circle cx="42" cy="46" r="3" fill="#111"/>';
      eyeRight = '<circle cx="78" cy="46" r="9" fill="#fff" stroke="#111" stroke-width="3"/><circle cx="78" cy="46" r="3" fill="#111"/>';
      extras = `
        <path d="M 94 40 Q 98 34 94 30 Q 90 34 94 40 Z" fill="#3498db" stroke="#111" stroke-width="1.5" />
        <path d="M 26 44 Q 30 38 26 34 Q 22 38 26 44 Z" fill="#3498db" stroke="#111" stroke-width="1.5" />
      `;
      trembleClass = 'tremble-severe';
    } else if (expression === 'kneeling') {
      mouth = '<path d="M 40 84 Q 60 64 80 84" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round" />';
      eyeLeft = '<path d="M 34 48 Q 42 42 50 48" stroke="#111" stroke-width="4" fill="none" stroke-linecap="round"/>';
      eyeRight = '<path d="M 70 48 Q 78 42 86 48" stroke="#111" stroke-width="4" fill="none" stroke-linecap="round"/>';
      extras = `
        <path d="M 96 46 Q 100 40 96 36 Q 92 40 96 46 Z" fill="#3498db" stroke="#111" stroke-width="1.5" />
        <path d="M 24 46 Q 28 40 24 36 Q 20 40 24 46 Z" fill="#3498db" stroke="#111" stroke-width="1.5" />
      `;
      trembleClass = 'tremble-severe';
    } else if (expression === 'crying') {
      mouth = `
        <path d="M 36 68 Q 60 58 84 68 L 78 94 Q 60 102 42 94 Z" fill="#ba1e1e" stroke="#111" stroke-width="4" stroke-linejoin="round" />
        <path d="M 46 88 Q 60 78 74 88" fill="#ff7675" stroke="#111" stroke-width="2" />
      `;
      eyeLeft = `
        <line x1="32" y1="46" x2="52" y2="52" stroke="#111" stroke-width="5" stroke-linecap="round" />
        <line x1="32" y1="52" x2="52" y2="46" stroke="#111" stroke-width="5" stroke-linecap="round" />
      `;
      eyeRight = `
        <line x1="68" y1="52" x2="88" y2="46" stroke="#111" stroke-width="5" stroke-linecap="round" />
        <line x1="68" y1="46" x2="88" y2="52" stroke="#111" stroke-width="5" stroke-linecap="round" />
      `;
      extras = `
        <g class="tear-left">
          <ellipse cx="38" cy="62" rx="6" ry="10" fill="#3498db" stroke="#111" stroke-width="1.5" />
          <polygon points="32,62 44,62 38,50" fill="#3498db" />
        </g>
        <g class="tear-right">
          <ellipse cx="82" cy="62" rx="6" ry="10" fill="#3498db" stroke="#111" stroke-width="1.5" />
          <polygon points="76,62 88,62 82,50" fill="#3498db" />
        </g>
      `;
      trembleClass = 'tremble-severe';
    }

    faceContainer.className = `avatar-face-svg ${trembleClass}`;
    faceContainer.innerHTML = `
      <svg viewBox="0 0 120 120" width="130" height="130" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="52" fill="#fffdf9" stroke="#111" stroke-width="4" stroke-dasharray="200, 1" />
        ${eyeLeft}
        ${eyeRight}
        ${extras}
        ${mouth}
      </svg>
    `;
  }

  let lastMaxTrigger = false;

  function updateSlider() {
    const val = parseInt(slider.value, 10);
    const stage = stages.find(s => val <= s.max) || stages[stages.length - 1];

    stageLabel.textContent = stage.title;
    stageLabel.style.color = stage.color;
    subtextLabel.textContent = stage.subtext;

    renderFace(val, stage.expression);

    if (val === 100) {
      if (!lastMaxTrigger) {
        soundFx.playTearDrip();
        lastMaxTrigger = true;
      }
    } else {
      lastMaxTrigger = false;
    }
  }

  slider.addEventListener('input', () => {
    updateSlider();
    if (parseInt(slider.value, 10) % 10 === 0) {
      soundFx.playClick(500 + parseInt(slider.value, 10) * 5);
    }
  });

  updateSlider();
}
