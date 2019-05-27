import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    user: {
      User_Id: "",
      User_Name: "test"
    }
  },
  getters: {
    isLogin: state => state.isLogin
  },
  actions: {
    setUser({ commit }, user) {
      commit("SETUSER", user);
    }
  },
  mutations: {
    SETUSER(state, user) {
      if (user) {
        state.isLogin = true;
      } else {
        state.isLogin = false;
      }
      state.user = user;
      // this.$message("退出成功");
    }
  }
});
