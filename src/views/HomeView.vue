<template>
  <div class="home-container">
    <div v-if="$route.name === 'home'" class="filters">
      <SearchInput v-model:model-value="input.search"></SearchInput>
      <SelectInput v-model:option-value="input.selected"></SelectInput>
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
        class="pos-ab-bottom"
        @click="allowMoreItems"
        alternate
        btnText="Load More"
      />
    </CardContainer>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useCountriesStore } from '../store/countries.js'

import SearchInput from '@/components/input/SearchInput.vue'
import SelectInput from '@/components/input/SelectInput.vue'
import CardContainer from '@/components/card/CardContainer.vue'
import MainCard from '@/components/card/MainCard.vue'
import AppButton from '@/components/button/AppButton.vue'

const store = useCountriesStore()
const { countries } = storeToRefs(store)

const input = reactive({
  selected: '',
  search: ''
})

const allCountries = computed(() => {
  if (input.search) {
    return countries.value.filter(country => country.name.toLowerCase().includes(input.search.toLowerCase()))
  }
  if (input.selected) {
    return countries.value.filter(country => country.region.toLowerCase().includes(input.selected.toLowerCase()))
  }
  return countries.value
})

const allowedToShow = ref(50)
function allowMoreItems() {
  allowedToShow.value += 50
}
</script>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as mix;
@use '../styles/utilities/position';

.filters {
  @include mix.flex(center);
  flex-wrap: wrap;
  background-color: var(--app-body-color);
  height: 17rem;
  padding: 0 1.3rem;

  @include mix.device-min(1100px) {
    justify-content: space-between;
    padding: 0 15rem;
  }
}
</style>