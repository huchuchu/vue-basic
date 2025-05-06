<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form @submit.prevent="submitForm" class="form">
				<div>
					<label for="username">id: </label>
					<input id="username" type="text" v-model="username" />
				</div>
				<div>
					<label for="password">pw: </label>
					<input id="password" type="text" v-model="password" />
				</div>
				<div>
					<label for="nickname">nickname: </label>
					<input id="nickname" type="text" v-model="nickname" />
				</div>
				<button type="submit" class="btn">회원 가입</button>
			</form>
			<p class="log">{{ logMessage }}</p>
		</div>
	</div>
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
