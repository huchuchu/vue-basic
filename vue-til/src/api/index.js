import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// 엑시오스 초기화
function createInstance() {
	const instance = axios.create({
		// baseURL: 'http://localhost:3000/',
		baseURL: process.env.VUE_APP_API_URL,
	});

	return setInterceptors(instance);
}

const instance = createInstance();

// 회원가입 API
export function registerUser(userData) {
	// const url = 'http://localhost:3000/signup';
	// return axios.post(url, userData);
	return instance.post('signup', userData);
}

// 로그인 API
export function loginUser(userData) {
	return instance.post('login', userData);
}

// 학습노트 데이터 조회 API

export function fetchPost() {
	return instance.get('posts');
}
