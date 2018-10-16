import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ShowAll from '@/components/ShowAll'
import productDetail from '@/components/productDetail'
import Vuex from 'vuex'

Vue.use(Router);
Vue.use(Vuex);

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
    }
  ]
})
