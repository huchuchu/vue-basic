<template>
	<TodoHeader :appTitle="title"></TodoHeader>
	<!-- <TodoInput @하위컴포넌트의 이벤트 이름="상위컴포넌트의 메서드 이름"></TodoInput> -->
	<TodoInput @add="addTodoItem"></TodoInput>
	<!-- <TodoList :프롭스이름="상위 컴포넌트의 데이터 이름"></TodoList> -->
	<TodoList :todoItems="todoItems" @remove="removeTodoItem"></TodoList>
</template>

<script>
import { ref } from 'vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

export default {
	components: {
		TodoHeader,
		TodoInput,
		TodoList,
	},
	setup() {
		//data
		const todoItems = ref([]);
		const title = '할일 앱';

		//method
		function fetchTodos() {
			const result = [];
			for (let i = 0; i < localStorage.length; i++) {
				const todoItem = localStorage.key(i);
				// items.value.push(todoItem);
				result.push(todoItem);
			}

			return result;
		}

		todoItems.value = fetchTodos();

		function addTodoItem(todo) {
			todoItems.value.push(todo);
			localStorage.setItem(todo, todo);
		}

		function removeTodoItem(item, index) {
			todoItems.value.splice(index, 1);
			localStorage.removeItem(item);
		}

		return { todoItems, addTodoItem, removeTodoItem, title };
	},
};
</script>

<style scoped></style>
