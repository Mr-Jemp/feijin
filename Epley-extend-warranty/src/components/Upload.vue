<template>
  <div class="upload">

    <!--资料上传进度显示-->
    <div class="progress">
      <img v-if="course == 1" src="../assets/img/upload_img1.png">
      <img v-else-if="course == 2" src="../assets/img/upload_img2.png">
      <img v-else="course == 3" src="../assets/img/upload_img3.png">
    </div>

    <!--第一步-->
    <div v-show="course == 1" class="container">
      <img src="../assets/img/upload_image.png">
      <p class="tips">提示：为了系统识别准确，请尽量上传清晰的照片。</p>

      <!--上传行驶证图片-->
      <ul class="list">
        <li>
          <div class="img-box" v-if="frontSrc">
            <img :src="frontSrc">
            <i class="icon-delete" @click="frontSrc = '';ocrParams = {}"></i>
          </div>
          <div class="box" v-else>
            <input type="file" @click="uploadFront($event)" id="input-file1" accept="image/*">
          </div>
        </li>
        <li>
          <div class="img-box" v-if="reverseSrc">
            <img :src="reverseSrc">
            <i class="icon-delete" @click="reverseSrc = ''"></i>
          </div>
          <div class="box" v-else>
            <input type="file" @click="uploadReverse($event)" id="input-file2" accept="image/*">
          </div>
        </li>
      </ul>

    </div>

    <!--第二步-->
    <div v-show="course == 2" class="container container-two">
      <img src="../assets/img/upload_image.png">
      <p class="tips">提示：为了系统识别准确，请尽量上传清晰的照片。</p>

      <!--上传里程图片-->
      <ul class="list">
        <li>
          <div class="img-box" v-if="mileageSrc">
            <img :src="mileageSrc">
            <i class="icon-delete" @click="mileageSrc = ''"></i>
          </div>
          <div class="box box2" v-else>
            <input type="file" @click="uploadMileage($event)" id="input-file3" accept="image/*">
          </div>
        </li>
      </ul>
    </div>

    <!--第三步-->
    <div v-show="course == 3" class="container-three">
      <div class="wrapper">
        <div class="header">
          <i class="icon-profile"></i>
          <span>客户信息</span>
        </div>

        <ul class="form-list">
          <li class="radio-box">
            <div class="left">
              <label>个人</label>
              <input v-if="type === 1" checked name="nature" type="radio" @click="getType(1)">
              <input v-else-if="type === 2" name="nature" type="radio" @click="getType(1)">
            </div>
            <div class="right">
              <label>企业</label>
              <input v-if="type === 1" name="nature" type="radio" @click="getType(2)">
              <input v-else-if="type === 2" checked name="nature" type="radio" @click="getType(2)">
            </div>
          </li>
          <li>
            <div class="left">
              <span class="left-text">车主</span>
              <span class="describe">(个人/公司名称)</span>
            </div>
            <input type="text" v-model="userName" disabled>
          </li>
          <li v-show="type == 2">
            <div class="left">
              <span class="left-text">企业名称</span>
            </div>
            <input type="email" v-model="companyName" placeholder="请输入企业名称">
          </li>
          <li v-show="type == 2">
            <div class="left">
              <span class="left-text">纳税人识别号</span>
            </div>
            <input type="email" v-model="identificationNumber" placeholder="请输入纳税人识别号">
          </li>
          <li>
            <div class="left">
              <span class="left-text">联系人</span>
            </div>
            <input type="text" v-model="contact" placeholder="请输入您的联系人姓名">
          </li>
          <li>
            <div class="left">
              <span class="left-text">手机号码</span>
            </div>
            <input type="tel" v-model="phoneNum" placeholder="请输入您的手机号码" maxlength="11">
          </li>
          <li v-show="type == 1">
            <div class="left">
              <span class="left-text">身份证号码</span>
            </div>
            <input type="text" v-model="idCard" placeholder="请输入身份证" maxlength="18">
          </li>

          <li>
            <div class="left">
              <span class="left-text">邮箱</span>
            </div>
            <input type="email" v-model="email" placeholder="请输入您的邮箱">
          </li>
          <li>
            <div class="left">
              <span class="left-text">联系地址</span>
            </div>
            <input type="email" v-model="address" placeholder="请输入您的联系地址">
          </li>
        </ul>

        <!--是否邮寄电子发票-->
        <div class="invoice">
          <span>是否需要邮寄电子发票</span>
          <i v-if="onoff == 1" class="icon-on" @click="onoff = 2"></i>
          <i v-else-if="onoff == 2" class="icon-off" @click="onoff = 1"></i>
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
            <input type="text" v-model="confRev" disabled>
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
            <input type="number" v-model="travelledDistance" placeholder="请输入车辆已行驶里程">
            <span class="km" v-show="travelledDistance">公里</span>
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
    <div class="btn" v-show="course == 1" @click="stepOne">下一步</div>
    <div class="btn" v-show="course == 2" @click="stepTwo">下一步</div>
    <div class="btn" v-show="course == 3" @click="stepThree">确认</div>

  </div>
