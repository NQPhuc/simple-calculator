<template>
  <div>
    <p>integer 1:</p>
    <textarea id="a" rows="6" cols="100" v-model="a"></textarea>
    <button type="button">Reset</button>

    <p>integer 2:</p>
    <textarea id="b" rows="6" cols="100" v-model="b"></textarea>
    <button type="button">Reset</button>

    <p>
      operator:
      <select id="op" v-model="op">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="%">%</option></select
      ><br />
    </p>

    <button type="button" v-on:click="calculate">Calculate</button>

    <p>Result:</p>
    <textarea id="result" rows="10" cols="100" disabled v-model="res"></textarea>
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
      console.log(resData.result)
    }
  }
};
</script>