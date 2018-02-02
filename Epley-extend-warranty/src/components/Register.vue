<template>
  <div class="register">
    <img class="logo" src="../assets/img/logo.png">

    <div class="form">
      <div class="mobile">
        <i class="icon-mobile"></i>
        <input type="tel" placeholder="请输入手机号码" maxlength="11">
      </div>
      <div class="password">
        <i class="icon-password"></i>
        <input type="password" placeholder="请输入密码">
      </div>
      <div class="auth-code">
        <i class="icon-code"></i>
        <input type="number" placeholder="请输入验证码">
        <input type="button" v-model="getCodeBtn">
      </div>

      <div class="btn">注册</div>
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

  export default {
    name: "register",
    data() {
      return {
        getCodeBtn: "获取验证码",
      }
    },
    created() {
      conf.setTitle("注册");
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
      input[type="button"]{
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
