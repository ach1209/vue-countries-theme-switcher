<template>
  <div class="card-deck" @toggleMode="isToggled = $event" :class="[isToggled ? 'dark-mode--alt' : '']">
    <CardInfo v-for="country in countries" :key="country.id">
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
    </CardInfo>
  </div>
</template>

<script>
import CardInfo from './CardInfo'

import { eventBus } from '../../main'
import axios from 'axios'

export default {
  name: 'CardDeck',
  components: {
    CardInfo
  },
  data() {
    return {
      countries: [],
      displayCount: 10,
      isToggled: false
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
    });

    eventBus.$on('toggleMode', (data) => {
      this.isToggled = data;
    });
  }
}
</script>

<style lang="scss">

.card-deck {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-template-rows: max-content;
  grid-gap: 5rem;

  @include device-desktop {
    margin: 0 auto;
    padding: 5rem;
  }
}

</style>