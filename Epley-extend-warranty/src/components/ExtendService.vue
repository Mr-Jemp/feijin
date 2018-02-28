<template>
  <div class="extend-service">
    <!--导航区-->
    <ul class="nav">
      <li :class="{'active': type == 0}" @click="toggleNav(0)">全部</li>
      <li :class="{'active': type == 1}" @click="toggleNav(1)">待支付</li>
      <li :class="{'active': type == 2}" @click="toggleNav(2)">待审核</li>
      <li :class="{'active': type == 3}" @click="toggleNav(3)">已完成</li>
    </ul>

    <!--全部列表-->
    <ul class="list" id="list">
      <!--未付款-->
      <li v-for="item in orderList" :key="item.id">
        <div class="one">
          <span class="left" v-if="item.payStatus === 0">服务编号：(付款后自动生成)</span>
          <span class="left" v-else-if="item.payStatus === 1">服务编号：{{item.orderNo}}</span>
          <span class="status" v-if="item.status === 0 && item.payStatus === 0">待支付</span>
          <span class="status" v-if="item.status === 0 && item.payStatus === 1">待审核</span>
          <span class="status" v-else-if="item.status === 1 && item.payStatus === 1">已完成</span>
          <span class="status" v-else-if="item.status === 2 && item.payStatus === 1">已退回</span>
          <span class="status" v-else-if="item.status === 2 && item.payStatus === 2">已退款</span>
          <span class="status danger" v-else-if="item.status === 2">已退回</span>
        </div>
        <div class="two">{{item.productName}}</div>
        <div class="three">
          <span class="left">车主：{{item.nickname}}</span>
          <div class="right" v-if="item.phone != null">
            <i class="icon-phone"></i>
            <span class="text">{{item.phone}}</span>
          </div>
        </div>
        <div class="four">
          <div class="left-box">
            <span class="left">品牌：{{item.brand}}</span>
            <span class="left">车型：{{item.carModel}}</span>
          </div>
          <div class="right">
            <router-link :to="{path: '/serviceDetails', query:{id:item.id}}" class="btn">查看详情</router-link>
            <a class="btn" v-if="item.status === 0 && item.payStatus === 0" @click="cancel(item.id)">取消合约</a>
            <a class="btn" v-if="item.status === 2" @click="seaCause(item.remark)">查看原因</a>
            <router-link :to="{path: '/payment', query:{id:item.id,price:item.cost}}" class="btn"
                         v-if="item.payStatus === 0 && item.status === 0">去付款
            </router-link>
          </div>
        </div>
      </li>
    </ul>

    <!--失败原因弹窗-->
    <div v-show="causeStatus" class="scope-window">
      <div class="box">
        <h3 class="title">退回原因</h3>
        <div class="content-wrap">
          <p>{{causeValue}}</p>
        </div>
      </div>
      <div class="btn-close" @click="causeStatus = false"></div>
    </div>
  </div>
</template>

<script>
  import {conf} from "../assets/js/main"
  import "../assets/js/dropload.min"

  export default {
    name: "extend-service",
    data() {
      return {
        page: 1,
        type: 0,
        orderList: [],
        causeStatus: false,
        causeValue: "",
        dropload: new Object(),
      }
    },
    created() {
      conf.setTitle("延保服务");
    },
    mounted() {
      this.dropload = $(".extend-service").dropload({
        scrollArea: window,
        loadDownFn: me => {
          this.getData(res => {
            if (res.data.result.length > 0) {
              this.orderList = this.orderList.concat(res.data.result);
              this.page++;
              this.$nextTick(function () {//dom更新以后再重置dropload，防止DOM还未更新完成就已经resetload完了，该方法会在DOM更新完成以后调用
                me.resetload();//每次加载完必须resetload
              });
            } else {
              me.lock();//锁定高度
              me.noData();//新版dropload设置无数据的方法，传入false为有数据，默认值true
              me.resetload();
            }
          })
        }
      });
    },
    methods: {
      /**
       * 获取列表数据
       */
      getData(callback) {
        conf.get("/api/order/list?pageNo=" + this.page + "&status=" + this.type, response => {
          if (response.result === 1) {
            if (this.page === 1) {
              this.orderList = response.data.result;
              this.page++;
              this.$nextTick(function () {
                this.dropload.resetload();
              })
            } else {
              callback(response);
            }
          } else {
            conf.toast(response.msg);
          }
        })
      },
      /**
       * Nav导航切换
       * @param status 当前导航的下标索引
       */
      toggleNav(status) {
        this.type = status;
        this.page = 1;
        this.orderList = [];
        this.$nextTick(function () {
          this.dropload.unlock();
          this.dropload.noData(false);
          this.dropload.resetload();
        });
      },
      /**
       * 取消合约
       * @param id  订单id
       */
      cancel(id) {
        conf.post("/api/order/remove", {
          "id": id
        }, response => {
          if (response.result === 1) {
            conf.toast("取消成功");
            /*此时调用getData方法页面并不会相应更新，只能重置dropload*/
            this.page = 1;
            this.orderList = [];
            this.$nextTick(function () {
              this.dropload.unlock();
              this.dropload.noData(false);
              this.dropload.resetload();
            });
          } else {
            conf.toast(response.msg);
          }
        })
      },
      seaCause(cause) {
        this.causeStatus = true;
        this.causeValue = cause;
      }
    }
  }
