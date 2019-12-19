<template>
  <div>
    <p>{{ this.$route.params.id }}</p>
    <img :src="countries.flag"/>
    <p>{{ countryDetails }}</p>
  </div>
</template>

<script>
export default {
  name: 'CardProfile',
  computed: {
    countries() {
      return this.$store.state.countries.find(getCountry => getCountry.name == this.$route.params.id)
    },
    countryDetails() {
      return this.$store.getters.countryDetails
    }
  }
}
</script>