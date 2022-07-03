<template>
  <div class="card-profile">
    <AppButton @click="$router.go(-1)">
      <vue-feather type="arrow-left"></vue-feather>
      <span>Back</span>
    </AppButton>
    <div class="card-profile-content">
      <img :src="countries.flag" :alt="countries.name" class="card-profile__image"/>
      <div class="card-profile-content__details">
        <h1 class="card-profile-content__heading">{{ countries.name }}</h1>
        <div class="card-profile-content__info">
          <p><span class="label">Native Name:</span> {{ countries.nativeName }}</p>
          <p><span class="label">Population:</span> {{ countries.population.toLocaleString() }}</p>
          <p><span class="label">Region:</span> {{ countries.region }}</p>
          <p><span class="label">Sub Region:</span> {{ countries.subregion }}</p>
          <p><span class="label">Capital:</span> {{ countries.capital }}</p>
        </div>
        <div class="card-profile-content__info">
          <p><span class="label">Top Level Domain:</span> {{ topLevelDomain }}</p>
          <p><span class="label">Currencies:</span> {{ currencies }}</p>
          <p><span class="label">Languages:</span> {{ languages }}</p>
        </div>
        <div v-if="countries.borders" class="card-profile-content__row">
          <span class="label">Border Countries:</span>
          <AppButton 
            btnMod="btn--mini" 
            v-for="border in countries.borders" :key="border.id"
            @click="$router.go(-1)"  
          >
            {{ border }}
          </AppButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCountriesStore } from '../store/countries.js'
import AppButton from '@/components/layout/AppButton.vue'

const store = useCountriesStore()
const route = useRoute()

const countries = computed(() => store.showCountries.find(country => country.name == route.params.id))

const topLevelDomain = computed(() => {
  const [index] = countries.value.topLevelDomain
  return index
})

const currencies = computed(() => {
  const [{ name }] = countries.value.currencies
  return name
})

const languages = computed(() => {
  const [{ name }] = countries.value.languages
  return name
})
</script>

<style lang="scss" scoped>

.card-profile {
  padding: 5rem 3rem;
  @include mode-colors(var(--fontColor), var(--bgColor2));

  @include device-desktop {
    padding: 5rem 15rem 0;
    height: calc(100vh - 5rem);
  }

  &-content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    grid-gap: 8rem;
    margin-top: 6rem;

    @include device-desktop { grid-gap: 20rem; }

    &__details {
      @include device-desktop {
        display: grid;
        grid-template: 0.5fr / repeat(2, 1fr);
        grid-auto-rows: max-content;
      }
    }

    &__heading {
      margin-bottom: 2rem;

      @include device-desktop {
        grid-column: 1 / span 2;
        margin-top: 3rem;
      }
    }

    &__info {
      line-height: 3rem;
      margin-bottom: 2rem;
    }

    &__row {
      grid-column: 1 / -1;
      display: flex;
      flex-wrap: wrap;

      span { flex: 100%; }
    }
  }

  &__image {
    width: 100%;
    box-shadow: 0 1px 2px rgba($black, 0.25);
  }
}

</style>