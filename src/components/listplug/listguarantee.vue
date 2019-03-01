<template>
    <div>
        <div class="listguarantee" @click="show=true">
            <ul>
                <li>
                    <van-icon name="passed" class="listicon" />
                    <span>花呗分期</span>
                </li>
            <li>
                <van-icon name="passed" class="listicon"/>
                <span>顺丰包邮</span>
            </li>
            <li>
                <van-icon name="passed" class="listicon"/>
                <span>7天无理由退货</span>
            </li>
            </ul>
            <van-icon name="arrow" class="listarrow" size="0.18rem"/>
        </div>
        <van-actionsheet v-model="show" :actions="actions"  title="服务说明"  class="listactionsheet">
            <ul>
                <li>
                    <h4>顺丰包邮</h4>
                    <span>顺丰包邮的解释,这为什么要解释的呢~自己选的网页笑着做完(*-*)(^-^)(^▽^)</span>
                </li>
                <li>
                    <h4>7天无理由退货</h4>
                    <span>7天无理由退货的解释,这为什么要解释的呢~自己选的网页笑着做完(*-*)(^-^)(^▽^)</span>
                </li>
                <li>
                    <h4>花呗分期</h4>
                    <span>花呗分期的解释,这为什么要解释的呢~自己选的网页笑着做完(*-*)(^-^)(^▽^)</span>
                </li>
            </ul>
        </van-actionsheet>
    </div>
</template>

<script>
import Vue from "vue";
import { Actionsheet } from 'vant';
import { Icon } from 'vant';

Vue.use(Icon)
Vue.use(Actionsheet);
export default {
    data() {
        return {
            show: false,
            };
    },
}
</script>

<style lang="scss" scoped>
@import '@/qunar/reset.scss';
.listguarantee{
    @include rect(100%, 0.4rem);
    padding-left: 5%;
    border-bottom: 0.08rem #eee solid;
    ul{
        float: left;
        li{
            float: left;
            font-size: 0.12rem;
            line-height: 0.4rem;
            padding-right: 0.15rem;
            .listicon{
                color: #0bbbef;
            }
            span{
                color: #999;
            }
        }
    }
    .listarrow{
        float: right;
        line-height: 0.4rem;
        margin-right: 0.05rem;
    }
}
.listactionsheet{
    @include rect(100%, 4rem);
    ul{
        margin:0.1rem 5%;
        li{
            border-bottom: 0.02rem #eee solid;
            @include rect(100%, auto);
            h4{
                color: #0bbbef;
                font-size: 0.15rem;
                height: 0.3rem;
                line-height: 0.3rem;
            }
            span{
                color: #999;
                font-size: 0.12rem;
                font-weight:normal;
                height: 0.25rem;
                line-height: 0.25rem;
                padding-bottom: 0.05rem;
            }
        }
    }
}

</style>
