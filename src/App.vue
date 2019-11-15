<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div class="card-deck" @toggleMode="isToggled = $event">
      <InfoCard v-for="country in countries" :key="country.id">
        <template v-slot:image>
          <img class="card__image" :src="country.flag"/>
        </template>        
        <template v-slot:heading>
          {{ country.name }}
        </template>
        <template v-slot:population>
          {{ country.population }}
        </template>
        <template v-slot:region>
          {{ country.region }}
        </template>
        <template v-slot:capital>
          {{ country.capital }}
        </template>
      </InfoCard>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import InfoCard from './components/common/InfoCard';

import axios from 'axios'

export default {
  name: 'app',
  components: {
    AppHeader,
    InfoCard
  },
  data() {
    return {
      countries: [],
      displayCount: 10
    }
  },
  created() {
    const url = 'https://restcountries.eu/rest/v2/all?fields=name;capital;population;region;flag;borders'
    axios.get(url).then(response => {
      let output = response.data;
      // output has 250 items
      // limiting the amount being added to countries array
      for(let i = 0; i < this.displayCount; i++) {
        this.countries.push(output[i]);
      }
      console.log(this.countries);
    })
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

.card-deck {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-template-rows: max-content;
  grid-gap: 5rem;

  @include device-desktop {
    width: 120rem;
    margin: 0 auto;
  }
}

</style>
