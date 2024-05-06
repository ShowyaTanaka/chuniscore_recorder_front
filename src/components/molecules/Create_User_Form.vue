<script>
import AuthInputForm from "@/components/atoms/AuthInputForm.vue"
import axios from "axios"
export default {
  name: "Create_User_Form",
  components: {AuthInputForm},
  props: ['endpoint_url', 'is_create_user'],
  data: ()=> ({
        ID: "",
        pw_1: "",
        pw_2: "",
        errors: {}
      }
  ),
  methods: {
    validate_pw_id: function (){
      if (this.pw_1 !== this.pw_2){
          this.errors = "確認用パスワードが異なります。"
          return false
        }
        return true
    },
    post_data: function (){
      const validate_result = this.validate_pw_id()
      if (validate_result){
        axios.post('/user_conf/new/', {"user_name": this.ID, "password": this.pw_1}).then((response) => {alert(response)})
      }
    }
  }

}
</script>
<template>
  <div id="input_container">
    <div>
      <AuthInputForm @emit_value="ID = $event" label_value="ID" input_field_id="id_input" :is_password=false />
      <AuthInputForm @emit_value="pw_1 = $event" label_value="パスワード" input_field_id="pw_1" :is_password=true />
      <AuthInputForm @emit_value="pw_2 = $event" label_value="パスワード(確認用)" input_field_id="pw_2" :is_password=true />
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