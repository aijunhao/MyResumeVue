import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  actions: {
    login: ({ commit }) => {
      commit("LOGIN");
    }
  },
  mutations: {
    LOGIN(state) {
      state.isLogin = true;
    }
  }
});
