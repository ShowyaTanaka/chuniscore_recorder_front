<template>
<div id="app">
  <HeaderNavigationBar/>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <CreateUserForm/>
  <!-- Button trigger modal -->
  <!-- Modal -->
  <div>
    <b-modal id="modal-1" hide-footer title="ログアウト">
      <p class="my-4">ChuniScore Recorderからログアウトしますか？</p>
      <b-button size="sm" variant="success" @click="ok()">
        OK
      </b-button>
      <b-button size="sm" variant="danger" @click="cancel()">
        Cancel
      </b-button>
    </b-modal>
  </div>

</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderNavigationBar from "@/components/molecules/HeaderNavigationBar.vue"
import CreateUserForm from "@/components/molecules/CreateUserForm.vue"
export default {
  name: 'App',
  components: {
    HelloWorld,
    HeaderNavigationBar,
    CreateUserForm
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
}
</style>
