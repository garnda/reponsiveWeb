import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserView from "../views/UserView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/user",
      name: "user",
      component: UserView,
    },
  ],
});

router.beforeEach((to, from, next) => {

  if (!to.name) next('/');
  else next();
});
export default router;
