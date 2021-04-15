<template>
  <div id="app" :class="toggledTheme" ref="head">
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import AppHeader from './components/layout/AppHeader'

export default {
  name: 'app',
  components: {
    AppHeader
  },
  setup(_props, context) {
    let toggledTheme = ref(localStorage.getItem('current-theme'))

    context.root.$store.dispatch('loadCountries')

    if (localStorage.getItem('current-theme') == null) {
      localStorage.setItem('current-theme', 'light-mode')
      toggledTheme.value = localStorage.getItem('current-theme')
    }

    return {
      toggledTheme
    }
  }
}
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
