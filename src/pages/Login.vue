<template>
    <div class="login">
        <van-nav-bar title="登录"  left-text="返回" right-text="注册" left-arrow @click-left="$router.go(-1)" @click-right="$router.push('/register')"/>
        <van-cell-group>
            <van-field v-model="username" clearable placeholder="请输入手机号码" right-icon="question-o" @click-right-icon="$toast('使用手机号码登录')"/>
        </van-cell-group>
        <van-cell-group>
            <van-field v-model="password" placeholder="请输入密码" :type=" passIcon?'password':'text'" @click-right-icon="passIcon=!passIcon" :right-icon="passIcon?'closed-eye':'eye-o'"/>
        </van-cell-group>
        <van-button round  :disabled="username=='' || password==''?true:false" @click.native="login" id="btnlogin"><span>登录</span></van-button>
    </div>
</template>

<style lang="scss" scoped>
@import '@/qunar/reset.scss';

.login{
    margin-top: 0.5rem;
    @include rect(100%, 100%);
    #btnlogin{
        @include rect(80%, 0.4rem);
        margin-left: 10%;
        margin-top: 0.15rem;
        border: 0.02rem #00b4ff solid;
        span {
            color:#999;
            font-size: 0.2rem;        
        }
    }
}

</style>

<script>
import { NavBar } from 'vant';
import { Field } from 'vant';
import axios from 'axios'
import Vue from 'vue'
import { Button } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Toast } from 'vant';

Vue.use(Toast);
Vue.use(Cell).use(CellGroup);
Vue.use(NavBar);
Vue.use(Field);
Vue.use(Button);

export default {
  data() {
    return {
      username: "",
      password: "",
      passIcon:true,
    };
  },
  methods: {
    login(){
      axios({
        method:"post",
        url:"https://www.daxunxun.com/users/login",
        data:{
          username:this.username,
          password:this.password
        }
      }).then(res=>{
        if(res.data===1){
          console.log(res.data)
          Toast.success("登录成功");
          let isLogin={aus:true,username:this.username}
          localStorage.setItem("isLogin",JSON.stringify(isLogin))
          console.log(isLogin)
          // this.$store.dispatch(types.IS_LOGIN, true)
          this.$router.push("/personal");
        }else if(res.data===2){
          Toast("请先注册")
        }else{
          Toast("帐户名或密码错误")
        }
      })
    }
  }
};
</script>

