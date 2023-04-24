import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/router.js'
import store from './store.js'
createApp(App).use(router, store).mount('#app')
