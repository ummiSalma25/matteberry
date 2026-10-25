/* Theme: set before paint so there is no flash */
const root = document.documentElement, KEY = 'mb-theme';
const store = {
  get: () => { try { return localStorage.getItem(KEY); } catch (e) {} },
  set: v => { try { localStorage.setItem(KEY, v); } catch (e) {} }
};
root.setAttribute('data-bs-theme', store.get() || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

/* Selar links. Paste each product's link between the empty quotes.
   One link per mockup covers the JPG and PSD together.
   Anything left empty falls back to '#'.
   The two StudioEdit keys at the top are the "Buy full collection" links. */
const SELAR = {
  // Full collections ("Buy full collection" button)
  'StudioEdit01':                           'https://selar.com/studio-edit-01-premium-bundle',  // all 4 premium mockups in StudioEdit 01
  'StudioEdit02':                           'https://selar.com/studio-edit-02-premium-bundle',  // all 4 premium mockups in StudioEdit 02

  // StudioEdit 01
  'StudioEdit01/StudioEdit_01_Female_01':   'https://selar.com/studio-edit-01-free-mockups',  // Woman in a white oversized tee, front view (free)
  'StudioEdit01/StudioEdit_01_Female_02':   'https://selar.com/studio-edit-01-female-back',  // Woman in a white oversized tee, back view (premium)
  'StudioEdit01/StudioEdit_01_Female_03':   'https://selar.com/studio-edit-01-female-editorial',  // Woman in a white oversized tee against a concrete wall (premium)
  'StudioEdit01/StudioEdit_01_Male_01':     'https://selar.com/studio-edit-01-free-mockups',  // Man in a white oversized tee, front view (free)
  'StudioEdit01/StudioEdit_01_Male_02':     'https://selar.com/studio-edit-01-male-back',  // Man in a white oversized tee, back view (premium)
  'StudioEdit01/StudioEdit_01_Male_03':     'https://selar.com/studio-edit-01-male-editorial',  // Man in a white oversized tee against a concrete wall (premium)

  // StudioEdit 02
  'StudioEdit02/StudioEdit_01_Female_01':   'https://selar.com/studio-edit-02-free-mockups',  // Woman in a black oversized tee against a concrete wall (free)
  'StudioEdit02/StudioEdit_01_Female_02':   'https://selar.com/studio-edit-02-female-back',  // Woman in a black oversized tee, back view (premium)
  'StudioEdit02/StudioEdit_01_Female_03':   'https://selar.com/studio-edit-02-female-editorial',  // Woman in a black oversized tee in a doorway (premium)
  'StudioEdit02/StudioEdit_01_Male_01':     'https://selar.com/studio-edit-02-free-mockups',  // Man in a black oversized tee, front view (free)
  'StudioEdit02/StudioEdit_01_Male_02':     'https://selar.com/studio-edit-02-male-back',  // Man in a black oversized tee, back view (premium)
  'StudioEdit02/StudioEdit_01_Male_03':     'https://selar.com/studio-edit-02-male-editorial',  // Man in a black oversized tee on outdoor steps (premium)

  // Couples
  'Couple/Couple01':                        'https://selar.com/couple-01-black-indoor',  // Couple in black tees at a bar (premium)
  'Couple/Couple02':                        'https://selar.com/couple-02-white-urban',  // Couple in white tees and jeans on the street (premium)
  'Couple/Couple03':                        'https://selar.com/couple-03-white-streetwear',  // Couple in white tees posing on the street (premium)
  'Couple/Couple04':                        'https://selar.com/couple-04-black-front-back',  // Couple in black tees at a bar, red walls (premium)
  'Couple/Couple05':                        'https://selar.com/couple-05-white-front-back',  // Couple in white tees and cream trousers, back view (premium)

  // Individual mockups
  'Individual/female01':                    'https://selar.com/female-01-black-tshirt-seated',  // Woman with an afro in a black tee, sitting against a plain gray background (free)
  'Individual/female02':                    'https://selar.com/female-02-black-tshirt-back',  // Woman in a black tee, back view, against a concrete wall (free)
  'Individual/female03':                    'https://selar.com/female-03-black-tshirt-studio',  // Woman with long braids in a black tee, plain cream background (premium)
  'Individual/female04':                    'https://selar.com/female-04-black-tshirt-back',  // Woman with braids in a black tee, back view (premium)
  'Individual/female05':                    'https://selar.com/female-05-black-tshirt-urban',  // Woman in a black tee with her hair in puffs (premium)
  'Individual/female06':                    'https://selar.com/female-06-white-tshirt-studio',  // Woman in a white tee and shorts, plain gray background (premium)
  'Individual/female07':                    'https://selar.com/female-07-green-tshirt-outdoor',  // Woman in a green tee leaning on a ledge by a brick wall (free)
  'Individual/female08':                    'https://selar.com/female-08-white-tshirt-pink',  // Woman in a white tee and red sunglasses, plain pink background (premium)
  'Individual/female09':                    'https://selar.com/female-09-black-tshirt-outdoor',  // Woman with long braids in a black tee, in the sun (free)
  'Individual/female10':                    'https://selar.com/female-10-black-hoodie-street',  // Woman in a black hoodie holding a camera (premium)
  'Individual/female11':                    'https://selar.com/female-11-canvas-tote-bag',  // Woman sitting with a cream tote bag, plain background (premium)
  'Individual/female12':                    'https://selar.com/female-12-white-tshirt-studio',  // Woman in a white tee, plain gray background (premium)
  'Individual/female13':                    'https://selar.com/female-13-green-tshirt-studio',  // Woman with long braids in a green tee, plain cream background (premium)
  'Individual/LittleGirl01':                'https://selar.com/girl-01-white-tshirt-studio',  // Little girl in a white tee and heart-shaped sunglasses (free)
  'Individual/Male01':                      'https://selar.com/male-01-black-tshirt-studio',  // Man in a black tee, plain cream background (free)
  'Individual/Male02':                      'https://selar.com/male-02-black-tshirt-back',  // Man in a black oversized tee, back view (premium)
  'Individual/Male03':                      'https://selar.com/male-03-navy-tshirt-streetwear',  // Man in a navy tee in front of a graffiti wall (premium)
  'Individual/Male04':                      'https://selar.com/male-04-white-tshirt-studio',  // Man in a white tee, plain gray background (premium)
  'Individual/Male05':                      'https://selar.com/male-05-white-tshirt-outdoor-back',  // Man in a white tee, back view, on a sunny terrace (free)
  'Individual/Male06':                      'https://selar.com/male-06-white-tshirt-urban-back',  // Man in a white tee, back view, in a city square (premium)
  'Individual/Male07':                      'https://selar.com/male-07-grey-hoodie-outdoor',  // Man in a grey hoodie leaning on a fence (premium)
  'Individual/Male08':                      'https://selar.com/male-08-blue-tshirt-urban',  // Man in a blue tee against a concrete wall (free)
  'Individual/Male09':                      'https://selar.com/male-09-red-tshirt-back'  // Man in a red tee, back view, plain cream background (free)
};

/* New mockups: add a line per new image with the date it went live (YYYY-MM-DD).
   It shows a New tag, appears first, and sits under the New filter for 14 days, then drops off by itself.
   Example: 'Individual/female14': '2026-10-24', */
const ADDED = {};

document.addEventListener('DOMContentLoaded', () => {
  const $ = id => document.getElementById(id);
  $('theme').onclick = () => {
    const t = root.dataset.bsTheme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-bs-theme', t);
    store.set(t);
  };

  /* Back to top arrow: shows once the visitor scrolls past the page's header/hero */
  document.body.insertAdjacentHTML('beforeend', '<button id="top" class="to-top" aria-label="Back to top"><i class="fa-solid fa-arrow-up"></i></button>');
  const top = $('top'), hero = document.querySelector('header');
  document.body.insertAdjacentHTML('afterbegin', '<div id="bar" class="bar"></div>');
  const bar = $('bar'), nav = document.querySelector('.navbar');
  const onScroll = () => {
    top.classList.toggle('show', scrollY > (hero ? hero.offsetHeight : 400));
    nav.classList.toggle('scrolled', scrollY > 10);
    bar.style.transform = `scaleX(${scrollY / Math.max(1, root.scrollHeight - innerHeight)})`;
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  top.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });

  /* Motion: fade-up on scroll, staggered. Skipped for people who ask for reduced motion. */
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const io = !calm && 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: .12, rootMargin: '0px 0px -40px 0px' }) : null;
  const reveal = els => {
    if (!io) return;
    const n = new Map();
    [...els].forEach(el => {
      const k = el.closest('.row') || el.parentElement, i = n.get(k) || 0;
      n.set(k, i + 1);
      el.classList.add('reveal');
      el.style.transitionDelay = (i % 4) * 90 + 'ms';
      el.addEventListener('transitionend', function done(e) {
        if (e.target !== el || e.propertyName !== 'opacity' || !el.classList.contains('in')) return;
        el.classList.remove('reveal', 'in');
        el.style.transitionDelay = '';
        el.removeEventListener('transitionend', done);
      });
      io.observe(el);
    });
  };
  if (!calm) document.querySelectorAll('header .col-lg-6:first-child > *, header .container > :not(.row), header.container > *').forEach((el, i) => {
    el.classList.add('rise');
    el.style.animationDelay = i * 0.1 + 's';
  });
  reveal(document.querySelectorAll('section h2, section .muted.mb-4, .box, .why-row, .col-card, .story-img, #story .col-lg-7 > p, .article > h2, .article > p, .article > ul, .article figure, .accordion-item'));

  /* Search box types out example searches until someone clicks in */
  const qi = $('q');
  if (qi && !calm) {
    const ex = ['woman, white tee, outdoors', 'man, navy tee, street', 'couple, indoor', 'woman, studio'];
    let a = 0, b = 0, del = false;
    const tick = () => {
      if (document.activeElement === qi || qi.value) return setTimeout(tick, 1500);
      const s = ex[a];
      b += del ? -1 : 1;
      qi.placeholder = 'Try: ' + s.slice(0, b);
      let wait = del ? 30 : 60;
      if (!del && b === s.length) { del = true; wait = 1600; }
      else if (del && b === 0) { del = false; a = (a + 1) % ex.length; wait = 400; }
      setTimeout(tick, wait);
    };
    tick();
  }

  const grid = $('grid');
  if (!grid) return; // blog pages stop here

  /* Catalog. Tags are what the search reads, title is what visitors see. Edit both freely. */
  const L = k => SELAR[k] || '#';
  const P = [];
  /* To add a product later (hoodie, tote, mug), pass its key last, e.g.
     add('Individual', 'Hoodie01', true, 'male black studio front', 'Man in a black hoodie, plain gray background', 'hoodie') */
  const add = (dir, name, free, tags, title, product = 'tshirt') => P.push({
    id: dir + '/' + name, dir, name, free, tags, title, product, people: dir === 'Couple' ? 2 : 1, col: dir.startsWith('Studio'),
    w: (tags + ' ' + title).toLowerCase().split(/[^a-z0-9]+/).filter(Boolean),
    isNew: !!(ADDED[dir + '/' + name] && Date.now() - new Date(ADDED[dir + '/' + name]) < 14 * 864e5)
  });

  const cn = ['Female_01', 'Female_02', 'Female_03', 'Male_01', 'Male_02', 'Male_03'];
  [
    ['StudioEdit01',
      ['female white studio front', 'female white studio back', 'female white outdoor concrete', 'male white studio front', 'male white studio back', 'male white outdoor street concrete'],
      ['Woman in a white oversized tee, front view', 'Woman in a white oversized tee, back view', 'Woman in a white oversized tee against a concrete wall', 'Man in a white oversized tee, front view', 'Man in a white oversized tee, back view', 'Man in a white oversized tee against a concrete wall']],
    ['StudioEdit02',
      ['female black outdoor concrete front', 'female black outdoor concrete back', 'female black outdoor doorway front', 'male black outdoor front', 'male black outdoor back', 'male black outdoor steps front'],
      ['Woman in a black oversized tee against a concrete wall', 'Woman in a black oversized tee, back view', 'Woman in a black oversized tee in a doorway', 'Man in a black oversized tee, front view', 'Man in a black oversized tee, back view', 'Man in a black oversized tee on outdoor steps']]
  ].forEach(([d, t, ttl]) => cn.forEach((n, i) => add(d, 'StudioEdit_01_' + n, i % 3 === 0, t[i], ttl[i])));

  const FREE = 'female01 female02 female07 female09 LittleGirl01 Male01 Male05 Male08 Male09'.split(' ');
  /* name:tags|title|product  (product is optional and defaults to tshirt; keep ; : and | out of the text) */
  ('Couple01:couple black indoor bar front|Couple in black tees at a bar;' +
   'Couple02:couple white outdoor street front|Couple in white tees and jeans on the street;' +
   'Couple03:couple white outdoor street front|Couple in white tees posing on the street;' +
   'Couple04:couple black indoor bar back|Couple in black tees at a bar, red walls;' +
   'Couple05:couple white indoor back|Couple in white tees and cream trousers, back view;' +
   'female01:female black studio sitting front|Woman with an afro in a black tee, sitting against a plain gray background;' +
   'female02:female black concrete wall back|Woman in a black tee, back view, against a concrete wall;' +
   'female03:female black studio front|Woman with long braids in a black tee, plain cream background;' +
   'female04:female black concrete wall back|Woman with braids in a black tee, back view;' +
   'female05:female black outdoor front|Woman in a black tee with her hair in puffs;' +
   'female06:female white studio front|Woman in a white tee and shorts, plain gray background;' +
   'female07:female green outdoor brick front|Woman in a green tee leaning on a ledge by a brick wall;' +
   'female08:female white studio pink front|Woman in a white tee and red sunglasses, plain pink background;' +
   'female09:female black outdoor sunny front|Woman with long braids in a black tee, in the sun;' +
   'female10:female black outdoor hoodie camera front|Woman in a black hoodie holding a camera|hoodie;' +
   'female11:female cream studio tote bag sitting front|Woman sitting with a cream tote bag, plain background|tote;' +
   'female12:female white studio front|Woman in a white tee, plain gray background;' +
   'female13:female green studio front|Woman with long braids in a green tee, plain cream background;' +
   'LittleGirl01:kid girl white indoor front|Little girl in a white tee and heart-shaped sunglasses;' +
   'Male01:male black studio front|Man in a black tee, plain cream background;' +
   'Male02:male black outdoor back oversized|Man in a black oversized tee, back view;' +
   'Male03:male navy outdoor street graffiti front|Man in a navy tee in front of a graffiti wall;' +
   'Male04:male white studio front|Man in a white tee, plain gray background;' +
   'Male05:male white outdoor back|Man in a white tee, back view, on a sunny terrace;' +
   'Male06:male white outdoor back|Man in a white tee, back view, in a city square;' +
   'Male07:male gray outdoor hoodie fence front|Man in a grey hoodie leaning on a fence|hoodie;' +
   'Male08:male blue outdoor concrete front|Man in a blue tee against a concrete wall;' +
   'Male09:male red studio back|Man in a red tee, back view, plain cream background')
    .split(';').forEach(s => { const [n, rest] = s.split(':'), [t, ttl, prod] = rest.split('|'); add(n.startsWith('Couple') ? 'Couple' : 'Individual', n, FREE.includes(n), t, ttl, prod); });

  const title = p => p.title;
  const colName = d => d.replace(/(\d+)/, ' $1');
  const card = p => `<div class="col-6 col-md-4 col-lg-3"><button class="card-m" data-id="${p.id}" aria-label="Open ${title(p)}">${p.isNew ? '<span class="new-tag">New</span>' : ''}<img src="img/${p.id}.webp" loading="lazy" alt="${title(p)}">${p.free ? '<span class="free-tag">Free</span>' : '<span class="crown" title="Premium"><i class="fa-solid fa-crown"></i></span>'}</button></div>`;

  /* Search: every word must match a tag. If nothing matches them all, show the closest ones. */
  const STOP = new Set('a an the for on in with of and t shirt tee tshirt mockup mockups wearing wears'.split(' '));
  const SYN = { woman: 'female', women: 'female', lady: 'female', ladies: 'female', man: 'male', men: 'male', guy: 'male', boy: 'male', outside: 'outdoor', outdoors: 'outdoor', inside: 'indoor', indoors: 'indoor', child: 'kid', kids: 'kid', girls: 'girl', couples: 'couple', grey: 'gray', backview: 'back' };
  const terms = s => s.toLowerCase().split(/[^a-z0-9]+/).filter(w => w && !STOP.has(w)).map(w => SYN[w] || w);

  const full = !!$('count'); // true on mockups.html, false on the home preview
  const NOCOL = 'none', KEYS = ['price', 'collection', 'people', 'product'];
  const PEOPLE = { 1: '1 person', 2: '2 people (couple)' }, PRODUCT = { tshirt: 'T-shirts', hoodie: 'Hoodies', tote: 'Tote bags' };
  let F = { price: 'all', collection: 'all', people: 'all', product: 'all', isNew: false }, q = '';
  if (full) {
    /* dropdowns fill themselves from the catalog, so new collections and products appear on their own */
    const uniq = a => [...new Set(a)];
    const fill = (id, opts) => $(id).insertAdjacentHTML('beforeend', opts.map(([v, t]) => `<option value="${v}">${t}</option>`).join(''));
    fill('f-collection', [...uniq(P.filter(p => p.col).map(p => p.dir)).map(d => [d, colName(d)]), [NOCOL, 'Not in a collection']]);
    fill('f-people', uniq(P.map(p => p.people)).sort().map(n => [n, PEOPLE[n] || n + ' people']));
    fill('f-product', uniq(P.map(p => p.product)).map(k => [k, PRODUCT[k] || k[0].toUpperCase() + k.slice(1) + 's']));
    const u = new URLSearchParams(location.search);
    q = u.get('q') || '';
    $('q').value = q;
    KEYS.forEach(k => { const v = u.get(k), s = $('f-' + k); if (v && [...s.options].some(o => o.value === v)) F[k] = v; s.value = F[k]; });
    F.isNew = u.get('new') === '1';
    if (!P.some(p => p.isNew)) { $('f-new').remove(); F.isNew = false; }
  }

  const match = p => (F.price === 'all' || (F.price === 'free') === p.free)
    && (F.collection === 'all' || (F.collection === NOCOL ? !p.col : p.dir === F.collection))
    && (F.people === 'all' || String(p.people) === F.people)
    && (F.product === 'all' || p.product === F.product)
    && (!F.isNew || p.isNew);

  const draw = () => {
    let list = P, near = false;
    if (!full) list = [...P.filter(p => p.isNew), ...P.filter((p, i) => !p.isNew && i % 5 === 0)].slice(0, +grid.dataset.limit || 8); // new first, then a spread of free and premium
    else {
      list = P.filter(match);
      list = [...list.filter(p => p.isNew), ...list.filter(p => !p.isNew)];
      const ts = terms(q);
      if (ts.length) {
        const sc = list.map(p => [p, ts.filter(w => p.w.includes(w)).length]);
        const exact = sc.filter(x => x[1] === ts.length).map(x => x[0]);
        near = !exact.length;
        list = exact.length ? exact : sc.filter(x => x[1]).sort((a, b) => b[1] - a[1]).map(x => x[0]);
      }
    }
    grid.innerHTML = list.map(card).join('') || '<p class="col-12 muted">Nothing matched. Try fewer words or clear a filter.</p>';
    reveal(grid.children);
    if (!full) return;
    $('count').textContent = list.length + (list.length === 1 ? ' mockup' : ' mockups') + (near && list.length ? ', closest matches' : '');
    $('clear').hidden = !q && !F.isNew && KEYS.every(k => F[k] === 'all');
    document.querySelectorAll('.filters select').forEach(s => s.classList.toggle('on', s.value !== 'all'));
    if ($('f-new')) $('f-new').classList.toggle('active', F.isNew);
    const c = F.collection, paid = P.filter(p => p.dir === c && !p.free).length;
    $('banner').innerHTML = c !== 'all' && c !== NOCOL && paid ? `<div class="banner"><span>Want all ${paid} premium mockups from ${colName(c)}? Buy the full collection in one go.</span><a class="btn btn-accent" href="${L(c)}" target="_blank" rel="noopener">Buy full collection</a></div>` : '';
    const u = new URLSearchParams();
    if (q) u.set('q', q);
    KEYS.forEach(k => { if (F[k] !== 'all') u.set(k, F[k]); });
    if (F.isNew) u.set('new', '1');
    history.replaceState(null, '', u.toString() ? '?' + u : location.pathname);
  };

  if (full) {
    document.querySelectorAll('.filters select').forEach(s => s.onchange = () => { F[s.dataset.k] = s.value; draw(); });
    if ($('f-new')) $('f-new').onclick = () => { F.isNew = !F.isNew; draw(); };
    $('q').oninput = e => { q = e.target.value; draw(); };
    $('search').onsubmit = e => { e.preventDefault(); q = $('q').value; draw(); };
    $('clear').onclick = () => {
      q = ''; $('q').value = '';
      F = { price: 'all', collection: 'all', people: 'all', product: 'all', isNew: false };
      KEYS.forEach(k => { $('f-' + k).value = 'all'; });
      draw();
    };
  }

  /* Download modal */
  const M = new bootstrap.Modal($('m'));
  grid.onclick = e => {
    const b = e.target.closest('[data-id]');
    if (!b) return;
    const p = P.find(x => x.id === b.dataset.id);
    $('m-img').src = `img/${p.id}.webp`;
    $('m-img').alt = title(p);
    $('m-badge').className = 'badge align-self-start mb-3 ' + (p.free ? 'free-tag' : 'badge-premium');
    $('m-badge').innerHTML = p.free ? 'Free' : '<i class="fa-solid fa-crown me-1"></i>Premium';
    $('m-title').textContent = title(p);
    $('m-note').textContent = (p.free ? 'Free mockup.' : 'Premium mockup.') + (p.col ? ` Part of ${colName(p.dir)}.` : '') + (p.free ? ' You get the JPG and the editable PSD together.' : ' You get the JPG and the editable PSD together, and you will see the price before you pay.');
    $('m-dl').innerHTML = `<div class="d-flex align-items-center gap-2"><span class="small muted">Includes</span><span class="pill">JPG</span><span class="pill">PSD</span></div><a class="btn btn-accent btn-lg" href="${L(p.id)}" target="_blank" rel="noopener"><i class="fa-solid fa-download me-2"></i>${p.free ? 'Download' : 'Get'} JPG + PSD</a>`;
    $('m-col').innerHTML = p.col ? `<div class="border-top pt-3">Want the whole collection? Get the 4 premium mockups from ${colName(p.dir)} together. <a class="fw-semibold" href="${L(p.dir)}" target="_blank" rel="noopener">Buy full collection</a></div>` : '';
    M.show();
  };

  draw();
});