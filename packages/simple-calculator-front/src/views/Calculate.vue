<template>
  <div>
    <p>CALCULATOR PAGE</p>
    <CalculatorComponent />
  </div>
</template>
<script>
import * as http from "../services";
import CalculatorComponent from "@/components/Calculator.vue";
export default{
  name: "Calculate",
  components: {
    CalculatorComponent
  }
}
</script>
