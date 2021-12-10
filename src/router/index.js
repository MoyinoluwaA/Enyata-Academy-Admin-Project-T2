import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store';
import SignIn from '../views/SignIn.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'SignIn',
		component: SignIn,
		meta: { requiresAuth: false }
	},
	{
		path: '/dashboard',
		redirect: '/dashboard/home',
		name: 'Dashboard',
		component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard/index.vue'),
		meta: { requiresAuth: true },
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
				path: 'check-assessment-exist',
				name: 'check-assessment-exist',
				component: () => import('../views/Dashboard/CheckAssessment.vue')
			},
			{
				path: 'create-assessment',
				name: 'create-assessment',
				component: () => import('../views/Dashboard/CreateAssessment.vue')
			},
			{
				path: 'compose-assessment',
				name: 'compose-assessment',
				component: () => import('../views/Dashboard/ComposeAssessment.vue')
			},
			{
				path: 'assessment-history',
				name: 'assessment-history',
				component: () => import('../views/Dashboard/AssessmentHistory.vue')
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
	},
	{
		path: '*',
		name: 'PageNotFound',
		component: () => import(/* webpackChunkName: "about" */ '../views/PageNotFound')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior() {
		window.scrollTo(0,0)
	}
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(route => route.meta.requiresAuth)) {
        if (!(store.state.token)) {
            next('/');
        } else {
            next()
        }
    } else if (to.matched.some(route => !route.meta.requiresAuth)) {
        if (store.state.token) {
            next('/dashboard')
        }
    }
    next()
})

export default router
