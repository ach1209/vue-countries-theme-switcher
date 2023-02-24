<template>
  <RouterLink :to="{name: 'country', params: { id: props.name }}" class="card-link">
    <div class="card">
      <img class="card-image" :src="props.img" :alt="props.name" />
      <div class="card-details">
        <h2 class="card-title margin-b-2">{{ props.name }}</h2>
        <p><span class="text-label-600">Population:</span> {{ props.population.toLocaleString() }}</p>
        <p><span class="text-label-600">Region:</span> {{ props.region }}</p>
        <p v-if="props.capital"><span class="text-label-600">Capital:</span> {{ props.capital }}</p>
      </div>      
    </div>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  img: { type: String, required: true },
  name: { type: String, required: true },
  population: { type: Number, required: true },
  region: { type: String, required: true },
  capital: { type: String, required: false }
})
</script>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as mix;
@use '@/styles/base/colors' as color;
@use '@/styles/utilities/margin';
@use '@/styles/utilities/text-label';

.card-link { 
  @include mix.flex;
  cursor: pointer;
}

.card {
  @include mix.flex;
  flex-direction: column;
  width: 25rem;
  color: var(--primary-font-color);
  background-color: var(--component-bgColor-lightened);
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(color.$black, 0.25);
  transition: box-shadow 0.3s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: 0 1px 2px rgba(color.$black, 0.25),
                0 0 0.5rem rgba(color.$black, 0.25);
  }

  &-image {
    width: 100%;
    height: 17rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  &-details {
    padding: 2rem 2rem 4rem 2rem;
    line-height: 3rem;
  }

  &-title { 
    font-size: 2rem;
  }
}
</style>