<template>
  <div id="app">
    <app-header></app-header>
    <div class="row">
      <div class="col-sm-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "./components/Header"

  export default {
    components: {
      appHeader: Header
    },
    created() {
      this.$store.dispatch("initStocks");
    }
  }

</script>

<style>
</style>
