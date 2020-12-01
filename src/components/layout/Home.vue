<template>
  <div class="home-container">
    <div v-if="$route.name === 'home'" class="filters">
      <SearchInput v-model="search"></SearchInput>
      <SelectInput v-model="selectedRegion"></SelectInput>
    </div>
    <CardContainer>
      <Card
        v-for="country in allCountries.slice(0, this.allowedToShow)" :key="country.demonym"
        :img="country.flag"
        :name="country.name"
        :population="country.population"
        :region="country.region"
        :capital="country.capital">
      </Card>
      <AppButton 
        v-if="allowedToShow < allCountries.length"
        btnMod="btn--absolute"
        @click.native="allowMoreItems"
      >
        Load More
      </AppButton>
    </CardContainer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SearchInput from '@/components/input/SearchInput'
import SelectInput from '@/components/input/SelectInput'
import CardContainer from '@/components/card/CardContainer'
import Card from '@/components/card/Card'
import AppButton from '@/components/layout/AppButton'

export default {
  name: 'Home',
  components: {
    SearchInput,
    SelectInput,
    CardContainer,
    Card,
    AppButton
  },
  data() {
    return {
      isToggled: false,
      selectedRegion: '',
      search: '',
      allowedToShow: 50
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
  },
  methods: {
    allowMoreItems() {
      this.allowedToShow += 50
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