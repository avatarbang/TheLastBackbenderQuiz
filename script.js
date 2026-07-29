const questions = [
  {
    section: "❤️ Love",
    art: "assets/questions/q1.png",
    title: "1. The Four Nations are voting for their favorite couple. Who gets your vote? ❤️",
    type: "choice",
    options: [
      "❤️ Aang & Katara — Gentle, loyal, and built on unwavering trust. They're each other's safe place.",
      "🏳️‍🌈 Asami & Korra — Two independent people who choose each other every day and grow stronger together.",
      "🪃 Sokka & Suki — Playful, adventurous, and always pushing each other to be better while having fun.",
      "💥 Zaheer & P'Li — Complete devotion. They'd burn the world down for each other... or with each other."
    ]
  },
  {
    section: "❤️ Love",
    art: "assets/questions/q2.png",
    title: "2. Which date sounds the most romantic?",
    type: "choice",
    options: [
      "🌅 Watching the sunset at Ember Island.",
      "🌙 A moonlit canoe ride through the Southern Water Tribe.",
      "🍵 Tea at the Jasmine Dragon followed by a walk through Ba Sing Se.",
      "🚨 Breaking into a restricted Fire Nation palace because dates are better with a felony."
    ]
  },
  {
    section: "❤️ Love",
    art: "assets/questions/q3.png",
    title: "3. Which animal companion are you choosing?",
    type: "choice",
    options: ["🦬 Appa", "🐻‍❄️ Naga", "🦊 Pabu", "🐍 Shirshu"]
  },
  {
    section: "❤️ Love",
    art: "assets/questions/q4.png",
    title: "4. Dai Li (Part 1) 📱",
    body: "The Dai Li have discovered your belongings, but they're protected by a powerful locking seal. Add the <strong>first and last digits</strong> of your passcode to break the first seal. 🔐",
    helper: "(Use your current phone passcode. If you use Face ID or fingerprint, use the numeric passcode you would enter instead.)<br><br><strong>Example:</strong> If your passcode is 1234, 1 + 4, so your answer would be 5.",
    type: "number",
    min: 0,
    max: 18,
    label: "Enter the sum only"
  },
  {
    section: "🔥 Kinks",
    art: "assets/questions/q5.png",
    title: "5. Which vibe are you most attracted to? ❤️",
    type: "choice",
    options: [
      "☁️ Aang — Kind, genuine, and emotionally safe. (Will absolutely ask if you made it home okay.)",
      "🔥 Zuko — Quiet, mysterious, and emotionally complicated. (\"I can fix him.\")",
      "✨ Asami — Confident, intelligent, and effortlessly put together. (Probably has a five-year plan.)",
      "🌊 Korra — Bold, adventurous, and always up for the next challenge. (Your therapist will have questions. Your friends will love the stories.)"
    ]
  },
  {
    section: "🔥 Kinks",
    art: "assets/questions/q6.png",
    title: "6. Which bending style do you think would make the best lover? 😉",
    type: "choice",
    options: [
      "🌍 Earthbenders can move a rock bed... and make your bed rock. 🪨",
      "🌪️ Airbenders are all about the spiritual connection. They'll blow you away. 💨",
      "🔥 Firebenders know how to turn up the heat. ❤️‍🔥",
      "🌊 Waterbenders know exactly what to do when things get... wet. 💧"
    ]
  },
  {
    section: "🔥 Kinks",
    art: "assets/questions/q7.png",
    title: "7. After a wild night out in Republic City, it's last call at the bar. Who are you leaving with? 😉",
    type: "choice",
    options: ["🔥 Zuko", "⚡ Mako", "🪃 Sokka", "🌊 Korra", "✨ Asami", "👑 Azula"]
  },
  {
    section: "🔥 Kinks",
    art: "assets/questions/q8.png",
    title: "8. Messenger Hawk (Part 1) 🍆💦",
    body: "You and your secret lover are using messenger hawks to sext across nations. 🍆💦 To avoid anyone else seeing it, the scroll requires a secret passcode to unlock. Add the <strong>first and last digits</strong> of your secret passcode. 😏",
    helper: "(Android: Use your Secure Folder passcode. iPhone: Use your Snapchat \"For My Eyes Only\" passcode.)<br><br><strong>Example:</strong> If your passcode is 1234, 1 + 4, so your answer would be 5.",
    type: "number",
    min: 0,
    max: 18,
    label: "Enter a number from 0–18"
  },
  {
    section: "⚙️ The Mechanist",
    art: "assets/questions/q9.png",
    title: "9. Tattoos",
    body: "Aang had to hide his tattoos to sneak into a Fire Nation school. You're trying to stay under the radar after a sneaky link.",
    type: "number",
    min: 0,
    max: 100,
    label: "How many tattoos do you have?"
  },
  {
    section: "⚙️ The Mechanist",
    art: "assets/questions/q10.png",
    title: "10. Secret Library",
    body: "The spirits guarding the secret library are a little freaky. To gain access, enter the age you lost your virginity.",
    type: "number",
    min: 0,
    max: 100,
    label: "Enter age"
  },
  {
    section: "⚙️ The Mechanist",
    art: "assets/questions/q11.png",
    title: "11. Piercings",
    body: "Some of the edgier people Aang meets throughout his journey wear their style proudly.",
    type: "number",
    min: 0,
    max: 100,
    label: "How many piercings do you have?"
  },
  {
    section: "⚙️ The Mechanist",
    art: "assets/questions/q12.png",
    title: "12. Dai Li (Final Attempt) 📱",
    body: "The Dai Li broke the first seal, but one final powerful locking seal remains. Add the <strong>middle two digits</strong> of your passcode to break the final seal. 🔐",
    helper: "(Use your current phone passcode. If you use Face ID or fingerprint, use the numeric passcode you would enter instead.)<br><br><strong>Example:</strong> If your passcode is 1234, 2 + 3, so your answer would be 5.",
    type: "number",
    min: 0,
    max: 18,
    label: "Enter the sum only"
  },
  {
    section: "🌍 Personality",
    art: "assets/questions/q13.png",
    title: "13. Zaheer gave up his earthly tether and became only the second person in history able to fly. What still keeps you tethered?",
    type: "choice",
    options: [
      "❤️ The people I love.",
      "👑 My ambitions and goals.",
      "🪞 How others see me.",
      "😨 Fear of what could go wrong."
    ]
  },
  {
    section: "🌍 Personality",
    art: "assets/questions/q14.png",
    title: "14. Team Avatar is one member short. Who are you subbing in for?",
    type: "choice",
    options: [
      "🪃 Sokka — The guy whose terrible idea somehow saves the day.",
      "🌊 Katara — The one keeping the team alive physically and emotionally.",
      "🪨 Toph — The trash-talking problem solver whose solution is usually \"hit it harder.\"",
      "🔥 Zuko — Will disappear for three hours and come back covered in soot with the mission somehow complete."
    ]
  },
  {
    section: "🌍 Personality",
    art: "assets/questions/q15.png",
    title: "15. The Lion Turtle speaks in riddles for what feels like forever before asking:",
    quote: "\"What does your heart pursue, when your journey is through?\"",
    type: "choice",
    options: [
      "⏳ A trip through time, to rewrite my life's design.",
      "🌍 A world at peace, where all our wars can cease.",
      "🗺️ A lover in every nation, without the complication.",
      "💰 A wallet that's thick, and a therapist who says, \"You're fixed.\""
    ]
  },
  {
    section: "🌍 Personality",
    art: "assets/questions/q16.svg",
    title: "16. Messenger Hawk (Part 2) 🍆💦",
    body: "The messenger hawk made it safely to its destination. 🍆💦 Your lover replies with a scroll that's also protected by a secret passcode. Add the <strong>middle two digits</strong> of your secret passcode. 😏",
    helper: "(Android: Use your Secure Folder passcode. iPhone: Use your Snapchat \"For My Eyes Only\" passcode.)<br><br><strong>Example:</strong> If your passcode is 1234, 2 + 3, so your answer would be 5.",
    type: "number",
    min: 0,
    max: 18,
    label: "Enter a number from 0–18"
  }
];

