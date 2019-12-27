<template>
  <div class="card-profile">
    <router-link :to="{name: 'home'}" class="btn">
      <ArrowLeftIcon></ArrowLeftIcon>
      <span>Back</span>
    </router-link>
    <div class="card-profile-content">
      <img :src="countries.flag" class="card-profile__image"/>
      <div class="card-profile-content--right">
        <div class="column">
          <h1>{{ countries.name }}</h1>
          <p><b>Native Name:</b> {{ countries.nativeName }}</p>
          <p><b>Population:</b> {{ countries.population.toLocaleString() }}</p>
          <p><b>Region:</b> {{ countries.region }}</p>
          <p><b>Sub Region:</b> {{ countries.subregion }}</p>
          <p><b>Capital:</b> {{ countries.capital }}</p>
        </div>
        <div class="column">
          <p v-for="topLevel in countries.topLevelDomain" :key="topLevel.id">
            <b>Top Level Domain:</b> {{ topLevel }}
          </p>
          <p v-for="currency in countries.currencies" :key="currency.id">
            <b>Currencies:</b> {{ currency.name }}
          </p>
          <p>
            <b>Languages:</b> 
            <span v-for="(language, index) in countries.languages" :key="language.id"><span v-if="index != 0">, </span> {{ language.name }}</span>
          </p>
        </div>
        <div v-if="countries.borders != ''" class="row">
          <b>Border Countries:</b>
          <router-link :to="{name: 'home'}" v-for="border in countries.borders" :key="border.id" class="btn">{{ border }}</router-link>
        </div>
      </div>
    </div>
    <p>{{ countries }}</p>
  </div>
</template>

<script>
import { ArrowLeftIcon } from 'vue-feather-icons'

export default {
  name: 'CardProfile',
  components: {
    ArrowLeftIcon
  },
  computed: {
    countries() {
      return this.$store.state.countries.find(country => country.name == this.$route.params.id)
    }
  }
}
</script>

<style lang="scss">

.card-profile {
  padding: 5rem 3rem;

  @include device-desktop {
    padding: 5rem 15rem;
  }

  &-content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));    
    grid-template-rows: max-content;
    grid-gap: 8rem;
    margin-top: 6rem;

    @include device-desktop {
      grid-gap: 20rem;
    }
  }

  &__image {
    width: 100%;
  }
}

</style>