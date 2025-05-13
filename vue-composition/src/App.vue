<template>
	<TodoHeader :appTitle="title"></TodoHeader>
	<!-- <TodoInput @하위컴포넌트의 이벤트 이름="상위컴포넌트의 메서드 이름"></TodoInput> -->
	<TodoInput @add="addTodoItem"></TodoInput>
	<!-- <TodoList :프롭스이름="상위 컴포넌트의 데이터 이름"></TodoList> -->
	<TodoList :todoItems="todoItems" @remove="removeTodoItem"></TodoList>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import { useTodo } from './composable/useTodo';

export default {
	components: {
		TodoHeader,
		TodoInput,
		TodoList,
	},
	data() {
		return {
			title: '할일 앱',
		};
	},
	setup() {
		const { todoItems, addTodoItem } = useTodo();
		//data
		// const todoItems = ref([]);

		//method
		// function fetchTodos() {
		// 	const result = [];
		// 	for (let i = 0; i < localStorage.length; i++) {
		// 		const todoItem = localStorage.key(i);
		// 		// items.value.push(todoItem);
		// 		result.push(todoItem);
		// 	}

		// 	return result;
		// }

		// 라이프 사이클 API가 적용된 구간
		// onBeforeMount(() => {
		// 	todoItems.value = fetchTodos();
		// });

		// function addTodoItem(todo) {
		// 	todoItems.value.push(todo);
		// 	localStorage.setItem(todo, todo);
		// }

		return { todoItems, addTodoItem };
	},
	methods: {
		removeTodoItem(item, index) {
			this.todoItems.splice(index, 1);
			localStorage.removeItem(item);
		},
	},
};
</script>

<style scoped></style>