const hiddenTraits = {
  0:"Unreadable — even the spirits couldn't read you.",
  1:"Curious",2:"Protective",3:"Playful",4:"Chaotic",5:"Loyal",6:"Mysterious",
  7:"Competitive",8:"Dramatic",9:"Bold",10:"Flirtatious",11:"Optimistic",12:"Clever",
  13:"Petty",14:"Whimsical",15:"Feral",16:"Suspicious",17:"Confident",18:"Unpredictable"
};

const relationshipQuirks = {
  0:"Likely to remain an anomaly no Lion Turtle could predict.",
  1:"Likely to fall in love with someone's potential.",
  2:"Likely to leave a paragraph in the Notes app instead of sending the text.",
  3:"Likely to say they're over it... then stalk their Instagram anyway.",
  4:"Likely to flirt by roasting you.",
  5:"Likely to catch feelings after one good conversation.",
  6:"Likely to mistake emotional unavailability for mystery.",
  7:"Likely to get jealous of a fictional character.",
  8:"Likely to say \"I'm fine\" while clearly preparing a PowerPoint.",
  9:"Likely to mentally plan your wedding after two dates.",
  10:"Likely to get butterflies over the bare minimum.",
  11:"Likely to send memes instead of saying \"I miss you.\"",
  12:"Likely to remember something you said six months ago.",
  13:"Likely to steal your hoodie and call it \"our hoodie.\"",
  14:"Likely to act nonchalant after rehearsing the conversation 37 times.",
  15:"Likely to say \"we'll figure it out\" with absolutely no plan.",
  16:"Likely to accidentally flirt with the cashier.",
  17:"Likely to believe they can fix someone with enough love.",
  18:"Likely to end up in another situationship and swear this one was different."
};

