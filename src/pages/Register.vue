<template>
    <div class="register">
        <van-nav-bar title="注册"  left-text="返回" right-text="登录" left-arrow @click-left="$router.go(-1)" @click-right="$router.push('/login')"/>
        <van-cell-group>
            <van-field v-model="phone" clearable :error="checkName" @blur="checkNameMsg" placeholder="请输入手机号码" />
        </van-cell-group>
        <van-cell-group>            
            <van-field v-model="code" center clearable label="短信验证码" placeholder="请输入短信验证码" :error="checkCode" class="reg-code" @blur="checkSms">
                <!-- <van-button slot="button" size="small" type="primary" id="btncode" :disabled="flag"><span>发送验证码</span></van-button> -->
                <van-button slot="button" size="small" type="primary" :disabled="flag" class="reg-send-code" id="btncode" @click.native="sendCode">{{codeMsg}}</van-button>
            </van-field>
        </van-cell-group>
        <van-cell-group>
            <van-field v-model="password"  placeholder="请输入密码" :type=" passIcon?'password':'text'" @click-right-icon="passIcon=!passIcon" :right-icon="passIcon?'closed-eye':'eye-o'" @blur="checkPwdMsg" :error="checkPwd"/>
        </van-cell-group>
        <van-button round   @click.native="register" id="btnreg"><span>注册</span></van-button>
    </div>
</template>

<style lang="scss" scoped>
@import '@/qunar/reset.scss';

.register{
    margin-top: 0.4rem;
    @include rect(100%, 100%);
    #btncode{
        span{
            color: #fff;
        }
    }
    #btnreg{
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
            phone: "",           //用户名
            password: "",        //密码
            code:"",             //验证码
            sendcode:"",          //收到的验证码
            passIcon:true,       //密码输入框右侧图标检测
            checkName:false,     //用户名输入框正则验证
            checkPwd:false,      //密码输入框正则验证
            checkCode:false,     //验证码输入框正则验证
            codeMsg:"发送验证码",
            flag:false
        };
    },
    methods: {
        checkNameMsg(){
            if(/^1(3|4|5|7|8)\d{9}$/.test(this.phone)){
                this.checkName=false
            }else{
                this.checkName=true
                    Toast.setDefaultOptions({
                        duration:1000
                    });
                    Toast.fail('手机号码格式不正确');
            }
        },
        checkPwdMsg(){
            if(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/.test(this.password)){
                this.checkPwd=false
            }else{
                this.checkPwd=true;
                    Toast.setDefaultOptions({
                        duration:1000
                    });
                    Toast.fail('密码长度要大于6位，由数字和字母组成');
            }
        },
        checkSms(){
            if(this.code===this.sendcode){
                this.checkCode=false
            }else{
                this.checkCode=true;
                    Toast.setDefaultOptions({
                        duration:1000
                    });
                    Toast.fail('验证码输入有误');
            }
        },
        sendCode(){
            axios({
                url:"https://www.daxunxun.com/users/sendCode",
                params:{tel:this.phone}
            }).then(res=>{
                if(res.data === 1){
                    Toast('该用户已注册');
                    return ;
                }else {
                    let time=60;
                    let timer=setInterval(()=>{
                        this.codeMsg=--time+"后重新发送"
                            this.flag=true
                        if(time===0){
                            this.flag=false
                            clearInterval(timer);
                            this.codeMsg="发送验证码"
                            }
                        },1000)
                    if(res.data===0){
                    Toast('发送失败');
                    }else{
                        this.sendcode=res.data.code
                    }
                }
            });
            // this.sendcode="123456";
        },
        register(){
            if(this.checkName || this.checkPwd || this.checkCode){
                return;
            }else{
                axios({
                method:"post",
                url:"https://www.daxunxun.com/users/register",
                data:{
                    phone:this.phone,
                    password:this.password
                }
            }).then(res=>{
                if(res.data===2){
                    Toast("该用户已注册");
                    this.$router.push("/login");
                }else if(res.data===0){
                    Toast.fail("注册失败");
                }else{
                    Toast.success("注册成功!");
                    this.$router.push("/home");
                }
            })
            }
        }
    },
};
</script>

