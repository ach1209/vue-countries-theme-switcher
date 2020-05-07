<template>
  <div class="home-container">
    <div v-if="$route.name === 'home'" class="filters">
      <div class="input-container">
        <SearchIcon class="search-icon"></SearchIcon>
        <input type="text" class="search" v-model="search">
        <label class="search__label">Search for a country...</label>
      </div>
      <div class="select-container">
        <select v-model="selectedRegion" class="selections">
          <option value="" disabled>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
    <Card :countriesList="allCountries"></Card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { SearchIcon } from 'vue-feather-icons'
import Card from '@/components/card/Card'

export default {
  name: 'Home',
  components: {
    SearchIcon,
    Card
  },
  data() {
    return {
      isToggled: false,
      selectedRegion: '',
      search: ''
    }
  },
  computed: {
    ...mapGetters(['showCountries']),
    allCountries() {
      if (this.search != '') {
        return this.showCountries.filter(country => country.name.toLowerCase().includes(this.search.toLowerCase()));
      } else {
        return this.showCountries.filter(country => country.region.toLowerCase().includes(this.selectedRegion.toLowerCase()));
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.filters {
  @include flex-center;
  flex-wrap: wrap;
  background-color: var(--bgColor2);
  height: 17rem;
  padding: 0 1.3rem;

  @include device-desktop {
    justify-content: space-between;
    padding: 0 15rem;
  }
}

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

.select-container {
  @include position(relative);

  &:before {
    content: '';
    @include position(absolute, 2rem, 2.5rem);
    background-color: #c4c4c4;
    display: block;
    width: 0.1rem;
    height: 1rem;
    rotate: -40deg;
    pointer-events: none;
  }

  &:after {
    content: '';
    @include position(absolute, 2rem, 1.9rem);
    background-color: #c4c4c4;
    display: block;
    width: 0.1rem;
    height: 1rem;
    rotate: 40deg;
    pointer-events: none;
  }
}

.selections {
  width: 17rem;
  height: 5rem;
  padding-left: 1.3rem;
  @include mode-colors(var(--fontColor));
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0px 2px rgba($black, 0.25);
  appearance: none;
  transition: box-shadow 0.3s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 0px 2px rgba($black, 0.25),
                0 1px 7px rgba($black, 0.15);
  }

  // IE Only
  &::-ms-expand {
    display: none;
  }
}

</style>