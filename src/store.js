import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    form: {
      email: "",
      pass: ""
    }
  },
  getters: {
    registerForm: state => state.form
  },
  actions: {
    register({ commit }, value) {
      axios({
        method: "post",
        url: "http://127.0.0.1:3001/users/register",
        data: value
      })
        .then(() => {
          commit("updateForm", value);
        })
        .catch(() => {});
    }
  },
  mutations: {
    updateForm(state, value) {
      state.form.email = value.email;
      state.form.pass = value.pass;
    }
  }
});
