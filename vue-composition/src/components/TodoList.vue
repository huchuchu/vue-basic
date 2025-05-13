<template>
	<ul>
		<li v-for="(item, index) in todoItems" :key="index">
			<span>{{ item }}</span>
			<button @click="removeTodo(item, index)">삭제</button>
		</li>
	</ul>
</template>

<script>
import { watch } from 'vue';

export default {
	props: ['todoItems'],
	setup(props, context) {
		function removeTodo(item, index) {
			context.emit('remove', item, index);
		}

		// 최대한 watch에 의존하지않길 추천(추적이 어려울수도있음)
		watch(props.todoItems, newValue => {
			console.log(newValue);
		});
		return { removeTodo };
	},
};
</script>

<style lang="scss" scoped></style>
