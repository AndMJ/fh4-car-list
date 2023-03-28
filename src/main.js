import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

let app = createApp(App)

// GLOBALS DECLARATION
// API_URL
app.config.globalProperties.$API_URL = "http://127.0.0.1:8080"

// ROUTER
app.use(router).mount('#app')

