<template>
    <div>
        <van-icon name="close" />
        <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        @search="onSearch"
        >
        <div slot="action" @click="onSearch">搜索</div>
        </van-search>
    </div>
        
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';
import { Icon } from 'vant';

Vue.use(Icon);
Vue.use(Search);
export default {
    
}
</script>
