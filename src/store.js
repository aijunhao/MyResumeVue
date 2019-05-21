import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    User: {
      User_Id: "",
      User_Name: "test"
    }
  },
  actions: {
    login: ({ commit }, values) => {
      commit("LOGIN", values);
    }
  },
  mutations: {
    LOGIN(state, values) {
      state.isLogin = true;
      state.User = values;
      // eslint-disable-next-line no-console
      console.log(values);
    }
  }
});