</script>

<style scoped lang="less">

  .extend-service {
    min-height: 100vh;
    background-color: #f5f5f5;
    position: relative;
  }

  .nav {
    width: 100%;
    height: 88/75rem;
    border-bottom: 1px solid #e6ebf4;
    display: flex;
    align-items: center;
    background-color: #fff;
    position: fixed;
    top: 0;
    max-width: 600px;
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
    padding-top: 88/75rem;
    li {
      background-color: #fff;
      margin: 16/75rem auto;
      padding: 0 0 20/75rem;
      > div {
        /* display: flex;
        align-items: center;
        justify-content: space-between; */
        padding: 0 30/75rem;
      }
      .left, .text {
        font-size: 28/75rem;
        color: #7c8e9e;
      }
      .left {
        font-size: 30/75rem;
      }
      .right {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        text-align: right;
        i.icon-phone {
          display: inline-block;
          width: 20/75rem;
          height: 28/75rem;
          background: url("../assets/img/icon_mobilephone.png") 0 0 no-repeat;
          -webkit-background-size: 100%;
          background-size: 100%;
          margin-right: 15/75rem;
        }
        .btn {
          display: inline-block;
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
          margin-top: 10/75rem;
        }
      }
      .one {
        height: 88/75rem;
        line-height: 88/75rem;
        border-bottom: 1px solid #e6ebf4;
        span {
          &.status {
            font-size: 26/75rem;
            color: #5b87d3;
            float: right;
          }
          &.danger {
            color: #ff6767;
          }
        }
      }
      .two {
        margin: 30/75rem auto;
        font-size: 34/75rem;
        color: #121212;
      }
      .three {
        margin-bottom: 16/75rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
          display: inline-block;
          width: 450/75rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .left-box {
        span {
          display: block;
          margin-bottom: 16/75rem;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }

  .scope-window {
    width: 100%;
    max-width: 600px;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 20;
    background-color: rgba(0, 0, 0, .5);
    padding: 30/75rem;
    .box {
      width: 100%;
      height: 85%;
      background-color: #fff;
      -webkit-border-radius: 20/75rem;
      -moz-border-radius: 20/75rem;
      border-radius: 20/75rem;
      padding: 40/75rem;
      margin-top: 60/75rem;
      overflow: hidden;

      .title {
        font-size: 36/75rem;
        color: #121212;
        font-weight: 600;
        text-align: center;
        margin-bottom: 30/75rem;
      }

      .content-wrap {
        height: 90%;
        overflow-y: scroll;
        &::-webkit-scrollbar {
          display: none;
        }

        .main-title {
          font-size: 32/75rem;
          font-weight: 600;
        }
        .subhead {
          font-size: 32/75rem;
          font-weight: 600;
          margin: 25/75rem 0;
        }
        p {
          font-size: 28/75rem;
          color: #666;
          line-height: 40/75rem;
        }
      }
    }

    .btn-close {
      width: 64/75rem;
      height: 64/75rem;
      background: url("../assets/img/button_close.png") 0 0 no-repeat;
      -webkit-background-size: 100%;
      background-size: 100%;
      margin: 40/75rem auto;
    }
  }
</style>
