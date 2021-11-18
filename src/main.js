import Vue from "vue";
import App from "./App.vue";
// import "core-js";
// noinspection ES6CheckImport
import ennUi from "./packages/index.js";
Vue.config.productionTip = false;
Vue.use(ennUi);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
