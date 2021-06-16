<template>
  <div class="register">
    <label class="text-gray-600 font-light">
      User: {{ this.$store.state.loginName || "Guest" }}
    </label> <br>
    <button v-on:click="clearHistory" class="common-button">Clear History</button>
    <div class="bg-white rounded-lg shadow-lg py-6">
      <div class="block overflow-x-auto mx-6">
        <table class="w-full text-left rounded-lg">
          <thead>
          <tr class="text-gray-800 border border-b-0">
            <th class="history-table-header-cell">#</th>
            <th class="history-table-header-cell">Date created</th>
            <th class="history-table-header-cell">Operand 1</th>
            <th class="history-table-header-cell">Operator</th>
            <th class="history-table-header-cell">Operand 2</th>
            <th class="history-table-header-cell">Result</th>
          </tr>
          </thead>
          <tbody>
          <tr
            v-for="(item, index) in historyRecords"
            :key="item.id"
            class="common-table-row"
          >
            <td class="history-table-cell">{{ index + 1 }}</td>
            <td class="history-table-cell">{{ item.createdAt }}</td>
            <td class="history-table-cell">{{ item.operand1 }}</td>
            <td class="history-table-cell">{{ item.operator }}</td>
            <td class="history-table-cell">{{ item.operand2 }}</td>
            <td class="history-table-cell">{{ item.result }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import * as http from "../services";

export default {
  setup () {},
  mounted () {
    this.$store.commit("updateHistory");
  },
  computed: {
    historyRecords () {
      return this.$store.state.records;
    }
  },
  methods: {
    async clearHistory () {
      const res = await http.HistoryService.clearHistory();
      if (!res) {
        localStorage.setItem("history", JSON.stringify([]));
      }
      this.$store.commit("updateHistory");
    }
  }
};
</script>

<style scoped>
table,
th,
td {
  border: 1px solid grey;
}
.history-table-cell{
  @apply px-4 py-4;
}
.history-table-header-cell{
  @apply px-4 py-3;
}
</style>
