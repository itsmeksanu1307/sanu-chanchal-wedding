(() => {
  const canvas = document.getElementById('scratchCanvas');
  const wrap = document.getElementById('scratchWrap');
  const hint = document.getElementById('scratchHint');
  const countdownReveal = document.getElementById('countdownReveal');
  const mainInvite = document.getElementById('mainInvite');
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  let drawing = false, revealed = false, lastCheck = 0;
  function paintCover() {
    const rect = wrap.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.round(rect.width * ratio); canvas.height = Math.round(rect.height * ratio);
    canvas.style.width = rect.width + 'px'; canvas.style.height = rect.height + 'px';
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    const grad = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    grad.addColorStop(0, '#8c203b'); grad.addColorStop(.48, '#681a2c'); grad.addColorStop(1, '#4c1020');
    ctx.globalCompositeOperation = 'source-over'; ctx.fillStyle = grad; ctx.fillRect(0, 0, rect.width, rect.height);
    ctx.strokeStyle = '#d8b66d'; ctx.lineWidth = 1; ctx.strokeRect(7, 7, rect.width - 14, rect.height - 14);
    ctx.fillStyle = '#f7e8c7'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = '24px Georgia'; ctx.fillText('✧', rect.width / 2, rect.height / 2 - 19);
    ctx.font = '14px Georgia'; ctx.fillText('A little surprise awaits', rect.width / 2, rect.height / 2 + 5);
    ctx.font = '10px Arial'; ctx.fillText('SCRATCH GENTLY TO REVEAL', rect.width / 2, rect.height / 2 + 26);
  }
  function point(e) { const r = canvas.getBoundingClientRect(); return {x:e.clientX-r.left,y:e.clientY-r.top}; }
  function scratch(e) { if (!drawing || revealed) return; const p = point(e); ctx.globalCompositeOperation = 'destination-out'; ctx.beginPath(); ctx.arc(p.x,p.y,19,0,Math.PI*2); ctx.fill(); const now=Date.now(); if(now-lastCheck>350){lastCheck=now;checkProgress();} }
  function checkProgress(){try{const data=ctx.getImageData(0,0,canvas.width,canvas.height).data;let clear=0;for(let i=3;i<data.length;i+=4)if(data[i]<80)clear++;if(clear/(data.length/4)>.34)reveal();}catch(_){}}
  function reveal(){if(revealed)return;revealed=true;ctx.clearRect(0,0,canvas.width,canvas.height);canvas.style.pointerEvents='none';hint.classList.add('hidden');countdownReveal.classList.remove('hidden');}
  canvas.addEventListener('pointerdown',e=>{drawing=true;canvas.setPointerCapture?.(e.pointerId);scratch(e)});
  canvas.addEventListener('pointermove',scratch); ['pointerup','pointercancel','pointerleave'].forEach(n=>canvas.addEventListener(n,()=>{drawing=false;checkProgress()}));
  window.addEventListener('resize',()=>{if(!revealed)paintCover()}); paintCover();
  const target = new Date('2026-12-11T00:00:00+05:30').getTime();
  function updateTimer(){let diff=Math.max(0,target-Date.now());const vals={days:Math.floor(diff/86400000),hours:Math.floor(diff%86400000/3600000),minutes:Math.floor(diff%3600000/60000),seconds:Math.floor(diff%60000/1000)};Object.entries(vals).forEach(([id,v])=>{const el=document.getElementById(id);if(el)el.textContent=id==='days'?String(v).padStart(3,'0'):String(v).padStart(2,'0')})}
  updateTimer();setInterval(updateTimer,1000);
  document.getElementById('enterInvite').addEventListener('click',()=>{mainInvite.classList.remove('hidden');document.getElementById('opening').classList.add('compact-opened');mainInvite.scrollIntoView({behavior:'smooth',block:'start'})});
})();
