import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
			path: '/',
			name: 'index',
			component: () => import('@/page/index')
		},
		{
			path: '/Invest',
			name: 'Invest',
			component: () => import('@/page/invest')
		},
		{
			path: '/find',
			name: 'find',
			component: () => import('@/page/find')
		},
		{
			path: '/user',
			name: 'user',
			component: () => import('@/page/user')
		},
	]
})
