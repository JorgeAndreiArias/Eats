import index from './components/index.vue'
import menu from './components/views/menu.vue'
import register from './components/views/register.vue'

const router = [
    { path: '/', component: index, name: 'index' },
    { path: '/menu', component: menu, name: 'menu' },
    { path: '/register', component: register, name: 'register'}
]

export default router