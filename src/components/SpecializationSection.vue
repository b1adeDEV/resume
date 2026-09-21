<script setup>
import { Gamepad2 } from 'lucide-vue-next'
</script>

<template>
  <section class="section game-api">
    <div class="game-grid">
      <div>
        <div class="section-label">04 / SPECIALIZATION</div>
        <h2>GTA multiplayer<br><em>& RAGE MP.</em></h2>
      </div>

      <div>
        <p class="lead">Backend-разработка для игровых проектов и интеграция с multiplayer-платформами.</p>

        <div class="game-list">
          <div>
            <Gamepad2 :size="22" />
            <span>RAGE MP</span>
            <small>API / server-side</small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
