<template>
  <div class="card-profile">
    <router-link :to="{name: 'home'}" class="btn__return">
      <ArrowLeftIcon></ArrowLeftIcon>
      <span>Back</span>
    </router-link>
    <div class="card-profile-content">
      <img :src="countries.flag" class="card-profile__image"/>
      <div class="card-profile-content--right">
        <p>{{ this.$route.params.id }}</p>
        <p>{{ countries }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ArrowLeftIcon } from 'vue-feather-icons'

export default {
  name: 'CardProfile',
  components: {
    ArrowLeftIcon
  },
  computed: {
    countries() {
      return this.$store.state.countries.find(country => country.name == this.$route.params.id)
    }
  }
}
</script>

<style lang="scss">

.card-profile {
  padding: 5rem 3rem;

  @include device-desktop {
    padding: 5rem 15rem;
  }

  &-content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));    
    grid-template-rows: max-content;
    grid-gap: 8rem;
    margin-top: 6rem;

    @include device-desktop {
      grid-gap: 20rem;
    }
  }

  &__image {
    width: 100%;
  }
}

.btn__return {
  @include flex-center-align;
  width: 15rem;
  padding: 1rem 2rem;
  justify-content: space-evenly;
  border-radius: 3px;
  color: $fontColorLightM;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 1px 3px 1px rgba($boxShadowLight, 0.82);
  transition: background-color cubic-bezier(.34,.1,1,1.4) 0.3s;

  &:hover,
  &:focus {
    background-color: rgba($bgHover, 0.45);
  }
}

</style>