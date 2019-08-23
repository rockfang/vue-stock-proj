<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-warning">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{stock.name}}
          <small>(价格：{{stock.price}}￥ | 数量{{stock.quantity}})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="number"
            class="form-control"
            v-model.number="quantity"
            :class="{danger:insuffientQuantity}"
            placeholder="数量">
        </div>
        <div class="pull-right">
          <button class="btn btn-success"
                  @click="sellStock"
                  :disabled="insuffientQuantity || btnDisabled">
            {{insuffientQuantity ? "超出可售量" : "出售"}}
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import {mapActions} from "vuex"
  export default {
    data: function() {
      return {
        quantity: 0,
        btnDisabled: true
      }
    }, props: ["stock"],
    computed: {
      insuffientQuantity() {
        return this.quantity > this.stock.quantity;
      }
    },
    methods:  {
      //演示mapActions用法，这里sellStock对应actions中的sellStock方法
      ...mapActions({

        realSell:"sellStock"
      }),
      sellStock() {
        let order = {
          id: this.stock.id,
          price: this.stock.price,
          quantity: this.quantity
        };
        this.realSell(order);
        this.quantity = 0;
      },
    },watch: {
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
