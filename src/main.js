import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import {routes} from "./routes/routes.js"
import store from "./store/store"
import VueResource from "vue-resource"
Vue.filter("currency",value=> {
  return "￥" + value;
});
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.root = "http://127.0.0.1:3002/";
const router = new VueRouter({
    mode: "history",
    routes
  }
);
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
