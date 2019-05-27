import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import axios from "axios";
import echarts from "echarts";
// import config from "./config.js";
// import io from "socket.io-client";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;
// Vue.prototype.$socket = io(config.ROOT);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
