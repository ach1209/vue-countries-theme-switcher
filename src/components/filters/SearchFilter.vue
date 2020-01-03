<template>
  <!-- TODO: Fix dark mode option -->
  <div class="input-container">
    <SearchIcon class="search-icon"></SearchIcon>
    <input type="text" placeholder="Search for a country..." class="search">
  </div>
</template>

<script>
import { SearchIcon } from 'vue-feather-icons'

export default {
  name: 'SearchFilter',
  components: {
    SearchIcon
  }
}
</script>

<style lang="scss">

.input-container {
  position: relative;
}

.search-icon {
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: #c4c4c4;
}

.search {
  width: calc(100vw - 2.6rem);
  padding: 1.4rem 1.4rem 1.4rem 4.5rem;
  border: none;
  border-radius: 3px;
  box-shadow: 0 1px 3px 1px rgba($boxShadowLight, 0.82);

  @include device-desktop {
    width: 40rem;
  }
}

</style>