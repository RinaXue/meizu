<template>
    <div class="swiper">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) of bannerdata" :key="index">
          <img :src="item" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
</template>

<script>
import Vue from 'vue'
import api from '@/api/home'
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);

export default {
  data () {
    return {
      bannerdata: []
    }
  },
  created () {
    api.requestBanner().then(data => {
      let arr = []
      for (var item of data) {
        arr.push( item.img )
      }
      this.bannerdata = arr
    }).catch(err => console.log(err))
  }
}
</script>

<style lang="scss">
@import '@/qunar/reset.scss';

.van-swipe {
  @include rect(100%, 1.9rem);
  img {
    @include rect(100%, 100%);
  }
}
</style>
