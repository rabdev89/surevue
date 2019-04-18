import Vue from "vue";
import Router from "vue-router";
import store from "../store";

import Home from "@/app/components/pages/home/Home.vue";
import Profile from "@/app/components/user/profile/Profile.vue";
import Login from "@/app/components/user/login/Login.vue";
import SignUp from "@/app/components/user/signup/Signup.vue";

function loadView(view) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/app/components/${view}.vue`);
}

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "*",
      redirect: "/auth/login"
    },
    {
      path: "/",
      redirect: "/auth/login"
    },
    {
      path: "/auth/login",
      name: "login",
      component: loadView("user/login/Login"),
      meta: { layout: "login" }
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: SignUp
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = store.getters.email;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next("login");
  } else {
    next();
  }
});

export default router;
