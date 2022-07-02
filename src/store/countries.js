import { defineStore } from 'pinia'

export const useCountriesStore = defineStore({
  id: 'countries',
  state: () => ({
    countries: []
  }),
  getters: {
    showCountries() {
      return this.countries
    } 
  },
  actions: {
    async loadCountries() {
      const fields = '?fields=name,capital,population,region,flag,borders,languages,currencies,nativeName,topLevelDomain,subregion'
      const response = await fetch(`https://restcountries.com/v2/all/${fields}`)
      const results = await response.json()
      this.countries = results
    }
  }
})