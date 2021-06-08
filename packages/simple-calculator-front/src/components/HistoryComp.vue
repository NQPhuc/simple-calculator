<template>
  <div class="register">
    <p>User: {{ this.$store.state.loginName || "Guest" }}</p>
    <button v-on:click="clearHistory">Clear History</button>
    <table style="width: 100%">
      <tr>
        <th>#</th>
        <th>Date created</th>
        <th>Operand 1</th>
        <th>Operator</th>
        <th>Operand 2</th>
        <th>Result</th>
      </tr>
      <tr v-for="(item, index) in this.$store.state.records" :key="item.id">
        <td>{{ index + 1 }}</td>
        <td>{{ item.createdAt }}</td>
        <td>{{ item.operand1 }}</td>
        <td>{{ item.operator }}</td>
        <td>{{ item.operand2 }}</td>
        <td>{{ item.result }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
table,
th,
td {
  border: 1px solid grey;
}
</style>

<script>
import * as http from "../services";
export default {
  setup() {},
  async mounted() {
    this.$store.commit("updateHistory");
  },
  methods:{
      async clearHistory(){
            const res = await http.HistoryService.clearHistory();
            console.log(res);
            if(res === "Not logged in"){
                localStorage.setItem("history", JSON.stringify([]));
            }
            this.$store.commit("updateHistory");
      }
  }
};
</script>