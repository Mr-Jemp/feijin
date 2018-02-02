<template>
  <div class="forget-password">
    <ul class="list">
      <li>
        <input type="tel" placeholder="请输入已绑定手机号码">
      </li>
      <li>
        <input type="number" placeholder="请输入验证码">
        <input type="button" v-model="getCodeBtn">
      </li>
      <li>
        <input type="password" placeholder="设置新密码">
        <i class="icon-show-password"></i>
      </li>
    </ul>

    <div :class="['btn', {'active': btnActive}]">确认</div>

  </div>
</template>

<script>
  import {conf} from "../assets/js/main"

  export default {
    name: "forget-password",
    data() {
      return {
        getCodeBtn: "获取验证码",
        btnActive: false,
      }
    },
    created() {
      conf.setTitle("忘记密码");
    }
  }
</script>

<style scoped lang="less">
  .forget-password {

  }

  .list{
    padding: 30/75rem;
    li{
      height: 88/75rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20/75rem;
      border-bottom: 1px solid #ccc;
      margin-bottom: 22/75rem;
      &:last-child{
        margin-bottom: 0;
      }
      input{
        font-size: 30/75rem;
        color: #333;
        &::-webkit-input-placeholder{
          color: #aebac5;
        }
      }
      input[type="button"]{
        min-width: 160/75rem;
        text-align: center;
        border: 1px solid #999;
        -webkit-border-radius: 15/75rem;
        -moz-border-radius: 15/75rem;
        border-radius: 15/75rem;
        padding: 15/75rem 10/75rem;
        background-color: transparent;
        box-sizing: content-box;
        font-size: 28/75rem;
        color: #666;
        outline: none;
      }

      .icon-show-password{
        display: block;
        width: 41/75rem;
        height: 29/75rem;
        background: url("../assets/img/btn_password_show.png") 0 0 no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
      }
    }
  }

  .btn{
    width: 690/75rem;
    height: 88/75rem;
    line-height: 88/75rem;
    text-align: center;
    font-size: 32/75rem;
    color: #c5d1db;
    background-color: #e5ebf1;
    -webkit-border-radius: 10/75rem;
    -moz-border-radius: 10/75rem;
    border-radius: 10/75rem;
    margin: 40/75rem auto;
    &.active{
      color: #fff;
      background-color: #5b87d3;
    }
  }
</style>
