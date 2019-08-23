<template>
  <div id="app">
    <app-header></app-header>
    <div class="row">
      <div class="col-sm-12">
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
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

<style scoped>
  <!--slide动画的进和出-->
  .slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
  }

  .slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
  }
  /*slide动画关键帧 通过from,to定义 实现平滑效果*/
  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0; /*透明度为0 不透明*/
    }
    to {
      transform: translateY(0px);
      opacity: 1; /*透明度为1 完全透明*/
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0px);
      opacity: 1; /*透明度为1 完全透明*/
    }
    to {
      transform: translateY(-30px);
      opacity: 0; /*透明度为0 不透明*/
    }
  }
</style>
