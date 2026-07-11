(function () {
  'use strict';
  var wrap = document.getElementById('fpWrap'), canvas = document.getElementById('fpCanvas'), ctx = canvas.getContext('2d');
  var fireEl = document.getElementById('fpFire'), fireStage = document.getElementById('fpFireStage');
  var hud = document.getElementById('fpHud'), soundBtn = document.getElementById('fpSoundBtn'), soundIcon = document.getElementById('fpSoundIcon');
  var volSlider = document.getElementById('fpVol'), settingsBtn = document.getElementById('fpSettingsBtn'), settingsPanel = document.getElementById('fpSettings');
  var closeSettings = document.getElementById('fpCloseSettings'), fsBtn = document.getElementById('fpFsBtn'), styleSelect = document.getElementById('fpStyle');
  var flameSizeSlider = document.getElementById('fpFlameSize'), crackleSlider = document.getElementById('fpCrackle');
  var rainSlider = document.getElementById('fpRain'), timerSelect = document.getElementById('fpTimer');
  var soundToggle = document.getElementById('fpSoundToggle'), volSettings = document.getElementById('fpVolSettings');
  var fsGearBtn = document.getElementById('fpFsGearBtn');

  var PALETTES = {
    classic: { core: '#fffdd0', c1: '#ff9f00', c2: '#ff3c00', glow: '#ff5a0f', room: 'rgba(255,90,15,0.16)', brick: '#482012', lit: '#ff6c00' },
    blue:    { core: '#e0f2fe', c1: '#3b82f6', c2: '#1d4ed8', glow: '#2563eb', room: 'rgba(30,100,255,0.14)', brick: '#101b3a', lit: '#3b82f6' },
    green:   { core: '#f0fdf4', c1: '#22c55e', c2: '#15803d', glow: '#16a34a', room: 'rgba(20,200,60,0.12)', brick: '#0d2414', lit: '#22c55e' },
    purple:  { core: '#faf5ff', c1: '#a855f7', c2: '#7e22ce', glow: '#9333ea', room: 'rgba(160,30,255,0.14)', brick: '#240a3a', lit: '#a855f7' }
  };

  var S = { volume: 0.70, crackle: 0.70, rain: 0.00, muted: true };
  var W = 1, H = 1, DPR = 1, TIME = 0;
  var sizeInitialized = false;
  var particles = [], embers = [], smoke = [], COALS = [];

  function applyPalette(name) {
    var p = PALETTES[name] || PALETTES.classic;
    if (fireEl) {
      fireEl.style.setProperty('--fp-core', p.core);
      fireEl.style.setProperty('--fp-c1', p.c1);
      fireEl.style.setProperty('--fp-c2', p.c2);
      fireEl.style.setProperty('--fp-glow', p.glow);
    }
    var roomGlow = document.getElementById('fpRoomGlow');
    if (roomGlow) {
      roomGlow.style.background = 'radial-gradient(ellipse 70% 45% at 50% 85%,' + p.room + ' 0%, transparent 70%)';
    }
  }
  applyPalette('classic');

  function resizeCanvas() {
    if (!wrap || !canvas) return;
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    var rect = wrap.getBoundingClientRect();
    var newW = rect.width;
    var newH = rect.height;
    if (newW > 10 && newH > 10) {
      W = newW;
      H = newH;
      canvas.width = Math.round(W * DPR); canvas.height = Math.round(H * DPR);
      ctx.scale(DPR, DPR);
      initCoals();
      sizeInitialized = true;
    }
  }

  function initCoals() {
    COALS = [];
    var archW = W * 0.52, archBotY = H * 0.81;
    for (var i = 0; i < 80; i++) {
      var angle = Math.random() * Math.PI;
      var r = Math.random() * (archW * 0.32);
      COALS.push({
        x: W * 0.5 + Math.cos(angle) * r,
        y: archBotY - 4 - Math.sin(angle) * r * 0.28,
        size: 3 + Math.random() * 5,
        cFactor: 0.3 + Math.random() * 0.7
      });
    }
  }

  window.addEventListener('resize', resizeCanvas);
  
  if (typeof ResizeObserver !== 'undefined' && wrap) {
    var ro = new ResizeObserver(function () {
      resizeCanvas();
    });
    ro.observe(wrap);
  }
  
  resizeCanvas();
  setTimeout(resizeCanvas, 100);

  function hexToRgba(hex, alpha) {
    if (hex.indexOf('rgba') === 0) return hex;
    var r = parseInt(hex.slice(1,3), 16), g = parseInt(hex.slice(3,5), 16), b = parseInt(hex.slice(5,7), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
  }

  function blendColors(c1, c2, ratio) {
    ratio = Math.max(0, Math.min(1, ratio));
    var r1 = parseInt(c1.slice(1,3), 16), g1 = parseInt(c1.slice(3,5), 16), b1 = parseInt(c1.slice(5,7), 16);
    var r2 = parseInt(c2.slice(1,3), 16), g2 = parseInt(c2.slice(3,5), 16), b2 = parseInt(c2.slice(5,7), 16);
    var r = Math.round(r1 + (r2 - r1) * ratio), g = Math.round(g1 + (g2 - g1) * ratio), b = Math.round(b1 + (b2 - b1) * ratio);
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  function drawTexturedBrick(pts, baseColor, litColor, flameCx, flameCy, fIntensity) {
    var cx = (pts[0].x+pts[1].x+pts[2].x+pts[3].x)/4, cy = (pts[0].y+pts[1].y+pts[2].y+pts[3].y)/4;
    var dist = Math.sqrt((cx-flameCx)*(cx-flameCx)+(cy-flameCy)*(cy-flameCy));
    var light = 1.2 / (1.0 + dist * dist * 0.00005);
    light = Math.min(1.0, light) * fIntensity;
    var vFactor = Math.max(0, (cy - (H * 0.28 - 20)) / (H * 0.58));
    var chimneyLight = light * Math.pow(vFactor, 2.2) * 1.5;
    var color = blendColors(baseColor, litColor, chimneyLight * 0.65);

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y); ctx.lineTo(pts[1].x, pts[1].y);
    ctx.lineTo(pts[2].x, pts[2].y); ctx.lineTo(pts[3].x, pts[3].y);
    ctx.closePath(); ctx.fill();

    ctx.strokeStyle = 'rgba(5, 3, 2, 0.45)';
    ctx.lineWidth = 1; ctx.stroke();

    if (chimneyLight > 0.04) {
      ctx.strokeStyle = hexToRgba(litColor, chimneyLight * 0.6);
      ctx.lineWidth = 1.5; ctx.beginPath();
      ctx.moveTo(pts[3].x, pts[3].y); ctx.lineTo(pts[2].x, pts[2].y);
      if (cx < flameCx - 10) { ctx.lineTo(pts[1].x, pts[1].y); }
      else if (cx > flameCx + 10) { ctx.moveTo(pts[0].x, pts[0].y); ctx.lineTo(pts[3].x, pts[3].y); ctx.lineTo(pts[2].x, pts[2].y); }
      ctx.stroke();
    }
  }

  function drawLog3D(x1, y1, x2, y2, radius, palette, capAtStart) {
    var dx = x2 - x1, dy = y2 - y1, L = Math.sqrt(dx*dx + dy*dy), angle = Math.atan2(dy, dx);
    ctx.save(); ctx.translate(x1, y1); ctx.rotate(angle);
    var bodyGr = ctx.createLinearGradient(0, -radius, 0, radius);
    bodyGr.addColorStop(0, '#552e1d'); bodyGr.addColorStop(0.3, '#32180e'); bodyGr.addColorStop(1, '#0e0503');
    ctx.fillStyle = bodyGr; ctx.fillRect(0, -radius, L, radius*2);

    ctx.strokeStyle = 'rgba(10,5,2,0.38)'; ctx.lineWidth = 1;
    for (var ty = -radius * 0.7; ty <= radius * 0.7; ty += radius * 0.35) {
      if (Math.abs(ty) < 2) continue;
      ctx.beginPath(); ctx.moveTo(0, ty);
      ctx.bezierCurveTo(L*0.25, ty+Math.sin(ty)*2, L*0.75, ty-Math.sin(ty)*2, L, ty);
      ctx.stroke();
    }

    var burntGr = ctx.createLinearGradient(L * 0.25, 0, L, 0);
    burntGr.addColorStop(0, 'rgba(0,0,0,0)'); burntGr.addColorStop(0.6, 'rgba(10,6,6,0.85)'); burntGr.addColorStop(1, '#000000');
    ctx.fillStyle = burntGr; ctx.fillRect(0, -radius, L, radius*2);

    ctx.globalCompositeOperation = 'screen';
    ctx.strokeStyle = hexToRgba(palette.lit, 0.8 * (0.8 + Math.sin(TIME*0.1)*0.2));
    ctx.lineWidth = 1.5;
    for (var j = 0; j < 2; j++) {
      var cyy = -radius*0.4 + Math.random()*radius*0.8;
      ctx.beginPath(); ctx.moveTo(L*0.5, cyy);
      ctx.lineTo(L*0.75, cyy+(Math.random()-0.5)*4); ctx.lineTo(L*0.95, cyy+(Math.random()-0.5)*4);
      ctx.stroke();
    }
    ctx.globalCompositeOperation = 'source-over';

    if (capAtStart) {
      ctx.fillStyle = '#b57c50'; ctx.beginPath(); ctx.ellipse(0, 0, radius*0.35, radius, 0, 0, Math.PI*2); ctx.fill();
      ctx.strokeStyle = '#522812'; ctx.lineWidth = 1;
      for (var rFactor = 0.35; rFactor < 1.0; rFactor += 0.3) {
        ctx.beginPath(); ctx.ellipse(0, 0, radius*0.35*rFactor, radius*rFactor, 0, 0, Math.PI*2); ctx.stroke();
      }
      ctx.strokeStyle = '#1c0e08'; ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(0, 0, radius*0.35, radius, 0, 0, Math.PI*2); ctx.stroke();
    }
    ctx.restore();
  }

  function getFrontCoord(ratio, isLeft, archCx, archW, archTop, archBotY, yBase) {
    if (ratio < 0.5) {
      var t = ratio / 0.5, mt = 1 - t;
      var startX = isLeft ? (archCx - archW*0.5) : (archCx + archW*0.5);
      var endX = archCx;
      var cpX = startX;
      var cpY = archTop;
      var x = mt*mt*startX + 2*mt*t*cpX + t*t*endX;
      var y = mt*mt*yBase + 2*mt*t*cpY + t*t*archTop;
      return { x: x, y: y };
    } else {
      var t = (ratio - 0.5) / 0.5;
      return { x: isLeft ? (archCx - archW*0.5) : (archCx + archW*0.5), y: yBase + t*(archBotY - yBase) };
    }
  }

  function getArchPoint(t, isLeft, archCx, archW, archTop, yBase) {
    var mt = 1 - t;
    var startX = isLeft ? (archCx - archW * 0.5) : (archCx + archW * 0.5);
    var endX = archCx;
    var x = mt*mt*startX + 2*mt*t*startX + t*t*endX;
    var y = mt*mt*yBase + 2*mt*t*archTop + t*t*archTop;
    return { x: x, y: y };
  }

  function drawScene() {
    try {
    if (!canvas || !ctx) { requestAnimationFrame(drawScene); return; }
    if (!sizeInitialized) {
      requestAnimationFrame(drawScene);
      return;
    }
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0); ctx.clearRect(0, 0, W, H);
    var pName = styleSelect ? styleSelect.value : 'classic';
    var pal = PALETTES[pName] || PALETTES.classic;

    var glowFlicker = 0.85 + Math.sin(TIME * 0.12) * 0.08 + Math.cos(TIME * 0.07) * 0.05;

    // 1. Chimney Outer wall bricks
    var bH = 18, bW = 44;
    var flameCx = W * 0.5, flameCy = H * 0.81;
    for (var r = 0; r < H / bH + 1; r++) {
      var oy = r * bH, offset = (r % 2 === 0) ? 0 : bW * 0.5;
      for (var c = -1; c < W / bW + 2; c++) {
        var ox = c * bW + offset;
        var cx = ox + bW*0.5, cy = oy + bH*0.5;
        var dist = Math.sqrt((cx-flameCx)*(cx-flameCx)+(cy-flameCy)*(cy-flameCy));
        var light = 0.35 / (1.0 + dist * dist * 0.00007) * glowFlicker;
        var brickColor = blendColors(pal.brick, pal.lit, light * 0.6);
        ctx.fillStyle = brickColor; ctx.fillRect(ox, oy, bW - 1, bH - 1);
        ctx.strokeStyle = 'rgba(5, 3, 2, 0.45)'; ctx.lineWidth = 1; ctx.strokeRect(ox, oy, bW - 1, bH - 1);
      }
    }

    // 2. Fireplace dimensions
    var archCx = W * 0.5, archTop = H * 0.28, archW = W * 0.52, archBotY = H * 0.81;
    var yBase = archTop + (archBotY - archTop) * 0.42;

    var backW = archW * 0.72, backLeft = archCx - backW * 0.5, backRight = archCx + backW * 0.5;
    var backTop = archTop + 32, backBotY = archBotY - 14;

    function defineArchPath(c) {
      c.beginPath(); c.moveTo(archCx - archW*0.5, archBotY); c.lineTo(archCx - archW*0.5, yBase);
      c.quadraticCurveTo(archCx - archW*0.5, archTop, archCx, archTop);
      c.quadraticCurveTo(archCx + archW*0.5, archTop, archCx + archW*0.5, yBase);
      c.lineTo(archCx + archW*0.5, archBotY); c.closePath();
    }

    // 3. Recessed interior
    ctx.save(); defineArchPath(ctx); ctx.clip();
    ctx.fillStyle = '#080403'; ctx.fillRect(0, 0, W, H);

    // Inner perspective walls
    var N_rows = 10;
    for (var row = 0; row < N_rows; row++) {
      var r1 = row / N_rows, r2 = (row + 1) / N_rows;
      var PL1 = getFrontCoord(r1, true, archCx, archW, archTop, archBotY, yBase);
      var PL2 = getFrontCoord(r2, true, archCx, archW, archTop, archBotY, yBase);
      var PR1 = getFrontCoord(r1, false, archCx, archW, archTop, archBotY, yBase);
      var PR2 = getFrontCoord(r2, false, archCx, archW, archTop, archBotY, yBase);
      var BL1 = { x: backLeft, y: backTop + r1 * (backBotY - backTop) };
      var BL2 = { x: backLeft, y: backTop + r2 * (backBotY - backTop) };
      var BR1 = { x: backRight, y: backTop + r1 * (backBotY - backTop) };
      var BR2 = { x: backRight, y: backTop + r2 * (backBotY - backTop) };

      // Back bricks
      var colCount = 6, offset = (row % 2 === 0) ? 0 : 0.5 / colCount;
      for (var col = -1; col < colCount + 1; col++) {
        var t1 = (col + offset) / colCount, t2 = (col + 1 + offset) / colCount;
        t1 = Math.max(0, Math.min(1, t1)); t2 = Math.max(0, Math.min(1, t2));
        if (t1 >= t2) continue;
        var p1 = { x: BL1.x + t1*(BR1.x-BL1.x), y: BL1.y }, p2 = { x: BL1.x + t2*(BR1.x-BL1.x), y: BR1.y };
        var p3 = { x: BL2.x + t2*(BR2.x-BL2.x), y: BR2.y }, p4 = { x: BL2.x + t1*(BR2.x-BL2.x), y: BL2.y };
        drawTexturedBrick([p1, p2, p3, p4], pal.brick, pal.lit, flameCx, flameCy, glowFlicker);
      }

      // Left inner wall bricks
      var sCount = 3, sOffset = (row % 2 === 0) ? 0 : 0.5 / sCount;
      for (var colS = -1; colS < sCount + 1; colS++) {
        var t1 = (colS + sOffset)/sCount, t2 = (colS + 1 + sOffset)/sCount;
        t1 = Math.max(0, Math.min(1, t1)); t2 = Math.max(0, Math.min(1, t2));
        if (t1 >= t2) continue;
        var p1 = { x: PL1.x + t1*(BL1.x-PL1.x), y: PL1.y + t1*(BL1.y-PL1.y) };
        var p2 = { x: PL1.x + t2*(BL1.x-PL1.x), y: PL1.y + t2*(BL1.y-PL1.y) };
        var p3 = { x: PL2.x + t2*(BL2.x-PL2.x), y: PL2.y + t2*(BL2.y-PL2.y) };
        var p4 = { x: PL2.x + t1*(BL2.x-PL2.x), y: PL2.y + t1*(BL2.y-PL2.y) };
        drawTexturedBrick([p1, p2, p3, p4], pal.brick, pal.lit, flameCx, flameCy, glowFlicker);
      }

      // Right inner wall bricks
      for (var colS = -1; colS < sCount + 1; colS++) {
        var t1 = (colS + sOffset)/sCount, t2 = (colS + 1 + sOffset)/sCount;
        t1 = Math.max(0, Math.min(1, t1)); t2 = Math.max(0, Math.min(1, t2));
        if (t1 >= t2) continue;
        var p1 = { x: BR1.x + t1*(PR1.x-BR1.x), y: BR1.y + t1*(PR1.y-BR1.y) };
        var p2 = { x: BR1.x + t2*(PR1.x-BR1.x), y: BR1.y + t2*(PR1.y-BR1.y) };
        var p3 = { x: BR2.x + t2*(PR2.x-BR2.x), y: BR2.y + t2*(PR2.y-BR2.y) };
        var p4 = { x: BR2.x + t1*(PR2.x-BR2.x), y: BR2.y + t1*(PR2.y-BR2.y) };
        drawTexturedBrick([p1, p2, p3, p4], pal.brick, pal.lit, flameCx, flameCy, glowFlicker);
      }
    }

    // Floor of inner fireplace
    ctx.fillStyle = '#0f0c0b';
    ctx.beginPath(); ctx.moveTo(archCx-archW*0.5, archBotY); ctx.lineTo(backLeft, backBotY);
    ctx.lineTo(backRight, backBotY); ctx.lineTo(archCx+archW*0.5, archBotY); ctx.closePath(); ctx.fill();

    // Coal bed glow
    var coalBedGlow = ctx.createRadialGradient(archCx, archBotY - 3, 2, archCx, archBotY - 3, archW*0.35);
    coalBedGlow.addColorStop(0, hexToRgba(pal.glow, 0.9 * glowFlicker));
    coalBedGlow.addColorStop(0.5, hexToRgba(pal.glow, 0.4 * glowFlicker));
    coalBedGlow.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = coalBedGlow; ctx.fillRect(archCx-archW*0.5, backBotY-4, archW, archBotY-backBotY+8);

    // Coals rendering
    for (var j = 0; j < COALS.length; j++) {
      var c = COALS[j];
      ctx.fillStyle = mixCoalColor('#0d0b0a', pal.glow, c.cFactor * glowFlicker);
      ctx.beginPath(); ctx.arc(c.x, c.y, c.size, 0, Math.PI*2); ctx.fill();
    }

    function mixCoalColor(base, glow, factor) {
      if (factor < 0.15) return base;
      return blendColors(base, glow, factor * 0.7);
    }

    // Logs stacks
    var logW = archW * 0.46;
    // Back log (bottom horizontal)
    drawLog3D(archCx - logW*0.48, archBotY - 14, archCx + logW*0.48, archBotY - 14, 12, pal, false);

    // Back Flame layer
    updateAndDrawFlames(true, pal);

    // Front diagonal logs
    // Left log (cap at outer end)
    drawLog3D(archCx - logW*0.42, archBotY - 3, archCx + logW*0.14, archBotY - 32, 17, pal, true);
    // Right log (cap at outer end, crosses front)
    drawLog3D(archCx + logW*0.38, archBotY - 5, archCx - logW*0.18, archBotY - 27, 15, pal, true);

    // Foreground Flame layer
    updateAndDrawFlames(false, pal);

    // Particles/embers inside firebox
    updateAndDrawEmbers(pal);

    ctx.restore(); // end of clipping

    // 4. Stone voussoirs arch trim
    var stoneW = 18;
    var numFlatStones = Math.ceil((archBotY - yBase) / 16);
    ctx.fillStyle = '#201815'; ctx.strokeStyle = 'rgba(5, 3, 2, 0.75)'; ctx.lineWidth = 1;
    for (var i = 0; i < numFlatStones; i++) {
      var dy1 = archBotY - i * 16, dy2 = Math.max(yBase, archBotY - (i + 1) * 16);
      // Left border voussoir
      ctx.fillRect(archCx - archW*0.5 - stoneW, dy2, stoneW, dy1-dy2); ctx.strokeRect(archCx - archW*0.5 - stoneW, dy2, stoneW, dy1-dy2);
      ctx.fillStyle = hexToRgba(pal.lit, 0.42 * glowFlicker * (dy2 / archBotY));
      ctx.fillRect(archCx - archW*0.5 - 2, dy2, 2, dy1-dy2); ctx.fillStyle = '#201815';
      // Right border voussoir
      ctx.fillRect(archCx + archW*0.5, dy2, stoneW, dy1-dy2); ctx.strokeRect(archCx + archW*0.5, dy2, stoneW, dy1-dy2);
      ctx.fillStyle = hexToRgba(pal.lit, 0.42 * glowFlicker * (dy2 / archBotY));
      ctx.fillRect(archCx + archW*0.5, dy2, 2, dy1-dy2); ctx.fillStyle = '#201815';
    }

    var curveStones = 7;
    for (var i = 0; i < curveStones; i++) {
      var t1 = i / curveStones, t2 = (i+1) / curveStones;
      // Left curve stones
      var Pi1 = getArchPoint(t1, true, archCx, archW, archTop, yBase), Pi2 = getArchPoint(t2, true, archCx, archW, archTop, yBase);
      drawCurveVoussoir(Pi1, Pi2, stoneW, pal.lit, glowFlicker, true);
      // Right curve stones
      var Pi3 = getArchPoint(t1, false, archCx, archW, archTop, yBase), Pi4 = getArchPoint(t2, false, archCx, archW, archTop, yBase);
      drawCurveVoussoir(Pi3, Pi4, stoneW, pal.lit, glowFlicker, false);
    }

    function drawCurveVoussoir(Pi1, Pi2, w, litColor, glow, isLeft) {
      var cx = archCx, cy = archTop + (archBotY-archTop)*0.32;
      var dx1 = Pi1.x-cx, dy1 = Pi1.y-cy, len1 = Math.sqrt(dx1*dx1+dy1*dy1);
      var dx2 = Pi2.x-cx, dy2 = Pi2.y-cy, len2 = Math.sqrt(dx2*dx2+dy2*dy2);
      var Po1 = { x: Pi1.x + (dx1/len1)*w, y: Pi1.y + (dy1/len1)*w };
      var Po2 = { x: Pi2.x + (dx2/len2)*w, y: Pi2.y + (dy2/len2)*w };

      ctx.fillStyle = '#221a17'; ctx.beginPath();
      ctx.moveTo(Pi1.x, Pi1.y); ctx.lineTo(Po1.x, Po1.y);
      ctx.lineTo(Po2.x, Po2.y); ctx.lineTo(Pi2.x, Pi2.y); ctx.closePath(); ctx.fill(); ctx.stroke();

      ctx.strokeStyle = hexToRgba(litColor, 0.48 * glow); ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(Pi1.x, Pi1.y); ctx.lineTo(Pi2.x, Pi2.y); ctx.stroke();
      ctx.strokeStyle = 'rgba(5, 3, 2, 0.75)'; ctx.lineWidth = 1;
    }

    // 5. Wooden Mantle Shelf
    var mantleY = archTop - 12, mantleW = archW * 1.34;
    var mantleGr = ctx.createLinearGradient(0, mantleY - 24, 0, mantleY + 8);
    mantleGr.addColorStop(0, '#4e2817'); mantleGr.addColorStop(1, '#2c1409');
    ctx.fillStyle = mantleGr; ctx.fillRect(archCx - mantleW*0.5, mantleY - 24, mantleW, 26);
    // top light edge
    ctx.fillStyle = 'rgba(255,255,255,0.06)'; ctx.fillRect(archCx - mantleW*0.5, mantleY - 24, mantleW, 2);
    // bottom fire bounce reflect
    ctx.fillStyle = hexToRgba(pal.lit, 0.3 * glowFlicker); ctx.fillRect(archCx - mantleW*0.5, mantleY, mantleW, 3);
    // shadow cast underneath
    ctx.fillStyle = 'rgba(0, 0, 0, 0.55)'; ctx.fillRect(archCx - mantleW*0.5, mantleY, mantleW, 10);

    // 6. Hearth Slab
    var slabW = archW * 1.18, slabY = archBotY;
    var slabGr = ctx.createLinearGradient(0, slabY - 3, 0, slabY + 24);
    slabGr.addColorStop(0, '#302622'); slabGr.addColorStop(1, '#140f0d');
    ctx.fillStyle = slabGr; ctx.fillRect(archCx - slabW*0.5, slabY - 2, slabW, 22);

    ctx.fillStyle = 'rgba(255,255,255,0.04)'; ctx.fillRect(archCx - slabW*0.5, slabY - 2, slabW, 1.5);
    // Center glow reflect
    var slabReflect = ctx.createRadialGradient(archCx, slabY, 2, archCx, slabY, archW*0.35);
    slabReflect.addColorStop(0, hexToRgba(pal.glow, 0.28 * glowFlicker));
    slabReflect.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = slabReflect; ctx.fillRect(archCx - slabW*0.5, slabY - 2, slabW, 16);

    // 7. Smoke animation
    updateAndDrawSmoke(pal);

    TIME++;
    } catch (e) { /* keep the loop alive */ }
    requestAnimationFrame(drawScene);
  }

  function updateAndDrawFlames(isBackLayer, pal) {
    if (!flameSizeSlider) return;
    var sizeSliderVal = parseFloat(flameSizeSlider.value) || 110;
    var flameScale = sizeSliderVal / 110;

    var genRate = isBackLayer ? (5 + Math.floor(flameScale*3)) : (2 + Math.floor(flameScale*1.5));
    var archCx = W * 0.5, archBotY = H * 0.81;

    if (particles.length < 160) {
      for (var i = 0; i < genRate; i++) {
        var sideOffset = (Math.random() - 0.5) * W * 0.15;
        var pType = Math.random() < 0.22 ? 'core' : (Math.random() < 0.65 ? 'mid' : 'outer');
        var pSize = (pType === 'core' ? (15+Math.random()*10) : (pType === 'mid' ? (25+Math.random()*15) : (35+Math.random()*20))) * flameScale;

        particles.push({
          back: isBackLayer,
          x: archCx + sideOffset + (Math.random()-0.5)*20,
          y: archBotY - 10 - Math.abs(sideOffset)*0.2 + (Math.random()-0.5)*6,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (-1.8 - Math.random() * 2.2) * flameScale,
          life: 1.0,
          decay: (0.007 + Math.random() * 0.007) / flameScale,
          size: pSize,
          type: pType
        });
      }
    }

    ctx.globalCompositeOperation = 'screen';
    var nextParticles = [];
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      if (p.back !== isBackLayer) {
        nextParticles.push(p);
        continue;
      }
      p.x += p.vx; p.y += p.vy;
      p.x += Math.sin(TIME * 0.035 + p.y * 0.02) * 0.9 * (1.0 - p.life);
      p.life -= p.decay;

      if (p.life > 0) {
        nextParticles.push(p);
        var sizeNow = p.size * p.life;
        var alpha = p.life * 0.42;
        var grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, sizeNow);

        if (p.type === 'core') {
          grad.addColorStop(0, hexToRgba(pal.core, alpha * 1.5));
          grad.addColorStop(0.35, hexToRgba(pal.c1, alpha));
          grad.addColorStop(1, 'rgba(0,0,0,0)');
        } else if (p.type === 'mid') {
          grad.addColorStop(0, hexToRgba(pal.c1, alpha * 1.2));
          grad.addColorStop(0.45, hexToRgba(pal.c2, alpha * 0.6));
          grad.addColorStop(1, 'rgba(0,0,0,0)');
        } else {
          grad.addColorStop(0, hexToRgba(pal.c2, alpha * 0.9));
          grad.addColorStop(0.55, hexToRgba(pal.glow, alpha * 0.35));
          grad.addColorStop(1, 'rgba(0,0,0,0)');
        }

        ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(p.x, p.y, sizeNow, 0, Math.PI*2); ctx.fill();
      }
    }
    particles = nextParticles;
    ctx.globalCompositeOperation = 'source-over';
  }

  function updateAndDrawEmbers(pal) {
    if (!flameSizeSlider) return;
    var sizeSliderVal = parseFloat(flameSizeSlider.value) || 110;
    var flameScale = sizeSliderVal / 110;
    var archCx = W * 0.5, archBotY = H * 0.81, archW = W * 0.52;

    if (embers.length < 90 && Math.random() < 0.6) {
      embers.push({
        x: archCx + (Math.random() - 0.5) * archW * 0.42,
        y: archBotY - 14,
        vx: (Math.random() - 0.5) * 1.0,
        vy: -1.2 - Math.random() * 2.0,
        decay: 0.007 + Math.random() * 0.008,
        life: 1.0,
        size: 1.0 + Math.random() * 2.0,
        wobble: Math.random() * 10,
        wSpeed: 0.02 + Math.random() * 0.03
      });
    }

    var nextEmbers = [];
    for (var i = 0; i < embers.length; i++) {
      var e = embers[i];
      e.x += e.vx; e.y += e.vy;
      e.x += Math.sin(TIME * e.wSpeed + e.wobble) * 0.6;
      e.life -= e.decay;

      if (e.life > 0 && e.y > H * 0.2) {
        nextEmbers.push(e);
        ctx.lineWidth = e.size;
        ctx.strokeStyle = hexToRgba(pal.c1, e.life * 0.85);
        ctx.beginPath(); ctx.moveTo(e.x, e.y);
        ctx.lineTo(e.x + e.vx * 1.8, e.y + e.vy * 1.8);
        ctx.stroke();
      }
    }
    embers = nextEmbers;
  }

  function updateAndDrawSmoke(pal) {
    var archCx = W * 0.5, archTop = H * 0.28;
    if (smoke.length < 25 && Math.random() < 0.12) {
      smoke.push({
        x: archCx + (Math.random() - 0.5) * 60,
        y: archTop + 14,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -0.7 - Math.random() * 0.8,
        size: 30 + Math.random() * 20,
        life: 1.0,
        decay: 0.007 + Math.random() * 0.006
      });
    }

    var nextSmoke = [];
    var currentStyle = styleSelect ? styleSelect.value : 'classic';
    for (var i = 0; i < smoke.length; i++) {
      var s = smoke[i];
      s.x += s.vx; s.y += s.vy;
      s.size += 0.22; s.life -= s.decay;

      if (s.life > 0 && s.y > 0) {
        nextSmoke.push(s);
        var sizeNow = s.size * s.life;
        var sGrad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, sizeNow);
        var col = currentStyle === 'classic' ? 'rgba(70,60,60,' : 'rgba(60,65,70,';
        sGrad.addColorStop(0, col + (s.life * 0.08) + ')');
        sGrad.addColorStop(0.5, col + (s.life * 0.03) + ')');
        sGrad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = sGrad; ctx.beginPath(); ctx.arc(s.x, s.y, sizeNow, 0, Math.PI*2); ctx.fill();
      }
    }
    smoke = nextSmoke;
  }

  // ─── AUDIO ENGINE ──────────────────────────────────────────────────────────
  var audioEl = null, audioStarted = false;

  function startAudio() {
    if (audioStarted) return;
    audioEl = new Audio('/assets/fire-screen/fire-screen.mp3');
    audioEl.loop = true;
    audioEl.preload = 'auto';
    audioStarted = true;
    applyVolumes();
    audioEl.play().catch(function () {});
  }

  function applyVolumes() {
    if (!audioEl) return;
    audioEl.volume = S.muted ? 0 : S.volume;
  }

  // UI Syncs
  function syncUIControls() {
    volSlider.value = Math.round(S.volume * 100);
    if (volSettings) volSettings.value = Math.round(S.volume * 100);
    if (soundToggle) soundToggle.checked = !S.muted;

    soundIcon.innerHTML = S.muted
      ? '<path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>'
      : '<path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>';
  }

  soundBtn.addEventListener('click', function (e) {
    e.stopPropagation(); S.muted = !S.muted; syncUIControls(); applyVolumes();
    if (!audioStarted && !S.muted) startAudio();
  });

  if (soundToggle) {
    soundToggle.addEventListener('change', function () {
      S.muted = !this.checked; syncUIControls(); applyVolumes();
      if (!audioStarted && !S.muted) startAudio();
    });
  }

  volSlider.addEventListener('input', function () {
    S.volume = this.value / 100; syncUIControls(); applyVolumes();
    if (!audioStarted && S.volume > 0.02) startAudio();
  });

  if (volSettings) {
    volSettings.addEventListener('input', function () {
      S.volume = this.value / 100; syncUIControls(); applyVolumes();
      if (!audioStarted && S.volume > 0.02) startAudio();
    });
  }

  if (settingsBtn && settingsPanel) {
    settingsBtn.addEventListener('click', function (e) { e.stopPropagation(); settingsPanel.classList.toggle('open'); });
  }
  if (closeSettings && settingsPanel) {
    closeSettings.addEventListener('click', function (e) { e.stopPropagation(); settingsPanel.classList.remove('open'); });
  }
  if (settingsPanel) {
    settingsPanel.addEventListener('click', function (e) { e.stopPropagation(); });
  }
  wrap.addEventListener('click', function () { if (settingsPanel) settingsPanel.classList.remove('open'); });

  if (styleSelect) {
    styleSelect.addEventListener('change', function () { applyPalette(this.value); });
  }


  var _timerInterval = null;
  if (timerSelect) {
    timerSelect.addEventListener('change', function () {
      if (_timerInterval) { clearInterval(_timerInterval); _timerInterval = null; }
      var mins = +this.value; if (!mins) return;
      var ms = mins * 60 * 1000;
      _timerInterval = setInterval(function () {
        ms -= 1000;
        if (ms <= 0) { clearInterval(_timerInterval); _timerInterval = null; S.muted = true; syncUIControls(); applyVolumes(); }
      }, 1000);
    });
  }

  if (fsBtn) {
    fsBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (document.fullscreenElement) document.exitFullscreen();
      else wrap.requestFullscreen().catch(function () {});
    });
  }

  if (fsGearBtn && settingsPanel) {
    fsGearBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      settingsPanel.classList.toggle('open');
    });
  }

  document.addEventListener('fullscreenchange', function () {
    var isFS = document.fullscreenElement === wrap;
    wrap.classList.toggle('is-fullscreen', isFS);
    document.documentElement.classList.toggle('fp-fs-active', isFS);
    if (!isFS && settingsPanel) settingsPanel.classList.remove('open');
    setTimeout(resizeCanvas, 120);
  });

  document.addEventListener('keydown', function (e) {
    var k = e.key.toLowerCase();
    if (document.fullscreenElement !== wrap) {
      if (k === 'f') { e.preventDefault(); wrap.requestFullscreen().catch(function () {}); }
      return;
    }
    if (k === 'escape') document.exitFullscreen();
    else if (k === 'c') { e.preventDefault(); if (settingsPanel) settingsPanel.classList.toggle('open'); }
    else if (k === 'm') soundBtn.click();
    else if (e.key === 'ArrowUp') { e.preventDefault(); S.volume = Math.min(1, S.volume + 0.05); syncUIControls(); applyVolumes(); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); S.volume = Math.max(0, S.volume - 0.05); syncUIControls(); applyVolumes(); }
    else { e.preventDefault(); e.stopPropagation(); }
  });

  // initial state: MUTED, controls synced.
  syncUIControls();
  requestAnimationFrame(drawScene);

  // Fade HUD in and out as a gentle welcoming cue
  if (hud) {
    hud.classList.add('is-visible');
    setTimeout(function () { hud.classList.remove('is-visible'); }, 2500);
  }
})();
