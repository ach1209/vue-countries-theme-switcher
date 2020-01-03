<template>
  <div class="card-deck"
    @toggleMode="isToggled = $event"
    :class="[isToggled ? 'dark-mode--alt' : '']"
  >
    <router-link
      :to="{name: 'country', params: { id: country.name }}"
      v-for="country in showCountries"
      :key="country.id"
      :class="[isToggled ? 'dark-mode' : 'light-mode']" 
      class="card"
    >
      <img class="card__image" :src="country.flag"/>
      <div class="card__details">
        <h3 class="mg-bottom">{{ country.name }}</h3>
        <p class="lineH--3">
          <span class="fw--600">Population:</span> {{ country.population.toLocaleString() }}
        </p>
        <p class="lineH--3">
          <span class="fw--600">Region:</span> {{ country.region }}
        </p>
        <p class="lineH--3">
          <span class="fw--600">Capital:</span> {{ country.capital }}
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import { eventBus } from '../../main';
import { mapGetters } from 'vuex';

export default {
  name: 'CardDeck',
  data() {
    return {
      isToggled: false
    }
  },
  computed: {
    ...mapGetters(['showCountries'])
  },
  created() {
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
  transition: transform cubic-bezier(.34,.1,1,1.4) 0.3s;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  &__image {
    width: 100%;
    height: 17rem;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &__details {
    padding: 2rem 2rem 4rem 2rem;
  }
}

</style>