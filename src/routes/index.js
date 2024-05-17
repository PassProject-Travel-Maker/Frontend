import HeaderView from "@/components/common/HeaderView.vue";
import MainView from "@/components/common/MainView.vue";
import SignupView from "@/components/member/views/SignupView.vue";
import SigninView from "@/components/member/views/SigninView.vue";
import MyPageView from "@/components/member/views/MyPageView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "main",
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
          component: MyPageView,
        },
      ],
    },
  ],
});

export default router;
