<template>
  <div class="payment">
    <!--应支付金额-->
    <div class="header">
      <span class="text">支付</span>
      <span class="money">{{price}}元</span>
    </div>

    <div class="box">
      <p class="select-pay">请选择支付方式</p>

      <ul class="pay-list">
        <li>
          <div class="left">
            <i class="icon-alipay"></i>
            <span>支付宝支付</span>
          </div>
          <i :class="['icon-radio', {'active': radioType == 1}]" @click="radioType = 1"></i>
        </li>
        <li>
          <div class="left">
            <i class="icon-wechat"></i>
            <span>微信支付</span>
          </div>
          <i :class="['icon-radio', {'active': radioType == 2}]" @click="radioType = 2"></i>
        </li>
      </ul>

      <div class="btn" @click="fnPay">确认支付</div>

    </div>


  </div>
</template>

<script>
  import {conf} from "../assets/js/main"

  export default {
    name: "payment",
    data() {
      return {
        radioType: 1,
        id: this.$route.query.id,
        price: this.$route.query.price
      }
    },
    created() {
      conf.setTitle("支付方式");
      window.scrollTo(0, 0);
    },
    methods: {
      /**
       * 临时支付：临时接口
       */
      fnPay() {
        conf.post("/api/order/pay", {
          "id": this.id
        }, response => {
          if (response.result === 1) {
            conf.toast("支付成功");
            setTimeout(() => {
              this.$router.replace("/serviceDetails?id=" + this.id);
            }, 500)
          } else {
            conf.toast(response.msg);
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .header {
    height: 96/75rem;
    border-bottom: 1px solid #e5e5e5;
    line-height: 96/75rem;
    padding: 0 30/75rem;
    font-size: 30/75rem;
    .text {
      color: #333;
    }
    .money {
      color: #999;
      margin-left: 60/75rem;
    }
  }

  .box {
    padding: 0 30/75rem;
    .select-pay {
      height: 87/75rem;
      line-height: 87/75rem;
      font-size: 26/75rem;
      color: #999;
    }

    .pay-list {
      li {
        height: 108/75rem;
        border-bottom: 1px solid #e5e5e5;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
          display: flex;
          align-items: center;
          i {
            display: block;
            background-repeat: no-repeat;
            background-position: center;
            -webkit-background-size: 100%;
            background-size: 100%;
            margin-right: 20/75rem;
            &.icon-alipay {
              width: 54/75rem;
              height: 56/75rem;
              background-image: url("../assets/img/icon_alipay.png");
            }
            &.icon-wechat {
              width: 56/75rem;
              height: 56/75rem;
              background-image: url("../assets/img/icon_wechat.png");
            }
          }
          span {
            font-size: 32/75rem;
          }
        }
        i.icon-radio {
          display: block;
          width: 42/75rem;
          height: 42/75rem;
          background-position: center;
          background-repeat: no-repeat;
          -webkit-background-size: 100%;
          background-size: 100%;
          background-image: url("../assets/img/icon_checkbox.png");
          &.active {
            background-image: url("../assets/img/icon_checked.png");
          }
        }
      }
    }

    .btn {
      width: 690/75rem;
      height: 88/75rem;
      line-height: 88/75rem;
      text-align: center;
      margin: 60/75rem auto;
      font-size: 32/75rem;
      color: #fff;
      background-color: #5b87d3;
      -webkit-border-radius: 20/75rem;
      -moz-border-radius: 20/75rem;
      border-radius: 20/75rem;
    }
  }
</style>
