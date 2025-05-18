import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => ({
		username: '',
		token: '',
	}),
	actions: {
		setUsername(name) {
			this.username = name;
		},
		setToken(token) {
			this.token = token;
		},
		clearUsername() {
			this.username = '';
		},
	},
	getters: {
		isLogin: state => state.username !== '',
	},
});
