<template>
  <div class="card">
    <img class="card__image" src="https://restcountries.eu/data/afg.svg"/>
    <div class="card__details">
      <h3 class="card__heading">Afghanistan</h3>
      <p class="card__text--top"><b>Population:</b> 27657145</p>
      <p class="card__text--middle"><b>Region:</b> Asia</p>
      <p class="card__text--bottom"><b>Capital:</b> Kabul</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoCard'
}
</script>

<style lang="scss">

.card {
  width: 25rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 4px 1px rgba(204,204,204,1);
  border-radius: 5px;

  &__image {
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &__details {
    padding: 2rem 2rem 4rem 2rem;
  }

  &__heading {
    margin-bottom: 2rem;
  }

  &__text--top,
  &__text--middle,
  &__text--bottom {
    line-height: 2.5rem;
  }
}

</style>