</template>

<script>
  import {conf} from "../assets/js/main"
  import {minimg} from "../assets/js/minimg"

  let self, inputFile, inputFile2, inputFile3;
  export default {
    name: "upload",
    data() {
      return {
        //上传的进程，分三步
        course: 1,
        //是否邮寄发票，默认为是
        onoff: 1,

        //行驶证正面
        frontSrc: "",
        //行驶证正面图片name
        frontName: "",
        //行驶证反面
        reverseSrc: "",
        //行驶证反面图片name
        reverseName: "",
        //仪表盘
        mileageSrc: "",
        //仪表盘图片name
        mileageName: "",
        //行驶证识别参数
        ocrParams: {},


        //车主信息
        userName: "",
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
        //企业名称
        companyName: "",
        //纳税人识别号
        identificationNumber: "",

        //品牌
        brand: "",
        //车系
        carSeries: "",
        //车型
        carType: "",
        //配置版本
        confRev: "",
        //排量
        displacement: "",
        //车牌号码
        licenseNum: "",
        //车辆识别号码
        vin: "",
        //发动机号
        engineNum: "",
        //已行驶里程
        travelledDistance: "",
        //注册日期
        recordDate: "",
        //使用性质
        useNature: "",
        //车龄
        autoAge: "",
        //是否涡轮
        ifTheTurbine: "",
        //是否四驱
        allWheelDrive: "",
        //使用性质
        nature: "",
        //个人或企业
        type: 1,

        //保障里程
        range: Number(this.$route.query.mileageVal),
        //车龄
        carAge: ""

      }
    },
    created() {
      conf.setTitle("上传资料");
      self = this;
    },
    mounted() {
      let ran = this.range + 100000;
      conf.setItem("range", ran);
    },
    watch: {
      travelledDistance(val) {
        if(val.length > 6){
          this.travelledDistance = val.substr(0, 6);
        }
        if(val > (100000 + this.range)){
          conf.toast("已超过最大保障里程");
        }
      }
    },
    methods: {
      /**
       * 上传行驶证正面
       */
      uploadFront(e) {
        inputFile = document.getElementById("input-file1");
        minimg(inputFile, this.upload);
      },
      upload(result) {
        conf.loading("识别中...")
        conf.post("/api/upload/license/image ", {
          "data": result.split(",")[1]
        }, response => {
          conf.closeLoading();
          self.carAge = response.data.carAge;
          if(self.carAge > 33){
            inputFile.value = "";
            return conf.toast("该车辆车龄不符合准入条件");
          }

          var data = (new Function("return" + response.data.json))();
          var json = (new Function("return" + data.outputs[0].outputValue.dataValue))();
          self.frontSrc = response.data.src;
          self.frontName = response.data.name;
          console.log(json)
          if (json.success) {
            if (json.plate_num && json.vehicle_type && json.owner && json.vin && json.engine_num && json.register_date.length == 8) {
              self.ocrParams = json;
            } else {
              conf.toast("识别失败，请重新上传");
              inputFile.value = "";
              self.frontSrc = "";
            }
          } else {
            conf.toast("识别失败，请重新上传");
          }

        })
      },
      /**
       * 上传行驶证反面
       * @param e
       */
      uploadReverse(e) {
        inputFile2 = document.getElementById("input-file2");
        minimg(inputFile2, this.upReverse);
      },
      /**
       * 上传仪表盘照片
       */
      uploadMileage(e) {
        inputFile3 = document.getElementById("input-file3");
        minimg(inputFile3, this.upMileage);
      },
      upReverse(result) {
        conf.post("/api/upload/image", {
          "data": result
        }, response => {
          self.reverseSrc = response.data.src;
          self.reverseName = response.data.name;
        })
      },
      upMileage(result) {
        conf.post("/api/upload/image", {
          "data": result
        }, response => {
          self.mileageSrc = response.data.src;
          self.mileageName = response.data.name;
        })
      },
      /**
       * 第一步
       * @returns {*|void}  提示信息
       */
      stepOne() {
        if (!this.frontSrc) {
          return conf.toast("请上传正本照片");
        }
        if (!this.reverseSrc) {
          return conf.toast("请上传副本照片");
        }
        if (this.frontSrc && this.reverseSrc) {
          this.course = 2;
        }
      },
      /**
       * 获取详情
       */
      getDetail() {
        conf.get("/api/order/detail?id=" + this.$route.query.id, response => {
          if (response.result === 1) {
            this.brand = response.data.brand;
            this.carSeries = response.data.carSeries;
            this.carType = response.data.carModel;
            this.confRev = response.data.configure;
            this.displacement = response.data.volume;
            this.licenseNum = response.data.licensePlate;
            this.vin = response.data.recognitionCode;
            this.engineNum = response.data.engineNumber;
            this.recordDate = response.data.registerDate;
            this.autoAge = response.data.carAge + ' 个月';
            this.useNature = response.data.nature
            if (response.data.turbine == 1) {
              this.ifTheTurbine = "是";
            } else {
              this.ifTheTurbine = "否";
            }
            if (response.data.quattro == 1) {
              this.allWheelDrive = "是";
            } else {
              this.allWheelDrive = "否";
            }

          } else {
            conf.toast(response.msg);
          }
        });
      },
      /**
       * 第二步
       * @returns {*|void}  提示信息
       */
      stepTwo() {
        if (!this.mileageSrc) {
          return conf.toast("请上传仪表盘照片");
        } else {
          this.course = 3;
          this.userName = this.ocrParams.owner;
          if (this.ocrParams.use_character == "非营运") {
            this.nature = "非营运";
          }else{
            this.nature = "其他";
          }

          conf.post("/api/order/edit/image", {
            "id": this.$route.query.id,
            "drivingLicenseRear": this.reverseName,
            "drivingLicenseFront": this.frontName,
            "engineImage": this.mileageName,
            "carType": this.ocrParams.vehicle_type,
            "nickname": this.ocrParams.owner,
            "recognitionCode": this.ocrParams.vin,
            "registerDate": this.ocrParams.register_date,
            "engineNumber": this.ocrParams.engine_num,
            "licensePlate": this.ocrParams.plate_num,
            "nature": this.nature,
          }, response => {
            if (response.result === 1) {
              console.log('上传成功');
              setTimeout(this.getDetail, 500);
            } else {
              conf.toast(response.msg);
            }
          })
        }
      },
      /**
       * 第三步
       * @returns {*|void}
       */
      stepThree() {
        if(this.type == 1){//个人
          if (!this.contact) {
            return conf.toast("请输入联系人姓名");
          }
          if (!this.idCard) {
            return conf.toast("请输入您的身份证号");
          }
          if (!this.phoneNum) {
            return conf.toast("请输入您的手机号码");
          }
          if (!this.email) {
            return conf.toast("请输入您的邮箱");
          }
          if (!this.address) {
            return conf.toast("请输入您的联系地址");
          }
          if (!this.travelledDistance) {
            return conf.toast("请输入您的已行驶里程");
          }else{
            let ran = this.range + 100000;
            console.log(ran)
            if(this.travelledDistance > ran){
              return conf.toast("最大保障里程为"+ ran +"公里，已超过最大保障里程");
            }
          }
        }else{//企业
          if (!this.companyName) {
            return conf.toast("请输入企业名称");
          }
          if (!this.identificationNumber) {
            return conf.toast("请输入纳税人识别号");
          }
          if(!this.contact){
            return conf.toast("请输入您的企业联系人");
          }
          if (!this.phoneNum) {
            return conf.toast("请输入您的手机号码");
          }
          if (!this.email) {
            return conf.toast("请输入您的邮箱");
          }
          if (!this.address) {
            return conf.toast("请输入您的联系地址");
          }
          if (!this.travelledDistance) {
            return conf.toast("请输入您的已行驶里程");
          }else{
            let ran = this.range + 100000;
            if(this.travelledDistance > ran){
              return conf.toast("最大保障里程为"+ ran +"公里，已超过最大保障里程");
            }
          }
        }

        conf.post("/api/order/edit/info", {
          "id": this.$route.query.id,
          "realName": this.contact,
          "idCard": this.idCard,
          "phone": this.phoneNum,
          "email": this.email,
          "address": this.address,
          "invoice": this.onoff,
          "steerMileage": this.travelledDistance,
          "nature": Number(this.useNature),
          "companyName": this.companyName,
          "identificationNumber": this.identificationNumber,
          "type": this.type
        }, response => {
          if (response.result === 1) {
            conf.toast("提交成功");
            setTimeout(() => {
              this.$router.push('/serviceDetails?id=' + this.$route.query.id);
            }, 500)
          } else {
            conf.toast(response.msg);
          }
        })
      },
      getType(type) {
        this.type = type;
      }
    }
  }
