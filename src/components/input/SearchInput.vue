<template>
  <div class="input-container">
    <vue-feather type="search" class="search-icon"></vue-feather>
    <input 
      type="text" class="search" name="Search Bar" 
      :value="props.modelValue" 
      @input="$emit('update:model-value', $event.target.value)"
    >
    <label for="Search Bar" class="search-label">Search for a country...</label>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: { type: String, required: false }
})

const emits = defineEmits(['update:model-value'])
emits('update:model-value')
</script>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as mix;
@use '@/styles/base/colors' as color;

.input-container { 
  @include mix.position(relative); 
}

.search-icon {
  @include mix.position(absolute, 1.25rem, null, null, 2rem);
  color: color.$gray;
}

.search {
  width: calc(100vw - 2.6rem);
  height: 5rem;
  padding-left: 6.5rem;
  color: var(--primary-font-color);
  background-color: var(--component-bgColor-lightened);
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0px 2px rgba(color.$black, 0.25);
  transition: box-shadow 0.3s ease-in-out;

  @include mix.device-min(1100px) { 
    width: 40rem; 
  }

  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 0px 2px rgba(color.$black, 0.25),
                0 1px 7px rgba(color.$black, 0.15);
  }

  &-label {
    @include mix.position(absolute, 1.5rem, null, null, 7rem);
    width: auto;
    color: var(--inputColor);
    font-family: inherit;
    font-weight: 600;
    transition: opacity 0.2s ease-out,
                visibility 0.2s ease-out;
    pointer-events: none;
  }

  &:focus ~ &-label {
    opacity: 0;
    visibility: hidden;
  }
}
</style>