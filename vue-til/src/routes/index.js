import { createRouter, createWebHistory } from 'vue-router';
// import LoginPage from '@/views/LoginPage.vue';
// import SignupPage from '@/views/SignupPage.vue';

// 라우팅 정보를 담는 배열
// const routes = [
// 	{
// 		path: '/login',
// 		name: 'LoninPage',
// 		component: LoninPage,
// 	},
// 	{
// 		path: '/signup',
// 		name: 'SignupPage',
// 		component: SignupPage,
// 	},
// ];

// 코드 스플리팅 : Lazy load
const routes = [
	{
		path: '/',
		redirect: '/login',
	},
	{
		path: '/login',
		name: 'LoginPage',
		component: () => import('@/views/LoginPage.vue'),
	},
	{
		path: '/signup',
		name: 'SignupPage',
		component: () => import('@/views/SignupPage.vue'),
	},
	{
		path: '/main',
		name: 'MainPage',
		component: () => import('@/views/MainPage.vue'),
	},
	{
		path: '/:pathMatch(.*)*', // 위 url을 제외한 나머지
		name: 'notFoundPage',
		component: () => import('@/views/NotFoundPage.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
