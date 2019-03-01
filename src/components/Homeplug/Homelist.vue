<template>
    <div>
      <div class="homeplug">
        <h4>{{title}}</h4>
        <div class="homeplugtop" >
          <a href="javascript:void(0)" :style="color1">
            <img :src="homeplugtop[0].imgHolder" alt="">
            <div class="homeplugtopdiv">
              <h6>{{homeplugtop[0].name}}</h6>
              <h5>{{homeplugtop[0].title}}</h5>
              <h3>￥{{homeplugtop[0].price}}<del>{{homeplugtop[0].skuprice}}</del></h3>
            </div>
          </a>
          <a href="javascript:void(0)" :style="color2">
            <div class="homeplugtopdiv">
              <h6>{{homeplugtop[1].name}}</h6>
              <h5>{{homeplugtop[1].title}}</h5>
              <h3>￥{{homeplugtop[1].price}}<del>{{homeplugtop[1].skuprice}}</del></h3>
            </div>
            <img :src="homeplugtop[1].imgHolder" alt="">
          </a>
        </div>
      </div> 
    </div>  
</template>

<script>
import api from '@/api/home'
import '@/assets/style/homeplug.scss';

export default {
  props: {
    homeplugtop: Array,
    // homepluglist: Array,
    title: String,
    color1: String,
    color2: String 
  }
}
</script>

<style lang="scss" scoped>

</style>
