<template>
	<AppHeader></AppHeader>
	<RouterView></RouterView>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';

export default {
	components: {
		AppHeader,
	},
};
</script>

<style scoped></style>
