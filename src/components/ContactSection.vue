<script setup>
import { ArrowUpRight, Github, Mail, Send } from 'lucide-vue-next'
</script>

<template>
  <section id="contact" class="section contact">
    <div class="contact-inner">
      <div class="section-label">05 / CONTACT</div>
      <h2>Есть идея?<br><em>Давайте обсудим.</em></h2>
      <p>Открыт к backend, fullstack и интересным продуктовым задачам.</p>

      <div class="contact-links">
        <a href="mailto:nightsin08@gmail.com">
          <Mail :size="19" /> nightsin08@gmail.com <ArrowUpRight :size="16" />
        </a>
        <a href="https://t.me/nnevermlnd" target="_blank" rel="noreferrer">
          <Send :size="19" /> @nnevermlnd <ArrowUpRight :size="16" />
        </a>
        <a href="https://github.com/b1adeDEV" target="_blank" rel="noreferrer">
          <Github :size="19" /> github.com/b1adeDEV <ArrowUpRight :size="16" />
        </a>
      </div>
    </div>
  </section>
</template>