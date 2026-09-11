/**
 * "Judges, Please" Chatbot
 * Whatever the judge types, it responds with escalating desperation.
 */

import { soundFx } from './audio-fx.js';

export function initChatbot() {
  const history = document.getElementById('chatHistory');
  const input = document.getElementById('chatInput');
  const sendBtn = document.getElementById('chatSendBtn');
  const chips = document.querySelectorAll('.chip-btn');

  if (!history || !input || !sendBtn) return;

  let messageCount = 0;

  const desperateReplies = [
    {
      stage: 'Level 1: Polite Denial',
      text: 'Judges! Thank you for testing our chat. Whatever issue you just found, please know our vibes are immaculate and our intentions were pure.'
    },
    {
      stage: 'Level 2: Mild Panic',
      text: 'Wait wait wait, don\'t say that! We can fix whatever you don\'t like in 45 seconds flat! Just don\'t write anything bad on your scorecards!'
    },
    {
      stage: 'Level 3: Shameless Bargaining',
      text: 'Look at us right now. We are literally begging inside a tiny text box. We will buy your entire judging panel iced coffees if you let us pass!'
    },
    {
      stage: 'Level 4: Meltdown Mode',
      text: 'Do you really want our tears on your hands?! If you eliminate us, our GitHub streaks will die and our moms will be so disappointed in us!'
    },
    {
      stage: 'Level 5: Total Desperation',
      text: 'PLEASE! WE CANNOT GO HOME YET! WE WILL CLEAN THE TABLES AFTER THE EVENT! JUST VOTE YES ON TEAM SURVIVAL!'
    }
  ];

  function addMessage(sender, text, stage = null) {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender}`;

    if (stage) {
      const stageSpan = document.createElement('span');
      stageSpan.className = 'bot-desperation-tag';
      stageSpan.textContent = `🚨 ${stage}`;
      bubble.appendChild(stageSpan);
    }

    const textNode = document.createElement('p');
    textNode.textContent = text;
    bubble.appendChild(textNode);

    history.appendChild(bubble);
    history.scrollTop = history.scrollHeight;
  }

  function handleJudgeInput(userText) {
    if (!userText.trim()) return;

    soundFx.playClick(750);
    addMessage('judge', userText);
    input.value = '';
    messageCount++;

    const replyIdx = Math.min(messageCount - 1, desperateReplies.length - 1);
    const canned = desperateReplies[replyIdx];

    setTimeout(() => {
      soundFx.playClick(1100);
      addMessage('bot', canned.text, canned.stage);
    }, 400);
  }

  sendBtn.addEventListener('click', () => handleJudgeInput(input.value));

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleJudgeInput(input.value);
    }
  });

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      input.value = chip.textContent;
      handleJudgeInput(input.value);
    });
  });

  addMessage('bot', 'Awaiting your verdict, Judges. You can type whatever you want, but we are not going down without a fight.', 'Standing By');
}
