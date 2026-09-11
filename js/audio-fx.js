/**
 * SURVIVAL.EXE — AUDIO SYNTHESIZER (Web Audio API)
 * Zero external audio files required. All sound effects are synthesized dynamically.
 */

class AudioSynthesizer {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }

  // Quick mechanical UI click
  playClick(freq = 800) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.04);

    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.04);
  }

  // Deep Gavel Strike with Wooden Resonance
  playGavel() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    // Primary thump
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(130, t);
    osc.frequency.exponentialRampToValueAtTime(35, t + 0.28);

    gain.gain.setValueAtTime(0.9, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + 0.35);

    // High snap of wood impact
    const snap = this.ctx.createOscillator();
    const snapGain = this.ctx.createGain();
    snap.type = 'square';
    snap.frequency.setValueAtTime(450, t);
    snap.frequency.exponentialRampToValueAtTime(80, t + 0.08);

    snapGain.gain.setValueAtTime(0.4, t);
    snapGain.gain.exponentialRampToValueAtTime(0.01, t + 0.08);

    snap.connect(snapGain);
    snapGain.connect(this.ctx.destination);
    snap.start(t);
    snap.stop(t + 0.08);
  }

  // Vault Dial Ratchet Clicks + Heavy Door Release
  playVaultUnlock() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    // Series of 4 quick clicks
    [0, 0.1, 0.22, 0.35].forEach((delay) => {
      setTimeout(() => this.playClick(1200), delay * 1000);
    });

    // Heavy mechanical clunk
    setTimeout(() => {
      if (this.muted || !this.ctx) return;
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(90, t);
      osc.frequency.exponentialRampToValueAtTime(30, t + 0.4);

      gain.gain.setValueAtTime(0.5, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.4);
    }, 450);
  }

  // Water Drop / Teardrop Plink
  playTearDrip() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1400, t);
    osc.frequency.exponentialRampToValueAtTime(600, t + 0.15);

    gain.gain.setValueAtTime(0.3, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.15);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + 0.15);
  }

  // Full Emergency Panic Siren (Klaxon Alarm)
  playEmergencyAlarm(durationSeconds = 3) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    // Modulate pitch up and down like a siren
    for (let i = 0; i < durationSeconds * 2; i++) {
      const step = i * 0.5;
      osc.frequency.setValueAtTime(450, t + step);
      osc.frequency.linearRampToValueAtTime(880, t + step + 0.25);
      osc.frequency.linearRampToValueAtTime(450, t + step + 0.5);
    }

    gain.gain.setValueAtTime(0.35, t);
    gain.gain.setValueAtTime(0.35, t + durationSeconds - 0.2);
    gain.gain.exponentialRampToValueAtTime(0.01, t + durationSeconds);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + durationSeconds);
  }
}

export const soundFx = new AudioSynthesizer();
