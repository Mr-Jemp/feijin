<template>
  <div class="service-details">
    <!--头部编号信息-->
    <div class="box1">
      <span class="left">服务编号：
        <em v-if="passStatus">8887455556</em>
        <em v-else>(付款后自动生成)</em>
      </span>
      <span class="status">审核已通过</span>
    </div>

    <!--车主信息-->
    <div class="box2">
      <div class="head">
        <div class="wrap">
          <i class="icon-owner"></i>
          <span>车主信息</span>
        </div>
      </div>

      <ul class="list">
        <li>
          <span class="left-text">车主</span>
          <span class="right-text">苏海文</span>
        </li>
        <li>
          <span class="left-text">联系人</span>
          <span class="right-text">Hevien</span>
        </li>
        <li>
          <span class="left-text">手机号</span>
          <span class="right-text">13433665598</span>
        </li>
        <li>
          <span class="left-text">联系地址</span>
          <span class="right-text">广州市白云区第三大道汉州路广州市白云区</span>
        </li>
        <li>
          <span class="left-text">邮箱</span>
          <span class="right-text">963568722@qq.com</span>
        </li>
      </ul>


      <img class="bottom-line" src="../assets/img/img_envelope.png">
    </div>

    <!--车辆信息-->
    <div class="box3">
      <div class="head">
        <div class="wrap">
          <i class="icon-car"></i>
          <span>车辆信息</span>
        </div>
      </div>

      <ul class="list">
        <li>
          <span class="left-text">品牌</span>
          <span class="right-text">保时捷</span>
        </li>
        <li>
          <span class="left-text">车系</span>
          <span class="right-text">豪华牌车系</span>
        </li>
        <li>
          <span class="left-text">车型</span>
          <span class="right-text">辉腾</span>
        </li>
        <li>
          <span class="left-text">配置版本</span>
          <span class="right-text">高配版</span>
        </li>
        <li>
          <span class="left-text">排量</span>
          <span class="right-text">1.4L</span>
        </li>
        <li>
          <span class="left-text">车牌号码</span>
          <span class="right-text">粤A·88888</span>
        </li>
        <li>
          <span class="left-text">车辆识别号</span>
          <span class="right-text">LGSDNSJKDSK23</span>
        </li>
        <li>
          <span class="left-text">发动机号</span>
          <span class="right-text">76110577</span>
        </li>
        <li>
          <span class="left-text">当前行驶里程</span>
          <span class="right-text">200公里</span>
        </li>
        <li>
          <span class="left-text">注册日期</span>
          <span class="right-text">2018-01-23</span>
        </li>
        <li>
          <span class="left-text">使用性质</span>
          <span class="right-text">非营运</span>
        </li>
        <li>
          <span class="left-text">车龄</span>
          <span class="right-text">2年</span>
        </li>
        <li>
          <span class="left-text">是否涡轮增压</span>
          <span class="right-text">是</span>
        </li>
        <li>
          <span class="left-text">是否四驱</span>
          <span class="right-text">是</span>
        </li>
      </ul>
    </div>

    <!--延保信息-->
    <div class="box4">
      <div class="head">
        <div class="wrap">
          <i class="icon-extend"></i>
          <span>延保信息</span>
        </div>
      </div>

      <ul class="list">
        <li>
          <span class="left-text">产品名称</span>
          <span class="right-text">至尊保</span>
        </li>
        <li>
          <span class="left-text">延保范围</span>
          <span class="right-text">两大部件：发动机+变速箱</span>
        </li>
        <li>
          <span class="left-text">保障年限</span>
          <span class="right-text">6个月</span>
        </li>
        <li>
          <span class="left-text">
            <em>保障里程</em>
            <em class="blue-text">(车辆最终保障里程不超过130,000公里)</em>
          </span>
          <span class="right-text">20,000公里</span>
        </li>
        <li>
          <span class="left-text">合约生效日期起止</span>
          <span class="right-text">2018.1.23 - 2019.1.22</span>
        </li>
        <li>
          <span class="left-text">赔付限额</span>
          <span class="right-text">10,000元</span>
        </li>
      </ul>
    </div>

    <!--审核通过-->
    <div v-if="passStatus" class="wrapper">
      <!--服务费-->
      <div class="box5">
        <span class="left-text">服务费</span>
        <span class="danger">&yen;3,000</span>
      </div>

      <div class="btn" @click="contractStatus = true">查看电子合约</div>
    </div>

    <!--未付款-->
    <div v-else class="wrapper">
      <ul class="deal-list">
        <li>
          <em>查看<span>准入条件</span></em>
          <i v-if="entryStatus" class="icon-checked" @click="entryStatus = false"></i>
          <i v-else class="icon-checkbox" @click="entryStatus = true"></i>
        </li>
        <li>
          <em>查看<span>保障范围</span></em>
          <i v-if="scopeStatus" class="icon-checked" @click="scopeStatus = false"></i>
          <i v-else class="icon-checkbox" @click="scopeStatus = true"></i>
        </li>
        <li>
          <em>查看<span>理赔流程</span></em>
          <i v-if="flowStatus" class="icon-checked" @click="flowStatus = false"></i>
          <i v-else class="icon-checkbox" @click="flowStatus = true"></i>
        </li>
      </ul>

      <!--充分阅读协议-->
      <div class="read">
        <i v-if="readStatus" class="icon-checkeds"></i>
        <i v-else class="icon-check"></i>

        <p class="deal-text">我已充分了解以上内容、包括《准入条件》、《保障范围》、《理赔流程》，完全理解并勾选表示同意以上条件</p>
      </div>

      <div class="footer">
        <div class="left">服务费：<span>&yen;3,000</span></div>
        <div class="btn-pay">确认支付</div>
      </div>
    </div>

    <!--电子合约弹窗-->
    <div v-show="contractStatus" class="e-contract">
      <div class="content">
        <h4 class="title">电子合约</h4>

        <div class="wrap">
          <h5 class="main-title">(一) 发动机</h5>
          <h6 class="subhead">1、气缸盖部分</h6>
          <p>电子合约内容</p>

          <h6 class="subhead">2、正时部分</h6>
          <p>电子合约内容</p>

          <h6 class="subhead">3、气缸体部分</h6>
          <p>电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容电子合约内容</p>
        </div>
      </div>
      <div class="btn-close" @click="contractStatus = false"></div>
    </div>

  </div>
