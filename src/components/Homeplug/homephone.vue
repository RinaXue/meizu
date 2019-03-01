<template>
    <div class="homephone">
        <router-link tag="div" :to="{name:'list',params:{id:item.skuid}}" class="detailsplugphone" v-for="(item, index) of detailsplugphone" :key="index">
          <a href="javascript:void(0)">
            <img :src="item.img" alt="">
            <h5>{{item.name}}</h5>
            <h6><span>{{item.skuLable}}</span><b>{{item.title}}</b></h6>
            <p>{{item.skuprice}}</p>
          </a>
        </router-link>
    </div>
</template>

<script>
import api from '@/api/home'
import '@/assets/style/homephone.scss';

export default {
  props: {
    detailsplugphone: Array,
    title: String,
  }
}
</script>