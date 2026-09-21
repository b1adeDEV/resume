<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import StackSection from './components/StackSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import SpecializationSection from './components/SpecializationSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import { navigation } from './data/navigation'

const activeSection = ref('home')
const scrolled = ref(false)

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function updateScrollState() {
  scrolled.value = window.scrollY > 30

  const currentPosition = window.scrollY + 180
  const sections = navigation
    .map(({ id }) => document.getElementById(id))
    .filter(Boolean)

  activeSection.value =
    [...sections].reverse().find((section) => section.offsetTop <= currentPosition)?.id ?? 'home'
}

onMounted(() => window.addEventListener('scroll', updateScrollState, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', updateScrollState))
</script>

<template>
  <div class="site">
    <div class="noise" aria-hidden="true"></div>
    <div class="orb orb-a" aria-hidden="true"></div>
    <div class="orb orb-b" aria-hidden="true"></div>
    <div class="background-elements" aria-hidden="true">
      <div class="bg-orbit orbit-one"></div><div class="bg-orbit orbit-two"></div><div class="bg-orbit orbit-three"></div>
      <div class="bg-cross cross-one"></div><div class="bg-cross cross-two"></div><div class="bg-cross cross-three"></div>
      <div class="bg-scan scan-one"></div><div class="bg-scan scan-two"></div>
      <pre class="bg-code code-one">01 NODE // API
02 VUE  // UI
03 SQL  // DATA
04 REDIS // CACHE
05 RAGE // GAME</pre>
      <pre class="bg-code code-two">GET /api/tours
POST /api/orders
AUTH / JWT
CACHE / RTK QUERY
WS / SOCKET.IO</pre>
      <pre class="bg-code code-three">const stack = {
  frontend: "React + Vue",
  backend: "Node + Go",
  infra: "Docker + Linux"
}</pre>
      <span class="bg-pulse pulse-one"></span><span class="bg-pulse pulse-two"></span><span class="bg-pulse pulse-three"></span>
    </div>

    <SiteHeader
      :navigation="navigation"
      :active-section="activeSection"
      :scrolled="scrolled"
      @navigate="scrollToSection"
    />

    <main>
      <HeroSection @navigate="scrollToSection" />
      <AboutSection />
      <StackSection />
      <ExperienceSection />
      <SpecializationSection />
      <ContactSection />
    </main>

    <SiteFooter />
  </div>
</template>