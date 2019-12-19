import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/service/api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    countries: []
  },
  mutations: {
    setCountries(state, countries) {
      state.countries = countries;
    }
  },
  actions: {
    loadCountries({commit}) {
      return Api.get('?fields=name;capital;population;region;flag;borders;languages;currencies;nativeName;topLevelDomain;subregion').then((response) => {
        commit('setCountries', response.data);
      }).catch((error) => {
        console.log(error);
      });
    }
  }
})

export default store;