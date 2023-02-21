import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './styles/main.scss'

import VueFeather from 'vue-feather'
import App from './App.vue'
import router from './router/routes'

const app = createApp(App)

app.component(VueFeather.name, VueFeather)

app.use(createPinia())
app.use(router)

app.mount('#app')
