<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">ChuniScore Recorder</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <LoginInfoButton/>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <!-- Modal -->
</div>
</template>

<style scoped>

</style>
<script setup>
import LoginInfoButton from "@/components/atoms/LoginInfoButton.vue"

</script>