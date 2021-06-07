<template>
  <div class="register">
    <table style="width: 100%">
      <tr>
        <th>#</th>
        <th>Date created</th>
        <th>Operand 1</th>
        <th>Operator</th>
        <th>Operand 2</th>
        <th>Result</th>
      </tr>
      <tr v-for="(item, index) in this.records" :key="item.id">
        <td>{{index+1}}</td>
        <td>{{item.createdAt}}</td>
        <td>{{item.operand1}}</td>
        <td>{{item.operator}}</td>
        <td>{{item.operand2}}</td>
        <td>{{item.result}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import * as http from "../services";
export default {
  setup() {},
  data() {
    return {
      records: [],
    };
  },
  async mounted() {
    const reply = await http.HistoryService.getAllHistory();
    if (reply) {
      this.records = reply;
    } else {
      this.records = [];
    }
  },
};
</script>
