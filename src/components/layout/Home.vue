<template>
  <div class="home-container">
    <div v-if="$route.name === 'home'" class="filters">
      <SearchInput v-model="search"></SearchInput>
      <SelectInput v-model="selectedRegion"></SelectInput>
    </div>
    <CardContainer :countriesList="allCountries"></CardContainer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SearchInput from '@/components/input/SearchInput'
import SelectInput from '@/components/input/SelectInput'
import CardContainer from '@/components/card/CardContainer'

export default {
  name: 'Home',
  components: {
    SearchInput,
    SelectInput,
    CardContainer
  },
  data() {
    return {
      isToggled: false,
      selectedRegion: '',
      search: ''
    }
  },
  computed: {
    ...mapGetters(['showCountries']),
    allCountries() {
      if (this.search != '') {
        return this.showCountries.filter(country => country.name.toLowerCase().includes(this.search.toLowerCase()));
      } else {
        return this.showCountries.filter(country => country.region.toLowerCase().includes(this.selectedRegion.toLowerCase()));
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.filters {
  @include flex-center;
  flex-wrap: wrap;
  background-color: var(--bgColor2);
  height: 17rem;
  padding: 0 1.3rem;

  @include device-desktop {
    justify-content: space-between;
    padding: 0 15rem;
  }
}

</style>