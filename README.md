# Denis Fedoruk — Developer Portfolio

Одностраничный сайт-визитка Дениса Федорука, собранный на **Vue 3 + Vite**.

Проект ориентирован на позиционирование **Middle Fullstack Developer** с backend-фокусом: Node.js / TypeScript / NestJS, SQL, Redis, RabbitMQ, Docker и Linux.

## Что исправлено

В предыдущей версии Vue-компонент лежал в проекте без корректной Vite-конфигурации для `.vue`, поэтому Vite воспринимал шаблон компонента как обычный JavaScript.

Теперь подключён официальный Vue-плагин:

- `@vitejs/plugin-vue`
- `vite.config.js`
- Vue SFC (`.vue`) корректно компилируются во время `dev` и `build`

## Архитектура

```text
src/
├── components/
│   ├── AboutSection.vue
│   ├── ContactSection.vue
│   ├── ExperienceSection.vue
│   ├── HeroSection.vue
│   ├── SiteFooter.vue
│   ├── SiteHeader.vue
│   ├── SpecializationSection.vue
│   └── StackSection.vue
│
├── data/
│   ├── experience.js
│   ├── navigation.js
│   └── stack.js
│
├── styles/
│   └── index.css
│
├── App.vue
└── main.js
```

### Почему так

`App.vue` отвечает только за композицию страницы и глобальную навигацию.

Секции страницы вынесены в отдельные компоненты. Контент, который может меняться независимо от UI, вынесен в `src/data`.

Это позволяет без превращения проекта в монолит отдельно менять:

- опыт работы;
- стек;
- навигацию;
- Hero;
- контакты;
- отдельные визуальные секции.

## Запуск

Требуется Node.js 18+.

```bash
npm install
npm run dev
```

Открой:

```text
http://localhost:5173
```

## Production build

Проверка production-сборки:

```bash
npm run build
```

Результат будет создан в:

```text
dist/
```

Локальный просмотр production build:

```bash
npm run preview
```

## Основные технологии

- Vue 3
- Vite
- JavaScript
- Vue SFC
- Lucide Vue Next
- CSS animations
- Responsive CSS

## Backend positioning

На сайте отдельно выделен backend-фокус:

- Node.js
- TypeScript
- NestJS
- MySQL
- MariaDB
- SQL
- Redis
- RabbitMQ
- Docker
- Linux
- REST API
- RAGE MP
- Alt:V
- FiveM
- ScriptHook / native GTA APIs

## Контакты

- GitHub: https://github.com/b1adeDEV
- Telegram: https://t.me/nnevermlnd
- Email: nightsin08@gmail.com

## License

Personal portfolio project.


### Visual refresh
- Neon purple / red visual system
- Larger typography throughout the portfolio
- Animated glow, floating code panel, hover lighting, timeline accents and grid background
- GTA specialization narrowed to RAGE MP only
- Work-experience technology tags enlarged for readability

- Расширенный Frontend-раздел по данным резюме: React, TypeScript, Redux Toolkit, RTK Query, Tailwind, JWT, REST API, адаптивность и реальные проекты.
- Добавлены атмосферные orbit / scan / grid / code фоновые элементы и неоновые анимации.


### Fullstack redesign
- Frontend and backend stacks are unified into one Fullstack Stack section.
- Experience is explicitly split into separate Backend and Frontend columns.
- Darker black/purple/red visual system with additional animated atmospheric elements.
- Technology cards use clickable logo images linked to technology documentation/sites.
