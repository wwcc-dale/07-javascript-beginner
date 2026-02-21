---
bank_name: "Session 23: Advanced UI - Settings, Themes, Leaderboards"
---

1. What does this do? `document.body.dataset.theme = 'dark';` with CSS `[data-theme="dark"] { background: #000; }`
*a) Applies dark theme styles via data attribute selector
b) Does nothing
c) Error thrown
d) Only sets attribute

1. Fix theme toggle: `function toggleTheme() { document.body.classList.toggle('dark'); }`
*a) Add persistence: `function toggleTheme() { document.body.classList.toggle('dark'); localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light'); }`
b) Code is perfect
c) Use dataset instead
d) Cannot toggle

1. What's the result? `const settings = { theme: 'dark', sound: true }; document.getElementById('theme-select').value = settings.theme;`
*a) Sets dropdown value to 'dark'
b) Error thrown
c) Nothing happens
d) Sets to 'light'

1. Complete modal: `function showModal(id) { const modal = document.getElementById(id); modal.style.display = 'block'; modal.addEventListener('click', (e) => { if (____) modal.style.display = 'none'; }); }`
*a) `e.target === modal` (close when clicking backdrop)
b) `e.target.classList.contains('close')`
c) `true`
d) `e.target`

1. Fix leaderboard: `function displayLeaderboard(scores) { const html = scores.map(s => `<li>${s}</li>`).join(''); document.getElementById('leaderboard').innerHTML = html; }`
*a) `scores.map(s => `<li>${s.name}: ${s.score}</li>`)` (access score properties)
b) Code is correct
c) Use textContent
d) Cannot display

1. What does this do? `document.documentElement.style.setProperty('--primary-color', '#ff0000');`
*a) Changes CSS custom property (variable) value dynamically
b) Error thrown
c) Does nothing
d) Only works inline

1. Fix sorting: `const leaderboard = scores.sort((a, b) => a.score - b.score).slice(0, 10);`
*a) `const leaderboard = scores.sort((a, b) => b.score - a.score).slice(0, 10);` (descending order)
b) Code is correct
c) Remove slice
d) Cannot sort

1. Complete: `function saveSettings() { const settings = { theme: document.getElementById('theme').value, sound: ____ }; localStorage.setItem('settings', JSON.stringify(settings)); }`
*a) `document.getElementById('sound-toggle').checked`
b) `document.getElementById('sound').value`
c) `true`
d) `'sound'`

1. What's logged? `const scores = [{name: 'Alice', score: 100}, {name: 'Bob', score: 150}]; scores.sort((a, b) => b.score - a.score); console.log(scores[0].name);`
*a) 'Bob' (highest score)
b) 'Alice'
c) undefined
d) Error thrown

1. Fix theme loading: `function loadTheme() { const theme = localStorage.getItem('theme'); document.body.classList.add(theme); }`
*a) `if (theme) document.body.classList.add(theme);` (check if theme exists)
b) Code is perfect
c) Use dataset instead
d) Cannot load

1. What does this create? `const modal = document.createElement('div'); modal.className = 'modal'; modal.innerHTML = '<div class="modal-content"><span class="close">&times;</span><p>Settings</p></div>'; document.body.appendChild(modal);`
*a) Creates and appends modal dialog structure to body
b) Only creates element
c) Error thrown
d) Nothing happens

1. Fix CSS variables: `document.body.style.setProperty('primaryColor', 'red');`
*a) `document.body.style.setProperty('--primary-color', 'red');` (CSS variables need --)
b) Code is correct
c) Use documentElement
d) Cannot set variables

1. Complete filter: `function filterHistory(type) { const history = JSON.parse(localStorage.getItem('history')) || []; return history.filter(game => ____); }`
*a) `game.result === type` or relevant condition
b) `game`
c) `true`
d) `type`

1. What's the result? `const form = document.getElementById('settings'); form.addEventListener('submit', (e) => { e.preventDefault(); const data = new FormData(form); console.log(data.get('theme')); });`
*a) Logs value of 'theme' input field from form
b) Logs undefined
c) Error thrown
d) Logs form object

1. Fix stat display: `function updateStats(stats) { Object.keys(stats).forEach(key => { document.getElementById(key).textContent = stats[key]; }); }`
*a) Add check: `Object.keys(stats).forEach(key => { const el = document.getElementById(key); if (el) el.textContent = stats[key]; });`
b) Code is perfect
c) Use innerHTML
d) Cannot update

1. What does this do? `document.querySelectorAll('[data-sound]').forEach(el => { el.addEventListener('click', () => playSound(el.dataset.sound)); });`
*a) Adds click listeners to play sounds based on data-sound attribute
b) Only selects elements
c) Error thrown
d) Plays all sounds
