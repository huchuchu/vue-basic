import { createRouter, createWebHistory } from 'vue-router';
import LoninPage from '@/views/LoninPage.vue';
import SignupPage from '@/views/SignupPage.vue';

// 라우팅 정보를 담는 배열
const routes = [
	{
		path: '/login',
		name: 'LoninPage',
		component: LoninPage,
	},
	{
		path: '/signup',
		name: 'SignupPage',
		component: SignupPage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
