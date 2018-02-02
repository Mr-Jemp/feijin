<template>
  <div class="change-password">
    <ul class="list">
      <li>
        <input type="password" placeholder="请输入旧密码">
      </li>
      <li>
        <input type="password" placeholder="请输入新密码">
      </li>
      <li>
        <input type="password" placeholder="请再次输入新密码">
      </li>
    </ul>

    <router-link class="forget-password" to="/forgetPassword">忘记密码</router-link>

    <div :class="['btn', {'active': btnActive}]">确认</div>
  </div>
</template>

<script>
  import {conf} from "../assets/js/main"

  export default {
    name: "change-password",
    data() {
      return {
        btnActive: false,
      }
    },
    created() {
      conf.setTitle("修改密码");
    }
  }
</script>

<style scoped lang="less">
  .change-password{

  }

  .list{
    padding: 0 30/75rem;

    li{
      height: 88/75rem;
      padding: 0 20/75rem;
      margin-top: 20/75rem;
      border-bottom: 1px solid #ccc;
      display: flex;
      align-items: center;
      input[type="password"]{
        width: 100%;
        font-size: 30/75rem;
      }
    }
  }

  .forget-password{
    display: block;
    padding: 40/75rem 30/75rem;
    text-align: right;
    font-size: 26/75rem;
    color: #aebac5;
  }

  .btn{
    width: 690/75rem;
    height: 88/75rem;
    margin: 0 auto;
    line-height: 88/75rem;
    text-align: center;
    font-size: 32/75rem;
    color: #c5d1db;
    -webkit-border-radius: 10/75rem;
    -moz-border-radius: 10/75rem;
    border-radius: 10/75rem;
    background-color: #e5ebf1;
    &.active{
      color: #fff;
      background-color: #5b87d3;
    }
  }
</style>
