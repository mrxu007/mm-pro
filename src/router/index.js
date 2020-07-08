import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home/Home.vue';

// const Home = () => import('../views/home/Home.vue');
const Category = () => import('../views/category/Category.vue');
const CartList = () => import('../views/cartList/CartList.vue');
const Profile = () => import('../views/profile/Profile.vue');

// 解决重复点击当前路由报错的问题,重写push、replace等等跳转方法
const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
  },
  {
    path: '/cartList',
    name: 'CartList',
    component: CartList,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
