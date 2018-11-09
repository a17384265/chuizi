import Vuex from "vuex";
import Vue from "vue";
import axios from 'axios'
Vue.use(Vuex);
let cartTTId;
export default new Vuex.Store({
  state:{
    IMGURL: "http://127.0.0.1:3000/pic/",
    hots:[],
    recommends:[],
    products: localStorage.products ? JSON.parse(localStorage.products) : [],
    totalPrice: "",
    cartShow: false,
    tatalCount: ""
  },
  mutations:{
    addCart(state, item){
      let exist = false;
      for (let i of state.products) {
        if (i.productId == item.productId) {
          i.num += item.num;
          exist = true;
          break;
        }
      }
      if (!exist) {
        state.products.push(item);
      }
      state.cartShow = true;
      localStorage.products = JSON.stringify(state.products);
      //用于修复连续添加商品时，计时不重置的bug
      if (cartTTId) {
        clearTimeout(cartTTId);
      }
      cartTTId = setTimeout(() => {
        state.cartShow = false;
      }, 1000);
    }
    },
  getters: {
    cartTotalNum(state){
      let n = 0;
      for (let i of state.products) {
        n += i.num;
      }
      return n
    },
    carTotalPrice(state){
      let money = 0;
      for (let i of state.products) {
        money += i.salePrice * i.num
      }
      return money
    }
  },
  actions: {
    // 封装一个 ajax 方法
    getdata (context) {
      axios.get('http://127.0.0.1:3000/api/hots').then((res) => {
        context.commit('gethots',res)
      })
    },
    getdata1(context){
      axios.get('http://192.168.0.91:3000/api/recommends').then((res1) => {
        context.commit('getrecommends',res1)
      })
    },

  },
})



