<template>
  <AppHeader></AppHeader>
  <div>
    {{ message }}
  </div>
  <!-- <button v-on:click=""></button> -->
  <button @click="showAlert">경고</button>
</template>

<script>
// import 컴포넌트이름 from './컴포넌트 경로'
import AppHeader from './components/AppHeader.vue';

export default {
  components:{
    // '컴포넌트 이름' : '컴포넌트 내용'
    // 자바스크립트의 객체 축약문법에 의해서 key와 value가 같으면 아래와 같이 사용할 수 있다.
    // 'AppHeader' : AppHeader
    AppHeader

  },
  data(){
    return {
      message : 'hi'
    }
  },
  methods:{
    showAlert(){
      alert('hello')
    }
  }


}
</script>

<style scoped>

</style>