import MainView from "@/components/common/MainView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainView,
    },
  ],
});

export default router;
