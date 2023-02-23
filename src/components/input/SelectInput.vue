<template>
  <div class="select-container">
    <select :value="props.optionValue" class="selections" @change="$emit('update:option-value', $event.target.value)">
      <option value="" disabled>Filter by Region</option>
      <option v-for="value in values" :key="value" :value="value">{{ value }}</option>
    </select>
  </div>
</template>

<script setup>
const props = defineProps({
  optionValue: { type: String, required: false }
})

const emit = defineEmits(['update:option-value'])
emit('update:option-value')

const values = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
</script>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as mix;
@use '@/styles/base/colors' as color;

.select-container {
  @include mix.position(relative);

  &:before,
  &:after {
    content: '';
    display: block;
    width: 0.1rem;
    height: 1rem;
    background-color: color.$gray;
    pointer-events: none;
  }

  &:before {
    @include mix.position(absolute, 2rem, 2.5rem);
    rotate: -40deg;
  }

  &:after {
    @include mix.position(absolute, 2rem, 1.9rem);
    rotate: 40deg;
  }
}

.selections {
  @include mix.mode-colors(var(--fontColor));
  width: 17rem;
  height: 5rem;
  padding-left: 1.3rem;
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
}
</style>