<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
import { stack } from '../data/stack'

const groups = [
  { key: 'Frontend', title: 'Frontend', desc: 'Интерфейсы, состояние и UX' },
  { key: 'Backend', title: 'Backend', desc: 'API, сервисы и данные' },
  { key: 'DevOps', title: 'DevOps', desc: 'Среда, контейнеры и серверы' },
  { key: 'Game API', title: 'Game / API', desc: 'Multiplayer server-side' }
]
</script>

<template>
  <section id="stack" class="section stack-section">
    <div class="section-label">03 / FULLSTACK STACK</div>
    <div class="section-heading">
      <h2>Один стек.<br><em>Два мира.</em></h2>
      <p>Frontend + backend + инфраструктура — без ощущения двух разных резюме.</p>
    </div>

    <div class="stack-groups">
      <div v-for="group in groups" :key="group.key" class="stack-group">
        <div class="stack-group-title">
          <div><strong>{{ group.title }}</strong><span>{{ group.desc }}</span></div>
          <b>0{{ groups.indexOf(group)+1 }}</b>
        </div>
        <div class="stack-grid">
          <article v-for="item in stack.filter(x => x.type === group.key)" :key="item.name" class="stack-card">
            <a class="stack-icon" :href="item.url" target="_blank" rel="noreferrer" :title="`Открыть ${item.name}`"><img :src="item.logo" :alt="item.name" /></a>
            <div class="stack-type">{{ item.level }}</div>
            <h3>{{ item.name }}</h3>
            <ArrowUpRight class="stack-arrow" :size="18" />
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
