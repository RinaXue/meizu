<template>
    <div class="footer">
        <ul class="footer-top">
            <li v-for="(item, index) of tipdata3" :key="index">
                <a href="javascript:void(0)"><img :src="item.img" alt=""></a>
            </li>
        </ul>
        <div class="footer-middle">
            <a href="javascript:void(0)"><img src="../assets/image/foot_1.jpg"></a>
            <a href="javascript:void(0)"><img src="../assets/image/foot_2.jpg"></a>
        </div>
        <div class="footer-bottom">
            <div class="footer-bottomleft">
                <p>粤ICP备13003602号-2&nbsp;合字B2-20170010</p>
                <p>营业执照&nbsp;&copy;2018&nbsp;Meizu&nbsp;All rights reserved</p>
            </div>
            <div class="footer-bottomcentre"><img src="../assets/image/foot_3.png"></div>
            <div class="footer-bottomright">
                <p>简体中文</p>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api/home'

export default {
  data () {
    return {
      tipdata3: []
    }
  },
  created () {
    api.requestfoot().then(data => {
      let arr = []
      for (let item of data) {
        arr.push( item )
      }
      this.tipdata3 = arr
    }).catch(err => console.log(err))
  }
}
</script>
