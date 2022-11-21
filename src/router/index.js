import {createRouter, createWebHistory} from 'vue-router'

// Definimos las rutas
// En el path indicas la ruta que quieres que se use. Ej: /about, /portfolio, /services. 
// En el name, añadimos un nombre a la ruta. 
// En component añades el component de views que quieres asociar a esa ruta. 


const routes = [
    {
        path: '/', // ruta raíz, la que se abre al abrir la pagina, comunmente asociada al home
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/:id', // los dos puntos delante de id significa que esa ruta va a tener esa parte de forma dinámica,es decir, que id es dinamico. 
        // Que sea dinamico significa que se trata de una referencia que se evaluará en cada caso desde el componente que este escuchando en esa ruta. 
        name: 'details',
        component: () => import('../views/Details.vue')
    }
]

// Creamos el router

const router = createRouter({
    history: createWebHistory(),
    routes
})

// Se hace el export para que en el main.js podamos pasar las rutas a Vue
export default router

