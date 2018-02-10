<template>
  <div class="login">
    <img class="logo" src="../assets/img/logo.png">

    <div class="form">
      <div class="mobile">
        <i class="icon-mobile"></i>
        <input type="tel" placeholder="请输入手机号码" v-model="mobilePhone" maxlength="11">
      </div>
      <div class="password">
        <i class="icon-password"></i>
        <input type="password" placeholder="请输入密码" v-model="password">
      </div>

      <router-link class="forget-password" to="/forgetPassword">忘记密码</router-link>

      <div class="btn" @click="fnLogin">登录</div>
    </div>

    <!--跳转注册-->
    <div class="to-reg">
      <span>还没有账号？</span>
      <router-link to="/register">立即注册</router-link>
    </div>

  </div>

</template>

<script>
  import {conf} from "../assets/js/main"
  import MD5 from "blueimp-md5/js/md5.min"

  export default {
    name: "login",
    data() {
      return {
        mobilePhone: "",
        password: "",
        onoff: false,
        isMobile: false
      }
    },
    watch: {
      mobilePhone(value) {
        let reg = /^[1][3,4,5,7,8][0-9]{9}$/.test(value);
        if (reg && value.trim().length === 11) {
          this.isMobile = true;
        } else {
          this.isMobile = false;
        }
      }
    },
    created() {
      conf.setTitle("登录");
    },
    methods: {
      fnLogin() {
        if(this.mobilePhone){
          if(this.isMobile){
            if(!this.onoff){
              this.onoff = true;
              conf.post("/api/security/login", {
                "username": this.mobilePhone,
                "password": MD5(this.password)
              }, response => {
                this.onoff = false;
                if(response.result === 1){
                  conf.toast("登陆成功");
                  this.$router.push("/personal");
                }else{
                  conf.toast(response.msg);
                }
              })
            }
          }else{
            conf.toast("手机号码有误");
          }
        }else{
          conf.toast("请输入手机号码");
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .login{
    min-height: 100vh;
    background: url("../assets/img/login_bg.png") 0 0 no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
    text-align: center;
  }

  .logo{
    width: 230/75rem;
    height: 164/75rem;
    margin-top: 140/75rem;
  }

  .form{
    width: 630/75rem;
    margin: 135/75rem auto 0;
    .mobile, .password{
      border-bottom: 1px solid #7490af;
      padding: 12/75rem 20/75rem;
      display: flex;
      align-items: center;
      input{
        margin-left: 40/75rem;
        font-size: 30/75rem;
        color: #fff;
        background-color: transparent;
        &::-webkit-input-placeholder{
          color: #afbfc6;
        }
      }
      i{
        display: block;
        height: 58/75rem;
        background-position: center;
        background-repeat: no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
        &.icon-mobile{
          width: 48/75rem;
          background-image: url("../assets/img/icon_user.png");
        }
        &.icon-password{
          width: 44/75rem;
          margin-left: 2/75rem;
          background-image: url("../assets/img/icon_password.png");
        }
      }
    }

    .mobile{
      margin-bottom: 40/75rem;
    }
    .password{
      input{
        margin-left: 42/75rem;
      }
    }

    .forget-password{
      display: block;
      text-align: right;
      color: #fff;
      font-size: 28/75rem;
      margin: 40/75rem 0;
    }

    .btn{
      width: 630/75rem;
      height: 88/75rem;
      line-height: 88/75rem;
      font-size: 32/75rem;
      color: #fff;
      background: url("../assets/img/login_btn_bg.png") 0 0 no-repeat;
      -webkit-background-size: 100%;
      background-size: 100%;
    }
  }

  .to-reg{
    margin-top: 280/75rem;
    font-size: 28/75rem;
    span{
      color: #8e9da3;
    }
    a{
      color: #ddeff6;
    }
  }
</style>
