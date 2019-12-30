<template>
  <header class="main-header" :class="[isToggled ? 'dark-mode' : '']">
    <router-link :to="{name: 'home'}" class="main-header__title">Where in the world?</router-link>
    <div class="mode-toggle" @click="switchMode">
      <div v-if="!isToggled" class="mode-toggle--dark fw--600">
        <MoonIcon></MoonIcon>
        <span>Dark Mode</span>
      </div>
      <div v-else class="mode-toggle--light fw--600">
        <SunIcon></SunIcon>
        <span>Light Mode</span>
      </div>
    </div>
  </header>
</template>

<script>
import { eventBus } from '../main'
import { SunIcon, MoonIcon } from 'vue-feather-icons'

export default {
  name: 'AppHeader',
  components: {
    SunIcon,
    MoonIcon
  },
  data() {
    return {
      isToggled: false
    }
  },
  methods: {
    switchMode: function() {
      this.isToggled = !this.isToggled;
      eventBus.$emit('toggleMode', this.isToggled);
    }
  }
}
</script>

<style lang="scss">

.main-header {
  width: 100%;
  height: 6.4rem;
  padding: 0 2rem;
  box-shadow: 0px 2px 2px rgba(0,0,0, 0.12);  
  @include flex-center-align;
  justify-content: space-between;

  @include device-desktop {
    padding: 0 7rem; 
  }

  &__title {
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 800;
    color: inherit;

    @include device-desktop {
      font-size: 1.8rem;
    }
  }
}

.mode-toggle {
  &--light,
  &--dark {
    cursor: pointer;
    @include flex-center-align;

    span {
      margin-left: 10px;
    }
  }
}

</style>