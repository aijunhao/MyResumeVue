import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Setting from "./views/Setting.vue";
import Member from "./views/member/Member.vue";
import Feedback from "./views/Feedback.vue";
import NewResume from "./views/NewResume.vue";
import Information from "./views/member/Information.vue";
import MyResume from "./views/member/MyResume.vue";
import Overview from "./views/member/Overview.vue";
import Forum from "./views/Forum.vue";
import AboutMe from "./views/AboutMe.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
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
      name: "member",
      redirect: "/member/overview",
      children: [
        {
          path: "information",
          component: Information,
          name: "information"
        },
        {
          path: "myresume",
          component: MyResume,
          name: "myresume"
        },
        {
          path: "overview",
          component: Overview,
          name: "overview"
        }
      ]
    },
    {
      path: "/feedback",
      component: Feedback,
      name: "feedback"
    },
    {
      path: "/newresume",
      component: NewResume,
      name: "newresume"
    },
    {
      path: "/forum",
      component: Forum,
      name: "forum"
    },
    {
      path: "/aboutme",
      component: AboutMe,
      name: "aboutme"
    }
  ]
});
