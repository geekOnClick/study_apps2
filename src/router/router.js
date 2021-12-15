import Main from '@/apps/Main'
import Calculator from '@/apps/Calculator'
import StudyPlan from '@/apps/StudyPlan'
import Posts from '@/apps/Posts'
import OpenedPost from '@/apps/OpenedPost'
import Resume from '@/apps/Resume'
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
        component: Posts,
        props: true
    },
    {
        path: "/openedPost",
        component: OpenedPost
    },
    {
        path: "/resume",
        component: Resume
    }

]
const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})
export default router;