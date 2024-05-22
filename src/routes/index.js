import HeaderView from "@/components/common/HeaderView.vue";
import MainView from "@/components/common/MainView.vue";
import SignupView from "@/components/member/views/SignupView.vue";
import SigninView from "@/components/member/views/SigninView.vue";
import MapView from "@/components/map/views/MapView.vue";
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "header",
      component: HeaderView,
      children: [
        {
          path: "/",
          name: "main",
          component: MainView,
        },
        {
          path: "/signup",
          name: "signup",
          component: SignupView,
        },
        {
          path: "/signin",
          name: "signin",
          component: SigninView,
        },
        {
          path: "/mypage",
          name: "mypage",
          component: () => import("@/components/member/views/MyPageView.vue"),
        },
        {
          path: "/map",
          name: "map",
          component: MapView,
        },
      ],
    },
  ],
});

export default router;
