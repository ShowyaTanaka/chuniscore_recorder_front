<script>
import AuthInputForm from "@/components/atoms/AuthInputForm.vue"
export default {
  name: "ID_PWForm",
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
      if (this.$props.is_create_user) {
        if (this.pw_1 !== this.pw_2){
          this.errors = "確認用パスワードが異なります。"
          return false
        }
        return true
      }
    },
    post_data: function (){
      const validate_result = this.validate_pw_id()
      if (validate_result){
        alert("成功")
      }
    }
  }

}
</script>
<template>
  <div id="input_container">
    <div>
      <AuthInputForm v-model:input_variable="ID" label_value="ID" input_field_id="id_input" :is_password=false />
      <AuthInputForm v-model:input_variable="pw_1" label_value="パスワード" input_field_id="pw_1" :is_password=true />
      <AuthInputForm v-model:input_variable="pw_2" label_value="パスワード(確認用)" input_field_id="pw_2" :is_password=true />
    </div>
    <button class="btn btn-primary btn-lg btn-block mt-5" v-bind:disabled="!(ID&&pw_2&&pw_1)">新規登録</button>
  </div>
</template>
<style scoped>
#input_container{
  display: flex;
  flex-flow: column;
  justify-content:center;
  width: 308px;
  margin:auto;
}
</style>