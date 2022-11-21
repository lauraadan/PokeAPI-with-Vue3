import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/', 
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/:id', 
        name: 'details',
        component: () => import('../views/Details.vue')
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

