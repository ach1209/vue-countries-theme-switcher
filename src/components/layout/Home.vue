<template>
  <div class="home-container">
    <div v-if="$route.name === 'home'" class="filters">
      <div class="input-container">
        <SearchIcon class="search-icon"></SearchIcon>
        <input type="text" placeholder="Search for a country..." class="search" v-model="search">
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

<style lang="scss">

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
  @include mode-colors;
  padding: 1.4rem 1.4rem 1.4rem 4.5rem;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0px 2px rgba($black, 0.25);

  @include device-desktop {
    width: 40rem;
  }
}

select::-ms-expand {
  display: none;
}

.selections {
  width: 17rem;  
  padding: 1.3rem;
  @include mode-colors;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0px 2px rgba($black, 0.25);
}

input:focus::placeholder {
  color: transparent;
}

</style>