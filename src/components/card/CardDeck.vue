<template>
  <div class="card-deck" @toggleMode="isToggled = $event" :class="[isToggled ? 'dark-mode--alt' : '']">
    <router-link :to="{name: 'country', params: { id: country.name }}" v-for="country in countries" :key="country.id" :class="[isToggled ? 'dark-mode' : 'light-mode']" class="card">
      <img class="card__image" :src="country.flag"/>
      <div class="card__details">
        <h3 class="card__heading">{{ country.name }}</h3>
        <p class="card__text--top">
          <b>Population:</b> {{ country.population.toLocaleString() }}
        </p>
        <p class="card__text--middle">
          <b>Region:</b> {{ country.region }}
        </p>
        <p class="card__text--bottom">
          <b>Capital:</b> {{ country.capital }}
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import { eventBus } from '../../main'
import { Api } from '@/service/api'

export default {
  name: 'CardDeck',
  data() {
    return {
      countries: [],
      displayCount: 10,
      isToggled: false
    }
  },
  created() {
    Api.get('?fields=name;capital;population;region;flag;borders').then(response => {
      let output = response.data;
      // output has 250 items
      // limiting the amount being added to countries array
      for(let i = 0; i < this.displayCount; i++) {
        this.countries.push(output[i]);
      }
      console.log(this.countries);
    }).catch(errors => {
      console.log(errors);
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
    padding: 5rem 15rem;
  }
}

.card {
  width: 25rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  text-decoration: none;

  &__image {
    width: 100%;
    height: 17rem;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &__details {
    padding: 2rem 2rem 4rem 2rem;
  }

  &__heading {
    margin-bottom: 2rem;
  }

  &__text--top,
  &__text--middle,
  &__text--bottom {
    line-height: 2.5rem;
  }
}

</style>