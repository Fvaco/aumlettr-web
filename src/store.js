import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mobileNavigation: false,
    darkMode: true,
    friends: []
  },
  actions: {
    setMobileNavigation({ commit }, payload) {
      commit("setMobileNavigation", payload);
    },
    toggleDarkMode({ commit }) {
      commit("toggleDarkMode");
    }
  },
  mutations: {
    setMobileNavigation(state, payload) {
      state.mobileNavigation = payload;
    },
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    }
  },
  getters: {
    mobileNavigation: state => state.mobileNavigation,
    darkMode: state => state.darkMode
  }
});
