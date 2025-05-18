<template>
	<div>
		<div class="main list-container contents">
			<h1 class="page-header">Today I Learned</h1>
			<ul>
				<li v-for="postItem in postItems" :key="postItem._id">
					{{ postItem.title }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { fetchPost } from '@/api';
import { onBeforeMount, ref } from 'vue';

const postItems = ref([]);

onBeforeMount(() => {
	const fetchData = async () => {
		const { data } = await fetchPost();
		console.log('data', data);
		postItems.value = data;
	};
	fetchData();
});
</script>

<style></style>
