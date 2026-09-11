/**
 * Emergency Bribe Vault
 * Combination dial unlock sequence revealing absurd non-monetary hackathon bribes.
 */

import { soundFx } from './audio-fx.js';

export function initBribeVault() {
  const safeDoor = document.getElementById('vaultSafeDoor');
  const dial = document.getElementById('vaultDial');
  const unlockBtn = document.getElementById('unlockVaultBtn');
  const bribeReveal = document.getElementById('vaultBribeReveal');
  const vaultStatus = document.getElementById('vaultStatusText');

  if (!safeDoor || !unlockBtn) return;

  let isUnlocked = false;

  function unlockVault() {
    if (isUnlocked) return;
    isUnlocked = true;

    soundFx.playVaultUnlock();

    if (dial) {
      dial.classList.add('dial-spinning');
    }
    if (vaultStatus) {
      vaultStatus.textContent = 'CRACKING COMBINATION...';
      vaultStatus.style.color = '#c27b00';
    }

    setTimeout(() => {
      safeDoor.style.borderColor = 'var(--stamp-green)';
      if (vaultStatus) {
        vaultStatus.textContent = 'VAULT OPEN • CONTRABAND SECURED';
        vaultStatus.style.color = 'var(--stamp-green)';
      }
      if (bribeReveal) {
        bribeReveal.classList.add('unlocked');
      }
      unlockBtn.textContent = 'BRIBE UNLOCKED 🔓';
      unlockBtn.disabled = true;
      unlockBtn.style.opacity = '0.7';
    }, 1100);
  }

  unlockBtn.addEventListener('click', unlockVault);
  safeDoor.addEventListener('click', unlockVault);
}
