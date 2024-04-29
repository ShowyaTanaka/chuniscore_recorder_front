<template>
<div id="app">
  <HeaderNavigationBar/>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <LoginInfoButton></LoginInfoButton>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LoginInfoButton from "@/components/atoms/LoginInfoButton.vue"
import HeaderNavigationBar from "@/components/molecules/HeaderNavigationBar.vue"
export default {
  name: 'App',
  components: {
    HelloWorld,
    LoginInfoButton,
    HeaderNavigationBar
  },
  created: function(){
    this.$store.dispatch('init')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
