import { RESTAURANT as R, MENU, ITEMS, narration } from './menu-data.js';

const $ = s => document.querySelector(s);
const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const GRAD = [['#7a3b12', '#d9a441'], ['#8a1c1c', '#e0663c'], ['#2f4b2a', '#c9a43a'], ['#5a2347', '#e48aa8'], ['#0f4c5c', '#7fc8c0']];
const EM = [[/biryani/i, '🍛'], [/naan|roti|paratha|kulcha/i, '🫓'], [/fish/i, '🐟'], [/mushroom/i, '🍄'], [/noodle|chopsuey/i, '🍜'], [/rice|khuska|pulao/i, '🍚'], [/pizza|margherita/i, '🍕'], [/pasta|alfredo|arrabbiata|lasagna|peri peri$/i, '🍝'], [/wings|lollipop|drums|popcorn|nuggets|chicken|murgh|reshmi|thread/i, '🍗'], [/mutton/i, '🍖'], [/brownie/i, '🍫'], [/falooda|gadbad|ice cream/i, '🍨'], [/mojito/i, '🍹'], [/milkshake/i, '🥤'], [/juice|soda|drinks/i, '🧃'], [/water/i, '💧'], [/sizzler/i, '🍳'], [/paneer|dal|kaju|veg|corn|aloo|papad/i, '🥘']];
const emoji = it => (EM.find(e => e[0].test(it.n + ' ')) || [0, '🍽️'])[1];
const fmt = p => p == null || p === '' ? '' : typeof p === 'number' ? '₹' + p : p;
const dot = v => v === 1 ? '<i class="dot v"></i>' : v === 0 ? '<i class="dot n"></i>' : '';
const placeholder = it => `<div class="ph" style="--a:${GRAD[it.ci][0]};--b:${GRAD[it.ci][1]}">${emoji(it)}</div>`;
const img = (it, eager) => `<img src="${esc(it.img)}" alt="${esc(it.n.split(' — ')[0])}" ${eager ? '' : 'loading="lazy"'} decoding="async">`;

/* ---------- static content ---------- */
$('#hName').textContent = R.name;
$('#hTag').textContent = R.tagline;
$('#hIntro').textContent = R.intro;
$('#hBadges').innerHTML = R.badges.map(b => `<span>${esc(b)}</span>`).join('');
const V = R.visit;
const istHour = () => { const p = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' }).formatToParts(new Date()); return +p.find(x => x.type === 'hour').value + +p.find(x => x.type === 'minute').value / 60; };
(() => {
  const h = istHour(), w = V.windows;
  $('#hHello').textContent = `${h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening'}, and welcome`;
  const now = w.find(x => h >= x.a && h < x.b), next = w.find(x => h < x.a);
  $('#hStatus').textContent = now ? `We’re serving ${now.n.toLowerCase()} right now, until ${now.until}`
    : next ? `${next.n} is served from ${next.at}` : `We’ll be back tomorrow at ${w[0].at}`;
})();
$('#vTitle').textContent = V.title;
$('#vText').textContent = V.text;
$('#vAddr').innerHTML = `<b>${esc(V.street)}</b><br>${esc(V.city)}<br><a href="tel:+${V.phoneRaw}">${esc(V.phone)}</a>`;
$('#vHours').innerHTML = V.hours.map(h => `<dt>${esc(h[0])}</dt><dd>${esc(h[1])}</dd>`).join('');
$('#vFac').innerHTML = V.facilities.map(f => `<li>${esc(f)}</li>`).join('');
$('#vCall').href = `tel:+${V.phoneRaw}`;
$('#vWa').href = `https://wa.me/${V.phoneRaw}`;
const mq = encodeURIComponent(V.mapQuery);
$('#vMap').href = `https://www.google.com/maps/search/?api=1&query=${mq}`;
$('#vFrame').src = `https://www.google.com/maps?q=${mq}&output=embed`;
$('#foot').innerHTML = `Thank you for dining with us.<br>${esc(R.name)}, ${esc(V.street)}, ${esc(V.city)}`;
$('#callTop').href = `tel:+${V.phoneRaw}`;
$('#callTop').textContent = 'Call to reserve';

/* ---------- menu render ---------- */
const state = { q: '', diet: 'all' };
let view = [];

const match = it => {
  if (state.diet !== 'all' && it.v !== +state.diet) return false;
  const q = state.q.trim().toLowerCase();
  return !q || (it.n + ' ' + it.d + ' ' + it.sec).toLowerCase().includes(q);
};

function render() {
  view = ITEMS.filter(match);
  const ids = new Set(view.map(i => i.id));
  let h = '', cats = '';
  MENU.forEach((c, ci) => {
    let body = '';
    c.sections.forEach(s => {
      const list = ITEMS.filter(i => i.ci === ci && i.sec === s.t && ids.has(i.id));
      if (!list.length) return;
      body += `<div class="sec"><h3>${dot(s.v)}${esc(s.t)}</h3><div class="grid">` +
        list.map(it => `<button class="card" data-i="${view.indexOf(it)}"><div class="im">${img(it)}${it.sig ? '<span class="sg">✦ Signature</span>' : ''}</div><div class="cb"><h4>${dot(it.v)}${esc(it.n)}</h4><p>${esc(it.d)}</p>${fmt(it.price) ? `<div class="pr">${esc(fmt(it.price))}</div>` : ''}<span class="lis">Hear about it</span></div></button>`).join('') + '</div></div>';
    });
    if (!body) return;
    h += `<section class="cat" id="c${ci}" data-c="${ci}"><h2>${esc(c.name)}</h2><p>${esc(c.intro)}</p>${body}</section>`;
    cats += `<button data-c="${ci}">${esc(c.name)}</button>`;
  });
  $('#menu').innerHTML = h;
  $('#cats').innerHTML = cats;
  $('#empty').hidden = view.length > 0;
  observe();
}

/* images that are missing fall back to a styled tile */
document.addEventListener('error', e => {
  const t = e.target;
  if (t.tagName !== 'IMG') return;
  const box = t.parentElement;
  const sc = box.closest('.sc'), it = box.id === 'pim' ? cur : sc ? ITEMS.find(x => x.id === sc.dataset.id) : view[box.closest('.card')?.dataset.i];
  if (it) t.outerHTML = placeholder(it); else t.remove();
}, true);

/* category nav + scroll spy */
let io;
function observe() {
  io && io.disconnect();
  io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) document.querySelectorAll('#cats button').forEach(b => b.classList.toggle('on', b.dataset.c === e.target.dataset.c));
  }), { rootMargin: '-35% 0px -60% 0px' });
  document.querySelectorAll('.cat').forEach(s => io.observe(s));
}
$('#cats').onclick = e => {
  const b = e.target.closest('button');
  if (b) document.getElementById('c' + b.dataset.c).scrollIntoView();
};
$('#q').oninput = e => { state.q = e.target.value; render(); };
$('#diet').onclick = e => {
  const b = e.target.closest('button'); if (!b) return;
  state.diet = b.dataset.d;
  document.querySelectorAll('#diet button').forEach(x => x.classList.toggle('on', x === b));
  
/* signatures strip */
function openItem(id) {
  if (!view.some(i => i.id === id)) { state.q = ''; state.diet = 'all'; $('#q').value = ''; document.querySelectorAll('#diet button').forEach(x => x.classList.toggle('on', x.dataset.d === 'all')); render(); }
  openPop(view.findIndex(i => i.id === id)); $('#px').focus();
}
$('#sigs').innerHTML = ITEMS.filter(i => i.sig).map(it => `<button class="sc" data-id="${it.id}"><div class="im">${img(it)}</div><h4>${esc(it.n)}</h4><span>${esc(it.sec.replace(': ', ' · '))}${fmt(it.price) ? ' · ' + esc(fmt(it.price)) : ''}</span></button>`).join('');
$('#sigs').onclick = e => { const b = e.target.closest('.sc'); if (b) openItem(b.dataset.id); };

render();
};
addEventListener('scroll', () => $('#top').classList.toggle('solid', scrollY > 40), { passive: true });

