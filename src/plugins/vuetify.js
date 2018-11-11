import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";
import '@mdi/font/css/materialdesignicons.css';
import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify, {
  iconfont: "mdi",
  theme: {
    primary: colors.cyan.darken2,
    accent: colors.cyan.lighten5
  }
});
