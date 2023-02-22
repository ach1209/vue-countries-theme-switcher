<template>
  <div class="profile-row">
    <span class="text-label-600">Border Countries:</span>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as mix;
@use '@/styles/utilities/margin';
@use '@/styles/utilities/text-label';

.profile-row {
  @include mix.flex;
  flex-wrap: wrap;
  grid-column: 1 / -1;

  & > span {
    flex: 100%;
  }
}
</style>