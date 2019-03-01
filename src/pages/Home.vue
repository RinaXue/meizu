<template>
  <div class="home">
    <div class="container" id="container">
      <v-Swiper></v-Swiper>
      <ul class="tip">
        <li v-for="(item, index) of tip" :key="index">
          <a href="javascript:void(0)"><img :src="item.img" alt=""><p>{{item.name}}</p></a>
        </li>
      </ul>
      <ul class="hot">
        <li v-for="(item, index) of hot" :key="index">
          <a href="javascript:void(0)"><img :src="item.img" alt=""><p>{{item.name}}</p></a>
        </li>
      </ul>
      <div class="smallhot">
        <div class="smallhotleft">
          <a href="javascript:void(0)"><img src="../assets/image/smallhot_1.png" alt=""></a>
        </div>
        <div class="smallhotright">
          <a href="javascript:void(0)"><img src="../assets/image/smallhot_2.jpg" alt=""></a>
        <a href="javascript:void(0)"><img src="../assets/image/smallhot_3.jpg" alt=""></a>
        </div>
      </div>
      <div class="smartphone">
        <h4>智能手机</h4>
        <img src="../assets/image/smartphone_1.jpg" alt="">
        <v-homephone :detailsplugphone="smartphone" ></v-homephone>
      </div>
      <v-homelist :homeplugtop="acousticsTop" :title="'魅族声学'" :color1="'background:#ff6363'" :color2="'background:#7063C9'" ></v-homelist>
      <v-homepluglist :detailspluglist="acousticsList" ></v-homepluglist>
      <v-homelist :homeplugtop="accessoriesTop" :title="'智能配件'" :color1="'background:#55C3C3'" :color2="'background:#FFAE45'" ></v-homelist>
      <v-homepluglist :detailspluglist="accessoriesList" ></v-homepluglist>
      <v-homelist :homeplugtop="lifeTop" :title="'生活周边'" :color1="'background:#55C3C3'" :color2="'background:#FFAE45'" ></v-homelist>
      <v-homepluglist :detailspluglist="lifeList" ></v-homepluglist>

      <!-- <v-totop></v-totop> -->
    </div>
    <a  href="#container" style="position:fixed;right:0.1rem;bottom:0.1rem"><van-button round id="btntotop"><span>返回顶部</span></van-button></a>

  </div>
  
</template>

<script>
import '@/assets/style/detailspulglist.scss';
import Swiper from "../components/homeplug/Swiper";
import api from '@/api/home'
import '@/assets/style/home.scss';
import homelist from "../components/homeplug/Homelist";
// import totop from "../components/homeplug/totop";
import homephone from "../components/homeplug/homephone";
import homepluglist from "../components/homeplug/homepluglist";
import detailspluglist from "../components/detailsplug/detailspluglist";
import Vue from 'vue';
import { Button } from 'vant';

Vue.use(Button);
export default {
  name: 'home',
  components: {
    "v-Swiper": Swiper,
    "v-homelist": homelist,
    "v-homephone": homephone,
    "v-homepluglist": homepluglist,
    "v-detailspluglist": detailspluglist,

    // "v-totop": totop
  },
  data () {
    return {
      tip: [],
      hot: [],
      smartphone: [],
      acousticsTop: [
        {imgHolder:''},
        {imgHolder:''}
      ],
      acousticsList: [],
      accessoriesTop: [
        {imgHolder:''},
        {imgHolder:''}
      ],
      accessoriesList: [],
      lifeTop: [
        {imgHolder:''},
        {imgHolder:''}
      ],
      lifeList: []
    }
  },
  created () {
    api.requesttip().then(data => {
      let brr = []
      for (let item of data) {
        brr.push( item )
      }
      this.tip = brr
    }).catch(err => console.log(err))

    api.requesthot().then(data => this.hot=data)

    api.requestsmartphone().then(data => this.smartphone=data)

    api.requestacousticsTop().then(data => this.acousticsTop=data)

    api.requestacousticsList().then(data => this.acousticsList=data)

    api.requestaccessoriesTop().then(data => this.accessoriesTop=data) 

    api.requestaccessoriesList().then(data => this.accessoriesList=data) 
    
    api.requestlifeTop().then(data => this.lifeTop=data) 

    api.requestlifeList().then(data => this.lifeList=data)
  },
}
</script>