</template>

<script>
  import {conf} from "../assets/js/main"

  export default {
    name: "service-details",
    data() {
      return {
        //是否通过审核
        passStatus: true,
        //电子合约状态
        contractStatus: false,
        //准入条件选中状态
        entryStatus: true,
        //保障范围选中状态
        scopeStatus: true,
        //理赔流程选中状态
        flowStatus: true,
        //是否阅读协议
        readStatus: true,
      }
    },
    created() {
      conf.setTitle("服务详情");
    }
  }
</script>

<style scoped lang="less">
  .service-details {
    min-height: 100vh;
    background-color: #f5f5f5;
    padding-bottom: 88/75rem;
  }

  .box1, .box2, .box3, .box4, .box5 {
    background-color: #fff;
    margin-bottom: 20/75rem;
  }

  .danger {
    color: #ff5555 !important;
  }

  .head {
    height: 88/75rem;
    padding: 0 30/75rem;
    .wrap {
      height: 100%;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e5e5e5;
      font-size: 32/75rem;
      color: #5b87d3;
      i {
        display: block;
        width: 36/75rem;
        height: 46/75rem;
        background-repeat: no-repeat;
        background-position: center;
        -webkit-background-size: 100%;
        background-size: 100%;
        margin-right: 18/75rem;
        &.icon-owner {
          background-image: url("../assets/img/icon_owner_message.png");
        }
        &.icon-car {
          background-image: url("../assets/img/icon_car_messgae.png");
        }
        &.icon-extend {
          background-image: url("../assets/img/icon_extended_warranty_message.png");
        }
      }
    }
  }

  .list {
    padding: 0 30/75rem;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 30/75rem 0;
      font-size: 30/75rem;
      .left-text {
        color: #666;
        .blue-text {
          display: block;
          font-size: 24/75rem;
          color: #5b87d3;
          margin-top: 15/75rem;
        }
      }
      .right-text {
        color: #333;
      }
    }
  }

  .box1 {
    height: 88/75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30/75rem;
    margin-bottom: 20/75rem;
    span {
      &.left {
        font-size: 30/75rem;
        color: #333;
      }
      &.status {
        font-size: 28/75rem;
        color: #5b87d3;
      }
    }
  }

  .box2 {
    padding: 0 !important;
    .bottom-line {
      width: 100%;
    }
    .list {
      .right-text {
        display: block;
        width: 390/75rem;
        text-align: right;
      }
    }
  }

  .box5 {
    height: 88/75rem;
    font-size: 30/75rem;
    padding: 0 30/75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20/75rem;
    .left-text {
      color: #666;
    }
  }

  .wrapper{
    .btn {
      width: 100%;
      height: 88/75rem;
      font-size: 32/75rem;
      color: #fff;
      background-color: #5b87d3 !important;
      line-height: 88/75rem;
      text-align: center;
      position: fixed;
      bottom: 0;
      max-width: 600px;
    }
  }

  .deal-list {
    background-color: #fff;
    padding: 0 30/75rem;
    li {
      height: 96/75rem;
      border-bottom: 1px solid #e5e5e5;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 30/75rem;
      em {
        color: #333;
        span {
          color: #5b87d3;
        }
      }
      i {
        display: block;
        width: 36/75rem;
        height: 36/75rem;
        background-repeat: no-repeat;
        background-position: center;
        -webkit-background-size: 100%;
        background-size: 100%;
      }
      i.icon-checkbox {
        background-image: url("../assets/img/checkbox1.png");
      }
      i.icon-checked {
        background-image: url("../assets/img/checked1.png");
      }
    }
  }

  .read {
    padding: 40/75rem 30/75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    i {
      display: block;
      width: 36/75rem;
      height: 36/75rem;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100%;
      &.icon-check {
        background-image: url("../assets/img/checkbox2.png");
      }
      &.icon-checkeds {
        background-image: url("../assets/img/checked2.png");
      }
    }
    .deal-text {
      font-size: 26/75rem;
      color: #666;
      width: 620/75rem;
      line-height: 35/75rem;
    }
  }

  .footer {
    width: 100%;
    height: 108/75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    max-width: 600px;
    background-color: #fff;
    .left {
      font-size: 36/75rem;
      color: #333;
      margin-left: 30/75rem;
      span {
        font-size: 32/75rem;
        color: #5b87d3;
        margin-left: 20/75rem;
      }
    }
    .btn-pay {
      width: 280/75rem;
      height: 100%;
      line-height: 108/75rem;
      color: #fff;
      text-align: center;
      font-size: 32/75rem;
      background-color: #5b87d3;
    }
  }

  .e-contract {
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 600px;
    height: 100vh;
    background-color: rgba(0, 0, 0, .5);
    z-index: 10;
    .content{
      width: 690/75rem;
      height: 1046/75rem;
      background-color: #fff;
      -webkit-border-radius: 15/75rem;
      -moz-border-radius: 15/75rem;
      border-radius: 15/75rem;
      margin: 110/75rem auto 0;
      padding: 40/75rem;
      .title{
        text-align: center;
        font-size: 36/75rem;
        color: #121212;
        margin-bottom: 30/75rem;
        font-weight: 600;
      }
      .wrap{
        width: 100%;
        height: 886/75rem;
        overflow-y: scroll;
        &::-webkit-scrollbar{
          display: none;
        }
        img{
          display: block;
          width: 100%;
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
