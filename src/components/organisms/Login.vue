<script>
import HeaderNavigationBar from "@/components/molecules/HeaderNavigationBar.vue"
import CreateUserForm from "@/components/molecules/CreateUserForm.vue"
export default {
  name: 'App',
  components: {
    HeaderNavigationBar,
    CreateUserForm
  }
}
</script>

<template>
  <HeaderNavigationBar/>
  <div class="container">
    <p>ログイン</p>
  </div>
  <CreateUserForm/>
</template>

<style scoped>
.container {
  font-family: arial;
  font-size: 24px;
  margin: 25px;
  width: 350px;
  height: 200px;
  outline: dashed 1px black;
}

p {
  /* 水平方向の中央揃え */
  text-align: center;
}
</style>