import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'task-one',
        component: () => import(/* webpackChunkName: "about" */ '@/components/FirstTask/index.vue'),
    },
    {
        path: '/two-task',
        name: 'two-task',
        component: () => import(/* webpackChunkName: "about" */ '@/components/TwoTask/index.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
