import Vuex from "vuex";
import Vue from "vue";
import axions from 'axios'
Vue.use(Vuex);
export default new Vuex.Store({
  state:{
    IMGURL:"http://192.168.0.91:3000/pic/",
    hots:[],
    recommends:[],
    products:{},
  },
  mutations:{
    gethots(state,res){
      state.hots=res
    },
    getrecommends(state,res1){
      state.recommends=res1
    },
    setproductImage(state,products){
      state.products=products.productImage;
    }

  },
  actions: {
    // 封装一个 ajax 方法
    getdata (context) {
      axions.get('http://192.168.0.91:3000/api/hots').then((res)=>{
        context.commit('gethots',res)
      })
    },
    getdata1(context){
      axions.get('http://192.168.0.91:3000/api/recommends').then((res1)=>{
        context.commit('getrecommends',res1)
      })
    },
    saveForm2(context){
      axions({
        method: 'get',
        url: 'http://192.168.0.91:3000/api/products',
        data: context.state.xiangq
      })
    }
  },
})



