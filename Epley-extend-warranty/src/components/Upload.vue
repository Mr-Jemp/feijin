<template>
  <div class="upload">

    <!--资料上传进度显示-->
    <div class="progress">
      <img v-if="course == 1" src="../assets/img/upload_img1.png">
      <img v-else-if="course == 2" src="../assets/img/upload_img2.png">
      <img v-else="course == 3" src="../assets/img/upload_img3.png">
    </div>

    <!--第一步-->
    <div v-if="course == 1" class="container">
      <img src="../assets/img/upload_image.png">
      <p class="tips">提示：提示文字提示文字提示文字提示文字提示文字提示文字提示</p>

      <!--上传图片-->
      <ul class="list">
        <li>
          <div class="img-box">
            <img src="../assets/img/certificate.png">
            <i class="icon-delete"></i>
          </div>
        </li>
        <li>
          <div class="box">
            <input type="file" id="input-file" multiple="multiple" accept="image/*" capture="camera">
          </div>
        </li>
      </ul>

    </div>

    <!--第二步-->
    <div v-else-if="course == 2" class="container">
      <img src="../assets/img/upload_image.png">
      <p class="tips">提示：提示文字提示文字提示文字提示文字提示文字提示文字提示</p>

      <!--上传图片-->
      <ul class="list">
        <li>
          <div class="img-box">
            <img src="../assets/img/certificate.png">
            <i class="icon-delete"></i>
          </div>
        </li>
      </ul>
    </div>

    <!--第三步-->
    <div v-else class="container-three">
      <div class="wrapper">

        <div class="header">
          <i class="icon-profile"></i>
          <span>客户信息</span>
        </div>

        <ul class="form-list">
          <li>
            <div class="left">
              <span class="left-text">车主</span>
              <span class="describe">(个人/公司名称)</span>
            </div>
            <input type="text" v-model="userName" disabled>
          </li>
          <li>
            <div class="left">
              <span class="left-text">联系人</span>
            </div>
            <input type="text" placeholder="请输入您的联系人姓名">
          </li>
          <li>
            <div class="left">
              <span class="left-text">证件号</span>
            </div>
            <input type="text" placeholder="请输入身份证/纳税人识别号" maxlength="18">
          </li>
          <li>
            <div class="left">
              <span class="left-text">手机号码</span>
            </div>
            <input type="tel" placeholder="请输入您的手机号码" maxlength="11">
          </li>
          <li>
            <div class="left">
              <span class="left-text">邮箱</span>
            </div>
            <input type="email" placeholder="请输入您的邮箱">
          </li>
          <li>
            <div class="left">
              <span class="left-text">联系地址</span>
            </div>
            <input type="email" placeholder="请输入您的联系地址">
          </li>
        </ul>

        <!--是否邮寄电子发票-->
        <div class="invoice">
          <span>是否需要邮寄电子发票</span>
          <i v-if="onoff" class="icon-on" @click="onoff = false"></i>
          <i v-else class="icon-off" @click="onoff = true"></i>
        </div>

        <p class="tips">温馨提示：请确认您的邮箱地址是否正确？在您确认延保付费后，我司将会把电子合约及电子发票发到您的邮箱，请注意查收。</p>

      </div>

      <div class="wrapper">

        <div class="header">
          <i class="icon-car"></i>
          <span>车辆信息</span>
        </div>

        <ul class="form-list">
          <li>
            <div class="left">
              <span class="left-text">品牌</span>
            </div>
            <input type="text" v-model="brand" disabled>
          </li>
          <li>
            <div class="left">
              <span class="left-text">车系</span>
            </div>
            <input type="text" v-model="carSeries" disabled>
          </li>
          <li>
            <div class="left">
              <span class="left-text">车型</span>
            </div>
            <input type="text" v-model="carType" disabled>
          </li>
          <li>
            <div class="left">
              <span class="left-text">配置版本</span>
            </div>
            <input type="text" v-model="confRev" placeholder="请输入车辆配置版本">
          </li>
          <li>
            <div class="left">
              <span class="left-text">排量</span>
            </div>
            <input type="text" v-model="displacement" disabled>
          </li>
          <li>
            <div class="left">
              <span class="left-text">车牌号码</span>
            </div>
            <input type="text" v-model="licenseNum" disabled>
          </li>
          <li>
            <div class="left">
              <span class="left-text">车辆识别号</span>
            </div>
            <input type="text" v-model="vin" disabled>
          </li>
          <li>
            <div class="left">
              <span class="left-text">发动机号</span>
            </div>
            <input type="text" v-model="engineNum" disabled>
          </li>
          <li>
            <div class="left">
              <span class="left-text">已行驶里程</span>
            </div>
            <input type="number" v-model="travelledDistance" placeholder="请输入车辆已行驶里程(公里)">
          </li>
          <li>
            <div class="left">
              <span class="left-text">注册日期</span>
            </div>
            <input type="text" v-model="recordDate" disabled>
          </li>
          <li>
            <div class="left">
              <span class="left-text">使用性质</span>
            </div>
            <input type="text" v-model="useNature" disabled>
          </li>
          <li>
            <div class="left">
              <span class="left-text">车龄</span>
            </div>
            <input type="text" v-model="autoAge" disabled>
          </li>
          <li>
            <div class="left">
              <span class="left-text">是否涡轮</span>
            </div>
            <input type="text" v-model="ifTheTurbine" disabled>
          </li>
          <li>
            <div class="left">
              <span class="left-text">是否四驱</span>
            </div>
            <input type="text" v-model="allWheelDrive" disabled>
          </li>
        </ul>

      </div>
    </div>



    <!--按钮-->
    <div class="btn" v-if="course == 1">下一步</div>
    <div class="btn" v-else-if="course == 2">下一步</div>
    <div class="btn" v-else="course == 3">确认</div>

  </div>
