<template>
  <div>
    <p>integer 1:</p>
    <textarea id="a" class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" rows="4" cols="50" v-model="a"></textarea>

    <p>integer 2:</p>
    <textarea id="b" class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" rows="4" cols="50"  v-model="b"></textarea>

    <p>
      operator:
      <select id="op" class="w-full border bg-white rounded px-3 py-2 outline-none" v-model="op">
        <option value="+" class="py-1">+</option>
        <option value="-" class="py-1">-</option>
        <option value="*" class="py-1">*</option>
        <option value="%" class="py-1">%</option>
      </select><br />
    </p>

    <button type="button" v-on:click="calculate" class="bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-3 py-2 focus:outline-none">Calculate</button>

    <p>Result:</p>
    <textarea id="result" class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" rows="8" cols="50"  disabled v-model="res"></textarea>
  </div>
</template>
<script>
import * as http from "../services";

export default {
  name: "CalculatorComponent",
  props: {},
  data(){ return {
    a: "0",
    b: "0",
    op: "+",
    res: ""
  }},
  methods:{
    async calculate(){
      const resData = await http.CalcService.calculate(this.a, this.b, this.op);
      this.res = resData.result;
      if(!resData.saved){
        let historyArray = JSON.parse(localStorage.getItem("history"));
        historyArray.push({
          operand1: this.a, 
          operand2: this.b, 
          operator: this.op, 
          result: resData.result,
          createdAt: Date.now()
        });
        localStorage.setItem("history", JSON.stringify(historyArray));
      }
      this.$store.commit("updateHistory");
    }
  }
};
</script>