let current = 0;
let answers = Array(questions.length).fill(null);

const $ = (id) => document.getElementById(id);
const ageGate = $("ageGate");
const quizApp = $("quizApp");
const resultScreen = $("resultScreen");
const questionCard = $("questionCard");
const backBtn = $("backBtn");
const nextBtn = $("nextBtn");

$("enterQuiz").addEventListener("click", () => {
  ageGate.classList.add("hidden");
  quizApp.classList.remove("hidden");
  renderQuestion();
});

function renderQuestion(animate = true) {
  const q = questions[current];
  if (animate) {
    questionCard.classList.remove("transition-in");
    void questionCard.offsetWidth;
    questionCard.classList.add("transition-in");
  }
  triggerElementFX(q.section);
  $("sectionLabel").textContent = q.section;
  $("questionCount").textContent = current + 1;
  $("progressBar").style.width = `${((current + 1) / questions.length) * 100}%`;

  let html = `<img class="question-art" src="${q.art}" alt="" loading="eager"><h2>${q.title}</h2>`;
  if (q.body) html += `<p class="question-copy">${q.body}</p>`;
  if (q.quote) html += `<blockquote>${q.quote}</blockquote>`;

  if (q.type === "choice") {
    html += `<div class="answers">`;
    q.options.forEach((opt, idx) => {
      const selected = answers[current] === idx ? "selected" : "";
      html += `<button class="answer ${selected}" data-index="${idx}">${opt}</button>`;
    });
    html += `</div>`;
  } else {
    const val = answers[current] ?? "";
    html += `<div class="numeric-wrap">
      <label for="numericAnswer">${q.label}</label>
      <input id="numericAnswer" class="numeric-input" type="number" min="${q.min}" max="${q.max}" value="${val}" inputmode="numeric" />
      ${q.helper ? `<p class="helper">${q.helper}</p>` : ""}
    </div>`;
  }

  questionCard.innerHTML = html;

  if (q.type === "choice") {
    questionCard.querySelectorAll(".answer").forEach(btn => {
      btn.addEventListener("click", () => {
        answers[current] = Number(btn.dataset.index);
        renderQuestion();
      });
    });
  } else {
    $("numericAnswer").addEventListener("input", e => {
      const value = e.target.value;
      answers[current] = value === "" ? null : Number(value);
      updateNav();
    });
  }

  updateNav();
}

