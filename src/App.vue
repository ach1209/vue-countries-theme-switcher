<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';

export default {
  name: 'app',
  components: {
    AppHeader
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
}

body {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.6rem;
}

</style>
