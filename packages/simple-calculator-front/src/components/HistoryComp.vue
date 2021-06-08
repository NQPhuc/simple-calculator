<template>
  <div class="register">
    <label class="text-gray-600 font-light">User: {{ this.$store.state.loginName || "Guest" }}</label> <br>
    <button v-on:click="clearHistory" class="bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-3 py-2 focus:outline-none">Clear History</button>
    <div class="bg-white rounded-lg shadow-lg py-6">
      <div class="block overflow-x-auto mx-6">
        <table class="w-full text-left rounded-lg">
          <thead>
          <tr class="text-gray-800 border border-b-0">
            <th class="px-4 py-3">#</th>
            <th class="px-4 py-3">Date created</th>
            <th class="px-4 py-3">Operand 1</th>
            <th class="px-4 py-3">Operator</th>
            <th class="px-4 py-3">Operand 2</th>
            <th class="px-4 py-3">Result</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item, index) in this.$store.state.records" :key="item.id" class="w-full font-light text-gray-700 bg-gray-100 whitespace-no-wrap border border-b-0">
            <td class="px-4 py-4">{{ index + 1 }}</td>
            <td class="px-4 py-4">{{ item.createdAt }}</td>
            <td class="px-4 py-4">{{ item.operand1 }}</td>
            <td class="px-4 py-4">{{ item.operator }}</td>
            <td class="px-4 py-4">{{ item.operand2 }}</td>
            <td class="px-4 py-4">{{ item.result }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
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