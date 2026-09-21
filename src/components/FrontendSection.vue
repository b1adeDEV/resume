<script setup>
import { Code2, Layers3, Database, ShieldCheck, Gauge, Smartphone } from 'lucide-vue-next'

const frontendCards = [
  { icon: Code2, title: 'React + TypeScript', text: 'Админ-панели, личные кабинеты, формы, страницы бронирования и пользовательские сценарии.' },
  { icon: Layers3, title: 'Redux Toolkit', text: 'Глобальное состояние через slices: users, orders, tours, auth. RTK Query для API и кэширования.' },
  { icon: ShieldCheck, title: 'Auth & Roles', text: 'JWT-авторизация, loading/error-состояния и роли admin / manager / moderator.' },
  { icon: Database, title: 'API Integration', text: 'REST API, fetch / RTK Query, обновление данных после мутаций и обработка серверных ошибок.' },
  { icon: Gauge, title: 'UX & Performance', text: 'Кэширование запросов, адаптивная вёрстка, валидация форм и аккуратная работа с состояниями.' },
  { icon: Smartphone, title: 'Responsive UI', text: 'Tailwind, HTML5 и CSS3. Интерфейсы адаптируются под разные экраны.' }
]
</script>

<template>
  <section id="frontend" class="section frontend-section">
    <div class="section-label">03 / FRONTEND</div>
    <div class="section-heading frontend-heading">
      <h2>Не только backend.<br><em>Делаю интерфейсы.</em></h2>
      <p>Практический frontend-опыт: компоненты, адаптивная вёрстка, состояние приложения, авторизация, заказы и интеграция с API.</p>
    </div>

    <div class="frontend-terminal">
      <div class="terminal-top">
        <span class="terminal-dot"></span><span class="terminal-dot"></span><span class="terminal-dot"></span>
        <span class="terminal-file">frontend-stack.ts</span><span class="terminal-live">● UI READY</span>
      </div>
      <div class="terminal-body">
        <span><i>const</i> frontend = {</span>
        <span class="indent"><b>framework:</b> <em>'React / Vue 3'</em>,</span>
        <span class="indent"><b>language:</b> <em>'TypeScript / JavaScript'</em>,</span>
        <span class="indent"><b>state:</b> <em>'Redux Toolkit / RTK Query'</em>,</span>
        <span class="indent"><b>styles:</b> <em>'Tailwind / CSS3'</em>,</span>
        <span class="indent"><b>api:</b> <em>'REST / JWT'</em>,</span>
        <span class="indent"><b>workflow:</b> <em>'Git / PR / Code Review'</em></span>
        <span>}</span>
      </div>
    </div>

    <div class="frontend-grid">
      <article v-for="card in frontendCards" :key="card.title" class="frontend-card">
        <div class="frontend-icon"><component :is="card.icon" :size="22" /></div>
        <h3>{{ card.title }}</h3><p>{{ card.text }}</p><span class="card-glow"></span>
      </article>
    </div>

    <div class="frontend-projects">
      <div class="mini-label">REAL PROJECT EXPERIENCE</div>
      <div class="project-row"><div><strong>TabiHunt</strong><span>React · TypeScript · Redux Toolkit · RTK Query · Tailwind</span></div><p>Админка, роли, бронирование, корзина, заказы, личный кабинет и онлайн-оплата.</p></div>
      <div class="project-row"><div><strong>Adalzan</strong><span>React · Redux Toolkit · Node.js · Express · PostgreSQL</span></div><p>Fullstack-приложение с авторизацией, CRUD, формами, API и обработкой состояний.</p></div>
      <div class="project-row"><div><strong>YurtaDom</strong><span>JavaScript · HTML · CSS · React</span></div><p>Пользовательские интерфейсы, внутренние инструменты, новые страницы и компоненты.</p></div>
    </div>
  </section>
</template>
