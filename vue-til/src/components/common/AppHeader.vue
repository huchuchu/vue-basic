<template>
	<header>
		<div>
			<router-link to="/" class="logo">
				TIL
				<span v-if="userStore.isLogin"> by {{ userStore.username }}</span>
			</router-link>
		</div>
		<div class="navigations">
			<template v-if="userStore.isLogin">
				<a href="javascript:;" @click="logoutUser" class="logout-button">
					Logout
				</a>
			</template>
			<template v-else>
				<router-link to="/login">로그인</router-link>
				<router-link to="/signup">회원가입</router-link>
			</template>
		</div>
	</header>
</template>

<script setup>
import { useUserStore } from '@/store/useUserStore';
import { useRouter } from 'vue-router';
const userStore = useUserStore();
const router = useRouter();

const logoutUser = () => {
	userStore.clearUsername();
	router.push('/login');
};
</script>

<style scoped>
.username {
	color: white;
}
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	background-color: #927dfc;
	z-index: 2;
	box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
	color: #dedede;
	font-size: 18px;
}
a.logo {
	font-size: 30px;
	font-weight: 900;
	color: white;
}
.logo > span {
	font-size: 14px;
	font-weight: normal;
}
.navigations a {
	margin-left: 10px;
}
.fixed {
	position: fixed;
	top: 0;
	width: 100%;
}
.logout-button {
	font-size: 14px;
}
a.router-link-exact-active {
	color: white;
	font-weight: bold;
}
</style>