function updateNav() {
  backBtn.disabled = current === 0;
  const answered = answers[current] !== null && answers[current] !== "";
  nextBtn.disabled = !answered;
  nextBtn.textContent = current === questions.length - 1 ? "Reveal Result" : "Next";
}

function transitionToQuestion(nextIndex) {
  questionCard.classList.add("transition-out");
  setTimeout(() => {
    current = nextIndex;
    questionCard.classList.remove("transition-out");
    renderQuestion(true);
  }, 180);
}

backBtn.addEventListener("click", () => {
  if (current > 0) transitionToQuestion(current - 1);
});

nextBtn.addEventListener("click", () => {
  const q = questions[current];
  if (q.type === "number") {
    const value = Number(answers[current]);
    if (!Number.isFinite(value) || value < q.min || value > q.max) {
      alert(`Please enter a number from ${q.min} to ${q.max}.`);
      return;
    }
  }

  if (current < questions.length - 1) {
    transitionToQuestion(current + 1);
  } else {
    showResults();
  }
});

function addScore(bucket, key, amount = 1) {
  bucket[key] = (bucket[key] || 0) + amount;
}

function winner(bucket, fallback) {
  const entries = Object.entries(bucket);
  if (!entries.length) return fallback;
  const max = Math.max(...entries.map(([,v]) => v));
  return entries.filter(([,v]) => v === max)[0][0];
}

function rangeValue(value, ranges) {
  for (const [max, result] of ranges) if (value <= max) return result;
  return ranges[ranges.length - 1][1];
}

function calculateResults() {
  const element = {}, love = {}, mask = {}, kink = {};

  // Core Element: Q1, Q2, Q3, Q13
  [["Water","Earth","Air","Fire"][answers[0]],
   ["Air","Water","Earth","Fire"][answers[1]],
   ["Air","Water","Earth","Fire"][answers[2]],
   ["Water","Fire","Air","Earth"][answers[12]]
  ].forEach(v => addScore(element, v));

  // Love Style: Q1, Q2, Q3, Q13, Q14, Q15
  [
    ["Romantic","Independent","Best Friend","Ride or Die"][answers[0]],
    ["Romantic","Slow Burn","Soulmate","Adventure"][answers[1]],
    ["Protective","Ride or Die","Golden Retriever","Independent"][answers[2]],
    ["Protective","Independent","Romantic","Slow Burn"][answers[12]],
    ["Best Friend","Protective","Chaotic","Ride or Die"][answers[13]],
    ["Slow Burn","Soulmate","Adventure","Chaotic"][answers[14]]
  ].forEach(v => addScore(love, v));

  // Mask: Q5, Q7, Q14, Q15
  addScore(mask, ["Air","Fire","Earth","Water"][answers[4]]);
  addScore(mask, ["Fire","Earth","Air","Water","Earth","Fire"][answers[6]]);
  addScore(mask, ["Air","Water","Earth","Fire"][answers[13]]);
  addScore(mask, ["Air","Water","Fire","Earth"][answers[14]]);

  // Sub-bending Kink: Q5, Q6, Q7, Q9, Q10, Q11
  addScore(kink, ["Spiritual Projection","Dragon Fire","Metal","Blood"][answers[4]]);
  addScore(kink, ["Metal","Flight","Lightning","Blood"][answers[5]]);
  addScore(kink, ["Dragon Fire","Lightning","Metal","Blood","Metal","Blue Fire"][answers[6]]);

  addScore(kink, rangeValue(Number(answers[8]), [[0,"Healing"],[2,"Metal"],[5,"Lightning"],[10,"Lava"],[999,"Combustion"]]));
  addScore(kink, rangeValue(Number(answers[9]), [[14,"Combustion"],[17,"Lightning"],[20,"Metal"],[24,"Healing"],[999,"Spiritual Projection"]]));
  addScore(kink, rangeValue(Number(answers[10]), [[0,"Healing"],[2,"Ice"],[5,"Metal"],[10,"Blood"],[999,"Lava"]]));

  const core = winner(element, "Air");
  const loveStyle = winner(love, "Romantic");
  const firstImpression = winner(mask, "Air");
  const subKink = winner(kink, "Spiritual Projection");
  const hiddenValue = Number(answers[7]);
  const quirkValue = Number(answers[15]);
  const hidden = Object.prototype.hasOwnProperty.call(hiddenTraits, hiddenValue)
    ? hiddenTraits[hiddenValue]
    : "Unpredictable";
  const quirk = Object.prototype.hasOwnProperty.call(relationshipQuirks, quirkValue)
    ? relationshipQuirks[quirkValue]
    : relationshipQuirks[18];

  return { core, loveStyle, firstImpression, subKink, hidden, quirk };
}

