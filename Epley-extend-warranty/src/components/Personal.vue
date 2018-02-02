<template>
  <div class="personal">
    <!--头部-->
    <div class="box">
      <img src="../assets/img/personal_bg.png">

      <div class="tips">Hi，等你好久了！</div>

      <div class="btn-wrap">
        <router-link to="/register">注册</router-link>
        <router-link to="/login">登录</router-link>
      </div>

    </div>

    <!--操作列表-->
    <ul class="list">
      <li>
        <router-link to="">
          <i class="icon-contract"></i>
          <span>延保服务合约</span>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <i class="icon-message"></i>
          <span>系统消息</span>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <i class="icon-aipuli"></i>
          <span>关于艾普利</span>
        </router-link>
      </li>
      <li>
        <router-link to="/setting">
          <i class="icon-setting"></i>
          <span>设置</span>
        </router-link>
      </li>
    </ul>


    <!--底部导航-->
    <v-footer :active="3"/>

  </div>
</template>

<script>
  import {conf} from "../assets/js/main"

  export default {
    name: "personal",
    data() {
      return {

      }
    },
    created() {
      conf.setTitle("个人中心");
    }
  }
</script>

<style scoped lang="less">
  .personal {
    min-height: 100vh;
    background-color: #f5f5f5;
    padding-bottom: 100/75rem;
  }

  .box {
    height: 300/75rem;
    position: relative;

    img {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
    }

    .tips{
      width: 100%;
      position: absolute;
      top: 80/75rem;
      text-align: center;
      font-size: 30/75rem;
      color: #fff;
    }

    .btn-wrap {
      position: absolute;
      top: 186/75rem;
      left: 0;
      right: 0;
      margin: auto;
      text-align: center;
      a {
        display: inline-block;
        width: 140/75rem;
        height: 60/75rem;
        background-color: rgba(117, 140, 203, .8);
        color: #fff;
        text-align: center;
        line-height: 60/75rem;
        font-size: 30/75rem;
        -webkit-border-radius: 60/75rem;
        -moz-border-radius: 60/75rem;
        border-radius: 60/75rem;
        margin-right: 45/75rem;
        &:last-child{
          margin-right: 0;
        }
      }
    }
  }

  .list{
    margin-top: 20/75rem;
    li{
      padding: 0 30/75rem;
      height: 96/75rem;
      background-color: #fff;
      &:last-child{
        a{
          border-bottom: none;
        }
      }
      a{
        width: 100%;
        height: 100%;
        border-bottom: 1px solid #e6ebf4;
        display: flex;
        align-items: center;
        span{
          font-size: 30/75rem;
        }
        i{
          display: inline-block;
          background-repeat: no-repeat;
          background-position: center;
          -webkit-background-size: 100%;
          background-size: 100%;
          margin-right: 30/75rem;
          &.icon-contract{
            width: 28/75rem;
            height: 32/75rem;
            background-image: url("../assets/img/icon_contract.png");
          }
          &.icon-message{
            width: 30/75rem;
            height: 34/75rem;
            background-image: url("../assets/img/icon_profile_message.png");
          }
          &.icon-aipuli{
            width: 32/75rem;
            height: 22/75rem;
            background-image: url("../assets/img/icon_profile_aipuli.png");
          }
          &.icon-setting{
            width: 32/75rem;
            height: 32/75rem;
            background-image: url("../assets/img/icon_profile_setting.png");
          }
        }
      }
    }
  }
</style>
