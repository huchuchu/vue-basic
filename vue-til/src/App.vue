<template>
	<header>
		<!--RouterLink: to에 지정된 문자열로 이동시켜줌-->
		<RouterLink to="/login">로그인</RouterLink> |
		<RouterLink to="signup">회원가입</RouterLink>
	</header>
	<RouterView></RouterView>
</template>

<script>
export default {};
</script>

<style scoped></style>
