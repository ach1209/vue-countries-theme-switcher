<template>
  <div class="card-profile">
    <AppButton @click="$router.go(-1)" btnText="Back">
      <vue-feather type="arrow-left"></vue-feather>
    </AppButton>
    <div class="profile-content">
      <img :src="country.flag" :alt="country.name" class="profile-image"/>
      <div class="profile-details">
        <h1 class="profile-heading">{{ country.name }}</h1>
        <ProfileBlocks 
          :nativeName="country.nativeName"
          :population="country.population.toLocaleString()"
          :region="country.region"
          :subregion="country.subregion"
          :capital="country.capital"
          :domain="topLevelDomain"
          :currency="currencies"
          :lang="languages"
        />
        <ProfileRow v-if="country.borders">
          <AppButton 
            class="margin-15 margin-l-0"
            v-for="border in country.borders" :key="border.id"
            @click="$router.go(-1)"
            small
            :btnText="border"
          />
        </ProfileRow>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCountriesStore } from '../store/countries.js'
import { findIndexValue, findObjValue } from '../scripts/findValue.js'

import AppButton from '@/components/button/AppButton.vue'
import ProfileBlocks from '@/components/layout/ProfileBlocks.vue'
import ProfileRow from '@/components/layout/ProfileRow.vue'

const store = useCountriesStore()
const { countries } = storeToRefs(store)
const route = useRoute()

const country = computed(() => countries.value.find(country => country.name == route.params.id))

const topLevelDomain = findIndexValue(country.value.topLevelDomain)
const currencies = findObjValue(country.value.currencies)
const languages = findObjValue(country.value.languages)
</script>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as mix;
@use '@/styles/base/colors' as color;
@use '../styles/utilities/margin';

.vue-feather.vue-feather--arrow-left {
  vertical-align: bottom;
}

.card-profile {
  color: var(--primary-font-color);
  padding: 5rem 3rem;

  @include mix.device-min(1100px) {
    padding: 5rem 15rem 0;
    height: calc(100vh - 5rem);
  }
}

.profile-content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: 8rem;
  margin-top: 6rem;

  @include mix.device-min(1100px) { 
    gap: 20rem; 
  }
}

.profile-details {
  @include mix.device-min(1100px) {
    display: grid;
    grid-template: 0.5fr / repeat(2, 1fr);
    grid-auto-rows: max-content;
  }
}

.profile-heading {
  margin-bottom: 2rem;

  @include mix.device-min(1100px) {
    grid-column: 1 / span 2;
    margin-top: 3rem;
  }
}

.profile-image {
  width: 100%;
  box-shadow: 0 1px 2px rgba(color.$black, 0.25);
}
</style>