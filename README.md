# 46-IDUM Rasmiy Veb-sayti

O‘zbekiston Respublikasi Andijon viloyati Buloqboshi tumanida joylashgan **46-sonli ixtisoslashtirilgan davlat umumta'lim maktabi (46-IDUM)** uchun yaratilgan zamonaviy, moslashuvchan (responsive) veb-portal.

## Texnologiyalar
- **HTML5** — semantik tuzilma
- **CSS3** — CSS Grid, Flexbox, CSS o‘zgaruvchilar, Dark/Light rejim, scroll animatsiyalar
- **Vanilla JavaScript** — mobil menyu, global qidiruv, filtrlash, Lightbox galereya, yangiliklar modali, formalar validatsiyasi, interaktiv statistikalar

## Loyiha tuzilmasi
```text
46-idum/
├── index.html
├── about.html
├── administration.html
├── teachers.html
├── news.html
├── gallery.html
├── achievements.html
├── admission.html
├── contact.html
├── 404.html
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
├── js/
│   ├── main.js
│   ├── gallery.js
│   ├── news.js
│   └── form.js
├── images/
│   ├── logo.png
│   ├── school/
│   ├── teachers/
│   ├── news/
│   ├── gallery/
│   └── achievements/
└── README.md
```

## Ishga tushirish bo‘yicha ko‘rsatma
1. **Oddiy usul (VS Code Live Server):**
   - `46-idum` papkasini VS Code da oching.
   - `index.html` faylida **"Open with Live Server"** tugmasini bosing.
2. **Node.js lokal server orqali:**
   - Terminalda `46-idum` papkasiga kiring va quyidagi buyruqni ishga tushiring:
     ```bash
     npx serve .
     ```
3. **Ma’lumotlarni tahrirlash:**
   - Barcha namunaviy raqamlar, xodimlar F.I.Sh., aloqa maydonlari (`[...]` ichida belgilangan) va rasmlarni `images/` papkasidagi mos fayllar bilan almashtirish orqali saytni to‘liq maktabning haqiqiy ma’lumotlariga moslashtirish mumkin.
