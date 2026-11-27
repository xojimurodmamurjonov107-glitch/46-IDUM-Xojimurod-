/* ==========================================================================
   46-IDUM — Asosiy Interaktiv Funksiyalar (main.js)
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- 1. Rasm xatoligi uchun fallback SVG generator ---------- */
  function createFallbackSvg(label) {
    const safeLabel = (label || '46-IDUM').replace(/[<>&"']/g, '');
    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" stop-color="#123B68"/><stop offset="100%" stop-color="#1D528C"/>' +
      '</linearGradient></defs>' +
      '<rect width="800" height="500" fill="url(#g)"/>' +
      '<circle cx="400" cy="210" r="54" fill="rgba(229,179,65,0.2)" stroke="#E5B341" stroke-width="3"/>' +
      '<text x="400" y="220" text-anchor="middle" fill="#E5B341" font-family="sans-serif" font-size="28" font-weight="700">46</text>' +
      '<text x="400" y="305" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="22" font-weight="600">' + safeLabel + '</text>' +
      '<text x="400" y="340" text-anchor="middle" fill="rgba(255,255,255,0.75)" font-family="sans-serif" font-size="15">Buloqboshi tumani 46-IDUM</text>' +
      '</svg>';
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
  }

  function applyImageFallbacks() {
    document.querySelectorAll('img').forEach((img) => {
      if (img.dataset.fallbackBound) return;
      img.dataset.fallbackBound = 'true';

      const handleFail = () => {
        if (img.dataset.fallbackApplied) return;
        img.dataset.fallbackApplied = 'true';
        img.src = createFallbackSvg(img.getAttribute('alt') || '46-IDUM');
      };

      img.addEventListener('error', handleFail);
      if (img.complete && img.naturalWidth === 0) {
        handleFail();
      }
    });
  }
  window.applyImageFallbacks = applyImageFallbacks;

  /* ---------- 2. Loading animatsiyasi ---------- */
  function hideLoader() {
    const loader = document.getElementById('page-loader');
    if (loader && !loader.classList.contains('hidden')) {
      loader.classList.add('hidden');
    }
  }

  window.addEventListener('load', () => setTimeout(hideLoader, 220));
  document.addEventListener('DOMContentLoaded', () => setTimeout(hideLoader, 700));

  /* ---------- 3. Dark / Light Mode ---------- */
  const THEME_KEY = '46-idum-theme';
  const sunIcon =
    '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
  const moonIcon =
    '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
      btn.innerHTML = theme === 'dark' ? sunIcon : moonIcon;
      btn.setAttribute(
        'aria-label',
        theme === 'dark' ? "Yorug' rejimga o'tish" : "Tungi rejimga o'tish"
      );
      btn.setAttribute(
        'title',
        theme === 'dark' ? "Yorug' rejim" : 'Tungi rejim'
      );
    });
  }

  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const initial = saved === 'dark' ? 'dark' : 'light';
    applyTheme(initial);
    document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });
    });
  }

  /* ---------- 4. Mobil Hamburger Menyu ---------- */
  function initMobileNav() {
    const openBtn = document.getElementById('mobileMenuOpen');
    const closeBtn = document.getElementById('mobileMenuClose');
    const drawer = document.getElementById('mobileNavDrawer');
    const backdrop = document.getElementById('mobileNavBackdrop');
    if (!openBtn || !drawer || !backdrop) return;

    function toggleMenu(open) {
      drawer.classList.toggle('open', open);
      backdrop.classList.toggle('open', open);
      openBtn.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    }

    openBtn.addEventListener('click', () => toggleMenu(true));
    if (closeBtn) closeBtn.addEventListener('click', () => toggleMenu(false));
    backdrop.addEventListener('click', () => toggleMenu(false));
    drawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => toggleMenu(false));
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        toggleMenu(false);
      }
    });
  }

  /* ---------- 5. Sticky Header & Back to Top ---------- */
  function initScrollUI() {
    const header = document.querySelector('.site-header');
    const backBtn = document.getElementById('backToTop');

    function onScroll() {
      const y = window.scrollY || window.pageYOffset;
      if (header) header.classList.toggle('scrolled', y > 16);
      if (backBtn) backBtn.classList.toggle('visible', y > 320);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (backBtn) {
      backBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  /* ---------- 6. Scroll Reveal & Interaktiv Statistikalar ---------- */
  function animateCounter(el) {
    if (el.dataset.counted) return;
    el.dataset.counted = 'true';
    const target = parseInt(el.dataset.counter, 10);
    const suffix = el.dataset.suffix || '';
    if (isNaN(target)) return;

    const duration = 1100;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    }
    requestAnimationFrame(step);
  }

  function initRevealAndCounters() {
    const reveals = document.querySelectorAll('.reveal');
    const counters = document.querySelectorAll('[data-counter]');

    if (!('IntersectionObserver' in window)) {
      reveals.forEach((el) => el.classList.add('is-visible'));
      counters.forEach(animateCounter);
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );
    reveals.forEach((el) => revealObserver.observe(el));

    const counterObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    counters.forEach((el) => counterObserver.observe(el));
  }

  /* ---------- 7. Sayt ichida global qidiruv ---------- */
  const SEARCH_INDEX = [
    {
      title: 'Bosh sahifa — 46-IDUM',
      desc: "Maktab haqida umumiy ma'lumot, ko'rsatkichlar, so'nggi yangiliklar va tezkor havolalar.",
      url: 'index.html',
      tag: 'Sahifa',
    },
    {
      title: 'Maktab haqida — Tarix, missiya va infratuzilma',
      desc: "46-sonli ixtisoslashtirilgan davlat umumta'lim maktabi maqsadlari, qadriyatlari va sharoitlari.",
      url: 'about.html',
      tag: 'Bo‘lim',
    },
    {
      title: 'Maktab rahbariyati',
      desc: "Maktab direktori, o'quv va ma'naviy-ma'rifiy ishlar bo'yicha o'rinbosarlar tarkibi.",
      url: 'administration.html',
      tag: 'Rahbariyat',
    },
    {
      title: "O'qituvchilar jamoasi",
      desc: "Fanlar bo'yicha saralash, malaka toifalari va pedagogik tajriba ma'lumotlari.",
      url: 'teachers.html',
      tag: 'Pedagoglar',
    },
    {
      title: 'Yangiliklar va tadbirlar',
      desc: "Fan olimpiadalari, tanlovlar, sport musobaqalari va maktab bayram tadbirlari.",
      url: 'news.html',
      tag: 'Yangiliklar',
    },
    {
      title: 'Foto galereya',
      desc: 'Maktab binosi, sinfxonalar, kutubxona, kompyuter xonasi, sport zali va tadbirlar.',
      url: 'gallery.html',
      tag: 'Galereya',
    },
    {
      title: "O'quvchilar yutuqlari",
      desc: 'Fan olimpiadalari, respublika va viloyat tanlovlari, diplom va sertifikatlar.',
      url: 'achievements.html',
      tag: 'Yutuqlar',
    },
    {
      title: "Qabul va o'quv jarayoni",
      desc: "Qabul tartibi, kerakli hujjatlar, dars jadvali namunasi, fanlar ro'yxati va ariza yuborish.",
      url: 'admission.html',
      tag: 'Qabul',
    },
    {
      title: 'Aloqa va manzil',
      desc: "Buloqboshi tumani manzili, xarita, Telegram havolasi va elektron murojaat formasi.",
      url: 'contact.html',
      tag: 'Aloqa',
    },
    {
      title: 'Matematika va informatika chuqurlashtirilgan fanlari',
      desc: "Ixtisoslashtirilgan sinflar dasturi va o'qituvchilar ro'yxati.",
      url: 'teachers.html?subject=Matematika',
      tag: 'Fan',
    },
    {
      title: "Kerakli hujjatlar ro'yxati (Qabul)",
      desc: "Maktabga hujjat topshirish tartibi va onlayn ariza shakli.",
      url: 'admission.html#hujjatlar',
      tag: 'Hujjatlar',
    },
  ];

  function initGlobalSearch() {
    const modal = document.getElementById('searchModal');
    const input = document.getElementById('globalSearchInput');
    const resultsEl = document.getElementById('globalSearchResults');
    const openBtns = document.querySelectorAll('[data-open-search]');
    const closeBtn = document.getElementById('closeSearchModal');

    if (!modal || !input || !resultsEl) return;

    function renderResults(query) {
      const q = (query || '').trim().toLowerCase();
      const filtered = q
        ? SEARCH_INDEX.filter(
            (item) =>
              item.title.toLowerCase().includes(q) ||
              item.desc.toLowerCase().includes(q) ||
              item.tag.toLowerCase().includes(q)
          )
        : SEARCH_INDEX.slice(0, 6);

      if (!filtered.length) {
        resultsEl.innerHTML =
          '<div class="empty-state" style="padding:24px;">So‘rovingiz bo‘yicha natija topilmadi.</div>';
        return;
      }

      resultsEl.innerHTML = filtered
        .map(
          (item) => `
          <a class="search-result-item" href="${item.url}">
            <div>
              <strong style="display:block;font-size:0.95rem;">${item.title}</strong>
              <span style="font-size:0.82rem;color:var(--color-text-muted);">${item.desc}</span>
            </div>
            <span class="badge badge-primary">${item.tag}</span>
          </a>
        `
        )
        .join('');
    }

    function openModal() {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      renderResults(input.value);
      setTimeout(() => input.focus(), 60);
    }

    function closeModal() {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }

    openBtns.forEach((btn) => btn.addEventListener('click', openModal));
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    input.addEventListener('input', () => renderResults(input.value));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openModal();
      }
    });
  }

  /* ---------- 8. O'qituvchilar va Yutuqlar sahifalarida filtr + qidiruv ---------- */
  function initFilterableCatalogs() {
    // Teachers filtering (teachers.html)
    const teacherGrid = document.getElementById('teachersGrid');
    if (teacherGrid) {
      const cards = Array.from(teacherGrid.querySelectorAll('[data-subject]'));
      const filterBtns = document.querySelectorAll('#teacherFilters .filter-btn');
      const searchInput = document.getElementById('teacherSearchInput');
      const emptyEl = document.getElementById('teachersEmpty');
      let currentSubject = 'all';

      // Check URL param
      const params = new URLSearchParams(window.location.search);
      const subjectParam = params.get('subject');
      if (subjectParam) {
        currentSubject = subjectParam;
        filterBtns.forEach((b) =>
          b.classList.toggle('active', b.dataset.filter === currentSubject)
        );
      }

      function filterTeachers() {
        const q = (searchInput ? searchInput.value : '').trim().toLowerCase();
        let visibleCount = 0;

        cards.forEach((card) => {
          const subject = card.dataset.subject || '';
          const text = card.textContent.toLowerCase();
          const matchSubject =
            currentSubject === 'all' || subject === currentSubject;
          const matchSearch = !q || text.includes(q);
          const show = matchSubject && matchSearch;
          card.style.display = show ? '' : 'none';
          if (show) visibleCount += 1;
        });

        if (emptyEl) {
          emptyEl.style.display = visibleCount === 0 ? 'block' : 'none';
        }
      }

      filterBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          currentSubject = btn.dataset.filter || 'all';
          filterBtns.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          filterTeachers();
        });
      });

      if (searchInput) {
        searchInput.addEventListener('input', filterTeachers);
      }
      filterTeachers();
    }

    // Achievements filtering (achievements.html)
    const achievementsGrid = document.getElementById('achievementsGrid');
    if (achievementsGrid) {
      const cards = Array.from(
        achievementsGrid.querySelectorAll('[data-category]')
      );
      const filterBtns = document.querySelectorAll(
        '#achievementFilters .filter-btn'
      );
      const searchInput = document.getElementById('achievementSearchInput');
      const emptyEl = document.getElementById('achievementsEmpty');
      let currentCat = 'all';

      function filterAchievements() {
        const q = (searchInput ? searchInput.value : '').trim().toLowerCase();
        let visibleCount = 0;

        cards.forEach((card) => {
          const cat = card.dataset.category || '';
          const text = card.textContent.toLowerCase();
          const show =
            (currentCat === 'all' || cat === currentCat) &&
            (!q || text.includes(q));
          card.style.display = show ? '' : 'none';
          if (show) visibleCount += 1;
        });

        if (emptyEl) {
          emptyEl.style.display = visibleCount === 0 ? 'block' : 'none';
        }
      }

      filterBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          currentCat = btn.dataset.filter || 'all';
          filterBtns.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          filterAchievements();
        });
      });

      if (searchInput) {
        searchInput.addEventListener('input', filterAchievements);
      }
    }
  }

  /* ---------- Init All ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    applyImageFallbacks();
    initTheme();
    initMobileNav();
    initScrollUI();
    initRevealAndCounters();
    initGlobalSearch();
    initFilterableCatalogs();
  });
})();
