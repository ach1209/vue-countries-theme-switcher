<template>
  <div class="card-container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as mix;

.card-container {
  @include mix.position(relative);
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-template-rows: max-content;
  gap: 5rem;
  background-color: var(--app-body-color);
  
  @include mix.device-min(1100px) {
    margin: 0 auto;
    padding: 0 15rem 3rem;
  }
}

</style>