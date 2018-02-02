<template>
  <div class="consult">
    <!--<v-header :title="title"/>-->

    <ul class="list-1">
      <li>
        <span class="left-text">品牌</span>
        <router-link to="/carBrand" class="right">
          <input type="text" placeholder="请选择品牌" disabled>
          <i class="icon-more"></i>
        </router-link>
      </li>
      <li>
        <span class="left-text">车系</span>
        <a class="right">
          <span>自主品牌车系</span>
        </a>
      </li>
      <li>
        <span class="left-text">车型</span>
        <a class="right">
          <input type="text" placeholder="请选择车型" disabled>
          <i class="icon-more"></i>
        </a>
      </li>
      <li>
        <span class="left-text">配置版本</span>
        <a class="right">
          <input type="text" placeholder="请选择配置版本" disabled>
          <i class="icon-more"></i>
        </a>
      </li>
      <li>
        <span class="left-text">发动机排量</span>
        <a class="right">
          <span>1984</span>
        </a>
      </li>
    </ul>

    <ul class="list-2">
      <li class="scope">
        <div class="one">
          <span class="left-text">延保范围</span>
          <a class="right">
            <span>两大部件：发动机+变速箱元大声地撒空间哈萨克都会看上的萨克元大声地撒空间哈萨克都会看上的萨克</span>
            <i class="icon-more"></i>
          </a>
        </div>
        <span class="two" @click="scopeStatus = true">延保范围详情</span>
      </li>
      <li>
        <span class="left-text">产品名称</span>
        <a class="right">
          <span>至尊宝</span>
        </a>
      </li>
      <li>
        <span class="left-text">保障年限</span>
        <a class="right">
          <input type="text" placeholder="请选择保障年限" disabled>
          <i class="icon-more"></i>
        </a>
      </li>
      <li>
        <span class="left-text">保障里程</span>
        <a class="right">
          <span>10000公里</span>
          <i class="icon-more"></i>
        </a>
      </li>
      <li>
        <span class="left-text">赔付限额</span>
        <a class="right">
          <span>10000元</span>
          <i class="icon-more"></i>
        </a>
      </li>
    </ul>

    <div class="btn">
      <a :class="{'active': btnActive}" @click="resultStatus = true">我要报价</a>
    </div>


    <!--延保范围详情弹窗-->
    <div v-show="scopeStatus" class="scope-window">
      <div class="box">
        <h3 class="title">质保产品范围</h3>
        <div class="content-wrap">
          <h5 class="main-title">(一) 发动机</h5>
          <h6 class="subhead">1、气缸盖部分</h6>
          <p>
            气缸盖、气门室盖、气门室盖分油板、气缸盖衬垫、凸轮轴瓦盖、凸轮轴瓦架、凸轮偏心轴瓦盖、凸轮偏心轴瓦架、凸轮轴瓦、凸轮轴、偏心轴、进气门、排气门、气门导管、气门弹簧及弹簧座、气门锁片、气门挺柱、气门挺杆、气门推杆、气门摇臂、气门摇臂轴、气门摇臂衬套、气门间隙调整螺钉。</p>

          <h6 class="subhead">2、正时部分</h6>
          <p>
            金属材质的时规盖、金属材质的正时链条外罩、正时齿轮、正时链轮、正时链条、正时链条涨紧轮、正时链条涨紧器、正时链条导板、正时皮带（保修前提：车主按车辆制造商要求进行了定期更换）、正时皮带涨紧轮、正时皮带涨紧器、凸轮轴齿盘（可变配气相位机构）、可变配气相位机械执行机构。</p>

          <h6 class="subhead">3、气缸体部分</h6>
          <p>
            气缸体、曲轴箱、缸套、活塞、活塞环、气缸体、曲轴箱、缸套、活塞、活塞环、气缸体、曲轴箱、缸套、活塞、活塞环、气缸体、曲轴箱、缸套、活塞、活塞环、气缸体、曲轴箱、缸套、活塞、活塞环、气缸体、曲轴箱、缸套、活塞、活塞环、气缸体、曲轴箱、缸套、活塞、活塞环、气缸体、曲轴箱、缸套、活塞、活塞环。</p>
        </div>
      </div>
      <div class="btn-close" @click="scopeStatus = false"></div>
    </div>


    <!--咨询结果弹窗-->
    <div v-show="resultStatus" class="result-window">
      <div class="wrap">
        <div class="one">
          <i class="icon-close" @click="resultStatus = false"></i>
        </div>
        <div class="two">咨询结果</div>
        <ul class="three">
          <li>
            <span class="big-text">大众 辉腾</span>
          </li>
          <li>
            <span class="left-text">专享服务费</span>
            <span class="right-text orange">&yen;3021</span>
          </li>
          <li>
            <span class="left-text">延保范围</span>
            <span class="right-text">两大部件：发动机+变速箱</span>
          </li>
          <li>
            <span class="blue-text" @click="scopeStatus = true">延保范围详情</span>
          </li>
          <li>
            <span class="left-text">保障年限</span>
            <span class="right-text">6个月</span>
          </li>
          <li>
            <span class="left-text">保障里程：</span>
            <span class="right-text">10,000公里</span>
          </li>
        </ul>
        <div class="btn">
          <router-link to="/warmPrompt">购买延保</router-link>
        </div>
      </div>
    </div>


    <!--底部导航-->
    <v-footer :active="2"/>

  </div>
