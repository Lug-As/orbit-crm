import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import auth from '@/router/middleware/auth'
import guest from '@/router/middleware/guest'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'main',
		meta: {
			middleware: auth,
		},
		component: () => import('../views/Notifications'),
	},
	{
		path: '/login',
		name: 'login',
		meta: {
			middleware: guest,
		},
		component: () => import('../views/Login'),
	},
	{
		path: '*',
		name: '404',
		meta: {
			layout: false,
		},
		component: () => import('../views/NotFound'),
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	scrollBehavior(to, from, savedPosition) {
		if (to.name === from.name) {
			return false
		}
		if (to.hash) {
			return {
				selector: to.hash,
				behavior: 'smooth',
			}
		}
		if (savedPosition) {
			return savedPosition
		}
		return {x: 0, y: 0}
	},
	routes,
})

router.beforeEach((to, from, next) => {
	if (!to.meta.middleware) {
		return next()
	}
	const middleware = to.meta.middleware
	const context = {
		to,
		from,
		next,
		store,
	}
	return middleware({
		...context,
	})
})

export default router
