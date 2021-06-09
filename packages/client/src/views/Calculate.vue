<template>
  <div class="grid grid-cols-2 gap-4">
    <div><CalculatorComponent /></div>
    <div><HistoryComponent/></div>
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
