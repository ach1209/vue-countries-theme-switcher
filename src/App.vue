<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div 
      v-if="$route.name === 'home'" 
      class="filters"
    >
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

.filters {
  @include flex-center-align;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 13rem;
  padding: 0 1.3rem;
  margin: 3rem 0;

  @include device-desktop {
    height: 7rem;
    margin: 5rem 16rem 0 16rem;
    padding: 0;
  }
}

</style>
