<template>
  <div class="select-container">
    <select :value="props.optionValue" class="selections" @change="$emit('update:modelValue', $event.target.value)">
      <option value="" disabled>Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  </div>
</template>

<script setup>
const props = defineProps({
  optionValue: { type: String, required: false }
})
defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as mix;
@use '@/styles/base/colors' as color;

.select-container {
  @include mix.position(relative);

  &:before {
    content: '';
    @include mix.position(absolute, 2rem, 2.5rem);
    background-color: #c4c4c4;
    display: block;
    width: 0.1rem;
    height: 1rem;
    rotate: -40deg;
    pointer-events: none;
  }

  &:after {
    content: '';
    @include mix.position(absolute, 2rem, 1.9rem);
    background-color: #c4c4c4;
    display: block;
    width: 0.1rem;
    height: 1rem;
    rotate: 40deg;
    pointer-events: none;
  }
}

.selections {
  width: 17rem;
  height: 5rem;
  padding-left: 1.3rem;
  @include mix.mode-colors(var(--fontColor));
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0px 2px rgba(color.$black, 0.25);
  appearance: none;
  transition: box-shadow 0.3s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 0px 2px rgba(color.$black, 0.25),
                0 1px 7px rgba(color.$black, 0.15);
  }

  // IE Only
  &::-ms-expand { display: none; }
}

</style>