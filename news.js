/* ==========================================================================
   46-IDUM — Yangiliklar va Batafsil Ko'rish Moduli (news.js)
   ========================================================================== */

(function () {
  'use strict';

  const NEWS_ITEMS = [
    {
      id: 'olimpiada-viloyat',
      category: 'Olimpiadalar',
      date: 'Namuna sana: 2026-yil, noyabr',
      title: 'Matematika va informatika fanlaridan tuman va viloyat olimpiadasi tayyorgarligi',
      summary:
        "46-IDUMning ixtisoslashtirilgan sinf o'quvchilari uchun chuqurlashtirilgan fan to'garaklari va sinov olimpiadalari tashkil etildi.",
      body: [
        "Ushbu maqola sayt administratoriga yangiliklarni joylashtirish tartibini ko'rsatish uchun namunaviy material sifatida keltirilgan.",
        "46-sonli ixtisoslashtirilgan davlat umumta'lim maktabida iqtidorli o'quvchilarni asosiy fan olimpiadalariga tayyorlash bo'yicha haftalik qo'shimcha mashg'ulotlar yo'lga qo'yilgan. Mashg'ulotlarda mantiqiy masalalar yechish, algoritmik fikrlash va amaliy laboratoriya topshiriqlariga alohida e'tibor qaratiladi.",
        "Maktab ma'muriyati ushbu bo'limga haqiqiy olimpiada natijalari, g'olib o'quvchilar ro'yxati va rasmiy fotosuratlarni istalgan vaqtda joylashtirishi mumkin."
      ],
      image: 'images/news/olympiad.jpg',
      alt: "O'quvchilar fan olimpiadasi jarayonida",
      isSample: true,
    },
    {
      id: 'axborot-texnologiyalari-haftaligi',
      category: 'Tanlovlar',
      date: 'Namuna sana: 2026-yil, oktyabr',
      title: 'Zamonaviy kompyuter xonasida yosh dasturchilar ko‘rik-tanlovi',
      summary:
        "Maktabning axborot texnologiyalari to'garagi a'zolari o'rtasida veb-dasturlash va mantiqiy loyihalar taqdimoti o'tkazilishi rejalashtirilgan.",
      body: [
        "Tanlov doirasida o'quvchilar HTML, CSS, JavaScript hamda algoritmik masalalar bo'yicha o'z loyihalarini taqdim etishadi.",
        "Kompyuter laboratoriyasida o'quvchilarning amaliy ko'nikmalarini rivojlantirish uchun muntazam ravishda mahorat darslari tashkil etiladi. Ushbu xabar namunaviy ko'rinishda berilgan bo'lib, haqiqiy tanlov sanalari va g'oliblari ma'muriyat tomonidan yangilanadi."
      ],
      image: 'images/gallery/computer-lab.jpg',
      alt: 'Maktab kompyuter xonasi',
      isSample: true,
    },
    {
      id: 'kitobxonlik-madaniyati',
      category: 'Tadbirlar',
      date: 'Namuna sana: 2026-yil, oktyabr',
      title: '“Kitob — bilim bulog‘i” nomli ma’naviy-ma’rifiy haftalik',
      summary:
        "Maktab kutubxonasida badiiy va ilmiy-ommabop adabiyotlar ko'rgazmasi hamda eng faol kitobxonlar davra suhbati tashkil etiladi.",
      body: [
        "Ma'naviy-ma'rifiy ishlar doirasida o'quvchilarda mutolaa madaniyatini oshirish maqsadida kutubxonada yangi adabiyotlar taqdimoti va badiiy o'qish kechalari o'tkaziladi.",
        "Ushbu e'lon namuna bo'lib, maktabda o'tkaziladigan haqiqiy tadbirlar va kun tartibi bo'yicha ma'lumotlar bilan almashtirilishi mumkin."
      ],
      image: 'images/gallery/library.jpg',
      alt: 'Maktab kutubxonasi',
      isSample: true,
    },
    {
      id: 'sport-musobaqalari',
      category: 'Sport',
      date: 'Namuna sana: 2026-yil, sentyabr',
      title: 'Sinf jamoalari o‘rtasida “Sog‘lom avlod” sport musobaqalari',
      summary:
        "Maktab sport zalida basketbol, voleybol va shaxmat yo'nalishlari bo'yicha sinflararo bellashuvlar o'tkazilishi belgilangan.",
      body: [
        "Jismoniy tarbiya va sport o'quvchilarning sog'lom o'sishi hamda jamoaviy ruhni mustahkamlashda muhim ahamiyatga ega.",
        "Musobaqa yakunlari va g'olib jamoalar haqidagi haqiqiy ma'lumotlar keyinchalik maktab ma'muriyati tomonidan kiritiladi."
      ],
      image: 'images/gallery/sports-hall.jpg',
      alt: 'Maktab sport zali',
      isSample: true,
    },
    {
      id: 'ustozlar-kuni',
      category: 'Bayramlar',
      date: 'Namuna sana: 1-oktyabr',
      title: 'O‘qituvchi va murabbiylar kuniga bag‘ishlangan bayram tadbiri',
      summary:
        "Ustozlarga ehtirom ko'rsatish, o'quvchilarning ijodiy chiqishlari va faxriy yorliqlar topshirish marosimi dasturi.",
      body: [
        "Har yili 1-oktyabr — O'qituvchi va murabbiylar kuni munosabati bilan maktabda tantanali tadbir va badiiy dasturlar tashkil etiladi.",
        "Ushbu kartochka bayram tadbirlari bo'limini namoyish etish uchun namunaviy ma'lumot sifatida yaratilgan."
      ],
      image: 'images/gallery/event-ceremony.jpg',
      alt: 'Maktab bayram tadbiri',
      isSample: true,
    },
    {
      id: 'tabiiy-fanlar-tajriba',
      category: 'Tadbirlar',
      date: 'Namuna sana: 2026-yil, sentyabr',
      title: 'Kimyo va fizika laboratoriyalarida amaliy mashg‘ulotlar kuni',
      summary:
        "Yuqori sinf o'quvchilari uchun zamonaviy laboratoriya jihozlaridan foydalangan holda ochiq amaliy darslar o'tkazildi.",
      body: [
        "Ixtisoslashtirilgan sinflarda nazariy bilimlarni amaliyot bilan uyg'unlashtirishga katta e'tibor beriladi.",
        "Ma'muriyat bu yerga haqiqiy ochiq darslar va ilmiy loyiha kunlari haqidagi hisobotlarni kiritishi mumkin."
      ],
      image: 'images/gallery/science-lab.jpg',
      alt: 'Maktab laboratoriya xonasi',
      isSample: true,
    },
  ];

  function createNewsCardHTML(item) {
    return `
      <article class="card reveal is-visible" data-news-id="${item.id}">
        <div class="card-media">
          <span class="card-badge-float">${item.category}</span>
          <img src="${item.image}" alt="${item.alt}" loading="lazy">
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline;vertical-align:-2px;margin-right:4px;"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg>
              ${item.date}
            </span>
            ${item.isSample ? '<span class="badge badge-sample">Namuna</span>' : ''}
          </div>
          <h3 class="card-title">${item.title}</h3>
          <p class="card-text">${item.summary}</p>
          <div class="card-footer">
            <button type="button" class="btn btn-outline btn-sm" data-news-open="${item.id}">
              Batafsil
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function openNewsModal(itemId) {
    const modal = document.getElementById('newsModal');
    if (!modal) {
      window.location.href = 'news.html?id=' + encodeURIComponent(itemId);
      return;
    }

    const item = NEWS_ITEMS.find((n) => n.id === itemId);
    if (!item) return;

    const imgEl = document.getElementById('newsModalImg');
    const catEl = document.getElementById('newsModalCategory');
    const dateEl = document.getElementById('newsModalDate');
    const titleEl = document.getElementById('newsModalTitle');
    const bodyEl = document.getElementById('newsModalBody');

    if (imgEl) {
      imgEl.src = item.image;
      imgEl.alt = item.alt;
    }
    if (catEl) catEl.textContent = item.category;
    if (dateEl) dateEl.textContent = item.date;
    if (titleEl) titleEl.textContent = item.title;
    if (bodyEl) {
      bodyEl.innerHTML =
        item.body.map((p) => `<p style="margin-bottom:12px;">${p}</p>`).join('') +
        (item.isSample
          ? '<p class="placeholder-tag" style="margin-top:8px;">Eslatma: Ushbu yangilik namunaviy matn bo‘lib, haqiqiy ma’lumotlar maktab ma’muriyati tomonidan kiritiladi.</p>'
          : '');
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (window.applyImageFallbacks) window.applyImageFallbacks();
  }

  function initNewsModalEvents() {
    const modal = document.getElementById('newsModal');
    if (!modal) return;
    const closeBtn = document.getElementById('closeNewsModal');

    function close() {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (closeBtn) closeBtn.addEventListener('click', close);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) close();
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initNewsModalEvents();

    // Home page preview
    const homeGrid = document.getElementById('homeNewsGrid');
    if (homeGrid) {
      homeGrid.innerHTML = NEWS_ITEMS.slice(0, 3).map(createNewsCardHTML).join('');
    }

    // Full News page
    const newsGrid = document.getElementById('newsGrid');
    if (newsGrid) {
      const filterBtns = document.querySelectorAll('#newsFilters .filter-btn');
      const searchInput = document.getElementById('newsSearchInput');
      const emptyEl = document.getElementById('newsEmpty');
      let currentCategory = 'all';

      function renderNews() {
        const q = (searchInput ? searchInput.value : '').trim().toLowerCase();
        const filtered = NEWS_ITEMS.filter((item) => {
          const matchCat =
            currentCategory === 'all' || item.category === currentCategory;
          const matchSearch =
            !q ||
            item.title.toLowerCase().includes(q) ||
            item.summary.toLowerCase().includes(q) ||
            item.category.toLowerCase().includes(q);
          return matchCat && matchSearch;
        });

        newsGrid.innerHTML = filtered.map(createNewsCardHTML).join('');
        if (emptyEl) {
          emptyEl.style.display = filtered.length === 0 ? 'block' : 'none';
        }
        if (window.applyImageFallbacks) window.applyImageFallbacks();
      }

      filterBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          currentCategory = btn.dataset.filter || 'all';
          filterBtns.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          renderNews();
        });
      });

      if (searchInput) {
        searchInput.addEventListener('input', renderNews);
      }

      renderNews();

      // Open specific news item if ?id=... is in URL
      const params = new URLSearchParams(window.location.search);
      const idParam = params.get('id');
      if (idParam) {
        openNewsModal(idParam);
      }
    }

    // Delegate "Batafsil" clicks
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-news-open]');
      if (btn) {
        openNewsModal(btn.dataset.newsOpen);
      }
    });

    if (window.applyImageFallbacks) window.applyImageFallbacks();
  });
})();
