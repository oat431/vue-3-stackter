import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

createApp(App).use(router).use(store).use(createHead()).mount('#app')
