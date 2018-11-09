<template>
  <div>
    <Banner></Banner>
    <Hots :items="hots"></Hots>
    <Others :items1="others"></Others>

  </div>
</template>

<script>
  import axios from "axios";
  import Banner from "./Banner.vue"
  import Hots from "./Hots.vue";
  import Others from './Others.vue'
  export default {
    data(){
      return{
        hots:[],
        others:[]
      }
    },
    created(){
      axios.get("/api/hots").then((resp)=>{
        this.hots = resp.data;
      });
      axios.get("/api/recommends").then((resp)=>{
        this.others = resp.data;
      })
    },
    components:{
      Banner,
        Hots,
      Others

    }
  }
</script>

<style scoped>

</style>
