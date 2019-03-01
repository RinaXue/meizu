<template>
    <div class="details_plug">
      <router-link tag="div" :to="{name:'list',params:{id:item.skuid}}" class="detailspluglist" v-for="(item, index) of detailspluglist" :key="index" align="center">
        <a href="javascript:void(0)">
          <img :src="item.img" alt="">
          <h5>{{item.name}}</h5>
          <h3>{{item.title}}</h3>
          <h6>{{item.skuprice}}</h6>
        </a>
      </router-link>
    </div>
</template>

<script>
import api from '@/api/home'
// import '@/assets/style/detailspulglist.scss';

export default {
  props: {
    detailspluglist: Array,
    title: String,
  }
}
</script>
