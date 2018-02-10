<template>
  <div class="consult">
    <!--<v-header :title="title"/>-->

    <ul class="list-1">
      <li>
        <span class="left-text">品牌</span>
        <router-link to="/carBrand" class="right">
          <input type="text" placeholder="请选择品牌" v-model="carBrand" disabled>
          <i class="icon-more"></i>
        </router-link>
      </li>
      <li>
        <span class="left-text">车系</span>
        <a class="right">
          <span>{{carSeries}}</span>
        </a>
      </li>
      <li>
        <span class="left-text">车型</span>
        <a class="right">
          <select v-if="carBrand" v-model="carTypeId" :class="{'select': carTypeId}">
            <option disabled style="color: #999;" value="">请选择车型</option>
            <option v-for="item in carTypeList" :value="item.model_id">{{item.model_name}}</option>
          </select>
          <span class="tips-text" v-else @click="tips">请选择车型</span>
          <i class="icon-more"></i>
        </a>
      </li>
      <li>
        <span class="left-text">配置版本</span>
        <a class="right">
          <select v-if="carTypeId" v-model="carConfRevID" :class="{'select': carConfRevID}">
            <option disabled style="color: #999;" value="">请选择配置版本</option>
            <option v-for="item in confRevList" :value="item.series_id">{{item.sales_name}}</option>
          </select>
          <span class="tips-text" v-else @click="tips">请选择配置版本</span>
          <i class="icon-more"></i>
        </a>
      </li>
      <li>
        <span class="left-text">发动机排量</span>
        <a class="right">
          <span>{{volume}}</span>
        </a>
      </li>
    </ul>

    <ul class="list-2">
      <li class="scope">
        <div class="one">
          <span class="left-text">延保范围</span>
          <a class="right">
            <!--<span>两大部件：发动机+变速箱元大声地撒空间哈萨克都会看上的萨克元大声地撒空间哈萨克都会看上的萨克</span>-->
            <select v-if="extendScope.length > 0" v-model="scopeId" :class="{'select': scopeId}">
              <option disabled style="color: #999;" value="">请选择延保范围</option>
              <option v-for="(item, index) in extendScope" :value="item.id">{{item.name}}</option>
            </select>
            <i class="icon-more"></i>
          </a>
        </div>
        <span class="two" @click="scopeStatus = true">延保范围详情</span>
      </li>
      <li>
        <span class="left-text">产品名称</span>
        <a class="right">
          <span>{{productName}}</span>
        </a>
      </li>
      <li>
        <span class="left-text">保障年限</span>
        <a class="right">
          <select v-if="securitYear.length > 0" v-model="securitYearVal" :class="{'select': securitYearVal}">
            <option disabled style="color: #999;" value="">请选择保障年限</option>
            <option v-for="item in securitYear" :value="item">{{item + ' 个月'}}</option>
          </select>
          <span class="tips-text" v-else @click="tips">请选择保障年限</span>
          <i class="icon-more"></i>
        </a>
      </li>
      <li>
        <span class="left-text">保障里程</span>
        <a class="right">
          <select v-if="mileages.length > 0" v-model="mileageVal" :class="{'select': mileageVal}">
            <option disabled style="color: #999;" value="">请选择保障里程</option>
            <option v-for="item in mileages" :value="item">{{item + ' 公里'}}</option>
          </select>
          <span class="tips-text" v-else @click="tips">请选择保障里程</span>
          <i class="icon-more"></i>
        </a>
      </li>
      <li>
        <span class="left-text">赔付限额</span>
        <a class="right">
          <select v-if="compensate.length > 0" v-model="compensateID" :class="{'select': compensateID}">
            <option disabled style="color: #999;" value="">请选择赔付限额</option>
            <option v-for="item in compensate" :value="item.id">{{item.price + ' 元'}}</option>
          </select>
          <span class="tips-text" v-else @click="tips">请选择赔付限额</span>
          <i class="icon-more"></i>
        </a>
      </li>
    </ul>

    <div class="btn">
      <a :class="{'active': btnActive}" @click="fnQuote($event)">我要报价</a>
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
            <span class="big-text">{{brandName}}</span>
          </li>
          <li>
            <span class="left-text">专享服务费</span>
            <span class="right-text orange">&yen;{{servicePrice}}</span>
          </li>
          <li>
            <span class="left-text">延保范围</span>
            <span class="right-text">{{scopeVal}}</span>
          </li>
          <li>
            <span class="blue-text" @click="scopeStatus = true">延保范围详情</span>
          </li>
          <li>
            <span class="left-text">保障年限</span>
            <span class="right-text">{{securitYearVal}}个月</span>
          </li>
          <li>
            <span class="left-text">保障里程：</span>
            <span class="right-text">{{mileageVal}}公里</span>
          </li>
        </ul>
        <div class="btn">
          <a @click="promptStatus = true">购买延保</a>
        </div>
      </div>
    </div>


    <!--温馨提示弹窗-->
    <div v-show="promptStatus" class="warm-prompt">

      <div class="head">
        <div class="double-line"></div>
        <div class="title">
          <h2 class="caption">准入条件说明</h2>
          <p class="small-title">DESCRIPTION OF ACCESS CONDITIONS</p>
        </div>
        <div class="double-line"></div>
      </div>

      <div class="content">
        <p>（1） 适用于原厂保修期3年10万公里和3年6万公里的投保车辆；</p>
        <p>（2） 投保车辆购买产品时，原厂保修期和当前行驶里程须小于原厂保修期截止前3个月且保修里程截止前5000公里（保修时间和保修里程须同时满足，例如原厂保修期为36个月10万公里，投保车辆须在33个月且95000公里内方可购买，原厂保修期时间以新车购车发票日期为准计算）；</p>
        <p>（3） 投保车辆为7座及以下非营运车辆；</p>
        <p>（4） 混动、电动、天然气、转子发动机等以外的纯燃油车辆；</p>
        <p>（5） 特殊用途的车辆，例如教练车、赛车、改装车等不承保；</p>
        <p>（6） 超豪华车、非量产车、平行进口车等不承保。</p>
      </div>

      <p class="tips">是否符合准入条件？</p>

      <div class="btn-box">
        <a @click="promptStatus = false" class="btn-no">否</a>
        <a @click="createOrder" class="btn-yes">是</a>
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
        btnActive: false,
        scopeStatus: false,
        resultStatus: false,
        promptStatus: false,

        //品牌id
        brandId: this.$route.query.id,
        //品牌名
        brandName: decodeURIComponent(this.$route.query.brandName),
        //品牌
        carBrand: "",
        //车系名
        seriesName: decodeURIComponent(this.$route.query.seriesName),
        //车系id
        seriesId: this.$route.query.seriesId,
        //车系
        carSeries: "",
        //车型列表
        carTypeList: [],
        //车型id
        carTypeId: "",
        //车型value
        carTypeVal: "",
        //配置版本id
        carConfRevID: "",
        //配置版本value
        confRevsVal: "",
        //配置版本列表
        confRevList: [],
        //发动机排量
        volume: "",
        //车辆价格
        guidingPrice: "",
        //是否涡轮
        turbine: "",
        //是否四驱
        quattro: "",

        //延保范围value
        scopeVal: "",
        //延保范围
        extendScope: [],
        //延保范围id
        scopeId: "",
        //产品名称
        productName: "",
        //产品名称id
        productId: "",
        //保障年限value
        securitYearVal: "",
        //保障年限
        securitYear: [],
        //保障里程value
        mileageVal: "",
        //保障里程
        mileages: [],
        //赔付限额id
        compensateID: "",
        //赔付限额value
        compensateVal: "",
        //赔付限额
        compensate: [],

        //服务费
        servicePrice: "",
        //报价项目id
        projectId: "",
        //创建订单id
        orderId: ""
      }
    },
    watch: {
      /**
       * 监听车型id有无值，当新值不等于旧值就提前请求下一级选择配置版本
       * @param newVal
       * @param oldVal
       */
      carTypeId(newVal, oldVal) {
        if (newVal != oldVal) {
          conf.get("/api/screening/series/list?modelId=" + newVal, response => {
            if (response.result === 1) {
              var data = (new Function("return" + response.data))();
              this.confRevList = data;
            } else {
              conf.toast(response.msg);
            }
          })
        }
      },
      /**
       * 监听配置版本id是否存在，如存在，请求获取车辆信息接口，显示对应车辆信息
       */
      carConfRevID(newVal, oldVal) {
        if (newVal != oldVal) {
          conf.get("/api/screening/report/info?brandId=" + this.brandId + '&modelId=' + this.carTypeId + '&seriesId=' + newVal, response => {
            if (response.result === 1) {
              this.volume = response.data.volume;
              this.guidingPrice = response.data.guidingPrice;
              this.turbine = response.data.turbine;
              this.quattro = response.data.quattro;
            } else {
              conf.toast(response.msg);
            }
          })
        }
      },
      /**
       * 监听延保范围id是否有值，如存在，请求产品名称及产品id
       */
      scopeId(newVal, oldVal) {
        if (newVal != oldVal) {
          conf.get("/api/screening/product?scopeId=" + newVal, response => {
            if (response.result === 1) {
              this.productName = response.data.productName;
              this.productId = response.data.id;
            } else {
              conf.toast(response.msg);
            }
          })
        }
      },
      /**
       * 监听产品id，如有值，请求保障年限接口
       */
      productId(newVal, oldVal) {
        if (newVal != oldVal) {
          conf.get("/api/screening/guarantee?productNameId=" + this.productId + '&carSeresId=' + this.seriesId + '&guaranteeScopeId='
            + this.scopeId + '&volume=' + this.volume + '&turbine=' + this.turbine + '&quattro=' + this.quattro + '&price='
            + this.guidingPrice, response => {
            if (response.result === 1) {
              this.securitYear = response.data.guaranteeYears;
            } else {
              conf.toast(response.msg);
            }
          })
        }
      },
      /**
       * 监听保障年限，如果有值则请求保障里程接口
       */
      securitYearVal(newVal, oldVal) {
        if (newVal != oldVal) {
          conf.get("/api/screening/guarantee?productNameId=" + this.productId + '&carSeresId=' + this.seriesId + '&guaranteeScopeId='
            + this.scopeId + '&volume=' + this.volume + '&turbine=' + this.turbine + '&quattro=' + this.quattro + '&price='
            + this.guidingPrice + '&guaranteeYear=' + this.securitYearVal, response => {
            if (response.result === 1) {
              this.mileages = response.data.mileages;
            } else {
              conf.toast(response.msg);
            }
          })
        }
      },
      /**
       * 监听保障里程，如果有值则请求赔付限额接口
       */
      mileageVal(newVal, oldVal) {
        if (newVal != oldVal) {
          conf.get("/api/screening/guarantee?productNameId=" + this.productId + '&carSeresId=' + this.seriesId + '&guaranteeScopeId='
            + this.scopeId + '&volume=' + this.volume + '&turbine=' + this.turbine + '&quattro=' + this.quattro + '&price='
            + this.guidingPrice + '&guaranteeYear=' + this.securitYearVal + '&guaranteeMileage=' + this.mileageVal, response => {
            if (response.result === 1) {
              this.compensate = response.data.guaranteePrices;
            } else {
              conf.toast(response.msg);
            }
          })
        }
      },
      /**
       * 监听最后一个需要的值（赔付限额），如果最后一个有值则代表前面都有值，此时改变按钮的状态
       */
      compensateID(val) {
        if (val) {
          this.btnActive = true;
        } else {
          this.btnActive = false;
        }
      }
    },
    created() {
      conf.setTitle("咨询购买");
      this.getShowName();
    },
    mounted() {
      this.getCarType();
      this.getExtendScope();
    },
    methods: {
      /**
       * 获取车型
       */
      getCarType() {
        if (this.carBrand) {//如果车品牌存在则获取车型，否则不做操作
          conf.get("/api/screening/model/list?brandId=" + this.brandId, response => {
            if (response.result === 1) {
              var data = (new Function("return" + response.data))();
              this.carTypeList = data;
            } else {
              conf.toast(response.msg);
            }
          })
        }
      },
      /**
       * 获取延保范围内容
       */
      getExtendScope() {
        conf.get("/api/screening/scope", response => {
          if (response.result === 1) {
            this.extendScope = response.data;
          } else {
            conf.toast(response.msg);
          }
        })
      },
      /**
       * 获取品牌和车系显示的值
       */
      getShowName() {
        if (this.brandName != "undefined") {
          this.carBrand = this.brandName;
        }
        if (this.seriesName != "undefined") {
          this.carSeries = this.seriesName;
        }
      },
      /**
       * 提示信息
       */
      tips() {
        conf.toast("请按顺序选择");
      },
      /**
       * 报价
       */
      fnQuote(e) {
        if (e.target.className == "active") {
          conf.post("/api/screening/query/price", {
            "productNameId": this.productId,
            "carSeriesId": this.seriesId,
            "guaranteeScopeId": this.scopeId,
            "volume": this.volume,
            "turbine": this.turbine,
            "quattro": this.quattro,
            "price": this.guidingPrice,
            "guaranteeYear": this.securitYearVal,
            "guaranteeMileage": this.mileageVal,
            "guaranteePrice": this.compensateID
          }, response => {
            if (response.result === 1) {
              this.getValue();
              this.resultStatus = true;
              this.servicePrice = response.data.cost;
              this.projectId = response.data.id;
            } else {
              conf.toast(response.msg);
            }
          })
        } else {
          conf.toast("请选择完整信息");
        }
      },
      /**
       * 获取value
       */
      getValue() {
        var scopeId = this.scopeId;
        var carTypeId = this.carTypeId;
        var carConfRevID = this.carConfRevID;
        var compensateID = this.compensateID;

        this.extendScope.forEach((item) => {//获取延保范围value
          if (scopeId == item.id) {
            this.scopeVal = item.name;
          }
        })

        this.carTypeList.forEach((item) => {//获取车型value
          if(carTypeId == item.model_id){
            this.carTypeVal = item.model_name;
          }
        })

        this.confRevList.forEach((item) => {//获取配置版本value
          if(carConfRevID == item.series_id){
            this.confRevsVal = item.sales_name;
          }
        })

        this.compensate.forEach((item) => {//获取赔付限额value
          if(compensateID == item.id){
            this.compensateVal = item.price;
          }
        })
      },
      /**
       * 创建订单
       */
      createOrder() {
        conf.post("/api/order/create", {
          "productId": this.projectId,
          "brand": this.carBrand,
          "carSeries": this.carSeries,
          "carModel": this.carTypeVal,
          "configure": this.confRevsVal,
          "volume": this.volume,
          "guaranteeScope": this.scopeVal,
          "carPrice": this.guidingPrice,
          "turbine": this.turbine,
          "quattro": this.quattro,
          "guaranteeDeadline": this.securitYearVal,
          "guaranteeMileage": this.mileageVal,
          "guaranteePrice": this.compensateVal
        }, response => {
          if (response.result === 1) {
            this.orderId = response.data.id;
            this.$router.push('/upload?id=' + this.orderId);
          } else {
            conf.toast(response.msg);
          }
        })
      },
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
        input[type=text] {
          color: #121212;
          font-size: 30/75rem;
          &::-webkit-input-placeholder {
            color: #999;
          }
        }
        .tips-text {
          color: #999;
          font-size: 30/75rem;
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
    max-width: 600px;
    height: 100vh;
    position: fixed;
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
      margin-top: 60/75rem;

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
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
    max-width: 600px;
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

      .one {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 10/75rem;
        height: 80/75rem;
        i.icon-close {
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

      .two {
        height: 40/75rem;
        text-align: center;
        font-size: 36/75rem;
        color: #5b87d3;
        font-weight: 600;
      }

      .three {
        padding: 65/75rem 30/75rem;
        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 28/75rem;
          margin-bottom: 23/75rem;
          &:nth-of-type(1) {
            margin-bottom: 41/75rem;
          }
          &:last-child {
            margin-bottom: 0;
          }
          .blue-text {
            font-size: 24/75rem;
            color: #5b87d3;
          }
          .right-text {
            display: block;
            width: 350/75rem;
            text-align: right;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #000;
            &.orange {
              color: #ff923a;
            }
          }
          .big-text {
            font-size: 32/75rem;
            color: #000;
            font-weight: 600;
          }
        }
      }

      .btn {
        width: 100%;
        height: 96/75rem;
        margin: 0;
        a {
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

  .warm-prompt {
    width: 100%;
    height: 100vh;
    max-width: 600px;
    position: fixed;
    top: 0;
    z-index: 30;
    background-color: #fff;
    .head {
      width: 500/75rem;
      height: 70/75rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 60/75rem auto;
      .double-line {
        height: 44/75rem;
        width: 6px;
        border-left: 3/75rem solid #333;
        border-right: 3/75rem solid #333;
      }
      .title {
        text-align: center;
        .caption {
          font-size: 36/75rem;
          color: #000;
          font-weight: 700;
        }
        .small-title {
          font-size: 20/75rem;
          color: #999;
          margin-top: 20/75rem;
        }
      }
    }

    .content {
      padding: 0 30/75rem;
      p {
        text-indent: 10/75rem;
        font-size: 30/75rem;
        color: #666;
        line-height: 50/75rem;
      }
    }

    .tips {
      text-align: center;
      margin-top: 75/75rem;
      font-size: 30/75rem;
      color: #000;
      font-weight: 600;
    }

    .btn-box {
      margin: 60/75rem auto;
      width: 560/75rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      > a {
        width: 240/75rem;
        height: 88/75rem;
        line-height: 88/75rem;
        text-align: center;
        color: #fff;
        font-size: 30/75rem;
        background-color: #5b87d3;
        -webkit-border-radius: 20/75rem;
        -moz-border-radius: 20/75rem;
        border-radius: 20/75rem;
      }
    }
  }

  select {
    width: 95%;
    color: #999;
    font-size: 30/75rem;
    background-color: transparent;
    option {
      color: #121212;
    }
    &.select {
      color: #121212;

    }
  }
</style>
