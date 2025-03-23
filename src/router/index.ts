import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/trigger',
    name: 'trigger',
    component: () => import('../views/ErrorView.vue')
}
];

const router = createRouter({
  history: createWebHashHistory(), // 使用 Hash 模式
  routes,
});

export default router;