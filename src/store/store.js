import Vue from "vue"
import VueX from "vuex"
import stocks from "./modules/stocks"
import portfolio from "./modules/portfolio"
import * as actions from "./actions"
Vue.use(VueX);
export default new VueX.Store({
  actions,
  modules: {stocks,portfolio} //注意这儿必须有大括号
});
