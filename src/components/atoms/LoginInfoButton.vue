<!-- ログインしている場合、アカウント名、各種モーダルを表示するボタンを表示。ログインしていない場合はログインページに遷移するボタンを表示。 -->
<template>
<div v-if="!this.$store.state.user_name">
  <a class="btn btn-outline-secondary">ログイン</a>
  <a class="btn btn-primary m-2">新規登録</a>
</div>
<b-nav-item-dropdown v-else :text="this.$store.state.user_name">
  <b-dropdown-item href="#">ユーザー設定</b-dropdown-item>
  <b-dropdown-item href="#">ゲキ！チュウマイプレイヤー設定</b-dropdown-item>
  <b-dropdown-item href="#">ログアウト</b-dropdown-item>
</b-nav-item-dropdown>
</template>

<style scoped>

</style>
<script setup lang="ts">
</script>