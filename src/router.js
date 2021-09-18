import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: () => import('./views/Home')
	},
	{
		path: '/about',
		component: () => import('./views/About')
	},
	
];

export function createRouter(){
	return new VueRouter({
		mode: 'history',
		routes
	})
}
