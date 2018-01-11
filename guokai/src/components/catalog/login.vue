<template>
  <div id="login">
    <div class="img-box">
      <img src="../../assets/img/logo.png" alt="">
    </div>
    <div class="container">
      <p class="caption">公开课学习登录</p>
      <ul class="form-list">
        <li>
          <input type="text" v-model="realName" class="name" placeholder="您的姓名">
        </li>
        <li>
          <input type="number" v-model="mobile" class="mobile" placeholder="您的手机号码">
          <span class="get-code" @click="getCode()">{{value}}</span>
        </li>
        <li>
          <input type="text" v-model="mobileCode" class="qrcode" placeholder="请输入验证码">
        </li>
        <li>
          <input @click="login" type="button" class="login-btn" value="登录">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {con} from "../../assets/js/common"

  export default {
    data() {
      return {
        realName: "",
        mobile: "",
        mobileCode: "",
        isLogin: false,
        wechatOpenid: "",
        isMobile: false,
        value: "获得验证码",
        disable:true,
      }
    },
    watch: {
      mobile(val) {
        let re = /^[1][3,4,5,7,8][0-9]{9}$/.test(val);
        if (re && val.trim().length === 11) {
          this.isMobile = true;
        } else {
          this.isMobile = false;
        }
      }
    },
    mounted() {
    },
    methods: {
      getCode() {
        if(this.disable){
          let num = 60;
          this.disable = false;
          if (this.mobile) {
            if (this.isMobile) {
              con.get("/api/msm/register?mobile=" + this.mobile, (response) => {
                if(response.result === 1){
                  let timer = setInterval(()=>{
                    num--;
                    this.value = num + "s后重新发送";
                    if(num < 1){
                      clearInterval(timer);
                      this.value = "获取验证码";
                      this.disable = true;
                    }
                  },1000)
                }else{
                  con.toast(response.msg)
                }
              })
            } else {
              con.toast("手机号码有误，请重新输入");
            }
          } else {
            con.toast("请输入您的手机号码");
          }
        }
      },
      login(){
        if(this.realName){
          if(this.isMobile){
            if(this.mobileCode && this.mobileCode.length == 6){
              this.getRegister(location.href);
            }else{
              con.toast("验证码有误")
            }
          }else{
            con.toast("手机号码有误，请重新输入");
          }
        }else{
          con.toast("请输入您的姓名");
        }
      },
      getRegister(url) {
        con.toast(url)
        if (url.indexOf("?") != -1) {
          let obj = con.urlToObj(url);
          let openid = obj.openid;
          let nickname = obj.nickname;
          let avatar = obj.avatar;
          let sex = obj.sex;
          // let accessToken = obj.accessToken;

          con.post("/api/security/register", {
            "avatar": avatar,
            "mobileCode": this.mobileCode,
            "nickname": nickname,
            "phone": this.mobile,
            "realName": this.realName,
            "sex": sex,
            "username": this.mobile,
            "wechatOpenid": openid
          }, (response) => {
            if (response.result === 1) {
              this.wechatOpenid = response.data.wechatOpenid;
              this.$router.replace("/home?openid=" + this.wechatOpenid);
            } else {
              con.toast(response.msg);
            }
          })
        }
      }
    }
  }

</script>

<style lang="less" scoped>
  #login {
    width: 100%;
    height: 100vh;
  }

  .img-box {
    width: 420/75rem;
    height: 260/75rem;
    margin: 132/75rem auto 0;
    img {
      display: block;
      width: 100%;
    }
  }

  .caption {
    text-align: center;
    padding: 60/75rem 0;
    font-size: 36/75rem;
  }

  .form-list {
    width: 620/75rem;
    margin: 0 auto;
    li {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30/75rem;
      &:last-child {
        margin-top: 50/75rem;
      }
      input {
        width: 100%;
        height: 70/75rem;
        border: 1px solid #e7e7e7;
        padding: 0 30/75rem;
        ::-webkit-input-placeholder {
          color: #999;
        }
        :-moz-placeholder {
          color: #999;
        }
        ::-moz-placeholder {
          color: #999;
        }
        :-ms-input-placeholder {
          color: #999;
        }
      }
      .mobile {
        width: 390/75rem;
      }
      .get-code {
        display: block;
        width: 200/75rem;
        height: 70/75rem;
        line-height: 70/75rem;
        text-align: center;
        color: #fff;
        font-size: 24/75rem;
        background-color: #db4950;
      }
      .login-btn {
        -webkit-border-radius: 5/75rem;
        -moz-border-radius: 5/75rem;
        border-radius: 5/75rem;
        border: none;
        background-color: #ca151e;
        color: #fff;
        font-size: 30/75rem;
      }
    }
  }
</style>
