<template>
  <div class="card-deck">
    <router-link :to="{name: 'country', params: { id: country.name }}" v-for="country in showCountries" :key="country.id" class="card">
      <img class="card__image" :src="country.flag"/>
      <div class="card__details">
        <h3 class="card__title">{{ country.name }}</h3>
        <p><span class="label">Population:</span> {{ country.population.toLocaleString() }}</p>
        <p><span class="label">Region:</span> {{ country.region }}</p>
        <p><span class="label">Capital:</span> {{ country.capital }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
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
  color: var(--fontColor);
  background-color: var(--bgColor);
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