<template>
  <div>
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
  </div>
</template>

<script>
  import Stock from "./Stock"

  export default {
    components: {
      appStock: Stock,
    },
    computed: {
      stocks: function () {
        return this.$store.getters.stocks;
      }
    },
  }
</script>

<style scoped>

</style>