</script>

<style scoped lang="less">
  .upload {

  }

  .progress {
    padding: 0 30/75rem;
    text-align: center;
    margin: 48/75rem auto;
    img {
      width: 100%;
    }
  }

  .container-two {
    .list {
      li {
        .box2 {
          background-image: url("../assets/img/file_bg2.png") !important;
        }
      }
    }
  }

  .container {
    padding: 30/75rem;
    img {
      width: 100%;
    }
    .tips {
      margin-top: 33/75rem;
      font-size: 26/75rem;
      color: #666;
    }

    .list {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 56/75rem auto;
      li {
        width: 330/75rem;
        height: 200/75rem;
        margin-right: 29/75rem;
        .box {
          width: 100%;
          height: 100%;
          overflow: hidden;
          background-repeat: no-repeat;
          background-position: center;
          -webkit-background-size: cover;
          background-size: cover;
          input[type=file] {
            width: 100%;
            height: 100%;
            outline: none;
            display: block;
            border: none;
            opacity: 0;
          }
        }
        &:last-child {
          margin-right: 0;
        }
        &:nth-of-type(1) {
          .box {
            background-image: url("../assets/img/file_back.png");
          }
        }
        &:nth-of-type(2) {
          .box {
            background-image: url("../assets/img/file_bg.png");
          }
        }
        .img-box {
          position: relative;
          width: 330/75rem;
          height: 200/75rem;
          overflow: hidden;
          img {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          i.icon-delete {
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
      }
    }

  }

  .btn {
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

  .container-three {
    background-color: #fbfdfe;
    padding: 30/75rem;
    .wrapper {
      width: 100%;
      padding: 40/75rem 30/75rem;
      background-color: #fff;
      box-shadow: 0 0 30/75rem rgba(233, 235, 246, 0.8);
      -webkit-border-radius: 18/75rem;
      -moz-border-radius: 18/75rem;
      border-radius: 18/75rem;
      margin-bottom: 30/75rem;
      &:last-child {
        margin-bottom: 0;
      }

      .header {
        height: 130/75rem;
        text-align: center;
        i {
          display: inline-block;
          height: 44/75rem;
          background-position: center;
          background-repeat: no-repeat;
          -webkit-background-size: 100%;
          background-size: 100%;
          &.icon-profile {
            width: 42/75rem;
            background-image: url("../assets/img/icon_profile.png");
          }
          &.icon-car {
            width: 46/75rem;
            background-image: url("../assets/img/icon_car.png");
          }
        }
        span {
          display: block;
          text-align: center;
          font-size: 26/75rem;
          color: #5b87d3;
          margin-top: 20/75rem;
        }
      }


      .form-list {
        .radio-box{
          background-color: transparent;
          .left{
            justify-content: flex-end;
          }
          .right{
            margin-left: 40%;
          }
          .left, .right{
            width: 30%;
            display: flex;
            align-items: center;
            label{
              color: #7c8e9e;
            }
            input{
              width: 30/75rem;
              height: 30/75rem;
              border: none;
              outline: none;
              margin-left: 20/75rem;
            }
          }
        }
        li {
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
          &:last-child {
            margin-bottom: 0;
          }
          .left {
            width: 190/75rem;
            .left-text {
              font-size: 30/75rem;
              color: #92a7b9;
              display: block;
            }
            .describe {
              font-size: 22/75rem;
              color: #7c8e9e;
            }
          }
          .km {
            color: #7c8e9e;
            font-size: 26/75rem;
          }
          select {
            background: transparent;
            width: 60%;
            color: #cdd4da;
            font-size: 30/75rem;
            option {
              color: #121212;
            }
            &.select {
              color: #7c8e9e;
            }
          }
          input {
            width: 320/75rem;
            font-size: 30/75rem;
            color: #7c8e9e;
            &::-webkit-input-placeholder {
              color: #cdd4da;
            }
          }
        }
      }

      .invoice {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 30/75rem auto;
        span {
          font-size: 30/75rem;
          color: #5b87d3;
        }
        i {
          display: block;
          width: 131/75rem;
          height: 72/75rem;
          background-repeat: no-repeat;
          background-position: center;
          -webkit-background-size: cover;
          background-size: cover;
          &.icon-on {
            background-image: url("../assets/img/on.png");
          }
          &.icon-off {
            background-image: url("../assets/img/off.png");
          }
        }
      }

      .tips {
        font-size: 24/75rem;
        color: #8ca0b3;
      }
    }
  }
</style>
