<template>
  <div>
    <app-stock v-for="stock in stocks" :id="stock" :stock="stock"></app-stock>
  </div>
</template>

<script>
  import Stock from "./Stock"

  export default {
    data: function() {
      return {
        stocks: [
          {id: 1, name: "茅台", price: 690},
          {id: 2, name: "华为", price: 80},
          {id: 3, name: "腾讯", price: 55},
          {id: 4, name: "小米", price: 23},
        ]
      }
    },
    components: {
      appStock: Stock,
    }
  }
</script>

<style scoped>

</style>
