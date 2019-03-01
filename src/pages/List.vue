<template>
  <div class="container">
    <div class="listtop">
      <van-nav-bar left-arrow @click-left="$router.go(-1)">
        <van-icon name="wap-home" slot="right" @click="$router.push('/home')"/>
      </van-nav-bar>
    </div>
    <div class="listimg">
      <img :src="prolist.img" alt>
    </div>
    <div class="listinf">
      <h3>{{prolist.name}}</h3>
      <h4>{{prolist.skuprice}}</h4>
      <h5>{{prolist.title}}</h5>
    </div>
    <v-listguarantee></v-listguarantee>
    <v-listAddress></v-listAddress>
    <div class="listshow">
      <h4>商品详情</h4>
      <img :src="prolist.img" alt>
    </div>
    <v-listfoot :prolist="prolist"></v-listfoot>
  
    <!-- {{prolist}} -->
  </div>
</template>

<script>
import Vue from "vue";
import api from "@/api/home";
import listguarantee from "../components/listplug/listguarantee";
import listAddress from "../components/listplug/listAddress";
import listfoot from "../components/listplug/listfoot";
import { Field } from "vant";
import { NavBar } from "vant";
import '@/assets/style/list.scss';
import { Cell, CellGroup } from 'vant';
import { Icon } from 'vant';
import {
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from 'vant';

Vue
  .use(GoodsAction)
  .use(GoodsActionBigBtn)
  .use(GoodsActionMiniBtn);
Vue.use(Icon)
Vue.use(Cell).use(CellGroup);
Vue.use(NavBar);
Vue.use(Field);
export default {
  components: {
    "v-listguarantee": listguarantee,
    "v-listAddress": listAddress,
    "v-listfoot": listfoot,
  },
  props: {
    id: String
  },
  data() {
    return {
      show: false,
      
      listlist: [
        // {prolist:''},
        {img:''}
      
      ]
    };
  },
  created() {
    // api.requestacousticsList().then(data => this.listlist.push(...data));

    // api.requestaccessoriesList().then(data => this.listlist.push(...data));

    // api.requestlifeList().then(data => this.listlist.push(...data));

    // api.requestsmartphone().then(data => this.listlist.push(...data));
  },
  methods: {},
  computed: {
    prolist() {
      let arr = [];
      arr = this.listlist.filter((item, index) => {
        return item.skuid == this.id;
      });
      // console.log(arr[0])
      return arr[0];
    }
  },
  beforeRouteEnter(to, from, next) {
    next(_this => {
      api.requestacousticsList().then(data => _this.listlist.push(...data));

      api.requestaccessoriesList().then(data => _this.listlist.push(...data));

      api.requestlifeList().then(data => _this.listlist.push(...data));

      api.requestsmartphone().then(data => _this.listlist.push(...data));
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
