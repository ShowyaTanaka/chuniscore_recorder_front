import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import { createBootstrap } from "bootstrap-vue-next";
createApp(App).use(store).use(createBootstrap({components:true,directives:true})).mount('#app')
