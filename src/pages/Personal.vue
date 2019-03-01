<template>
  <div>
    <v-personalTop :username="username" />
    <van-cell-group>
      <van-cell icon="records" title="全部订单" is-link />
    </van-cell-group>

    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="records" />
        待接单
      </van-col>
      <van-col span="6">
        <van-icon name="pending-payment" />
        待付款
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" />
        待发货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" />
        已发货
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="hot-o" title="M码通道" is-link />
      <van-cell icon="search" title="手机号查询订单" is-link />
      <van-cell icon="gift-o" title="以旧换新" is-link />
      <van-cell icon="logistics" title="百城速达" is-link />
      <van-cell icon="service-o" title="联系客服" is-link />
      <van-cell icon="edit" title="意见反馈" is-link />
    </van-cell-group>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from 'vant';
import { Actionsheet } from 'vant';
import Vue from 'vue'
import personalTop from "../components/personalplug/personalTop";

Vue.use(Actionsheet);
export default {
  data() {
    return {
      username:"",
    };
  },
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    "v-personalTop": personalTop,
  },
  beforeRouteEnter(to, from, next) {
    let isLogin = JSON.parse(localStorage.getItem("isLogin")) || {} 
    
    next((_this) => {
      if(isLogin.aus){
        _this.username = isLogin.username;
      }else{
        _this.username ="登录"
      }
    })
    
  }
};
</script>


<style lang="less">
// @import '@/qunar/reset.scss';

.personal_top{
  text-align: center;
  width: 100%;
  height: 2rem;
  background: url(../assets/image/personal_01.jpg);
  background-size: 100% 100%;
  img {
    width: 25%;
    height: 40%;
    margin-top: 10%;    
  }
  ul{
    margin-top: 0.2rem;
    text-align: center;
    display: flex;
    justify-content: center;
    li{
      float: left;
      font-size: 0.2rem;
    }
    // .personal_lifirst{
    //   // margin-left: 37%;
    // }
  }
}
.user {
  background-attachment: #EEEEEE;
  &-poster {
    width: 100%;
    display: block;
  }
  &-group {
    margin-bottom: 0.2rem;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>

