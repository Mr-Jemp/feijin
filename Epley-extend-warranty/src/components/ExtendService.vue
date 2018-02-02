<template>
  <div class="extend-service">
    <!--导航区-->
    <ul class="nav">
      <li :class="{'active': navActive == 1}" @click="navActive = 1">全部</li>
      <li :class="{'active': navActive == 2}" @click="navActive = 2">未付款</li>
      <li :class="{'active': navActive == 3}" @click="navActive = 3">待审核</li>
      <li :class="{'active': navActive == 4}" @click="navActive = 4">已审核</li>
    </ul>

    <!--全部列表-->
    <ul v-show="navActive == 1" class="list">
      <!--未付款-->
      <li>
        <div class="one">
          <span class="left">服务编号：(付款后自动生成)</span>
          <span class="status">未付款</span>
        </div>
        <div class="two">至尊保</div>
        <div class="three">
          <span class="left">车主：文海苏</span>
          <div class="right">
            <i class="icon-phone"></i>
            <span class="text">13466662828</span>
          </div>
        </div>
        <div class="four">
          <div class="left-box">
            <span class="left">品牌：大众</span>
            <span class="left">车型：辉腾</span>
          </div>
          <div class="right">
            <router-link to="/serviceDetails" class="btn">查看详情</router-link>
            <a class="btn">取消合约</a>
          </div>
        </div>
      </li>

      <!--待审核-->
      <li>
        <div class="one">
          <span class="left">服务编号：8887455556</span>
          <span class="status">待审核</span>
        </div>
        <div class="two">紫霞保</div>
        <div class="three">
          <span class="left">车主：文海苏</span>
          <div class="right">
            <i class="icon-phone"></i>
            <span class="text">13466662828</span>
          </div>
        </div>
        <div class="four">
          <div class="left-box">
            <span class="left">品牌：大众</span>
            <span class="left">车型：辉腾</span>
          </div>
          <div class="right">
            <router-link to="/serviceDetails" class="btn">查看详情</router-link>
          </div>
        </div>
      </li>

      <!--审核通过-->
      <li>
        <div class="one">
          <span class="left">服务编号：8887455556</span>
          <span class="status">审核通过</span>
        </div>
        <div class="two">至尊保</div>
        <div class="three">
          <span class="left">车主：文海苏</span>
          <div class="right">
            <i class="icon-phone"></i>
            <span class="text">13466662828</span>
          </div>
        </div>
        <div class="four">
          <div class="left-box">
            <span class="left">品牌：大众</span>
            <span class="left">车型：辉腾</span>
          </div>
          <div class="right">
            <router-link to="/serviceDetails" class="btn">查看详情</router-link>
          </div>
        </div>
      </li>

      <!--审核失败-->
      <li>
        <div class="one">
          <span class="left">服务编号：8887455556</span>
          <span class="status danger">审核失败</span>
        </div>
        <div class="two">紫霞保</div>
        <div class="three">
          <span class="left">车主：文海苏</span>
          <div class="right">
            <i class="icon-phone"></i>
            <span class="text">13466662828</span>
          </div>
        </div>
        <div class="four">
          <div class="left-box">
            <span class="left">品牌：大众</span>
            <span class="left">车型：辉腾</span>
          </div>
          <div class="right">
            <router-link to="/serviceDetails" class="btn">查看详情</router-link>
          </div>
        </div>
      </li>
    </ul>

    <!--未付款列表-->
    <ul v-show="navActive == 2" class="list">
      <!--未付款-->
      <li>
        <div class="one">
          <span class="left">服务编号：(付款后自动生成)</span>
          <span class="status">未付款</span>
        </div>
        <div class="two">至尊保</div>
        <div class="three">
          <span class="left">车主：文海苏</span>
          <div class="right">
            <i class="icon-phone"></i>
            <span class="text">13466662828</span>
          </div>
        </div>
        <div class="four">
          <div class="left-box">
            <span class="left">品牌：大众</span>
            <span class="left">车型：辉腾</span>
          </div>
          <div class="right">
            <router-link to="/serviceDetails" class="btn">查看详情</router-link>
            <a class="btn">取消合约</a>
          </div>
        </div>
      </li>
    </ul>

    <!--待审核列表-->
    <ul v-show="navActive == 3" class="list">
      <!--待审核-->
      <li>
        <div class="one">
          <span class="left">服务编号：8887455556</span>
          <span class="status">待审核</span>
        </div>
        <div class="two">紫霞保</div>
        <div class="three">
          <span class="left">车主：文海苏</span>
          <div class="right">
            <i class="icon-phone"></i>
            <span class="text">13466662828</span>
          </div>
        </div>
        <div class="four">
          <div class="left-box">
            <span class="left">品牌：大众</span>
            <span class="left">车型：辉腾</span>
          </div>
          <div class="right">
            <router-link to="/serviceDetails" class="btn">查看详情</router-link>
          </div>
        </div>
      </li>
    </ul>

    <!--已审核列表-->
    <ul v-show="navActive == 4" class="list">
      <!--审核通过-->
      <li>
        <div class="one">
          <span class="left">服务编号：8887455556</span>
          <span class="status">审核通过</span>
        </div>
        <div class="two">至尊保</div>
        <div class="three">
          <span class="left">车主：文海苏</span>
          <div class="right">
            <i class="icon-phone"></i>
            <span class="text">13466662828</span>
          </div>
        </div>
        <div class="four">
          <div class="left-box">
            <span class="left">品牌：大众</span>
            <span class="left">车型：辉腾</span>
          </div>
          <div class="right">
            <router-link to="/serviceDetails" class="btn">查看详情</router-link>
          </div>
        </div>
      </li>

      <!--审核失败-->
      <li>
        <div class="one">
          <span class="left">服务编号：8887455556</span>
          <span class="status danger">审核失败</span>
        </div>
        <div class="two">紫霞保</div>
        <div class="three">
          <span class="left">车主：文海苏</span>
          <div class="right">
            <i class="icon-phone"></i>
            <span class="text">13466662828</span>
          </div>
        </div>
        <div class="four">
          <div class="left-box">
            <span class="left">品牌：大众</span>
            <span class="left">车型：辉腾</span>
          </div>
          <div class="right">
            <router-link to="/serviceDetails" class="btn">查看详情</router-link>
          </div>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
  import {conf} from "../assets/js/main"

  export default {
    name: "extend-service",
    data() {
      return {
        navActive: 1
      }
    },
    created() {
      conf.setTitle("延保服务");
    }
  }
