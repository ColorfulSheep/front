// Composables
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home',
        component: () => import('@/layouts/default/Default.vue'),
        children: [
            {
                path: 'home',
                component: () => import('@/views/Home.vue')
            }, {
                path: 'test',
                component: () => import('@/views/Test.vue')
            }, {
                path: 'school',
                component: () => import('@/views/School.vue')
            }, {
                path: 'film',
                component: () => import('@/views/Film.vue')
            }, {
                path: 'blog',
                component: () => import('@/views/Blog.vue')
            },
        ],
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
