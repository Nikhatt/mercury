import { createWebHistory, createRouter } from "vue-router"
import Home from './components/Home.vue'
import Profile from './components/Profile.vue'
import Form from './components/Form.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
    },
    {
        name: 'Form',
        path: '/form',
        component: Form,
    },
    {
        name: 'Profile',
        path: '/profile',
        component: Profile,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;