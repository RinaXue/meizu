<template>
    <div class="vtop">
        <h3>魅族官网</h3>
        <van-icon name="cross" @click="$router.go(-1)"/>
        <ul class="vtop_top" >
            <li v-for="(item, index) of toptop" :key="index" style="text-align: center" @click="$router.push('/personal')">
                <img :src="item.img" alt="">
                <h6>{{item.name}}</h6>
            </li>
        </ul>
        <ul class="vtop_middle">
            <li v-for="(item, index) of topmiddle" :key="index" style="text-align: center">
                <img :src="item.img" alt="">
                <h6>{{item.name}}</h6>
            </li>
        </ul>
        <ul class="vtop_bottom">
            <li v-for="(item, index) of topbottom" :key="index" style="text-align: center">
                <img :src="item.img" alt="">
                <h6>{{item.name}}</h6>
            </li>
        </ul>
    </div>
</template>

<script>
import api from '@/api/home'
import Vue from 'vue'
import { Icon } from 'vant';

Vue.use(Icon);

export default {
    data (){
        return{
           toptop: [], 
           topmiddle: [], 
           topbottom: [], 
        }
    },
    created(){
    api.requesttoptop().then(data => this.toptop=data)
    api.requesttopmiddle().then(data => this.topmiddle=data)
    api.requesttopbottom().then(data => this.topbottom=data)
    },
}
</script>

<style lang="scss" scoped>
@import '@/qunar/reset.scss';

html, body, #app {
    @include rect(100%, 100%);
    @include overflow();
}
.vtop{
    @include rect(100%, 100%);
    // z-index: 10000;
    position: fixed;
    left:0;
    top:0;
    background: #FAFAFA;
    
    h3 {
        text-align: center;
        margin: 0.15rem;
        font-size: 0.15rem;
        font-weight:normal;
        background: #fff;
    }
    .van-icon {
        position: absolute;
        left:90%;
        top:0.15rem;    
    }
    .vtop_top{
        @include rect(100%, 1.5rem);
        float: left;
        box-shadow: 0 4px 12px 1px #ebebeb;
        background: #fff;
        li {
            @include rect(25%, 0.75rem);
            float: left;
            @include flex-direction(column);
            img{
                @include rect(45%, 0.4rem);
                margin-top: 0.1rem;
            }
            h6{
                font-size: 0.1rem;
                text-align: center;
                font-weight:normal;
            }
        }
    }
    .vtop_middle{
        @include rect(100%, 0.85rem);
        float: left;
        border-bottom: 1px solid #efefef;
        background: #FAFAFA;
        li {
            @include rect(25%, 0.75rem);
            float: left;
            @include flex-direction(column);
            img{
                @include rect(30%, 0.3rem);
                margin-top: 0.2rem;
            }
            h6{
                font-size: 0.1rem;
                text-align: center;
                font-weight:normal;
                margin-top: 0.05rem;
            }
        }
    }
    .vtop_bottom{
        @include rect(100%, 1.7rem);
        float: left;
        background: #FAFAFA;
        li {
            @include rect(25%, 0.75rem);
            float: left;
            @include flex-direction(column);
            img{
                @include rect(30%, 0.3rem);
                margin-top: 0.2rem;
            }
            h6{
                font-size: 0.1rem;
                text-align: center;
                font-weight:normal;
                margin-top: 0.05rem;
            }
        }
    }

}

</style>