function slug(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const traitVisuals = {
  kink: {
    "Dragon Fire":"🐉", "Lightning":"⚡", "Blue Fire":"💙", "Metal":"⛓️", "Blood":"🩸",
    "Healing":"✨", "Ice":"❄️", "Lava":"🌋", "Combustion":"💥", "Flight":"🪽", "Spiritual Projection":"👻"
  },
  love: {
    "Romantic":"🌹", "Independent":"🗝️", "Best Friend":"🤝", "Ride or Die":"🗡️",
    "Slow Burn":"🕯️", "Soulmate":"🧵", "Adventure":"🗺️", "Protective":"🛡️",
    "Golden Retriever":"☀️", "Chaotic":"🎲"
  },
  mask: { Fire:"🔥", Water:"🌊", Earth:"🪨", Air:"🌪️" }
};

function visualToken(group, value, label) {
  const icon = traitVisuals[group]?.[value] || (group === "hidden" ? "🔒" : "📜");
  return `<div class="scene-token token-${group} token-${slug(value)}" title="${label}: ${value}">
    <span class="token-icon">${icon}</span><small>${label}</small><strong>${value}</strong>
  </div>`;
}

function showResults() {
  const r = calculateResults();
  quizApp.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  document.body.dataset.resultElement = r.core.toLowerCase();
  $("resultTitle").textContent = `${r.core}bender`;
  $("resultCard").innerHTML = `
    <div class="result-portrait result-${r.core.toLowerCase()}" data-element="${r.core.toLowerCase()}">
      <img class="result-art" src="assets/results/${r.core.toLowerCase()}.svg" alt="Original cinematic ${r.core}bender result art">
      <div class="portrait-aura" aria-hidden="true"></div>
      <div class="trait-orbit">
        ${visualToken("kink", r.subKink, "Kink")}
        ${visualToken("love", r.loveStyle, "Love")}
        ${visualToken("mask", r.firstImpression, "Mask")}
        ${visualToken("hidden", r.hidden, "Hidden")}
        ${visualToken("quirk", r.quirk, "Quirk")}
      </div>
      <div class="result-nameplate"><span>${r.core}bender</span><small>Your exact elemental combination</small></div>
    </div>
    <div class="result-breakdown">
      ${resultRow("🔥 Core Element", `${r.core}bender`)}
      ${resultRow("⚙️ Sub-bending Kink", `${r.subKink} Kink`)}
      ${resultRow("❤️ Love Style", `${r.loveStyle} Love Style`)}
      ${resultRow("🎭 Mask (First Impression)", `${r.firstImpression} Energy`)}
      ${resultRow("🔒 Hidden Trait", r.hidden)}
      ${resultRow("📜 Relationship Quirk", r.quirk)}
    </div>
  `;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resultRow(label, value) {
  return `<div class="result-row"><small>${label}</small><strong>${value}</strong></div>`;
}

function resultText() {
  const r = calculateResults();
  return `🔥 ${r.core}bender
⚙️ ${r.subKink} Kink
❤️ ${r.loveStyle} Love Style
🎭 Mask (First Impression): ${r.firstImpression} Energy
🔒 Hidden Trait: ${r.hidden}
📜 Relationship Quirk: ${r.quirk}

Avatar Kink Quiz — unofficial fan-made quiz`;
}

$("copyBtn").addEventListener("click", async () => {
  await navigator.clipboard.writeText(resultText());
  $("copyBtn").textContent = "Copied!";
  setTimeout(() => $("copyBtn").textContent = "Copy Text", 1400);
});


$("restartBtn").addEventListener("click", () => {
  answers = Array(questions.length).fill(null);
  current = 0;
  resultScreen.classList.add("hidden");
  delete document.body.dataset.resultElement;
  quizApp.classList.remove("hidden");
  renderQuestion();
});


// ----- Original ambient soundtrack generated with Web Audio -----
// This uses synthesized tones, not copyrighted music.
let audioContext = null;
let musicNodes = [];
let musicTimer = null;
let musicOn = false;

function startAmbientMusic() {
  if (musicOn) return;
  audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
  const master = audioContext.createGain();
  master.gain.value = 0.055;
  master.connect(audioContext.destination);
  musicNodes.push(master);

  const scale = [146.83, 174.61, 196.00, 220.00, 261.63];
  let step = 0;

  function playTone() {
    if (!musicOn) return;
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();

    osc.type = step % 3 === 0 ? "triangle" : "sine";
    osc.frequency.value = scale[step % scale.length] / (step % 4 === 0 ? 2 : 1);
    filter.type = "lowpass";
    filter.frequency.value = 900;

    const now = audioContext.currentTime;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.22, now + 0.45);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.6);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(master);
    osc.start(now);
    osc.stop(now + 3.8);

    step++;
  }

  musicOn = true;
  $("musicBtn").classList.add("active");
  $("musicBtn").textContent = "♫";
  playTone();
  musicTimer = setInterval(playTone, 2200);
}

