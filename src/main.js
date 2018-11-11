import Vue from "vue";
import lodash from "lodash";
import moment from "moment-timezone";
import "./plugins/vuetify";

import App from "./App.vue";
import router from "./router";
import store from "./store";


Vue.config.productionTip = false;

Object.defineProperty(Vue.prototype, "$lodash", {
  get() {
    return this.$root.lodash;
  }
});
Object.defineProperty(Vue.prototype, "$moment", {
  get() {
    return this.$root.moment;
  }
});

new Vue({
  router,
  store,
  data() {
    return {
      lodash,
      moment
    };
  },
  render: h => h(App)
}).$mount("#app");
