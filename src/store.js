import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mobileNavigation: false,
    friends: []
  },
  actions: {
    setMobileNavigation({ commit }, payload) {
      commit("setMobileNavigation", payload);
    }
  },
  mutations: {
    setMobileNavigation(state, payload){
      state.mobileNavigation = payload;
    }
  },
  getters: {
    mobileNavigation: state => {
      return state.mobileNavigation;
    }
  }
});
