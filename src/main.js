import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

let app = createApp(App)

// GLOBALS DECLARATION
// API_URI
app.config.globalProperties.$API_URI = "http://192.168.1.35:8080"

// ROUTER
app.use(router).mount('#app')

