<template>
  <div class="card-container">
    <router-link :to="{name: 'country', params: { id: country.name }}" v-for="(country, index) in countriesList.slice(0, this.allowedToShow)" :key="index" tag="div" class="card">
      <img class="card__image" :src="country.flag"/>
      <div class="card__details">
        <h3 class="card__title">{{ country.name }}</h3>
        <p><span class="label">Population:</span> {{ country.population.toLocaleString() }}</p>
        <p><span class="label">Region:</span> {{ country.region }}</p>
        <p><span class="label">Capital:</span> {{ country.capital }}</p>
      </div>
    </router-link>
    <button v-if="allowedToShow < countriesList.length" class="btn btn--absolute" @click="allowMoreItems">Load More</button>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    countriesList: Array
  },
  data() {
    return {
      allowedToShow: 50
    }
  },
  methods: {
    allowMoreItems() {
      this.allowedToShow += 50
    }
  }
}
</script>

<style lang="scss">

.card-container {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-template-rows: max-content;
  grid-gap: 5rem;
  background-color: var(--bgColor2);
  position: relative;

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

  &:hover,
  &:focus {
    transform: translateY(-2rem);
    cursor: pointer;
  }
}

</style>