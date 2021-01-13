import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "../src/tailwind.min.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
axios.defaults.baseURL = "/api";
//设置响应请求头
axios.defaults.headers.post["Content-Type"] = "application/json";
Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  axios,
  router,
  render: h => h(App)
}).$mount("#app");
