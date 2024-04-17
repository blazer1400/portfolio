import {createRouter, createWebHistory} from 'vue-router'
import home from "@/views/Home.vue";
import About from "@/views/About.vue";
import projects from "@/views/Projects.vue";
import show from "@/views/Show.vue";
import Contact from "@/views/Contact.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
            meta: {
                simple: true
            }
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/projects',
            name: 'projects',
            component: projects
        },
        {
            path: '/project/:id',
            name: 'show',
            component: show
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
})

export default router
