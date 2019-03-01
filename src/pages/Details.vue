<template>
  <div class="details">
    <div class="details_top">
      <img src="https://openfile.meizu.com/group1/M00/06/ED/Cgbj0Fwz-26AetBKAAHiKcdM7p0474.jpg" alt="">
    </div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">

    <van-tabs v-model="active">
      <van-tab title="手机">
          <v-detailsplugphone :detailsplugphone="smartphone" />
      </van-tab>
      <van-tab title="声学">
        <v-homepluglist :detailspluglist="acousticsList" />
      </van-tab>
      <van-tab title="配件">
        <v-homepluglist :detailspluglist="accessoriesList" />
      </van-tab>
      <van-tab title="周边">
        <v-homepluglist :detailspluglist="lifeList" />
      </van-tab>
    </van-tabs> 
    </van-pull-refresh>   
  </div>
</template>

<script>
import Vue from 'vue';
import api from '@/api/home'
import '@/assets/style/detailspulglist.scss';
import detailsplugphone from "../components/detailsplug/detailsplugphone";
import homepluglist from "../components/homeplug/homepluglist";
import { Tab, Tabs } from 'vant';
import { PullRefresh } from 'vant';
import { Toast } from 'vant';

Vue.use(Toast);
Vue.use(PullRefresh);
Vue.use(Tab).use(Tabs);
export default {
  data(){
    return{
      smartphone: [],      
      acousticsList:[],
      accessoriesList:[],
      lifeList:[],
      active: 0,
      isLoading: false,
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 500);
    }
  },
  components: {
    "v-detailsplugphone": detailsplugphone,
    "v-homepluglist": homepluglist,
  },
  props: {
    homepluglist: Array,
    title: String,
  },
  created(){
    api.requestsmartphone().then(data => this.smartphone=data)

    api.requestacousticsList().then(data => this.acousticsList=data)

    api.requestaccessoriesList().then(data => this.accessoriesList=data) 

    api.requestlifeList().then(data => this.lifeList=data)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/qunar/reset.scss';

.details_top{
  @include rect(100%, 1.9rem);
  img {
    @include rect(100%, 100%);
  }
}

</style>

