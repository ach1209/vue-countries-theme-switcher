<template>
  <button class="btn">
    <slot></slot>
    {{ props.btnText }}
  </button>
</template>

<script setup>
const props = defineProps({
  btnText: { type: String, required: false }
})
</script>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as mix;
@use '@/styles/base/colors' as color;

.btn {
  @include mix.mode-colors(var(--fontColor));  
  @include mix.button;
  vertical-align: baseline;
  width: 15rem;
  padding: 1rem 2rem;

  &--small {
    width: 10rem;
    padding: 0.5rem;
  }

  &--alternate {
    color: color.$white;
    background-color: color.$altColor;
    box-shadow: none;

    &:hover,
    &:focus {
      background-color: color.$altColorHover;
    }
  }
}
</style>