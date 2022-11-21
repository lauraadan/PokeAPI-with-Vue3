import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // importamos el router creado

createApp(App)
    .use(router) // indicamos que usaremos el router creado
    .mount('#app')
