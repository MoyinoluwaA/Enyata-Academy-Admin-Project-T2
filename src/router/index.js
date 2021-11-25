import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'SignIn',
		component: SignIn
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard/index.vue'),
		children: [
			{
				path: 'home',
				name: 'dashboard-home',
				component: () => import('../views/Dashboard/Home.vue')
			},
			{
				path: 'create-application',
				name: 'user-dashboard',
				component: () => import('../views/Dashboard/CreateApplication.vue')
			}
			]
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
