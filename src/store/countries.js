import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCountriesStore = defineStore('countries', () => {
  const countries = ref([])

  async function loadCountries() {
    const fields = '?fields=name,capital,population,region,flag,borders,languages,currencies,nativeName,topLevelDomain,subregion'
    const response = await fetch(`https://restcountries.com/v2/all/${fields}`)
    const results = await response.json()
    countries.value = results
  }

  return { countries, loadCountries }
})