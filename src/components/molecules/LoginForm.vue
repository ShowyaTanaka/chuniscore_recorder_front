<script>
import AuthInputForm from "@/components/atoms/AuthInputForm.vue"
import axios from "axios"
export default {
  name: "CreateUserForm",
  components: {AuthInputForm},
  props: ['endpoint_url', 'is_create_user'],
  data: ()=> ({
        ID: "",
        pw: "",
        errors: {}
      }
  ),
  methods: {
    post_data: function (){
        axios.post('/auth/login/', {"user_name": this.ID, "password": this.pw}).then((response) => {
          this.$store.dispatch('save_token_info_permanent', {"user_name": this.ID, "token": response.data['token'], "contain_chuni_user": response.data[]})
          return true
        })
        .catch((error) => {
          var text= ""
          for (let err in error.response.data) {
            for (let error_text in error.response.data[err]) {
              text += err + ":" + error.response.data[err][error_text] + "\n"
            }
          }
          alert("エラーが発生しました:"+text)
        })
    }
  }

}
</script>
<template>
  <div id="input_container">
    <div>
      <AuthInputForm @emit_value="ID = $event" label_value="ID" input_field_id="id_input" :is_password=false />
      <AuthInputForm @emit_value="pw_1 = $event" label_value="パスワード" input_field_id="pw_1" :is_password=true />
    </div>
    <button class="btn btn-primary btn-lg btn-block mt-5" v-bind:disabled="!(ID&&pw_2&&pw_1)" @click="post_data">新規登録</button>
  </div>
</template>
<style scoped>
#input_container{
  display: flex;
  flex-flow: column;
  justify-content:center;
  width: 300px;
  margin:auto;
}
</style>