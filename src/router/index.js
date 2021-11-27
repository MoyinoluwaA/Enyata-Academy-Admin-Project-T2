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
		redirect: '/dashboard/home',
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
				name: 'create-application',
				component: () => import('../views/Dashboard/CreateApplication.vue')
			},
			{
				path: 'application-entries',
				name: 'application-entries',
				component: () => import('../views/Dashboard/ApplicationEntries.vue')
			},
			{
				path: 'compose-assessment',
				name: 'compose-assessment',
				component: () => import('../views/Dashboard/ComposeAssessment.vue')
			},
			{
				path: 'result',
				name: 'result',
				component: () => import('../views/Dashboard/Result.vue')
			},
			{
				path: 'settings',
				redirect: 'settings/admin-profile',
				name: 'settings',
				component: () => import('../views/Dashboard/Settings/SettingsHandler.vue'),
				children: [
					{
						path: 'admin-profile',
						name: 'admin-profile',
						component: () => import('../views/Dashboard/Settings/AdminProfile.vue')
					},
					{
						path: 'time-settings',
						name: 'time-settings',
						component: () => import('../views/Dashboard/Settings/TimerSettings.vue')
					}
				]
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
