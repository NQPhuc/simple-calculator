import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuex from 'vuex';

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loginName: null,
    count: 0
  },
  mutations: {
    setLoginName(state, name){
      state.loginName = name;
      //console.log("HERE")
    },
    increment (state) {
      state.count++
    }
  }
})

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')


