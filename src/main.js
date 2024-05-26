import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import { createBootstrap } from "bootstrap-vue-next";
import Axios from 'axios'
Axios.defaults.baseURL = process.env.VUE_APP_API_HOST_PREFIX
Axios.defaults.headers.common['Accept'] = 'application/json'
Axios.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8'
Axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:8080'
Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
createApp(App).use(store).use(createBootstrap({components:true,directives:true})).mount('#app')
