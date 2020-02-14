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
    <div class="card-deck">
      <router-link :to="{name: 'country', params: { id: country.name }}" v-for="country in allCountries" :key="country.id" class="card">
        <img class="card__image" :src="country.flag"/>
        <div class="card__details">
          <h3 class="card__title">{{ country.name }}</h3>
          <p><span class="label">Population:</span> {{ country.population.toLocaleString() }}</p>
          <p><span class="label">Region:</span> {{ country.region }}</p>
          <p><span class="label">Capital:</span> {{ country.capital }}</p>
        </div>
      </router-link>
    </div>    
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { SearchIcon } from 'vue-feather-icons'

export default {
  name: 'Home',
  components: {
    SearchIcon
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

.card-deck {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-template-rows: max-content;
  grid-gap: 5rem;
  background-color: var(--bgColor2);

  @include device-desktop {
    margin: 0 auto;
    padding: 5rem 15rem;
  }
}

.card {
  width: 25rem;
  display: flex;
  flex-direction: column;
  @include mode-colors;
  border-radius: 5px;
  box-shadow: 0px 1px 2px rgba($black, 0.25);
  text-decoration: none;
  transition: transform cubic-bezier(.34,.1,1,1.4) 0.3s;

  &__image {
    width: 100%;
    height: 17rem;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &__details {
    padding: 2rem 2rem 4rem 2rem;
    line-height: 3rem;
  }

  &__title {
    margin-bottom: 2rem;
  }
}

</style>