<template>
  <header class="main-header">
    <RouterLink :to="{name: 'home'}" class="main-header__title">Where in the world?</RouterLink>
    <span 
      class="theme-toggle" role="button"
      @click="switchTheme"
    >
      <div v-if="!isToggled" class="theme-icon">
        <vue-feather type="moon"></vue-feather>
        <span>Dark Mode</span>
      </div>
      <div v-else class="theme-icon">
        <vue-feather type="sun"></vue-feather>
        <span>Light Mode</span>
      </div>
    </span>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isToggled = ref(JSON.parse(localStorage.getItem('toggle-state')))

if (localStorage.getItem('toggle-state') === null) {
  setToggleState(false)
}

function switchTheme() {
  const app = document.getElementById('app-content')

  if (localStorage.getItem('current-theme') === 'light-mode') {
    app.className = 'dark-mode'
    setToggleState(true)
    setLocalTheme(app.className)
  } else {
    app.className = 'light-mode'
    setToggleState(false)
    setLocalTheme(app.className)
  }
}

function setToggleState(status) {
  localStorage.setItem('toggle-state', status)
  isToggled.value = JSON.parse(localStorage.getItem('toggle-state'))
}

function setLocalTheme(theme) {
  localStorage.setItem('current-theme', theme)
}
</script>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as mix;
@use '@/styles/base/colors' as color;

.main-header {
  width: 100%;
  height: 6.4rem;
  padding: 0 2rem;
  box-shadow: 0px 1px 2px rgba(color.$black, 0.15);
  @include mix.position(relative);
  @include mix.mode-colors(var(--fontColor));
  @include mix.flex-center;
  justify-content: space-between;

  @include mix.device-min(1100px) { padding: 0 15rem; }

  &__title {
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 800;
    color: inherit;

    @include mix.device-min(1100px) { font-size: 1.8rem; }
  }
}

.theme-icon {
  @include mix.flex-center;    
  cursor: pointer;
  font-weight: 600;

  span { margin-left: 1rem; }
}
</style>