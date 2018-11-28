import Vue from "vue";
import Vuex from "vuex";
import client from "./api/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mobileNavigation: false,
    darkMode: true,
    friends: null
  },
  actions: {
    async fetchFriends({ commit }) {
      let friends = await client.fetchFriends();
      commit("setFriends", friends);
    },
    setMobileNavigation({ commit }, payload) {
      commit("setMobileNavigation", payload);
    },
    toggleDarkMode({ commit }) {
      commit("toggleDarkMode");
    }
  },
  mutations: {
    setFriends(state, friends){
      state.friends = friends;
    },
    setMobileNavigation(state, payload) {
      state.mobileNavigation = payload;
    },
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    }
  },
  getters: {
    mobileNavigation: state => state.mobileNavigation,
    darkMode: state => state.darkMode,
    friends: state => state.friends
  }
});
