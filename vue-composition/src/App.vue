<template>
	<div>
		<p>{{ message }}</p>
		<button @click="changeMessage">change</button>
	</div>
</template>

<script>
import { useMessage } from './composable/useMessage';

export default {
	setup() {
		// [ver 3]
		const { message, changeMessage } = useMessage();
		return { message, changeMessage };

		// [ver 2]
		// data
		// const message = ref('hello');

		//methods
		// function changeMessage(){
		//   message.value = 'hi';
		// }

		// return {message, changeMessage}
	},

	// [ver 1]
	// data() {
	//   return {
	//     message: 'hello'
	//   }
	// },
	// methods:{
	//   changeMessage(){
	//     this.message = 'hi';
	//   }
	// }
};
</script>

<style scoped></style>
