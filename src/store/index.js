import { createStore } from 'vuex'
const axios = require('axios')

export default createStore({
  state: {
    jwt_token: "",
    user_name: "",
    contain_chunithm_user: false,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    init(){
      if (localStorage.getItem('jwt_token') && localStorage.getItem('user_name')) {
        this.state.jwt_token = localStorage.getItem('jwt_token')
        this.state.user_name = localStorage.getItem('user_name')
        axios.get(process.env.VUE_APP_API_HOST_PREFIX + '/auth/my_status/')
        .then(res => {alert(res)})
            .catch(function(){
              axios.get(process.env.VUE_APP_API_HOST_PREFIX + '/auth/check/')
                  .then(res =>
                  console.log(res))
                  .catch( function(){alert("サーバーに接続できません。")})
            })
      }
    }
  },
  modules: {
  }
})
