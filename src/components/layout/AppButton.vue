<template>
  <button class="btn" :class="btnMod">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    btnMod: String
  }
}
</script>

<style lang="scss" scoped>

.btn {
  @include flex-center;
  justify-content: space-evenly;  
  width: 15rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 3px;
  text-decoration: none;
  font-family: inherit;
  font-size: inherit;
  font-weight: 600;  
  @include mode-colors(var(--fontColor));   
  box-shadow: 0 0 3px rgba(204, 204, 204, 0.75);
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0 0 3px 1px rgba(147, 145, 145, 0.46);
  }

  &--mini {
    width: 10rem;
    padding: 0.5rem;
    margin: 1.5rem;
    margin-left: 0;
  }

  &--absolute {
    width: 13rem;
    padding: 1rem;
    margin: 0 auto;
    @include position(absolute, null, 0, 2rem, 0);
    font-family: inherit;
    font-size: inherit;
    color: #ffffff;
    background-color: $altColor;
    box-shadow: none;
    border: none;

    &:hover,
    &:focus {
      background-color: $altColorHover;
    }
  }
}

</style>