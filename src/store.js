import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mobileActive: false,
    friends: []
  },
  mutations: {},
  actions: {},
  getters: {
    mobileActive: state => state.mobileActive
  }
});
