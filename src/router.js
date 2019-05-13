import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Setting from "./views/Setting.vue";
import Member from "./views/Member.vue";
import Feekback from "./views/Feedback.vue";
import Login from "./views/Login.vue";
import NewResume from "./views/NewResume.vue";
import Register from "./views/Register/Register.vue";
import FirstStep from "./views/Register/FirstStep.vue";
import SecondStep from "./views/Register/SecondStep.vue";
import ThirdStep from "./views/Register/ThirdStep.vue";

Vue.use(Router);

export default new Router({
  // mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: Home,
      name: "home"
    },
    {
      path: "/setting",
      component: Setting,
      name: "setting"
    },
    {
      path: "/member",
      component: Member,
      name: "member"
    },
    {
      path: "/feekback",
      component: Feekback,
      name: "feekback"
    },
    {
      path: "/login",
      component: Login,
      name: "login"
    },
    {
      path: "/newresume",
      component: NewResume,
      name: "newresume"
    },
    {
      path: "/register",
      component: Register,
      name: "register",
      redirect: "/register/firststep",
      children: [
        {
          path: "firststep",
          component: FirstStep,
          name: "firststep"
        },
        {
          path: "secondstep",
          component: SecondStep,
          name: "secondstep"
        },
        {
          path: "thirdstep",
          component: ThirdStep,
          name: "thirdstep"
        }
      ]
    }
  ]
});
