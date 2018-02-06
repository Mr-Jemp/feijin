<template>
  <div class="register">
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
      <div class="auth-code">
        <i class="icon-code"></i>
        <input type="number" placeholder="请输入验证码" v-model="authCode">
        <input type="button" v-model="getCodeBtn" @click="getAuthCode">
      </div>

      <div class="btn" @click="fnReg">注册</div>
    </div>

    <!--跳转登录-->
    <div class="to-login">
      <span>已有账号！</span>
      <router-link to="/login">马上登录</router-link>
    </div>
  </div>
</template>

<script>
  import {conf} from "../assets/js/main"
  import MD5 from 'blueimp-md5/js/md5.min'

  export default {
    name: "register",
    data() {
      return {
        mobilePhone: "",
        password: "",
        authCode: "",
        getCodeBtn: "获取验证码",
        disable: false,
        onoff: false
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
      conf.setTitle("注册");
    },
    methods: {
      fnReg() {
        if(!this.mobilePhone){
          return conf.toast("请输入手机号码");
        }else{
          if(!this.isMobile){
            return conf.toast("手机号码有误");
          }
        }
        if(!this.password){
          return conf.toast("请输入密码");
        }
        if(!this.authCode){
          return conf.toast("请输入验证码");
        }
        if (!this.onoff) {
          this.onoff = true;
          conf.post("/api/security/register", {
            "username": this.mobilePhone,
            "password": MD5(this.password),
            "mobileCode": this.authCode
          }, response => {
            this.onoff = false;
            if(response.result === 1){
              conf.toast(response.msg);
              this.$router.push("/login");
            }else{
              conf.toast(response.msg);
            }
          })
        }
      },
      /**
       * 获取验证码
       */
      getAuthCode() {
        if (this.mobilePhone) {
          if (this.isMobile) {
            if (!this.disable) {
              this.disable = true;
              conf.get("/api/mobile/code?mobile=" + this.mobilePhone, response => {
                if (response.result === 1) {
                  conf.toast("发送成功，请注意查收");
                  let countDown = 60;
                  let timer = setInterval(() => {
                    countDown--;
                    this.getCodeBtn = countDown + "s后重发";
                    if (countDown < 1) {
                      clearInterval(timer);
                      this.getCodeBtn = "获取验证码";
                      this.disable = false;
                    }
                  }, 1000)
                } else {
                  conf.toast(response.msg);
                }
              })
            }
          } else {
            conf.toast("手机号码有误");
          }
        } else {
          conf.toast("请输入手机号码");
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .register {
    height: 100vh;
    background: url("../assets/img/login_bg.png") 0 0 no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    text-align: center;
  }

  .logo {
    width: 230/75rem;
    height: 164/75rem;
    margin-top: 140/75rem;
  }

  .form {
    width: 630/75rem;
    margin: 135/75rem auto 0;
    .mobile, .password, .auth-code {
      border-bottom: 1px solid #7490af;
      padding: 12/75rem 20/75rem;
      display: flex;
      align-items: center;
      input[type="tel"], input[type="password"], input[type="number"] {
        margin-left: 40/75rem;
        font-size: 30/75rem;
        color: #fff;
        background-color: transparent;
        &::-webkit-input-placeholder {
          color: #afbfc6;
        }
      }
      input[type="button"] {
        min-width: 170/75rem;
        background-color: transparent;
        border: 1px solid #afbfc6;
        font-size: 26/75rem;
        color: #afbfc6;
        text-align: center;
        padding: 18/75rem 5/75rem;
        -webkit-border-radius: 10/75rem;
        -moz-border-radius: 10/75rem;
        border-radius: 10/75rem;
      }
      i {
        display: block;
        height: 58/75rem;
        background-position: center;
        background-repeat: no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
        &.icon-mobile {
          width: 48/75rem;
          background-image: url("../assets/img/icon_user.png");
        }
        &.icon-password {
          width: 44/75rem;
          margin-left: 2/75rem;
          background-image: url("../assets/img/icon_password.png");
        }
        &.icon-code {
          width: 48/75rem;
          background-image: url("../assets/img/icon_vertification_code.png");
        }
      }
    }

    .mobile, .password {
      margin-bottom: 40/75rem;
    }
    .password {
      input {
        margin-left: 42/75rem;
      }
    }

    .btn {
      width: 630/75rem;
      height: 88/75rem;
      line-height: 88/75rem;
      font-size: 32/75rem;
      color: #fff;
      background: url("../assets/img/login_btn_bg.png") 0 0 no-repeat;
      -webkit-background-size: 100%;
      background-size: 100%;
      margin: 50/75rem auto;
    }
  }

  .to-login {
    margin-top: 280/75rem;
    font-size: 28/75rem;
    span {
      color: #8e9da3;
    }
    a {
      color: #ddeff6;
    }
  }
</style>
