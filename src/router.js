import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ProjectsIndex from './pages/ProjectsIndex.vue';
import AboutUs from './pages/AboutUs.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/index',
            name: 'index',
            component: ProjectsIndex
        },
        {
            path: '/aboutUs',
            name: 'aboutUs',
            component: AboutUs
        }
    ]
});

export { router };