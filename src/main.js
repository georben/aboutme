import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', // Root path
            component: () => import('./components/Home.vue') // Assuming Home.vue is your home page component
        },
        {
            path: '/about', // Route for about page
            component: () => import('./aboutme/AboutPage.vue') // Assuming About.vue is your about page component
        },
        {
            path: '/hobby', // Route for about page
            component: () => import('./aboutme/hobbies.vue') // Assuming About.vue is your about page component
        },
        {
            path: '/service', // Route for about page
            component: () => import('./aboutme/ServicePage.vue') // Assuming About.vue is your about page component
        }
    ],
    mode: 'history' // Specify mode here
});

createApp(App).use(router).mount('#app'); // Use router

export default router;
