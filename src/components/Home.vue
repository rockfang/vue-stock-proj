<template>
 <div>
   <h1>交易或者查看你的股票信息</h1>
   <h6>你可能需要保存或者加载即时数据</h6>
   <h6>点击"结束今日"开启新的一天</h6>
   <hr>
   <p>您的资金：{{funds | currency}}</p>
 </div>
</template>

<script>
  export default {
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    }
  }
</script>

<style scoped>

</style>
