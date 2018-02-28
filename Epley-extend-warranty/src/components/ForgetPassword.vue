<template>
  <div class="forget-password">
    <ul class="list">
      <li>
        <input type="tel" placeholder="请输入已绑定手机号码" v-model="mobilePhone">
      </li>
      <li>
        <input type="number" placeholder="请输入验证码" v-model="authCode">
        <input type="button" v-model="getCodeBtn" @click="getAuthCode">
      </li>
      <li>
        <input type="password" id="pass" placeholder="设置新密码" v-model="newPassword">
        <i class="icon-show-password" @click="showPassword"></i>
      </li>
    </ul>

    <div :class="['btn', {'active': btnActive}]" @click="resetPassword">确认</div>

  </div>
</template>

<script>
  import {conf} from "../assets/js/main"
  import $ from "jquery/dist/jquery.min"
  import MD5 from "blueimp-md5/js/md5.min"

  export default {
    name: "forget-password",
    data() {
      return {
        mobilePhone: "",
        authCode: "",
        newPassword: "",
        getCodeBtn: "获取验证码",
        btnActive: false,
        disable: false,
        num: 1
      }
    },
    watch: {
      mobilePhone(value) {
        if(value && this.authCode && this.newPassword){
          this.btnActive = true;
        }else{
          this.btnActive = false;
        }
        let reg = /^[1][3,4,5,7,8][0-9]{9}$/.test(value);
        if (reg && value.trim().length === 11) {
          this.isMobile = true;
        } else {
          this.isMobile = false;
        }
      },
      authCode(value) {
        if(value && this.mobilePhone && this.newPassword){
          this.btnActive = true;
        }else{
          this.btnActive = false;
        }
      },
      newPassword(value) {
        if(value && this.authCode && this.mobilePhone){
          this.btnActive = true;
        }else{
          this.btnActive = false;
        }
      }
    },
    created() {
      conf.setTitle("忘记密码");
    },
    methods: {
      /**
       * 获取验证码
       */
      getAuthCode() {
        if(this.mobilePhone){
          if(this.isMobile){
            if(!this.disable){
              this.disable = true;
              conf.get("/api/security/sendForgetPasswordCode?mobile=" + this.mobilePhone, response => {
                if(response.result === 1){
                  conf.toast("发送成功，请注意查收");
                  let countDown = 60;
                  let timer = setInterval(() => {
                    countDown--;
                    this.getCodeBtn = countDown + "s后获取";
                    if(countDown < 1){
                      clearInterval(timer);
                      this.getCodeBtn = "重新获取验证码";
                      this.disable = false;
                    }
                  }, 1000)
                }else{
                  conf.toast(response.msg);
                }
              })
            }
          }else{
            conf.toast("手机号码有误");
          }
        }else{
          conf.toast("请输入手机号码");
        }
      },
      /**
       * 重置密码确认
       */
      resetPassword(){
        if(this.btnActive){
          if(this.isMobile){
            conf.post("/api/security/forgetPassword", {
              "username": this.mobilePhone,
              "password": MD5(this.newPassword),
              "mobileCode": this.authCode
            }, response => {
              if(response.result === 1){
                conf.toast("重置密码成功");
                setTimeout(() => {
                  this.$router.push('/login');
                }, 1000)
              }else{
                conf.toast(response.msg);
              }
            })
          }else{
            conf.toast("手机号码有误");
          }
        }
      },
      /**
       * 控制密码是否明文显示
       */
      showPassword() {
        this.num++;
        if(this.num % 2 == 0){
          $('#pass').attr("type", "text");
        }else{
          $('#pass').attr("type", "password");
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .forget-password {
    width: 100%;
    min-height: 100vh;
    background: url("../assets/img/login_bg.png") 0 0 no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
  }

  .list{
    padding: 30/75rem;
    li{
      height: 88/75rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20/75rem;
      border-bottom: 1px solid #ccc;
      margin-bottom: 22/75rem;
      &:last-child{
        margin-bottom: 0;
      }
      input{
        font-size: 30/75rem;
        color: #333;
        &::-webkit-input-placeholder{
          color: #ddd;
        }
      }
      input[type="button"]{
        min-width: 160/75rem;
        text-align: center;
        border: 1px solid #ccc;
        -webkit-border-radius: 15/75rem;
        -moz-border-radius: 15/75rem;
        border-radius: 15/75rem;
        padding: 15/75rem 10/75rem;
        background-color: transparent;
        box-sizing: content-box;
        font-size: 28/75rem;
        color: #ccc;
        outline: none;
      }

      .icon-show-password{
        display: block;
        width: 41/75rem;
        height: 29/75rem;
        background: url("../assets/img/btn_password_show.png") 0 0 no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
      }
    }
  }

  .btn{
    width: 690/75rem;
    height: 88/75rem;
    line-height: 88/75rem;
    text-align: center;
    font-size: 32/75rem;
    color: #c5d1db;
    background-color: #e5ebf1;
    -webkit-border-radius: 10/75rem;
    -moz-border-radius: 10/75rem;
    border-radius: 10/75rem;
    margin: 40/75rem auto;
    &.active{
      color: #fff;
      background-color: #5b87d3;
    }
  }
</style>
