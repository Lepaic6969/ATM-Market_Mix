import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createMemoryHistory(),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: () => import("../views/WelcomeView.vue"),
    },
    {
      path: "/cashout",
      name: "cashout",
      component: () => import("../views/CashOutView.vue"),
    },
    {
      path: "/money",
      name: "money",
      component: () => import("../views/MoneyView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "welcome" },
    },
  ],
});

export default router;
