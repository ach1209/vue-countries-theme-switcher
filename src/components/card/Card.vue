<template>
  <router-link :to="{name: 'country', params: { id: props.name }}" class="card">
    <img class="card__image" :src="props.img" :alt="props.name"/>
    <div class="card__details">
      <h3 class="card__title">{{ props.name }}</h3>
      <p><span class="label">Population:</span> {{ props.population.toLocaleString() }}</p>
      <p><span class="label">Region:</span> {{ props.region }}</p>
      <p><span class="label">Capital:</span> {{ props.capital }}</p>
    </div>
  </router-link>
</template>

<script setup>
const props = defineProps({
  img: { type: String, required: true },
  name: { type: String, required: true },
  population: { type: Number, required: true },
  region: { type: String, required: true },
  capital: { type: String, required: true }
})
</script>

<style lang="scss" scoped>

.card {
  width: 25rem;
  display: flex;
  flex-direction: column;
  @include mode-colors(var(--fontColor));
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba($black, 0.25);
  text-decoration: none;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;

  &__image {
    width: 100%;
    height: 17rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  &__details {
    padding: 2rem 2rem 4rem 2rem;
    line-height: 3rem;
  }

  &__title {
    margin-bottom: 2rem;
  }

  &:hover,
  &:focus {
    box-shadow: 0 1px 2px rgba($black, 0.25),
                0 0 0.5rem rgba($black, 0.25);
  }
}

</style>