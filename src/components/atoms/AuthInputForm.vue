<script>
export default{
  name: 'AuthInputForm',
  props: {
    is_password: {type: Boolean, required: true},
    input_field_id: {type: String, required: true},
    label_value: {type: String, required: true},
  }
}
</script>

<script setup>
// eslint-disable-next-line no-undef
const input_variable = defineModel()

</script>
<template>
  <div class="parent_field">
    <label for={{this.$props.input_field_id}}>{{label_value}}</label>
    <input
        v-if="this.$props.is_password"
        id={{this.$props.input_field_id}}
        type="password"
        v-model = "input_variable" size="30">
    <input
        v-else
        id={{this.$props.input_field_id}}
        type="text"
        v-model = "input_variable" size="30">
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