<script setup>
import { ArrowUpRight, Server, Monitor } from 'lucide-vue-next'
import { backendExperience, frontendExperience } from '../data/experience'

const groups = [
  { key: 'backend', title: 'Backend', subtitle: 'API · Services · Data · Infrastructure', icon: Server, items: backendExperience },
  { key: 'frontend', title: 'Frontend', subtitle: 'UI · State · UX · API integration', icon: Monitor, items: frontendExperience }
]
</script>

<template>
  <section id="experience" class="section experience-section">
    <div class="section-label">05 / EXPERIENCE</div>
    <div class="section-heading">
      <h2>Fullstack<br><em>на практике.</em></h2>
      <p>Два направления, один подход: понимаю интерфейс, API, данные и то, как всё это работает вместе.</p>
    </div>

    <div class="experience-columns">
      <div v-for="group in groups" :key="group.key" class="experience-column" :class="group.key">
        <div class="experience-column-head">
          <div class="experience-column-icon"><component :is="group.icon" :size="24" /></div>
          <div>
            <h3>{{ group.title }}</h3>
            <span>{{ group.subtitle }}</span>
          </div>
        </div>

        <article v-for="job in group.items" :key="`${group.key}-${job.company}-${job.period}`" class="experience-card">
          <div class="experience-card-top">
            <span>{{ job.period }}</span><i></i><span>{{ job.company }}</span>
          </div>
          <h4>{{ job.role }}</h4>
          <p>{{ job.text }}</p>
          <div class="experience-tags">
            <span v-for="tag in job.tags" :key="tag">{{ tag }}</span>
          </div>
          <ArrowUpRight class="experience-arrow" :size="20" />
        </article>
      </div>
    </div>
  </section>
</template>
