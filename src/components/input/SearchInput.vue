<template>
  <div class="input-container">
    <SearchIcon class="search-icon"></SearchIcon>
    <input type="text" class="search" :value="value" @input="$emit('input', $event.target.value)">
    <label class="search__label">Search for a country...</label>
  </div>
</template>

<script>
import { SearchIcon } from 'vue-feather-icons'

export default {
  name: 'SearchInput',
  props: {
    value: String
  },
  components: {
    SearchIcon
  }
}
</script>

<style lang="scss" scoped>

.input-container {
  @include position(relative);
}

.search-icon {
  @include position(absolute, 1.25rem, null, null, 2rem);
  color: #c4c4c4;
}

.search {
  width: calc(100vw - 2.6rem);
  height: 5rem;
  @include mode-colors(var(--fontColor));
  padding-left: 6.5rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0px 2px rgba($black, 0.25);
  transition: box-shadow 0.3s ease-in-out;

  @include device-desktop {
    width: 40rem;
  }

  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 0px 2px rgba($black, 0.25),
                0 1px 7px rgba($black, 0.15);
  }

  &__label {
    @include position(absolute, 1.5rem, null, null, 7rem);
    width: auto;
    color: #c4c4c4;
    font-family: inherit;
    font-weight: 600;
    transition: opacity 0.2s ease-out,
                visibility 0.2s ease-out;
    pointer-events: none;
  }

  &:focus ~ &__label {
    opacity: 0;
    visibility: hidden;
  }
}

</style>