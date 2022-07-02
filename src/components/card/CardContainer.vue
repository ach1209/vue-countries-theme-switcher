<template>
  <div class="card-container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>

.card-container {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-template-rows: max-content;
  grid-gap: 5rem;
  background-color: var(--bgColor2);
  @include position(relative);

  @include device-desktop {
    margin: 0 auto;
    padding: 0 15rem 3rem;
  }
}

</style>