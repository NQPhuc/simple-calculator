<template>
  <div>
      <p>integer 1: </p> <textarea id="a" rows="6" cols="100"></textarea>
      <button type="button">Reset</button>

      <p>integer 2: </p> <textarea id="b" rows="6" cols="100"></textarea>
      <button type="button">Reset</button>

      <p>
        operator: 
        <select id="op">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="%">%</option>
        </select><br/>
      </p>
      
      <button type="button">Calculate</button>

      <p>Result: </p> <textarea id="result" rows="10" cols="100" disabled></textarea>

    </div>
</template>
<script>
  export default {
  name: 'CalculatorComponent',
  props: {
    
  }
}
</script>