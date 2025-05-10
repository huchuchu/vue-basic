<template>
	<div>
		<input type="text" v-model="todoInput" />
		<button @click="addTodo">add</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup(props, context) {
		// data
		const todoInput = ref('');

		function addTodo() {
			const todo = todoInput.value;
			// localStorage.setItem(todo, todo);
			// 상위 컴포넌트에서 바인딩되는 key : add
			context.emit('add', todo);
			clearTodo();
		}

		const clearTodo = () => (todoInput.value = '');

		return { todoInput, addTodo, clearTodo };
	},
};
</script>

<style scoped></style>
