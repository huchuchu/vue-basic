<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form @submit.prevent="submitForm" class="form">
				<div>
					<label for="username">id:</label>
					<input id="username" type="text" v-model="username" />
					<p class="validation-text">
						<span class="warning" v-if="!isUsernameValid && username">
							Please enter an email address
						</span>
					</p>
				</div>
				<div>
					<label for="password">pw:</label>
					<input id="password" type="text" v-model="password" />
				</div>
				<button
					:disabled="!isUsernameValid || !password"
					type="submit"
					class="btn"
				>
					로그인
				</button>
			</form>
			<p class="log">{{ logMessage }}</p>
		</div>
	</div>
</template>

<script>
import { loginUser } from '@/api/index';
import { useUserStore } from '@/store/useUserStore';
import { validEmail } from '@/utils/validation';

export default {
	data() {
		return {
			username: '',
			password: '',
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
			try {
				const userStore = useUserStore();
				// 비즈니스 로직
				const userData = {
					username: this.username,
					password: this.password,
				};

				const { data } = await loginUser(userData);
				console.log('data', data.token);
				userStore.setUsername(data.user.username);
				userStore.setToken(data.token);

				this.$router.push('/main');
			} catch (error) {
				// 에러 핸들링
				console.log('error', error.response.data);
				this.logMessage = error.response.data;
			} finally {
				this.initForm();
			}
		},
		initForm() {
			this.username = '';
			this.password = '';
		},
	},
};
</script>

<style>
.btn {
	color: white;
}
</style>
