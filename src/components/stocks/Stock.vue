<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{stock.name}}
          <small>(价格：{{stock.price}}￥)</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="number"
            class="form-control"
            v-model.number="quantity"
            :class="{danger: insuffientFunds}"
            placeholder="数量">
        </div>
        <div class="pull-right">
          <button class="btn btn-success" @click="buyStock" :disabled="insuffientFunds || btnDisabled">
            {{insuffientFunds ? "资金不足" : "购买"}}
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
      data: function() {
        return {
          quantity: 0,
          btnDisabled: true
        }
      },
      props: ["stock"],
      methods:  {
        buyStock() {
          let order = {
            id: this.stock.id,
            price: this.stock.price,
            quantity: this.quantity,
          };
          this.$store.dispatch("buyStock",order);
        },
      },
      computed: {
        funds() {
          return this.$store.getters.funds;
        },
        insuffientFunds() {
          return this.quantity * this.stock.price > this.funds;
        }
      },
      watch: {
        quantity: function (number) {
          let re = /^\+?[1-9][0-9]*$/;//正整数
          if (!re.test(number)) {
            this.btnDisabled =  true;
          } else {
            this.btnDisabled = false;
          }
        }
      }

    }
</script>

<style scoped>
 .danger {
   border: 1px solid red;
 }
</style>