</script>

<style scoped lang="less">
  .extend-service {
    min-height: 100vh;
    background-color: #f5f5f5;
  }

  .nav {
    height: 88/75rem;
    border-bottom: 1px solid #e6ebf4;
    display: flex;
    align-items: center;
    background-color: #fff;
    li {
      width: 25%;
      height: 100%;
      line-height: 88/75rem;
      text-align: center;
      font-size: 30/75rem;
      color: #7c8e9e;
      &.active {
        color: #5b87d3;
      }
    }
  }

  .list {
    li {
      background-color: #fff;
      margin: 16/75rem auto;
      padding: 0 0 40/75rem;
      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 30/75rem;
      }
      .left, .text {
        font-size: 28/75rem;
        color: #7c8e9e;
      }
      .left{
        font-size: 30/75rem;
      }
      .right{
        display: flex;
        align-items: center;
        i.icon-phone{
          display: inline-block;
          width: 20/75rem;
          height: 28/75rem;
          background: url("../assets/img/icon_mobilephone.png") 0 0 no-repeat;
          -webkit-background-size: 100%;
          background-size: 100%;
          margin-right: 15/75rem;
        }
        .btn{
          display: block;
          width: 150/75rem;
          height: 60/75rem;
          line-height: 60/75rem;
          text-align: center;
          font-size: 26/75rem;
          color: #5b87d3;
          border: 1px solid #5b87d3;
          -webkit-border-radius: 10/75rem;
          -moz-border-radius: 10/75rem;
          border-radius: 10/75rem;
          margin-left: 20/75rem;
          margin-top: 20/75rem;
        }
      }
      .one {
        height: 88/75rem;
        border-bottom: 1px solid #e6ebf4;
        span{
          &.status{
            font-size: 26/75rem;
            color: #5b87d3;
          }
          &.danger{
            color: #ff6767;
          }
        }
      }
      .two{
        margin: 30/75rem auto;
        font-size: 34/75rem;
        color: #121212;
      }
      .three{
        margin-bottom: 16/75rem;
      }
      .left-box{
        span{
          display: block;
          margin-bottom: 16/75rem;
          &:last-child{
            margin-bottom: 0;
          }
        }
      }
    }
  }
</style>
