<template>
  <div id="app">
    <AppHeader></AppHeader>
    <h1>Hello World!</h1>
    <InfoCard></InfoCard>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import InfoCard from './components/common/InfoCard';

export default {
  name: 'app',
  components: {
    AppHeader,
    InfoCard
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
