<template>
	<div>login</div>
	<form action="" @submit.prevent="submitForm">
		<div>
			<label for="username"></label>
			<input type="text" id="username" v-model="username" />
		</div>
		<div>
			<label for="password"></label>
			<input type="text" id="password" v-model="password" />
		</div>
		<button type="submit">로그인</button>
	</form>
	<p>{{ logMessage }}</p>
</template>

<script>
import { loginUser } from '@/api/index';

export default {
	data() {
		return {
			username: '',
			password: '',
			logMessage: '',
		};
	},
	methods: {
		async submitForm() {
			const userData = {
				username: this.username,
				password: this.password,
			};

			const { data } = await loginUser(userData);
			console.log('data', data.user.username);
			this.logMessage = `${data.user.username} 님 로그인되었습니다.`;

			this.initForm();
		},
		initForm() {
			this.username = '';
			this.password = '';
		},
	},
};
</script>

<style scoped></style>