</template>

<script>
  import {conf} from "../assets/js/main"

  export default {
    name: "upload",
    data() {
      return {
        //上传的进程，分三步
        course: 3,
        //是否邮寄发票，默认为是
        onoff: true,

        //车主信息
        userName: "Hevien",
        //联系人
        contact: "",
        //证件号
        idCard: "",
        //手机号
        phoneNum: "",
        //邮箱
        email: "",
        //联系地址
        address: "",

        //品牌
        brand: "大众",
        //车系
        carSeries: "豪华车系",
        //车型
        carType: "辉腾",
        //配置版本
        confRev: "",
        //排量
        displacement: "0 - 1400cc",
        //车牌号码
        licenseNum: "粤A·88888",
        //车辆识别号码
        vin: "LGSDNSJKDSK23",
        //发动机号
        engineNum: "76110577",
        //已行驶里程
        travelledDistance: "",
        //注册日期
        recordDate: "2018-01-23",
        //使用性质
        useNature: "",
        //车龄
        autoAge: "",
        //是否涡轮
        ifTheTurbine: "",
        //是否四驱
        allWheelDrive: ""

      }
    },
    created() {
      conf.setTitle("上传资料");
    }
  }
</script>

<style scoped lang="less">
  .upload{

  }
  .progress{
    padding: 0 30/75rem;
    text-align: center;
    margin: 48/75rem auto;
    img{
      width: 100%;
    }
  }

  .container{
    padding: 30/75rem;
    img{
      width: 100%;
    }
    .tips{
      margin-top: 33/75rem;
      font-size: 26/75rem;
      color: #666;
    }

    .list{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 56/75rem auto;
      li{
        width: 330/75rem;
        height: 200/75rem;
        margin-right: 29/75rem;
        &:last-child{
          margin-right: 0;
        }
        .img-box{
          position: relative;
          width: 330/75rem;
          height: 200/75rem;
          img{
            position: absolute;
            left: 0;
            top: 0;
          }
          i.icon-delete{
            width: 44/75rem;
            height: 44/75rem;
            position: absolute;
            top: 10/75rem;
            right: 10/75rem;
            background: url("../assets/img/btn_delete.png") 0 0 no-repeat;
            -webkit-background-size: 100%;
            background-size: 100%;
          }
        }
        .box{
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: url("../assets/img/file_bg.png") 0 0 no-repeat;
          -webkit-background-size: cover;
          background-size: cover;
          #input-file{
            width: 100%;
            height: 100%;
            outline: none;
            display: block;
            border: none;
            opacity: 0;
          }
        }
      }
    }

  }

  .btn{
    width: 690/75rem;
    height: 88/75rem;
    line-height: 88/75rem;
    text-align: center;
    color: #fff;
    font-size: 32/75rem;
    background-color: #5b87d3;
    -webkit-border-radius: 15/75rem;
    -moz-border-radius: 15/75rem;
    border-radius: 15/75rem;
    margin: 25/75rem auto;
  }

  .container-three{
    background-color: #fbfdfe;
    padding: 30/75rem;
    .wrapper{
      width: 100%;
      padding: 40/75rem 30/75rem;
      background-color: #fff;
      box-shadow: 0 0 30/75rem rgba(233, 235, 246, 0.8);
      -webkit-border-radius: 18/75rem;
      -moz-border-radius: 18/75rem;
      border-radius: 18/75rem;
      margin-bottom: 30/75rem;
      &:last-child{
        margin-bottom: 0;
      }

      .header{
        height: 130/75rem;
        text-align: center;
        i{
          display: inline-block;
          height: 44/75rem;
          background-position: center;
          background-repeat: no-repeat;
          -webkit-background-size: 100%;
          background-size: 100%;
          &.icon-profile{
            width: 42/75rem;
            background-image: url("../assets/img/icon_profile.png");
          }
          &.icon-car{
            width: 46/75rem;
            background-image: url("../assets/img/icon_car.png");
          }
        }
        span{
          display: block;
          text-align: center;
          font-size: 26/75rem;
          color: #5b87d3;
          margin-top: 20/75rem;
        }
      }

      .form-list{
        li{
          width: 100%;
          height: 88/75rem;
          padding: 0 30/75rem;
          display: flex;
          align-items: center;
          margin-bottom: 20/75rem;
          background-color: #f0f4f8;
          -webkit-border-radius: 15/75rem;
          -moz-border-radius: 15/75rem;
          border-radius: 15/75rem;
          &:last-child{
            margin-bottom: 0;
          }
          .left{
            width: 190/75rem;
            .left-text{
              font-size: 30/75rem;
              color: #92a7b9;
              display: block;
            }
            .describe{
              font-size: 22/75rem;
              color: #7c8e9e;
            }
          }
          input{
            width: 380/75rem;
            font-size: 30/75rem;
            color: #7c8e9e;
            &::-webkit-input-placeholder{
              color: #cdd4da;
            }
          }
        }
      }

      .invoice{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 30/75rem auto;
        span{
          font-size: 30/75rem;
          color: #5b87d3;
        }
        i{
          display: block;
          width: 131/75rem;
          height: 72/75rem;
          background-repeat: no-repeat;
          background-position: center;
          -webkit-background-size: cover;
          background-size: cover;
          &.icon-on{
            background-image: url("../assets/img/on.png");
          }
          &.icon-off{
            background-image: url("../assets/img/off.png");
          }
        }
      }

      .tips{
        font-size: 24/75rem;
        color: #8ca0b3;
      }
    }
  }
</style>