</template>

<script>
  import {conf} from "../assets/js/main"

  export default {
    name: "consult",
    data() {
      return {
        title: "艾普利质保",
        btnActive: true,
        scopeStatus: false,
        resultStatus: false,
      }
    },
    created() {
      conf.setTitle("咨询购买");
    }
  }
</script>

<style scoped lang="less">
  .consult {
    padding-bottom: 100/75rem;
    min-height: 100vh;
    background-color: #f5f5f5;
  }

  .list-2 {
    margin-top: 16/75rem;
  }

  .list-1, .list-2 {
    background-color: #fff;
    padding: 0 30/75rem;
    li {
      height: 96/75rem;
      line-height: 96/75rem;
      border-bottom: 1px solid #d7dfe7;
      display: flex;
      &.scope {
        height: 148/75rem;
        display: inherit;
        line-height: inherit;
        .one {
          display: flex;
          height: 95/75rem;
          align-items: center;
        }
        .two {
          height: 50/75rem;
          font-size: 26/75rem;
          color: #5b87d3;
          line-height: 50/75rem;
        }
      }
      &:last-child {
        border-bottom: none;
      }
      .left-text {
        display: block;
        width: 240/75rem;
        font-size: 30/75rem;
        color: #666;
      }
      .right {
        display: block;
        width: 450/75rem;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        input[type="text"] {
          color: #121212;
          font-size: 30/75rem;
          &::-webkit-input-placeholder {
            color: #aaa;
          }
        }
        span {
          display: inline-block;
          width: 410/75rem;
          font-size: 30/75rem;
          color: #121212;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-break: break-all;
        }
        .icon-more {
          display: inline-block;
          width: 14/75rem;
          height: 24/75rem;
          background: url("../assets/img/arrow_more.png") 0 0 no-repeat;
          -webkit-background-size: 100%;
          background-size: 100%;
        }
      }
    }
  }

  .btn {
    width: 320/75rem;
    height: 88/75rem;
    margin: 30/75rem auto;
    a {
      display: block;
      width: 100%;
      height: 100%;
      line-height: 88/75rem;
      text-align: center;
      background-color: #ced4db;
      -webkit-border-radius: 15/75rem;
      -moz-border-radius: 15/75rem;
      border-radius: 15/75rem;
      color: #fff;
      font-size: 32/75rem;
      &.active {
        background-color: #5b87d3;
      }
    }
  }

  .scope-window {
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 20;
    background-color: rgba(0, 0, 0, .5);
    padding: 30/75rem;
    .box {
      width: 100%;
      height: 1032/75rem;
      background-color: #fff;
      -webkit-border-radius: 20/75rem;
      -moz-border-radius: 20/75rem;
      border-radius: 20/75rem;
      padding: 40/75rem;
      margin-top: 110/75rem;

      .title {
        font-size: 36/75rem;
        color: #121212;
        font-weight: 600;
        text-align: center;
        margin-bottom: 30/75rem;
      }

      .content-wrap {
        height: 886/75rem;
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

  .result-window {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0 30/75rem;

    .wrap {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 690/75rem;
      height: 655/75rem;
      background-color: rgba(255, 255, 255, 0.9);
      -webkit-border-radius: 10/75rem;
      -moz-border-radius: 10/75rem;
      border-radius: 10/75rem;

      .one{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 10/75rem;
        height: 80/75rem;
        i.icon-close{
          display: block;
          width: 24/75rem;
          height: 24/75rem;
          background: url("../assets/img/cross.png") center no-repeat;
          -webkit-background-size: 24/75rem 24/75rem;
          background-size: 24/75rem 24/75rem;
          box-sizing: content-box;
          padding: 20/75rem;
        }
      }

      .two{
        height: 40/75rem;
        text-align: center;
        font-size: 36/75rem;
        color: #5b87d3;
        font-weight: 600;
      }

      .three{
        padding: 60/75rem 30/75rem;
        li{
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 28/75rem;
          margin-bottom: 23/75rem;
          &:nth-of-type(1){
            margin-bottom: 41/75rem;
          }
          &:last-child{
            margin-bottom: 0;
          }
          .blue-text{
            font-size: 24/75rem;
            color: #5b87d3;
          }
          .right-text{
            display: block;
            width: 350/75rem;
            text-align: right;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #000;
            &.orange{
              color: #ff923a;
            }
          }
          .big-text{
            font-size: 32/75rem;
            color: #000;
            font-weight: 600;
          }
        }
      }

      .btn{
        width: 100%;
        height: 96/75rem;
        margin: 0;
        a{
          -webkit-border-radius: 0;
          -moz-border-radius: 0;
          border-radius: 0;
          display: block;
          width: 100%;
          height: 100%;
          text-align: center;
          line-height: 96/75rem;
          color: #fff;
          font-size: 28/75rem;
          background-color: #5b87d3;
        }
      }
    }
  }
</style>
