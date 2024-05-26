import { createStore } from 'vuex'
const axios = require('axios')

export default createStore({
  state: {
    jwt_token: "",
    user_name: "",
    contain_chuni_user: false,
  },
  getters: {
  },
  mutations: {
    store_login_info(state, payload) {
      alert(payload)
      state.user_name = payload.user_name
      state.jwt_token = payload.token
      state.contain_chuni_user = payload.contain_chuni_user
    },
    delete_token_info(state) {
      state.jwt_token = null
      state.user_name = null
      state.contain_chuni_user = null
    }
  },
  actions: {
    init(context){
      if (localStorage.getItem('jwt_token') && localStorage.getItem('user_name')) {
        this.state.jwt_token = localStorage.getItem('jwt_token')
        this.state.user_name = localStorage.getItem('user_name')
        axios.interceptors.request.use(config => {
          config.headers.Token = localStorage.getItem('jwt_token')
          return config
        })
        axios.get(process.env.VUE_APP_API_HOST_PREFIX + '/auth/my_status/')
        .then(res => {alert(res)})
            .catch(function(){
              axios.get(process.env.VUE_APP_API_HOST_PREFIX + '/auth/check/')
                  .then(res => {
                  if (res.data.refresh_token_valid === true){
                    axios.post(process.env.VUE_APP_API_HOST_PREFIX + '/auth/refresh_token/')
                        .then(res => {
                          localStorage.setItem('jwt_token',res.data.token)
                        })
                        .catch(() => {alert("セッション情報の更新に失敗しました。")
                          context.dispatch('delete_token_info_permanent')}
                        )
                  }
                  else {
                    alert("セッション期限が切れています。")
                    context.dispatch('delete_token_info_permanent')
                  }
                  })
                  .catch((err) => {
                    alert("サーバーに接続できません。")
                    console.log(err)
                  })
            })
      }
    },
    save_token_info_permanent(context, payload) {
      context.commit('store_login_info', payload)
      localStorage.setItem('jwt_token', payload.token)
      localStorage.setItem('user_name', payload.user_name)
      localStorage.setItem('contain_chuni_user', payload.contain_chunithm_user)
    },
    delete_token_info_permanent(context) {
      context.commit('delete_token_info')
      localStorage.setItem('jwt_token', "")
      localStorage.setItem('user_name', "")
      localStorage.setItem('contain_chuni_user', false)
    }
  },
  modules: {
  }
})
