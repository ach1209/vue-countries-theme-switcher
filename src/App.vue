<template>
  <div id="app" :data-theme="theme">
    <AppHeader></AppHeader>
    <div v-if="$route.name === 'home'" class="filters">
      <SearchFilter></SearchFilter>
      <DropdownFilter></DropdownFilter>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import SearchFilter from './components/filters/SearchFilter';
import DropdownFilter from './components/filters/DropdownFilter';

export default {
  name: 'app',
  components: {
    AppHeader,
    SearchFilter,
    DropdownFilter
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

.filters {
  @include flex-center-align;
  flex-wrap: wrap;
  background-color: var(--bgColor2);
  height: 13rem;
  padding: 0 1.3rem;

  @include device-desktop {
    justify-content: space-between;
    padding: 3rem 16rem;
  }
}

.label {
  font-weight: 600;
}

</style>
