import Main from '@/apps/Main'
import Calculator from '@/apps/Calculator'
import StudyPlan from '@/apps/StudyPlan'
import Posts from '@/apps/Posts'
import OpenedPost from '@/apps/OpenedPost'
import Resume from '@/apps/Resume'
import Freelance from '@/apps/Freelance'
import Tasks from '@/components/Freelance_components/views/Tasks'
import New from '@/components/Freelance_components/views/New'
import Task from '@/components/Freelance_components/views/Task'
import NotFound from '@/components/Freelance_components/views/NotFound'
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
    },
    {
        path: "/freelance",
        component: Freelance,
        children: [
            {
              path:'',
              component:Tasks
            },
            {
                path:'/new',
                component:New
            },
            {
                path:'task/:id?',
                component:Task,
                name: 'task'
            },
            {   path: '/task/:pathMatch(.*)*', 
                component: NotFound 
            }
        ]
    }
]
const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})
export default router;