<template>
  <div id="app" :data-theme="theme">
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
      theme: localStorage.getItem('current-theme')
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

#app[data-theme='light-mode'] {
  --fontColor: #000;
  --bgColor: #fff;
}

#app[data-theme='dark-mode'] {
  --fontColor: #fff;
  --bgColor: #2b3945;
  --bgColor2: #202c37;
}

.label {
  font-weight: 600;
}

</style>
