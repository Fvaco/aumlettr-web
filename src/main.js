import Vue from "vue";
import lodash from "lodash";
import moment from "moment-timezone";
import "./plugins/vuetify";

import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { createProvider } from "./vue-apollo";

Vue.config.productionTip = false;

Object.defineProperty(Vue.prototype, "$lodash", {
  get() {
    return this.$root.lodash;
  }
});
moment.tz.setDefault("UTC");
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

  // apolloProvider: createProvider(),
  render: h => h(App)
}).$mount("#app");
