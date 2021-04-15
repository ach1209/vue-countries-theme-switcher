import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'
import store from './store/store'
import VueCompositionAPI from '@vue/composition-api'

Vue.config.productionTip = false

Vue.use(VueCompositionAPI)

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
