<template>
  <div class="card-container">
    <Card
      v-for="country in countriesList.slice(0, this.allowedToShow)" :key="country.demonym"
      :img="country.flag"
      :name="country.name"
      :population="country.population"
      :region="country.region"
      :capital="country.capital">
    </Card>
    <button v-if="allowedToShow < countriesList.length" class="btn btn--absolute" @click="allowMoreItems">Load More</button>
  </div>
</template>

<script>
import Card from '@/components/card/Card'

export default {
  name: 'CardContainer',
  props: {
    countriesList: Array
  },
  data() {
    return {
      allowedToShow: 50
    }
  },
  components: {
    Card
  },
  methods: {
    allowMoreItems() {
      this.allowedToShow += 50
    }
  }
}
</script>

<style lang="scss" scoped>

.card-container {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-template-rows: max-content;
  grid-gap: 5rem;
  background-color: var(--bgColor2);
  @include position(relative);

  @include device-desktop {
    margin: 0 auto;
    padding: 0 15rem 3rem;
  }
}

</style>