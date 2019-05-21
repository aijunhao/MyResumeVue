import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import config from "./config.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  actions: {
    login: ({ commit }, value) => {
      axios({
        method: "post",
        url: config.EXECUTE_USER_LOGIN,
        data: value
      }).then(data => {

      }).catch(() => {

      });
      // console.log(value)
      commit("LOGIN");
    }
  },
  mutations: {
    LOGIN(state) {
      state.isLogin = true;
    }
  }
});
