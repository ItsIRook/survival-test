/**
 * FEATURE 9: "DO NOT ELIMINATE" Emergency Panic Button
 * Violent screen shake, klaxon audio siren, red alert strobe, and an un-bypassable modal.
 */

import { soundFx } from './audio-fx.js';

export function initEmergencyButton() {
  const panicBtn = document.getElementById('doNotEliminateBtn');
  const overlay = document.getElementById('lockdownOverlay');
  const dismissBtn = document.getElementById('dismissLockdownBtn');

  if (!panicBtn) return;

  function triggerEmergencyProtocol() {
    // 1. Play synthesized emergency alarm
    soundFx.playEmergencyAlarm(4);

    // 2. Shake entire body
    document.body.classList.remove('shake-active');
    void document.body.offsetWidth;
    document.body.classList.add('shake-active');

    // 3. Activate red siren strobe background
    document.body.classList.add('siren-active');

    // 4. Reveal dramatic lockdown overlay modal
    if (overlay) {
      setTimeout(() => {
        overlay.classList.add('active');
      }, 300);
    }
  }

  function dismissEmergency() {
    soundFx.playClick(600);
    document.body.classList.remove('siren-active');
    document.body.classList.remove('shake-active');
    if (overlay) {
      overlay.classList.remove('active');
    }
  }

  panicBtn.addEventListener('click', triggerEmergencyProtocol);
  if (dismissBtn) {
    dismissBtn.addEventListener('click', dismissEmergency);
  }

  // Close when clicking background outside card
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) dismissEmergency();
    });
  }
}
