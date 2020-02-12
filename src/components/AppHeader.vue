<template>
  <header class="main-header">
    <router-link :to="{name: 'home'}" class="main-header__title">Where in the world?</router-link>
    <div class="theme-toggle" @click="switchTheme">
      <div v-if="!isToggled" class="theme-toggle__icon">
        <MoonIcon></MoonIcon>
        <span>Dark Mode</span>
      </div>
      <div v-else class="theme-toggle__icon">
        <SunIcon></SunIcon>
        <span>Light Mode</span>
      </div>
    </div>
  </header>
</template>

<script>
import { SunIcon, MoonIcon } from 'vue-feather-icons'

export default {
  name: 'AppHeader',
  components: {
    SunIcon,
    MoonIcon
  },
  data() {
    return {
      isToggled: localStorage.getItem('toggle-state')
    }
  },
  methods: {
    switchTheme() {
      const app = document.getElementById('app');
      
      if (app.getAttribute('data-theme') == 'light-mode' || app.getAttribute('data-theme') == null) {
        app.setAttribute('data-theme', 'dark-mode');
        this.isToggled = !this.isToggled;
        
        localStorage.setItem('toggle-state', this.isToggled);
        localStorage.setItem('current-theme', 'dark-mode');
      } else {
        app.setAttribute('data-theme', 'light-mode');
        this.isToggled = !this.isToggled;

        localStorage.setItem('toggle-state', this.isToggled);
        localStorage.setItem('current-theme', 'light-mode');
      }
    }
  }
}
</script>

<style lang="scss">

.main-header {
  width: 100%;
  height: 6.4rem;
  padding: 0 2rem;
  box-shadow: 0px 1px 2px rgba($black, 0.15);
  position: relative;
  @include mode-colors;
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

.theme-toggle {
  &__icon {
    @include flex-center-align;    
    cursor: pointer;
    font-weight: 600;

    span {
      margin-left: 10px;
    }
  }
}

</style>