# SURVIVAL.EXE — ROUND 2 DEFENSE BRIEF

> **PROJECT CODENAME**: SURVIVAL.EXE  
> **MISSION**: Convince the live panel of judges that our team deserves one of the remaining 50 seats.  
> **STACK**: Vanilla HTML5, CSS3, ES6 Modules, and Web Audio API (Zero external npm dependencies needed).

---

## ⚡ Quick Start (Run Locally)

Since this uses ES6 modules, run a quick local HTTP server:

```bash
# Option 1: Python 3 (built-in, recommended)
python3 -m http.server 3000

# Option 2: Node / npx
npx serve .

# Then open in browser:
http://localhost:3000
```

---

## 👥 Teammate Task Division (4–5 Person Team)

Each teammate has dedicated JS & CSS sections so you can code simultaneously **without Git merge conflicts**:

| Teammate | Assigned Features | Main Files to Edit | What to Polish / Customize |
| :--- | :--- | :--- | :--- |
| **Teammate 1** (Lead / Layout) | **#2 Thesis** & **#9 Emergency Button** | `index.html`<br>`js/emergency-btn.js`<br>`css/main.css` | • Tune the headline & thesis sentence in `#whyWeDeserveToStay`.<br>• Customize the emergency lockdown modal text & alarm styling. |
| **Teammate 2** (Animation & Copy) | **#1 Groveling Slider** & **#4 Auto-Apology Generator** | `js/grovel-slider.js`<br>`js/apology-gen.js` | • Add more custom SVG face expressions or stages to `stages[]`.<br>• Add punchy, team-specific apologies to `apologies[]`. |
| **Teammate 3** (Courtroom & Rivals) | **#5 Roast Our Rivals** & **#7 Rival Team Trial** | `js/courtroom.js`<br>`css/components.css` | • Add actual rival team names from your room to `rivalPresets[]`.<br>• Write savage, good-natured roasts and fabricated crimes. |
| **Teammate 4** (Contraband & Sins) | **#3 Confession Wall** & **#8 Emergency Bribe Vault** | `js/confessions.js`<br>`js/bribe-vault.js` | • Replace `teamConfessions[]` with real funny mistakes your team made in Round 1.<br>• Add more absurd non-monetary bribe items to the vault reveal. |
| **Teammate 5** (or Shared / Audio) | **#6 "Judges, Please" Chatbot** & Sound FX | `js/chatbot.js`<br>`js/audio-fx.js` | • Add more desperate replies & funny suggestion chips in `desperateReplies[]`.<br>• Tweak synth frequencies for custom sound effects. |

---

## 🎯 The 9 Required Features Checklist

- [x] **1. The Groveling Slider**: Degrades from Confident (0%) to Please God No (100%), with crying animated teardrops and trembling face at max. (`js/grovel-slider.js`)
- [x] **2. “Why We Deserve to Stay”**: 1 bold headline, 1 punchy sentence thesis statement. (`index.html`)
- [x] **3. Sins of Round 1 Confession Wall**: Sticky-notes for each teammate with "JUDGE MODE: READ ALOUD" spotlight modal. (`js/confessions.js`)
- [x] **4. Auto-Apology Generator**: Generates theatrical dramatic apologies on click with clipboard copy button and plea counter. (`js/apology-gen.js`)
- [x] **5. Roast Our Rivals**: Dropdown with rival teams and lethal burn meter. (`js/courtroom.js`)
- [x] **6. “Judges, Please” Chatbot**: Fake chatbot that responds to any input with escalating desperate pleas. (`js/chatbot.js`)
- [x] **7. Rival Team Trial**: Courtroom docket with fabricated charges, evidence, and interactive **GAVEL** strike that stamps "GUILTY" across the screen. (`js/courtroom.js`)
- [x] **8. Emergency Bribe Vault**: Animated safe dial that cracks open to reveal an absurd non-monetary bribe package. (`js/bribe-vault.js`)
- [x] **9. “DO NOT ELIMINATE” Button**: Massive hazard button that triggers screen shake, red alert strobe, synthesized audio sirens, and an emergency injunction modal. (`js/emergency-btn.js`)

---

## 🎨 Design Philosophy
- **Aesthetic**: Retro-cyberpunk legal docket / defense terminal.
- **Zero AI Slop**: Human, self-deprecating developer humor without corporate buzzwords.
- **Self-Contained Audio**: Web Audio API generates all sound effects natively in the browser without external `.mp3` files.
