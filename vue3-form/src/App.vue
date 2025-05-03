<template>
  <!-- <form action="" @submit="submitForm"> -->
  <!-- .prevent : 이벤트의 기본 동작을 막아줌-->
  <form action="" @submit.prevent="submitForm">
  <div>
      <label for="userId">ID: </label>
      <input type="text" id="userId" v-model="username">
    </div>

    <div>
      <label for="password">PW: </label>
      <input type="text" id="password" v-model="password">
    </div>
    <button type="submit">로그인</button>
  </form>
</template>

<script>
  // import 라이브러리 이름 from 패키지 이름
  import axios from 'axios'

  export default {
    data(){
      return{
        username : '',
        password : '',
      }
    },
    methods:{
      submitForm(event){
        // method는 이벤트를 첫번째 파라미터로 가져올 수 있다다
        // form의 기본동작 제어*ex 새로고침
        // event.preventDefault(); 
        // 이벤트 발생 지점에서도 제어할 수 있음!!  

        console.log('제출됨');
        console.log('event', event);
        const data = {
          username : this.username,
          password : this.password
        }
        axios.post('https://jsonplaceholder.typicode.com/users/',data)
        .then(response=>{
          console.log('response', response)
        });                
      }
    }

  }
</script>

<style scoped>

</style>