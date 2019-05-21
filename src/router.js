import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Setting from "./views/Setting.vue";
import Member from "./views/Member.vue";
import Feekback from "./views/Feedback.vue";
import NewResume from "./views/NewResume.vue";

Vue.use(Router);

export default new Router({
  // mode: "history",
  base: process.env.BASE_URL,
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
      path: "/newresume",
      component: NewResume,
      name: "newresume"
    },
  ]
});
