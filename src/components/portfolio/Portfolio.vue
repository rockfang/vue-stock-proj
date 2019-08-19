<template>
  <div>
    <h4>I am protfolio</h4>
    <app-stock></app-stock>
  </div>
</template>

<script>
  import Stock from "./Stock"
  export default {
    components: {
      appStock: Stock,
    }
  }
</script>

<style scoped>

</style>
