<template>
  <div class="grid grid-cols-2 gap-4">
    <div><Calculator /></div>
    <div><HistoryBox/></div>
  </div>
</template>
<script>
import Calculator from "@/components/Calculator.vue";
import HistoryBox from "@/components/HistoryBox.vue";

export default {
  name: "Calculate",
  components: {
    Calculator,
    HistoryBox
  }
};
</script>
