import * as http from '../services';

export default (Vuex) => new Vuex.Store({
  state: {
    loginName: null,
    records: [],
    headerMessage: "",
  },
  mutations: {
    setLoginName (state, name) {
      state.loginName = name;
    },
    setHeaderMessage (state, msg) {
      state.headerMessage = msg;
    },
    async updateHistory (state) {
      const reply = await http.HistoryService.getAllHistory();
      if (reply) {
        state.records = reply;
      } else {
        state.records = JSON.parse(localStorage.getItem('history'));
      }
    }
  }
});
