import { createRouter, createWebHistory } from "vue-router"
const routeInfos = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./Pages/Home/Index.vue'),
    },
    // {
    //     path: '*',
    //     name: 'not_found',
    //     component: () => import('./components/Pages/NotFound'),
    // }
]

const router = createRouter({
    history : createWebHistory(),
    routes : routeInfos
})

export default router;