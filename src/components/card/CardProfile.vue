<template>
  <div>
    <p>{{ this.$route.params.id }}</p>
    <img :src="countries.flag"/>
    <p>{{ countries }}</p>
  </div>
</template>

<script>
export default {
  name: 'CardProfile',
  computed: {
    countries() {
      return this.$store.state.countries.find(country => country.name == this.$route.params.id)
    }
  }
}
</script>