function stopAmbientMusic() {
  musicOn = false;
  $("musicBtn").classList.remove("active");
  $("musicBtn").textContent = "♪";
  if (musicTimer) clearInterval(musicTimer);
  musicTimer = null;
  musicNodes.forEach(node => {
    try { node.disconnect(); } catch {}
  });
  musicNodes = [];
}

$("musicBtn").addEventListener("click", async () => {
  if (musicOn) {
    stopAmbientMusic();
  } else {
    startAmbientMusic();
    if (audioContext?.state === "suspended") await audioContext.resume();
  }
});

// ----- Elemental particles -----
function triggerElementFX(section) {
  const container = $("elementFX");
  if (!container) return;
  const kind = section.includes("Love") ? "water"
    : section.includes("Kinks") ? "fire"
    : section.includes("Mechanist") ? "earth"
    : "air";

  for (let i = 0; i < 12; i++) {
    const p = document.createElement("span");
    p.className = `fx-particle fx-${kind}`;
    p.style.setProperty("--x", `${Math.random() * 100}%`);
    p.style.setProperty("--size", `${7 + Math.random() * 15}px`);
    p.style.setProperty("--duration", `${3.2 + Math.random() * 2.7}s`);
    p.style.setProperty("--drift", `${-70 + Math.random() * 140}px`);
    p.style.setProperty("--rot", `${Math.random() * 180}deg`);
    container.appendChild(p);
    setTimeout(() => p.remove(), 6500);
  }
}

// ----- Shareable result card -----
function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 4) {
  const words = text.split(/\s+/);
  let line = "";
  let lines = [];
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
      if (lines.length === maxLines - 1) break;
    } else {
      line = test;
    }
  }
  if (line && lines.length < maxLines) lines.push(line);
  lines.forEach((l, i) => ctx.fillText(l, x, y + i * lineHeight));
  return y + lines.length * lineHeight;
}

function roundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
  ctx.fill();
}

