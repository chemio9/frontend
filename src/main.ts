import "modern-normalize"
import './main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// Reserve for future use.
app.use(createPinia())
app.use(router)

app.mount('#app')
