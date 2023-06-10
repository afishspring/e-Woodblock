import {createRouter, createWebHistory} from 'vue-router'
import {createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
	history: createWebHashHistory(),
	routes:routes
})
export default router;
