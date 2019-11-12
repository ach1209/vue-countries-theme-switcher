<template>
  <div class="card">
    <slot name="image"></slot>
    <div class="card__details">
      <h3 class="card__heading">
        <slot name="heading"></slot>
      </h3>
      <p class="card__text--top">
        <b>Population:</b> <slot name="population"></slot>
      </p>
      <p class="card__text--middle">
        <b>Region:</b> <slot name="region"></slot>
      </p>
      <p class="card__text--bottom">
        <b>Capital:</b> <slot name="capital"></slot>
      </p>
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