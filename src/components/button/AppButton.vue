<template>
  <button class="btn" :class="{ 'btn--small': props.small, 'btn--alternate': props.alternate }">
    <slot></slot>
    {{ props.btnText }}
  </button>
</template>

<script setup>
const props = defineProps({
  btnText: { type: String, required: false },
  small: { type: Boolean, required: false },
  alternate: { type: Boolean, required: false }
})
</script>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as mix;
@use '@/styles/base/colors' as color;

.btn {
  @include mix.button;
  vertical-align: baseline;
  width: 15rem;
  padding: 1rem 2rem;
  color: var(--primary-font-color);
  background-color: var(--component-bgColor-lightened);

  &--small {
    width: 10rem;
    padding: 0.5rem;
  }

  &--alternate {
    color: color.$white;
    background-color: color.$blue;
    box-shadow: none;

    &:hover,
    &:focus {
      background-color: color.$lighterBlue;
    }
  }
}
</style>