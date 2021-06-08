<template>
  <div>
    <p>CALCULATOR PAGE</p>
    <table>
      <tr>
    <td><CalculatorComponent /></td>
    <td><HistoryComponent/></td>
      </tr>
    </table>
  </div>
</template>
<script>

import CalculatorComponent from "@/components/Calculator.vue";
import HistoryComponent from "@/components/HistoryComp.vue";
export default{
  name: "Calculate",
  components: {
    CalculatorComponent,
    HistoryComponent
  }
}
</script>
