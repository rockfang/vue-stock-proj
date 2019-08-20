import Vue from "vue"
import VueX from "vuex"
import stocks from "./modules/stocks"
Vue.use(VueX);
export default new VueX.Store({
  modules: {stocks} //注意这儿必须有大括号
});
