<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <router-link to="/" class="navbar-brand">Home</router-link>
        </div>

        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
            <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
          </ul>
          <strong class="navbar-text navbar-right">资金:{{funds | currency}}</strong>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#" @click="endDay">结束今日</a></li>
            <li
              class="dropdown"
              :class="{open: isOpen}"
              @click="isOpen = !isOpen">
              <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false">Save & Load <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#" @click="saveData">保存数据</a></li>
                <li><a href="#" @click="loadData">加载数据</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
  import {mapActions} from "vuex"
  export default {
    data: function () {
      return {
        isOpen: false
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    }, methods: {
      ...mapActions(
        {
          fetchData: "loadData",
          randomStockPrice: "randomStocks"
        }
      ),
      endDay() {
        this.randomStockPrice();
      },
      saveData() {
        let msg = {
          funds: this.$store.getters.funds,
          stocks: this.$store.getters.stocks,
          stockPortfolio: this.$store.getters.stockPortfolio,
        };
        this.$http.post("saveStocksInfo", {
          msg
        }).then(response => {
          console.log(response);
        });
      }, loadData() {
        this.fetchData();
      }
    }
  }
</script>

<style scoped>

</style>
