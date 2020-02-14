<template>
  <div id="app" :class="toggledTheme">
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/layout/AppHeader';

export default {
  name: 'app',
  components: {
    AppHeader
  },
  data() {
    return {
      toggledTheme: localStorage.getItem('current-theme')
    }
  },
  beforeCreate() {
    if (localStorage.getItem('current-theme') == null) {
      localStorage.setItem('current-theme', 'light-mode')
      this.toggledTheme = localStorage.getItem('current-theme')
    }
  },
  created() {
    this.$store.dispatch('loadCountries');
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
