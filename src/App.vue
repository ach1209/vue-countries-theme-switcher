<template>
  <div id="app-content" :class="toggledTheme">
    <AppHeader />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { useCountriesStore } from './store/countries.js'
import { toggledTheme, loadInitialThemeState } from './scripts/theme.js'

import AppHeader from '@/components/layout/AppHeader.vue'

loadInitialThemeState()

const store = useCountriesStore()
const { loadCountries } = store
loadCountries()
</script>