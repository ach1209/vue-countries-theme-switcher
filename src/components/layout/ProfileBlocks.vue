<template>
  <div class="profile-block">
    <p><span class="text-label-600">Native Name:</span> {{ props.nativeName }}</p>
    <p><span class="text-label-600">Population:</span> {{ props.population }}</p>
    <p><span class="text-label-600">Region:</span> {{ props.region }}</p>
    <p><span class="text-label-600">Sub Region:</span> {{ props.subregion }}</p>
    <p><span class="text-label-600">Capital:</span> {{ props.capital }}</p>
  </div>
  <div class="profile-block">
    <p><span class="text-label-600">Top Level Domain:</span> {{ props.domain }}</p>
    <p><span class="text-label-600">Currencies:</span> {{ props.currency }}</p>
    <p><span class="text-label-600">Languages:</span> {{ props.lang }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  nativeName: { type: String, required: true },
  population: { type: String, required: true },
  region: { type: String, required: true },
  subregion: { type: String, required: true },
  capital: { type: String, required: true },
  domain: { type: String, required: true },
  currency: { type: String, required: true },
  lang: { type: String, required: true },
})
</script>

<style lang="scss" scoped>
@use '@/styles/utilities/text-label';

.profile-block {
  line-height: 3rem;
  margin-bottom: 2rem;
}
</style>