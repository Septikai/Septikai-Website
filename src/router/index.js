import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import NotFound from "@/views/NotFound.vue";
import Projects from "@/views/Projects";
import Socials from "@/views/Socials";
import About from "@/views/About";

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || {top: 0};
    },
    routes: [
        {
            path: "/:catchAll(.*)*",
            name: "NotFound",
            component: NotFound
        },
        {
            path: "/",
            name: "Home",
            component: Home,
            includeInHeader: true
        },
        {
            path: "/projects",
            name: "Projects",
            component: Projects,
            includeInHeader: true
        },
        {
            path: "/socials",
            name: "Socials",
            component: Socials,
            includeInHeader: true
        },
        {
            path: "/about",
            name: "About Me",
            component: About,
            includeInHeader: true
        }
    ]
});

export default router;
