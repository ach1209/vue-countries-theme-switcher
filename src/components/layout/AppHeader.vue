<template>
  <header class="main-header">
    <RouterLink :to="{name: 'home'}" class="main-header__title">Where in the world?</RouterLink>
    <span class="theme-toggle" role="button" tabindex="0" @click="themeSwitch">
      <div v-if="!isToggled" class="theme-icon">
        <vue-feather type="moon"></vue-feather>
        <span>Dark Mode</span>
      </div>
      <div v-else class="theme-icon">
        <vue-feather type="sun"></vue-feather>
        <span>Light Mode</span>
      </div>
    </span>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import themeSwitch, { isToggled, loadInitialIconState } from '@/scripts/theme.js'

loadInitialIconState()
</script>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as mix;
@use '@/styles/base/colors' as color;

.main-header {
  @include mix.position(relative);
  @include mix.flex(center, space-between);
  width: 100%;
  height: 6.4rem;
  padding: 0 2rem;
  color: var(--primary-font-color);
  background-color: var(--component-bgColor-lightened);
  box-shadow: 0px 1px 2px rgba(color.$black, 0.15);

  @include mix.device-min(1100px) { 
    padding: 0 15rem; 
  }

  &__title {
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 800;
    color: inherit;

    @include mix.device-min(1100px) { 
      font-size: 1.8rem; 
    }
  }
}

.theme-icon {
  @include mix.flex(center);    
  cursor: pointer;
  font-weight: 600;

  span { 
    margin-left: 1rem; 
  }
}
</style>