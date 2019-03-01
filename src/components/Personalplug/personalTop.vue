<template>
    <div class="personal_top">    
      <img src="https://mall.res.meizu.com/member/img/login.png" @click="show=true" >
      <van-actionsheet
        v-model="show"
        :actions="actions"
        cancel-text="取消" 
      />
      <ul style="text-align: center">
        <li class="personal_lifirst" @click="tologin">{{username}}</li>
        <li>&nbsp;|&nbsp;</li>
        <router-link  to="/register" tag="li">
          注册
        </router-link>
      </ul>
    </div>
</template>

<script>
import { Actionsheet } from 'vant';
import Vue from 'vue'

Vue.use(Actionsheet);
export default {
  props: ['username'],
    data() {
        return {
        show: false,
        actions: [
            {
            name: '拍照',
            method: this.fn1
            },
            {
            name: '从相册选取',
            method: this.fn2          
            }
        ]
        };
    },
    methods: {
        fn1 () {
        console.log('拍照')
        },
        fn2 () {
        console.log('从相册选取')
        },
        tologin(){
          // if ()
        }
    },
}
</script>

