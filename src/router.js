import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import AppLayout from "./components/AppLayout.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "layout",
      component: AppLayout,
      redirect: { name: "home" },
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/Home.vue")
        },
        {
          path: "/friends",
          name: "friends",
          component: () => import("./views/FriendsList.vue")
        },
        {
          path: "/friends/1",
          name: "friend",
          component: () => import("./views/FriendLetters.vue")
        },
        {
          path: "/letter/1",
          name: "letter",
          component: () => import("./views/LetterRead.vue")
        }
      ]
    }
  ]
});
