<script setup>
import { defineEmits } from 'vue'
const emit = defineEmits(["emit_value"])
</script>
<script>
export default{
  name: 'AuthInputForm',
  props: {
    is_password: {type: Boolean, required: true},
    input_field_id: {type: String, required: true},
    label_value: {type: String, required: true},
  },
  data()  {
    return {
      input_variable: ""
    }
  }
}
</script>
<template>
  <div class="parent_field">
    <label for={{this.$props.input_field_id}}>{{label_value}}</label>
    <input
        v-if="this.$props.is_password"
        id={{this.$props.input_field_id}}
        type="password" size="30" :value=this.input_variable @input="emit('emit_value', $event.target.value)">
    <input
        v-else
        id={{this.$props.input_field_id}}
        type="text" size="30" :value="this.input_variable" @input="emit('emit_value', $event.target.value)">
  </div>
</template>

<style scoped>
.parent_field{
  position: relative;
  width: 300px;
}
label {
  display: block;
  text-align: left;
}
</style>