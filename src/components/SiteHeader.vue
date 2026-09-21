<script setup>
import { ArrowUpRight } from 'lucide-vue-next'

defineProps({
  navigation: { type: Array, required: true },
  activeSection: { type: String, required: true },
  scrolled: { type: Boolean, default: false }
})

const emit = defineEmits(['navigate'])
</script>

<template>
  <header :class="{ scrolled }">
    <a class="logo" href="#home" @click.prevent="emit('navigate', 'home')">
      <span class="logo-mark">BD</span>
      <span>B1ADE<span class="muted">.DEV</span></span>
    </a>

    <nav aria-label="Основная навигация">
      <a
        v-for="item in navigation"
        :key="item.id"
        :class="{ active: activeSection === item.id }"
        :href="`#${item.id}`"
        @click.prevent="emit('navigate', item.id)"
      >
        {{ item.label }}
      </a>
    </nav>

    <a class="header-cta" href="#contact" @click.prevent="emit('navigate', 'contact')">
      Связаться <ArrowUpRight :size="16" />
    </a>
  </header>
</template>