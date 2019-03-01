<template>
  <div class="container">
    <div class="cart">
      <van-nav-bar title="购物车" @click-left="$router.go(-1)" right-text="删除" @click-right="onClickRight">
        <van-icon name="arrow-left" size="26px" slot="left"/>
        <!-- <van-icon name="wap-nav" size="26px" slot="right" @click="onClickRight"/> -->
      </van-nav-bar>
      <div class="cart-list" v-for="(item, index) of goodsList" :key="index">
        <van-checkbox v-model="checked[index]" class="cart_checkbox"></van-checkbox>
        <van-card
          :price="item.price"
          :desc="item.title"
          :title="item.name"
          :thumb="item.img"
          currency
        >
          <div slot="num">
            <van-stepper v-model="item.num" integer/>
          </div>
        </van-card>
      </div>
      <van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onSubmit" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { SubmitBar } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { NavBar } from 'vant';
import { Stepper } from 'vant';
import { card } from 'vant';

Vue.use(card);
Vue.use(Stepper);
Vue.use(NavBar);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(SubmitBar);
export default {
  data() {
    return {
      checked: [],
      goodsList: []
    };
  },
  methods: {
    onClickRight() {
      this.checked.forEach((item,index) => {
        if (item === true) {
          this.checked.splice(index,1);
          this.goodsList.splice(index,1);
          localStorage.setItem("goods", JSON.stringify(this.goodsList));
        }
      });
    },
    onSubmit() {}
  },
  computed: {
    totalPrice() {
      let sum = 0;
      this.checked.forEach((item,index) => {
        if (item === true) {
            sum += this.goodsList[index].num * parseInt(this.goodsList[index].price.substring(1));
        }
      });
      return sum * 100;
    }
  }
,
  beforeRouteEnter(to, from, next) {
    let isLogin = JSON.parse(localStorage.getItem("isLogin")) || {}
    if (isLogin.aus){
      next(_this => {
        _this.goodsList = JSON.parse(localStorage.getItem("goods"));
      });
    }else{
      next("/login")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/qunar/reset.scss';
.cart {
  .van-nav-bar {
    @include rect(100%, 0.5rem);
    .van-nav-bar__title {
      font: 0.2rem/0.5rem "";
    }
    .van-nav-bar__right {
      .van-icon-shopping-cart-o {
        margin-right: 0.1rem;
      }
    }
  }
  .cart-list {
    @include background-color(#fafafa);
    @include flexbox();
    margin: 0.05rem 0;
    .van-checkbox {
      padding-top: 0.5rem;
      padding-left: 0.1rem;
      box-sizing: border-box;
    }
    .van-card {
      @include rect(88%, auto);
      .van-card__thumb {
        @include rect(1rem, 1rem);
        img {
          @include rect(100%, 100%);
        }
      }
      .van-card__content {
        .van-card__title {
          font: 0.18rem/0.36rem "";
        }
        .van-card__desc {
          font: 0.14rem/0.24rem "";
        }
        .van-card__bottom {
          font: 0.14rem/0.3rem "";
          margin-top: 0.1rem;
          .van-card__num {
            margin-left: 0.1rem;
          }
        }
      }
    }
  }
  .van-submit-bar__bar {
    @include background-color(#f5f5f5);
  }
}
</style>