async function drawResultCard() {
  const canvas = $("shareCanvas");
  const ctx = canvas.getContext("2d");
  const r = calculateResults();

  const gradient = ctx.createLinearGradient(0, 0, 1080, 1350);
  gradient.addColorStop(0, "#261512");
  gradient.addColorStop(.45, "#111722");
  gradient.addColorStop(1, "#172011");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const glow = ctx.createRadialGradient(190, 170, 20, 190, 170, 500);
  glow.addColorStop(0, "rgba(229,104,64,.35)");
  glow.addColorStop(1, "rgba(229,104,64,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.textAlign = "center";
  ctx.fillStyle = "#e2b45c";
  ctx.font = "700 30px Inter, sans-serif";
  ctx.fillText("UNOFFICIAL FAN-MADE QUIZ", 540, 68);

  ctx.fillStyle = "#f6efe5";
  ctx.font = "700 62px Cinzel, serif";
  ctx.fillText("Avatar Kink Quiz", 540, 145);

  const art = new Image();
  art.src = `assets/results/${r.core.toLowerCase()}.svg`;
  try {
    await art.decode();
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(85, 180, 910, 300, 28);
    ctx.clip();
    ctx.drawImage(art, 85, 180, 910, 300);
    ctx.restore();
  } catch {
    ctx.fillStyle = "rgba(255,255,255,.07)";
    roundedRect(ctx, 85, 180, 910, 300, 28);
  }

  const canvasTokens = [
    [traitVisuals.kink[r.subKink] || "⚙️", r.subKink],
    [traitVisuals.love[r.loveStyle] || "❤️", r.loveStyle],
    [traitVisuals.mask[r.firstImpression] || "🎭", `${r.firstImpression} Energy`]
  ];
  ctx.textAlign = "center";
  canvasTokens.forEach(([icon, text], i) => {
    const x = 235 + i * 305;
    ctx.fillStyle = "rgba(12,14,18,.78)";
    roundedRect(ctx, x - 125, 425, 250, 66, 20);
    ctx.fillStyle = "#f6efe5";
    ctx.font = "700 24px Inter, sans-serif";
    ctx.fillText(`${icon} ${text}`, x, 466);
  });

  ctx.fillStyle = "#f6efe5";
  ctx.font = "700 70px Cinzel, serif";
  ctx.fillText(`${r.core}bender`, 540, 565);

  const rows = [
    ["⚙️ SUB-BENDING KINK", `${r.subKink} Kink`],
    ["❤️ LOVE STYLE", `${r.loveStyle} Love Style`],
    ["🎭 MASK", `${r.firstImpression} Energy`],
    ["🔒 HIDDEN TRAIT", r.hidden],
    ["📜 RELATIONSHIP QUIRK", r.quirk]
  ];

  let y = 610;
  ctx.textAlign = "left";

  rows.forEach(([label, value], idx) => {
    const boxH = idx === rows.length - 1 ? 190 : 120;
    ctx.fillStyle = "rgba(255,255,255,.07)";
    roundedRect(ctx, 85, y, 910, boxH, 24);

    ctx.fillStyle = "#e2b45c";
    ctx.font = "700 22px Inter, sans-serif";
    ctx.fillText(label, 125, y + 34);

    ctx.fillStyle = "#f6efe5";
    ctx.font = idx === rows.length - 1 ? "600 30px Inter, sans-serif" : "700 37px Inter, sans-serif";
    wrapCanvasText(ctx, value, 125, y + 80, 820, 39, idx === rows.length - 1 ? 3 : 2);

    y += boxH + 14;
  });

  ctx.textAlign = "center";
  ctx.fillStyle = "#aaa198";
  ctx.font = "500 20px Inter, sans-serif";
  ctx.fillText("Original fan-made artwork • Answers stay in your browser", 540, 1320);

  return canvas;
}

function canvasToBlob(canvas) {
  return new Promise(resolve => canvas.toBlob(resolve, "image/png", 0.95));
}

$("saveCardBtn").addEventListener("click", async () => {
  const canvas = await drawResultCard();
  const blob = await canvasToBlob(canvas);
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "avatar-kink-quiz-result.png";
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});

$("shareCardBtn").addEventListener("click", async () => {
  const canvas = await drawResultCard();
  const blob = await canvasToBlob(canvas);
  const file = new File([blob], "avatar-kink-quiz-result.png", { type: "image/png" });

  if (navigator.canShare?.({ files: [file] })) {
    await navigator.share({
      title: "My Avatar Kink Quiz Result",
      text: "Here’s my elemental profile.",
      files: [file]
    });
  } else if (navigator.share) {
    await navigator.share({
      title: "My Avatar Kink Quiz Result",
      text: resultText()
    });
  } else {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "avatar-kink-quiz-result.png";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
});
