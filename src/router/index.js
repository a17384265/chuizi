import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ShowAll from '@/components/ShowAll'
import productDetail from '@/components/productDetail'
import Order from '@/components/Order'
import login from '@/components/login'
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/products',
      name:'ShowAll',
      component:ShowAll
    },
    {
      path: '/productDetail',
      name: 'productDetail',
      component:productDetail,
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
