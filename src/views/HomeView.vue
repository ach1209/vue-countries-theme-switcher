<template>
  <div class="home-container">
    <div v-if="$route.name === 'home'" class="filters">
      <SearchInput v-model="search"></SearchInput>
      <SelectInput v-model="selectedRegion"></SelectInput>
    </div>
    <CardContainer>
      <MainCard
        v-for="country in allCountries.slice(0, allowedToShow)" :key="country.demonym"
        :img="country.flag"
        :name="country.name"
        :population="country.population"
        :region="country.region"
        :capital="country.capital">
      </MainCard>
      <AppButton 
        v-if="allowedToShow < allCountries.length"
        btnMod="btn--absolute"
        @click="allowMoreItems"
      >
        Load More
      </AppButton>
    </CardContainer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCountriesStore } from '../store/countries.js'
import SearchInput from '@/components/input/SearchInput.vue'
import SelectInput from '@/components/input/SelectInput.vue'
import CardContainer from '@/components/card/CardContainer.vue'
import MainCard from '@/components/card/MainCard.vue'
import AppButton from '@/components/layout/AppButton.vue'

const store = useCountriesStore()
const selectedRegion = ref('')
const search = ref('')
const allowedToShow = ref(50)

const allCountries = computed(() => {
  if (search.value != '') {
    return store.showCountries.filter(country => country.name.toLowerCase().includes(search.value.toLowerCase()))
  }
  return store.showCountries.filter(country => country.region.toLowerCase().includes(selectedRegion.value.toLowerCase()))
})

function allowMoreItems() {
  allowedToShow.value += 50
}
</script>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as mix;

.filters {
  @include mix.flex(center);
  flex-wrap: wrap;
  background-color: var(--bgColor2);
  height: 17rem;
  padding: 0 1.3rem;

  @include mix.device-min(1100px) {
    justify-content: space-between;
    padding: 0 15rem;
  }
}

</style>