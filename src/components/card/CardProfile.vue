<template>
  <!-- TODO: Fix dark mode option -->
  <div class="card-profile">
    <router-link :to="{name: 'home'}" class="btn">
      <ArrowLeftIcon></ArrowLeftIcon>
      <span>Back</span>
    </router-link>
    <div class="card-profile-content">
      <img :src="countries.flag" class="card-profile__image"/>
      <div class="card-profile-content--right">
        <h1 class="card-profile-content__heading mg-bottom">{{ countries.name }}</h1>
        <div class="card-profile-content__column mg-bottom">
          <p><span class="fw--600">Native Name:</span> {{ countries.nativeName }}</p>
          <p><span class="fw--600">Population:</span> {{ countries.population.toLocaleString() }}</p>
          <p><span class="fw--600">Region:</span> {{ countries.region }}</p>
          <p><span class="fw--600">Sub Region:</span> {{ countries.subregion }}</p>
          <p><span class="fw--600">Capital:</span> {{ countries.capital }}</p>
        </div>
        <div class="card-profile-content__column mg-bottom">
          <p v-for="topLevel in countries.topLevelDomain" :key="topLevel.id">
            <span class="fw--600">Top Level Domain:</span> {{ topLevel }}
          </p>
          <p>
            <span class="fw--600">Currencies:</span>
            <span v-for="(currency, index) in countries.currencies" :key="currency.id"><span v-if="index != 0">, </span> {{ currency.name }}</span>
          </p>
          <p>
            <span class="fw--600">Languages:</span> 
            <span v-for="(language, index) in countries.languages" :key="language.id"><span v-if="index != 0">, </span> {{ language.name }}</span>
          </p>
        </div>
        <div v-if="countries.borders != ''" class="card-profile-content__row">
          <span class="fw--600">Border Countries:</span>
          <router-link :to="{name: 'home'}" v-for="border in countries.borders" :key="border.id" class="btn btn--mini mg-left--0">{{ border }}</router-link>
        </div>
      </div>
    </div>
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
    grid-gap: 8rem;
    margin-top: 6rem;

    @include device-desktop {
      grid-gap: 20rem;
    }

    &--right {
      @include device-desktop {
        display: grid;
        grid-template: 0.5fr / repeat(2, 1fr);
        grid-auto-rows: max-content;
      }
    }

    &__heading {
      @include device-desktop {
        grid-column: 1 / span 2;
        margin-top: 3rem;
      }
    }

    &__column {
      line-height: 3rem;
    }

    &__row {
      grid-column: 1 / -1;
      display: flex;
      flex-wrap: wrap;

      span {
        flex: 100%;
      }
    }
  }

  &__image {
    width: 100%;
  }
}

</style>