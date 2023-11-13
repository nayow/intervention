
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ArrowDown from '@/components/ArrowDown.vue'

import 'fullpage.js/dist/fullpage.css'
import './assets/styles/main.css'

const app = createApp(App)

app.component('ArrowDown', ArrowDown)

app.use(router)
app.mount('#app')
