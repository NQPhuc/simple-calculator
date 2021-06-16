import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import './index.css';
import vuexstore from './store';

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = vuexstore(Vuex);

// This is only to set local storage 'history' to an empty list
// when new browser use the app for the first time.
const history = localStorage.getItem("history");
if (!history) localStorage.setItem("history", JSON.stringify([]));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
