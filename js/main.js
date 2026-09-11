/**
 * SURVIVAL.EXE — MAIN CONTROLLER & BOOTSTRAP
 * Clean coordinator for all 9 modular features.
 */

import { soundFx } from './audio-fx.js';
import { initGrovelSlider } from './grovel-slider.js';
import { initConfessions } from './confessions.js';
import { initApologyGenerator } from './apology-gen.js';
import { initCourtroom } from './courtroom.js';
import { initChatbot } from './chatbot.js';
import { initBribeVault } from './bribe-vault.js';
import { initEmergencyButton } from './emergency-btn.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Audio Mute / Unmute Header Toggle
  const audioToggle = document.getElementById('audioToggleBtn');
  if (audioToggle) {
    audioToggle.addEventListener('click', () => {
      const isMuted = soundFx.toggleMute();
      audioToggle.textContent = isMuted ? '🔇 SFX: MUTED' : '🔊 SFX: ON';
      audioToggle.style.background = isMuted ? '#ddd' : '#fff';
    });
  }

  // 2. Hackathon Live Countdown (Visual Polish)
  const timerDisplay = document.getElementById('survivalTimer');
  if (timerDisplay) {
    let remainingSeconds = 60 * 60; // 60 minutes
    setInterval(() => {
      if (remainingSeconds > 0) remainingSeconds--;
      const mins = Math.floor(remainingSeconds / 60).toString().padStart(2, '0');
      const secs = (remainingSeconds % 60).toString().padStart(2, '0');
      timerDisplay.textContent = `${mins}:${secs}`;
    }, 1000);
  }

  // 3. Initialize all 9 features
  initGrovelSlider();     // Feature 1
  initConfessions();      // Feature 3
  initApologyGenerator(); // Feature 4
  initCourtroom();        // Features 5 & 7
  initChatbot();          // Feature 6
  initBribeVault();       // Feature 8
  initEmergencyButton();  // Feature 9

  console.log('🚀 SURVIVAL.EXE initialized successfully. Defense docket online.');
});
