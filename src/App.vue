<template>
  <div id="app" :class="toggledTheme">
    <AppHeader />
    <RouterView />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { useCountriesStore } from './store/countries'
import AppHeader from '@/components/layout/AppHeader.vue'

const store = useCountriesStore()
const toggledTheme = ref(localStorage.getItem('current-theme'))

if (localStorage.getItem('current-theme') == null) {
  localStorage.setItem('current-theme', 'light-mode')
  toggledTheme.value = localStorage.getItem('current-theme')
}

store.loadCountries()
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
}

body {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.6rem;
  background-color: #fafafa;
}

.light-mode {
  --fontColor: #000;
  --bgColor: #fff;
}

.dark-mode {
  --fontColor: #fff;
  --bgColor: #2b3945;
  --bgColor2: #202c37;
}

.label {
  font-weight: 600;
}

</style>
