import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuex from 'vuex';
import * as http from './services';

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loginName: null,
    records: [],
  },
  mutations: {
    setLoginName(state, name){
      state.loginName = name;
      //console.log("HERE")
    },
    async updateHistory (state) {
      const reply = await http.HistoryService.getAllHistory();
      if (reply != "Not logged in") {
        state.records = reply;
      } else {
        state.records = JSON.parse(localStorage.getItem('history'));
      }
    }
  }
})

const history = localStorage.getItem("history");
if(!history) localStorage.setItem("history", JSON.stringify([]));

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')


