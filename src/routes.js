import { createWebHistory, createRouter } from "vue-router"
import Home from './components/Home.vue'
import Profile from './components/Profile.vue'
import Form from './components/Form.vue'
import   PageNotFound from './components/PageNotFound.vue'

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
        path: '/profile/:name',
        component: Profile,
    },
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)*',
        component: PageNotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;