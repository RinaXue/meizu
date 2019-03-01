<template>
    <div class="inquire">
        <div class="inquiretop">
            <van-icon name="arrow-left" @click="$router.go(-1)" class="topleft"/>
            <van-search
            placeholder="请输入搜索关键词"
            show-action
            shape="round"
            @search="onSearch"
            class="topright"
            >
            <div slot="action" @click="onSearch">搜索</div>
            </van-search>
        </div>
        <div></div>        
    </div>
</template>

<script>
import api from '@/api/home'
import Vue from 'vue';
// import inquireplugtop from "../components/inquireplug/inquireplugtop";
import { Search } from 'vant';
import { Icon } from 'vant';

Vue.use(Icon);
Vue.use(Search);
export default {
    // data() {
    //     return {
    //     checked: [],
    //     goodsList: []
    //     };
    // },
    // components: {
    //     "v-inquireplugtop": inquireplugtop,
    // },
    created(){
        api.requestDataBrand(this.value).then(data => this.inquirebrand=data)
    }, 
    methods: {
        onSearch(){

        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/qunar/reset.scss';
.inquire{
    .inquiretop{
        @include rect(100%, auto);  
        .topleft{
            @include rect(8%,0.5rem);
            float: left;
            background: #F2F2F2;
            text-align: center;
            line-height: 0.5rem;
        } 
        .topright{
            @include rect(92%,0.5rem);
            float: left;
        }     
    }
}
</style>
