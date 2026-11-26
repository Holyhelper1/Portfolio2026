# 🧑‍💻 Alexander Shulgin — Portfolio 2026

[![Live Demo](https://img.shields.io/badge/🚀_Open_Live_Site-2D7EE9?style=for-the-badge&logo=vercel&logoColor=white)](https://holyhelper1.github.io/Portfolio2026/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

Портфолио fullstack / AI product инженера: коммерческие веб-продукты и AI-сервисы под ключ. Главный кейс — **CAPSULA AI**: цифровой гардероб с виртуальной примеркой, подписками и платежами. Построено на **React + TypeScript + Vite**, размещено на **GitHub Pages**.

<p align="center">
  <a href="https://holyhelper1.github.io/Portfolio2026/" target="_blank">
    <strong>🌐 Открыть сайт в новой вкладке</strong>
  </a>
</p>

---

## ✨ Особенности

- ⚡ **Статический пререндер** — HTML с контентом на этапе сборки, гидратация на клиенте
- 🎨 **Гибкий дизайн** — плавные переходы, стеклянная морфология, кастомный скроллбар
- 🌗 **Тёмная / Светлая тема** — автоопределение предпочтений ОС, сохранение выбора
- 📱 **Полная адаптивность** — от смартфона до 4K-монитора
- 🧩 **Интерактивные блоки** — появление элементов при скролле (Staggered Reveal), ховер-эффекты
- 🖼️ **Лайтбокс для скриншотов** — увеличение изображений проектов
- 🔍 **SEO** — title, description, canonical, OpenGraph, Twitter, JSON-LD, robots.txt, sitemap.xml, OG-обложка
- 🌐 **RU / EN** — переключение языка с сохранением выбора

---

## 🛠️ Технологический стек

| Категория        | Инструменты                                                                 |
|------------------|-----------------------------------------------------------------------------|
| **Языки**        | TypeScript, JavaScript (ES6+), HTML5, CSS3, SQL                             |
| **Фреймворки**   | React 19, Vite 6, Next.js, Redux Toolkit, RTK Query                         |
| **Стилизация**   | CSS Modules, CSS Custom Properties, современный CSS (Flex/Grid, анимации)   |
| **Инструменты**  | Git, GitHub Pages, Docker, Prisma, S3                                       |
| **Тестирование** | Playwright, Jest                                                            |

---

## 🚀 Сборка и деплой

```bash
npm install
npm run dev      # локальная разработка
npm run build    # tsc + клиентская сборка + SSR-сборка + пререндер
npm run preview  # предпросмотр production-сборки
npm run deploy   # публикация dist на GitHub Pages
```

Сборка проходит в три шага: `vite build` → `vite build --ssr` → `node scripts/prerender.mjs`. Скрипт пререндера подставляет отрендеренный React-разметку в `dist/index.html`, поэтому поисковые роботы получают готовый контент без выполнения JavaScript.