/* ---------- popup + voice ---------- */
const ov = $('#ov'), snd = $('#snd');
let cur = null, pos = 0, audio = null, usedTTS = false;

function resetAudio() {
  if (audio) { audio.onended = audio.onerror = audio.ontimeupdate = audio.onplaying = null; audio.pause(); audio = null; }
  speechSynthesis?.cancel();
  snd.classList.remove('playing');
  $('#sic').textContent = '▶'; $('#stx').textContent = 'Hear about this dish'; $('#bar').style.width = '0';
}
const playingUI = () => { snd.classList.add('playing'); $('#sic').textContent = '■'; $('#stx').textContent = 'Listening… tap to stop'; };

function speakFallback(it) {
  if (!('speechSynthesis' in window)) { resetAudio(); return; }
  const u = new SpeechSynthesisUtterance(narration(it));
  const vs = speechSynthesis.getVoices();
  const v = vs.find(x => /en[-_]IN/i.test(x.lang)) || vs.find(x => /hi[-_]IN/i.test(x.lang)) || vs.find(x => /^en/i.test(x.lang));
  if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'en-IN';
  u.rate = .92;
  u.onend = u.onerror = resetAudio;
  playingUI();
  speechSynthesis.speak(u);
}

function toggleAudio() {
  if (snd.classList.contains('playing')) return resetAudio();
  const it = cur; let fell = false;
  const fb = () => { if (fell) return; fell = true; if (audio) { audio.onerror = null; audio = null; } speakFallback(it); };
  audio = new Audio(`audio/${it.id}.mp3`);
  audio.onplaying = playingUI;
  audio.ontimeupdate = () => { if (audio && audio.duration) $('#bar').style.width = (audio.currentTime / audio.duration * 100) + '%'; };
  audio.onended = resetAudio;
  audio.onerror = fb;
  audio.play().catch(fb);
}

function openPop(i) {
  resetAudio();
  pos = i; cur = view[i];
  $('#pim').innerHTML = img(cur, true) + (cur.sig ? '<span class="sg">✦ Signature</span>' : '');
  $('#pk').textContent = `${cur.cat} · ${cur.sec}`;
  $('#pName').innerHTML = dot(cur.v) + ' ' + esc(cur.n);
  $('#pd').textContent = cur.d;
  $('#pp').textContent = fmt(cur.price);
  $('#prev').style.visibility = i > 0 ? '' : 'hidden';
  $('#next').style.visibility = i < view.length - 1 ? '' : 'hidden';
  ov.hidden = false;
  document.body.style.overflow = 'hidden';
}
function closePop() { resetAudio(); ov.hidden = true; document.body.style.overflow = ''; }

$('#menu').onclick = e => { const c = e.target.closest('.card'); if (c) { openPop(+c.dataset.i); $('#px').focus(); } };
$('#px').onclick = closePop;
ov.onclick = e => { if (e.target === ov) closePop(); };
snd.onclick = toggleAudio;
$('#prev').onclick = () => openPop(pos - 1);
$('#next').onclick = () => openPop(pos + 1);
addEventListener('keydown', e => {
  if (ov.hidden) return;
  if (e.key === 'Escape') closePop();
  if (e.key === 'ArrowRight' && pos < view.length - 1) openPop(pos + 1);
  if (e.key === 'ArrowLeft' && pos > 0) openPop(pos - 1);
});
speechSynthesis?.getVoices();

render();
