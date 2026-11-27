/* ==========================================================================
   46-IDUM — Foto Galereya va Lightbox Moduli (gallery.js)
   ========================================================================== */

(function () {
  'use strict';

  const GALLERY_ITEMS = [
    {
      id: 'gal-building',
      category: 'Maktab binosi',
      title: '46-IDUM asosiy o‘quv binosi (namuna ko‘rinish)',
      desc: "Maktab hovlisi va asosiy kirish qismi (haqiqiy maktab rasmi bilan almashtirilishi mumkin).",
      src: 'images/school/hero-school.jpg',
    },
    {
      id: 'gal-classroom',
      category: 'Sinfxonalar',
      title: 'Zamonaviy jihozlangan ixtisoslashtirilgan sinfxona',
      desc: "O'quvchilar uchun yorug' va qulay o'quv muhiti.",
      src: 'images/gallery/classroom.jpg',
    },
    {
      id: 'gal-library',
      category: 'Kutubxona',
      title: 'Maktab axborot-resurs markazi va kutubxonasi',
      desc: "Darsliklar, ilmiy va badiiy adabiyotlar fondi.",
      src: 'images/gallery/library.jpg',
    },
    {
      id: 'gal-computer',
      category: 'Kompyuter xonasi',
      title: 'Axborot texnologiyalari va dasturlash laboratoriyasi',
      desc: "Zamonaviy kompyuterlar bilan jihozlangan informatika xonasi.",
      src: 'images/gallery/computer-lab.jpg',
    },
    {
      id: 'gal-sport',
      category: 'Sport zali',
      title: 'Yopiq sport majmuasi',
      desc: "Basketbol, voleybol va jismoniy tarbiya mashg'ulotlari zali.",
      src: 'images/gallery/sports-hall.jpg',
    },
    {
      id: 'gal-science',
      category: 'O‘quvchilar faoliyati',
      title: 'Tabiiy fanlar laboratoriyasida amaliy mashg‘ulot',
      desc: "Fizika, kimyo va biologiya fanlaridan tajriba xonasi.",
      src: 'images/gallery/science-lab.jpg',
    },
    {
      id: 'gal-event',
      category: 'Tadbirlar',
      title: 'Maktab ma’naviy-ma’rifiy tadbirlari',
      desc: "O'quvchilarning sahna chiqishlari va jamoaviy loyihalari.",
      src: 'images/gallery/event-ceremony.jpg',
    },
    {
      id: 'gal-olympiad',
      category: 'O‘quvchilar faoliyati',
      title: 'Fan olimpiadasiga tayyorgarlik jarayoni',
      desc: "Iqtidorli o'quvchilar bilan qo'shimcha mashg'ulotlar.",
      src: 'images/news/olympiad.jpg',
    },
    {
      id: 'gal-holiday',
      category: 'Bayramlar',
      title: 'Tantanali bayram va taqdirlash marosimi',
      desc: "Faol va a'lochi o'quvchilarni taqdirlash lahzalari.",
      src: 'images/achievements/trophy.jpg',
    },
  ];

  let activeList = GALLERY_ITEMS;
  let currentIndex = 0;

  function renderGalleryCards(container, items) {
    container.innerHTML = items
      .map(
        (item, idx) => `
        <button type="button" class="gallery-item" data-gallery-idx="${idx}" aria-label="${item.title} rasmini kattalashtirish">
          <img src="${item.src}" alt="${item.title}" loading="lazy">
          <div class="gallery-overlay">
            <span class="gallery-cat">${item.category}</span>
            <span class="gallery-title">${item.title}</span>
          </div>
        </button>
      `
      )
      .join('');
    if (window.applyImageFallbacks) window.applyImageFallbacks();
  }

  function updateLightboxView() {
    const item = activeList[currentIndex];
    if (!item) return;
    const imgEl = document.getElementById('lightboxImg');
    const titleEl = document.getElementById('lightboxTitle');
    const descEl = document.getElementById('lightboxDesc');
    const counterEl = document.getElementById('lightboxCounter');

    if (imgEl) {
      imgEl.src = item.src;
      imgEl.alt = item.title;
    }
    if (titleEl) titleEl.textContent = item.title;
    if (descEl) descEl.textContent = item.desc;
    if (counterEl) counterEl.textContent = `${currentIndex + 1} / ${activeList.length}`;
  }

  function openLightbox(index) {
    const modal = document.getElementById('lightboxModal');
    if (!modal || !activeList.length) return;
    currentIndex = (index + activeList.length) % activeList.length;
    updateLightboxView();
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function initLightboxEvents() {
    const modal = document.getElementById('lightboxModal');
    if (!modal) return;
    const closeBtn = document.getElementById('lightboxClose');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + activeList.length) % activeList.length;
        updateLightboxView();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % activeList.length;
        updateLightboxView();
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + activeList.length) % activeList.length;
        updateLightboxView();
      }
      if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % activeList.length;
        updateLightboxView();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initLightboxEvents();

    // Home page preview gallery
    const homeGalleryGrid = document.getElementById('homeGalleryGrid');
    if (homeGalleryGrid) {
      activeList = GALLERY_ITEMS.slice(0, 6);
      renderGalleryCards(homeGalleryGrid, activeList);
      homeGalleryGrid.addEventListener('click', (e) => {
        const card = e.target.closest('[data-gallery-idx]');
        if (card) openLightbox(parseInt(card.dataset.galleryIdx, 10));
      });
    }

    // Full gallery page
    const galleryGrid = document.getElementById('galleryGrid');
    if (galleryGrid) {
      const filterBtns = document.querySelectorAll('#galleryFilters .filter-btn');
      const emptyEl = document.getElementById('galleryEmpty');

      function applyGalleryFilter(category) {
        activeList =
          category === 'all'
            ? GALLERY_ITEMS
            : GALLERY_ITEMS.filter((item) => item.category === category);
        renderGalleryCards(galleryGrid, activeList);
        if (emptyEl) {
          emptyEl.style.display = activeList.length === 0 ? 'block' : 'none';
        }
      }

      filterBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          filterBtns.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          applyGalleryFilter(btn.dataset.filter || 'all');
        });
      });

      galleryGrid.addEventListener('click', (e) => {
        const card = e.target.closest('[data-gallery-idx]');
        if (card) openLightbox(parseInt(card.dataset.galleryIdx, 10));
      });

      applyGalleryFilter('all');
    }
  });
})();
