<template>
  <div id="app">
    <AppHeader></AppHeader>
    <CardDeck></CardDeck>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import CardDeck from './components/card/CardDeck';

export default {
  name: 'app',
  components: {
    AppHeader,
    CardDeck
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
