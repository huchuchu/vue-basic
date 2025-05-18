<template>
	<div>
		<div class="main list-container contents">
			<h1 class="page-header">Today I Learned</h1>
			<ul>
				<li v-for="postItem in postItems" :key="postItem._id">
					<div class="post-title">{{ postItem.title }}</div>
					<div class="post-contents">{{ postItem.contents }}</div>
					<div class="post-time">{{ postItem.createdAt }}</div>
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
		postItems.value = data.posts;
	};
	fetchData();
});
</script>

<style></style>
