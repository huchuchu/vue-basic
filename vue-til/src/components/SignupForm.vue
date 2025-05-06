<template>
	<div>Signup</div>
	<form action="" @submit.prevent="submitForm">
		<div>
			<label for="username">id : </label>
			<input type="text" id="username" v-model="username" />
		</div>
		<div>
			<label for="password">pw : </label>
			<input type="text" id="password" v-model="password" />
		</div>
		<div>
			<label for="nickname">nickname : </label>
			<input type="text" id="nickname" v-model="nickname" />
		</div>
		<button
			v-bind:disabled="!isUsernameValid || !password || !nickname"
			type="submit"
		>
			회원가입
		</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
// import axios from 'axios';
import { registerUser } from '@/api/index';
import { validEmail } from '@/utils/validation';

export default {
	data() {
		return {
			username: '',
			password: '',
			nickname: '',
			logMessage: '',
		};
	},
	computed: {
		isUsernameValid() {
			return validEmail(this.username);
		},
	},
	methods: {
		async submitForm() {
			console.log('form 제출');
			const userData = {
				username: this.username,
				password: this.password,
				nickname: this.nickname,
			};
			// const response = await registerUser(userData);
			// console.log('response', response.data);

			// destructuring
			const { data } = await registerUser(userData);
			console.log('data', data.username);
			this.logMessage = `${data.username} 님이 가입되었습니다.`;

			this.initForm();
		},
		initForm() {
			this.username = '';
			this.password = '';
			this.nickname = '';
		},
	},
};
</script>

<style scoped></style>
