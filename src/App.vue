<template>
  <div id="app-content" :class="toggledTheme">
    <AppHeader />
    <RouterView />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { useCountriesStore } from './store/countries.js'
import AppHeader from '@/components/layout/AppHeader.vue'

const toggledTheme = ref(localStorage.getItem('current-theme'))

if (localStorage.getItem('current-theme') == null) {
  localStorage.setItem('current-theme', 'light-mode')
  toggledTheme.value = localStorage.getItem('current-theme')
}
const store = useCountriesStore()
const { loadCountries } = store
loadCountries()
</script>

<style lang="scss">
.light-mode {
  --fontColor: #000;
  --bgColor: #fff;
}

.dark-mode {
  --fontColor: #fff;
  --bgColor: #2b3945;
  --bgColor2: #202c37;
}
</style>