import Main from '@/apps/Main'
import Calculator from '@/apps/Calculator'
import StudyPlan from '@/apps/StudyPlan'
import Posts from '@/apps/Posts'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: "/",
        component: Main
    },
    {
        path: "/calc",
        component: Calculator
    },
    {
        path: "/plan",
        component: StudyPlan
    },
    {
        path: "/posts",
        component: Posts
    }
]
const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})
export default router;