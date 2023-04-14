import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createMemoryHistory(),
  routes: [
    {
      path: "/cashout",
      name: "cashout",
      component: () => import("../views/CashOutView.vue"),
    },
    {
      path: '/money',
      name: 'money',
      component: () => import('../views/MoneyView.vue')
    }
  ],
});

export default router;
