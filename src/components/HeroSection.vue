<script setup>
import { ArrowUpRight, Github, MapPin, Server, Database, Terminal, ChevronDown } from 'lucide-vue-next'

const emit = defineEmits(['navigate'])
</script>

<template>
  <section id="home" class="hero section">
    <div class="hero-copy reveal">
      <div class="eyebrow"><span class="dot"></span> AVAILABLE FOR WORK</div>
      <h1>Fullstack<br><em>Developer.</em></h1>
      <p class="hero-text">
        Разрабатываю современные веб-приложения и backend-сервисы.
        Фокус — <strong>Node.js / TypeScript</strong>, архитектура,
        API и производительные интерфейсы на Vue.js.
      </p>

      <div class="hero-actions">
        <a class="btn primary" href="#contact" @click.prevent="emit('navigate', 'contact')">
          Обсудить проект <ArrowUpRight :size="18" />
        </a>
        <a class="btn ghost" href="https://github.com/b1adeDEV" target="_blank" rel="noreferrer">
          <Github :size="18" /> GitHub
        </a>
      </div>

      <div class="quick-facts">
        <span><MapPin :size="15" /> Алматы, Казахстан</span>
        <span>2+ года в разработке</span>
        <span>RU · EN B1</span>
      </div>
    </div>

    <div class="hero-visual reveal delay">
      <div class="code-window">
        <div class="window-top">
          <div class="window-dots"><i></i><i></i><i></i></div>
          <span>server.ts</span>
          <span class="window-status">● live</span>
        </div>

        <pre><code><span class="pink">import</span> { <span class="blue">NestFactory</span> }
  <span class="pink">from</span> <span class="green">'@nestjs/core'</span>

<span class="pink">async function</span> <span class="yellow">bootstrap</span>() {
  <span class="pink">const</span> app =
    <span class="pink">await</span> <span class="blue">NestFactory</span>.<span class="yellow">create</span>(
      AppModule
    )

  <span class="pink">await</span> app.<span class="yellow">listen</span>(<span class="orange">3000</span>)
}

<span class="yellow">bootstrap</span>()</code></pre>

        <div class="code-footer">
          <span><Terminal :size="14" /> node / typescript</span>
          <span>API ready</span>
        </div>
      </div>

      <div class="floating-card card-one">
        <Server :size="18" />
        <span>API<br><b>REST / WebSocket</b></span>
      </div>

      <div class="floating-card card-two">
        <Database :size="18" />
        <span>Data<br><b>SQL / Redis</b></span>
      </div>
    </div>

    <div class="scroll-cue"><ChevronDown :size="18" /> SCROLL TO EXPLORE</div>
  </section>
</template>