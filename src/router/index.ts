import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/home'),
  },
  {
    path: '/home/tab', // 这样定义path是为了给路由跳转动画用的 详情见App.vue
    name: 'tab',
    component: () => import('@/pages/stikyTab/index.vue'),
  },
  {
    path: '/home/goods',
    name: 'goods',
    component: () => import('@/pages/goods/index.vue'),
  },
  {
    path: '/home/test',
    name: 'test',
    component: () => import('@/pages/test/index'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/404'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
