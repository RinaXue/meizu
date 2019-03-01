<template>
  <div class="detail-adress">
    <div class="detail-adress-content" @click="show=true">
      <span>配送</span>
      <i v-for="(item,index) of selected" :key="index">{{item.name}}</i>
    </div>
    <van-icon name="arrow" size="0.18rem"/>
    <van-actionsheet v-model="show" title="请选择配送区域">
      <van-area :area-list="areaList" @confirm="confirm"/>
    </van-actionsheet>
  </div>
</template>
<script>
import Vue from "vue";
import { Actionsheet } from "vant";
import { Area } from "vant";
Vue.use(Area);
Vue.use(Actionsheet);
export default {
  data() {
    return {
      show: false,
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "广州市"
        },
        city_list: {
          110100: "北京市",
          110200: "县",
          120100: "广州市",
          120200: "县"
        },
        county_list: {
          110101: "浦东新区",
          110102: "宝山区",
          110105: "闵行区",
          110106: "静安区",
          120101: "黄浦区",
          120102: "虹口区",
          120103: "松江区",
          120104: "嘉定区",
          120105: "青浦区"
        }
      },
      selected: [
        {
          name: "上海市"
        },
        {
          name: "上海市"
        }
      ]
    };
  },
  methods: {
    confirm(data) {
      this.selected = data;
      this.show = false;
    }
  }
};
</script>
<style lang="scss">
@import "@/qunar/reset.scss";
.detail-adress {
  @include padding();
  @include rect(100%, 0.5rem);
  @include flexbox();
  border-top: 0.02rem solid #eee;
  border-bottom: 0.08rem solid #eee;
  .detail-adress-content {
    @include rect(100%, 100%);
    line-height: 0.36rem;
    span{
      color: #999;
    }
    i {
      padding: 0 5px;
      padding-left: 0.1rem;
    }
  }
  .van-icon {
    line-height: 0.36rem;
  }
}
</style>

