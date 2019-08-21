<template>
  <div>
    <app-stock v-for="stock in stocks" :id="stock.id" :stock="stock"></app-stock>
  </div>
</template>

<script>
  import Stock from "./Stock"
  import {mapGetters} from "vuex"
  export default {
    computed: {
      //刻意使用mapGetters
      ...mapGetters({
        stocks: "stockPortfolio" // 名为"stocks"的方法 映射到getters中的stockPortfolio方法
      }),
      // stocks() {
      //   return this.$store.getters.stockPortfolio;
      // }
    },
    components: {
      appStock: Stock,
    }
  }
</script>

<style scoped>

</style>
