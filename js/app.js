/* App: render grid, search, filters, modal; small enhancements */
(function(){
  const grid = document.getElementById('cardsGrid');
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearch');
  const noResults = document.getElementById('noResults');
  const chips = Array.from(document.querySelectorAll('.chip'));

  const yearEl = document.getElementById('year');
  yearEl.textContent = new Date().getFullYear();

  // No popup/modal anymore

  const icon = (name) => {
    // brand icon set (white glyphs; colors via CSS)
    const map = {
      instagram: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.2c3 0 3.4 0 4.6.1 1.2.1 2 .2 2.8.6.8.3 1.5.8 2.1 1.5.7.6 1.1 1.3 1.5 2.1.3.8.5 1.6.6 2.8.1 1.2.1 1.6.1 4.6s0 3.4-.1 4.6c-.1 1.2-.2 2-.6 2.8-.3.8-.8 1.5-1.5 2.1-.6.7-1.3 1.1-2.1 1.5-.8.3-1.6.5-2.8.6-1.2.1-1.6.1-4.6.1s-3.4 0-4.6-.1c-1.2-.1-2-.2-2.8-.6-.8-.3-1.5-.8-2.1-1.5-.7-.6-1.1-1.3-1.5-2.1-.3-.8-.5-1.6-.6-2.8C2.2 15.4 2.2 15 2.2 12s0-3.4.1-4.6c.1-1.2.2-2 .6-2.8.3-.8.8-1.5 1.5-2.1.6-.7 1.3-1.1 2.1-1.5.8-.3 1.6-.5 2.8-.6C8.6 2.2 9 2.2 12 2.2zm0 2.1c-3 0-3.3 0-4.5.1-1 .1-1.5.2-1.9.4-.5.2-.8.3-1.1.6-.3.3-.5.6-.6 1.1-.2.4-.3.9-.4 1.9-.1 1.2-.1 1.5-.1 4.5s0 3.3.1 4.5c.1 1 .2 1.5.4 1.9.2.5.3.8.6 1.1.3.3.6.5 1.1.6.4.2.9.3 1.9.4 1.2.1 1.5.1 4.5.1s3.3 0 4.5-.1c1-.1 1.5-.2 1.9-.4.5-.2.8-.3 1.1-.6.3-.3.5-.6.6-1.1.2-.4.3-.9.4-1.9.1-1.2.1-1.5.1-4.5s0-3.3-.1-4.5c-.1-1-.2-1.5-.4-1.9-.2-.5-.3-.8-.6-1.1-.3-.3-.6-.5-1.1-.6-.4-.2-.9-.3-1.9-.4-1.2-.1-1.5-.1-4.5-.1zm0 3.3a6.4 6.4 0 1 1 0 12.8 6.4 6.4 0 0 1 0-12.8zm0 2.1a4.3 4.3 0 1 0 0 8.6 4.3 4.3 0 0 0 0-8.6zm5-2.6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>',
      twitter: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 5.8c-.7.3-1.4.5-2.2.6.8-.5 1.3-1.2 1.6-2.1-.8.5-1.6.8-2.6 1-1.5-1.6-4.2-1.3-5.4.5-1 1.3-.8 3.1.3 4.2-2-.1-3.9-1.1-5.1-2.8-.7 1.3-.3 3 1 3.9-.6 0-1.1-.2-1.6-.4 0 1.6 1.1 3 2.7 3.4-.5.1-1 .2-1.6.1.4 1.3 1.7 2.3 3.2 2.3-1.2.9-2.7 1.4-4.3 1.4-.3 0-.6 0-.9-.1 1.6 1 3.5 1.5 5.4 1.5 6.5 0 10.1-5.6 9.9-10.6.7-.5 1.3-1.1 1.8-1.8z"/></svg>',
      x: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 3h5.6l3.9 5.6 4.8-5.6H21l-7.1 8.2L21 21h-5.6l-4.1-6-5.2 6H3l7.8-8.9L3 3z"/></svg>',
      threads: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2c5.5 0 10 3.6 10 8.1C22 18 16.7 22 12 22 7.3 22 2 18 2 10.1 2 5.6 6.5 2 12 2zm.9 6.1c-2.6-.5-4.3.2-5 2.1-.5 1.4-.1 3.2 1.3 4.2 1.8 1.2 4.3.8 5.8-.5-.2-1.2-.7-2.1-1.6-2.5 1 .1 1.8.5 2.6 1.2.2-1.1.2-2.1 0-3-.8-.8-1.7-1.3-3.1-1.5z"/></svg>',
      wikipedia: '<svg width="16" height="16" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true"><path d="M5 12h10l11 29 11-29h10L38 52h-8L19 17 9 52H1L5 12z"/></svg>',
      wwe: '<svg width="16" height="16" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true"><path d="M10 8l8 36 8-20 8 20 8-36" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      website: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2c1.6 0 3.1.5 4.3 1.3L5.3 16.3A8 8 0 0 1 12 4zm6.7 3.7A8 8 0 0 1 12 20a8 8 0 0 1-4.3-1.3L18.7 7.7z"/></svg>',
      facebook: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 3h4a1 1 0 0 1 1 1v3h-4v3h4v11h-4v-7h-3v7H7V10h3V7a4 4 0 0 1 3-4z"/></svg>',
      youtube: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 7.5a4 4 0 0 0-2.8-2.8C17.9 4 12 4 12 4s-5.9 0-8.2.7A4 4 0 0 0 1 7.5 41.7 41.7 0 0 0 1 12a41.7 41.7 0 0 0 .8 4.5 4 4 0 0 0 2.8 2.8C6.1 20 12 20 12 20s5.9 0 8.2-.7a4 4 0 0 0 2.8-2.8c.5-1.5.8-3 .8-4.5s-.3-3-.8-4.5zM10 15.5v-7l6 3.5-6 3.5z"/></svg>',
      link: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a5 5 0 0 1 5-5h3v2h-3a3 3 0 1 0 0 6h3v2h-3a5 5 0 0 1-5-5zm6-1h4v2h-4v-2zm5.2-4h3a5 5 0 0 1 0 10h-3v-2h3a3 3 0 1 0 0-6h-3V7z"/></svg>'
    };
    return map[name] || map.link;
  };

  function socialLinks(socials){
    const entries = Object.entries(socials);
    const parts = [];
    for(const [key, val] of entries){
      if(!val) continue;
      const list = Array.isArray(val) ? val : [val];
      const brandKey = key === 'twitter' ? 'x' : key; // normalize Twitter to X
      for(const url of list){
        const safe = String(url);
        const label = brandKey[0].toUpperCase() + brandKey.slice(1);
        parts.push(`<a class="soc-btn brand-${brandKey}" href="${safe}" target="_blank" rel="noopener nofollow" title="${label}" aria-label="${label}">${icon(brandKey)}</a>`);
      }
    }
    return parts.join('');
  }

  function cardTemplate(p){
    const alt = `${p.ringName} (${p.name})`;
    return `
      <article class="card" data-id="${p.id}">
        <div class="card-media">
          <img loading="lazy" src="${p.photo}" alt="${alt}" onerror="this.src='assets/placeholders/placeholder.svg'" />
          <span class="card-badge">${p.type === 'tag-team' ? 'Tag Team' : 'Singles'}</span>
        </div>
        <div class="card-body">
          <div class="card-title">
            <h3>${p.ringName}</h3>
            <span class="small">${p.name}</span>
          </div>
          <div class="small">Born: ${p.dob ? p.dob : '—'}${p.birthplace ? ` • ${p.birthplace}` : ''}</div>
          <p class="bio">${p.bio}</p>
        </div>
        <div class="card-footer">
          <div class="soc">${socialLinks(p.socials)}</div>
        </div>
      </article>
    `;
  }

  function render(list){
    grid.setAttribute('aria-busy','true');
    grid.innerHTML = list.map(cardTemplate).join('');
    grid.setAttribute('aria-busy','false');
    noResults.hidden = list.length !== 0;
  setupReveals();
  }

  function filterList(query, filter){
    const q = query.trim().toLowerCase();
    return SUPERSTARS.filter(p => {
      const matchQ = !q || p.name.toLowerCase().includes(q) || p.ringName.toLowerCase().includes(q);
      const matchF = filter === 'all' ||
                     (filter === 'male' && p.gender === 'male') ||
                     (filter === 'female' && p.gender === 'female') ||
                     (filter === 'tag-team' && p.type === 'tag-team');
      return matchQ && matchF;
    });
  }

  // No modal: cards are purely informational now

  // Search
  let currentFilter = 'all';
  function update(){
    const list = filterList(searchInput.value, currentFilter);
    render(list);
  }
  searchInput.addEventListener('input', update);
  clearBtn.addEventListener('click', ()=>{
    searchInput.value = '';
    update();
  });

  // Filters
  chips.forEach(ch => ch.addEventListener('click', ()=>{
    chips.forEach(x => x.setAttribute('aria-pressed','false'));
    ch.setAttribute('aria-pressed','true');
    currentFilter = ch.dataset.filter || 'all';
    update();
  }));

  // Initial
  render(SUPERSTARS);

  function setupReveals(){
    const cards = grid.querySelectorAll('.card');
    const obs = new IntersectionObserver((entries)=>{
      for(const e of entries){
        if(e.isIntersecting){
          e.target.classList.add('show');
          obs.unobserve(e.target);
        }
      }
    }, {threshold: 0.12});
    cards.forEach((c,i)=>{
      c.classList.add('reveal');
      c.style.transitionDelay = (i%6)*30 + 'ms';
      obs.observe(c);
    });
  }
})();
