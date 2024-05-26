<script>

import axios from "axios";

export default {
  name: 'App',
  methods: {
    logout:() => {
      axios.post('/auth/logout/', {header: {'Token': this.state.jwt_token}}).then(() => {
        this.$store.dispatch('logout');
      })
          .catch((error) => {
            console.log(error)
            alert("error:")
          })
    }
  }
}
</script>

<template>
  <b-modal id="modal-1" title="BootstrapVue" ok-title='ログアウト' cancel-title="キャンセル" @ok="logout">
    <p class="my-4">ChuniScore Recorderからログアウトしますか？</p>
  </b-modal>
</template>

<style scoped>

</style>