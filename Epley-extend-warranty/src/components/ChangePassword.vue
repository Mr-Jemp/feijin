<template>
  <div class="change-password">
    <ul class="list">
      <li>
        <input type="password" placeholder="请输入旧密码" v-model="oldPassword">
      </li>
      <li>
        <input type="password" placeholder="请输入新密码" v-model="newPassword">
      </li>
      <li>
        <input type="password" placeholder="请再次输入新密码" v-model="confirmPassword">
      </li>
    </ul>

    <div class="forget">
      <router-link class="forget-password" to="/forgetPassword">忘记密码</router-link>
    </div>

    <div :class="['btn', {'active': btnActive}]" @click="changePassword">确认</div>
  </div>
</template>

<script>
  import {conf} from "../assets/js/main"
  import MD5 from "blueimp-md5/js/md5.min"

  export default {
    name: "change-password",
    data() {
      return {
        btnActive: false,
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      }
    },
    watch: {
      oldPassword(val) {
        if(val && this.confirmPassword && this.newPassword){
          this.btnActive = true;
        }else{
          this.btnActive = false;
        }
      },
      newPassword(val) {
        if(val && this.oldPassword && this.confirmPassword){
          this.btnActive = true;
        }else{
          this.btnActive = false;
        }
      },
      confirmPassword(val) {
        if(val && this.oldPassword && this.newPassword){
          this.btnActive = true;
        }else{
          this.btnActive = false;
        }
      }
    },
    created() {
      conf.setTitle("修改密码");
    },
    methods: {
      changePassword(){
        if(this.btnActive){
          conf.post("/api/security/modifypassword", {
            "oldPassword": MD5(this.oldPassword),
            "password": MD5(this.password),
            "confirmPassword": MD5(this.confirmPassword)
          }, response => {
            if (response.result === 1) {
              conf.toast(response.msg);
              setTimeout(() => {
                this.$router.push("/personal");
              }, 500)
            } else {
              conf.toast(response.msg);
            }
          })
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .change-password{
    width: 100%;
    min-height: 100vh;
    background: url("../assets/img/login_bg.png") 0 0 no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
  }

  .list{
    padding: 30/75rem 30/75rem 0;
    li{
      height: 88/75rem;
      padding: 0 20/75rem;
      margin-bottom: 20/75rem;
      border-bottom: 1px solid #ccc;
      display: flex;
      align-items: center;
      input[type="password"]{
        width: 100%;
        font-size: 30/75rem;
        &::-webkit-input-placeholder{
          color: #ddd;
        }
      }
    }
  }

  .forget{
    display: block;
    padding: 40/75rem 30/75rem;
    text-align: right;

    .forget-password{
      font-size: 26/75rem;
      color: #fff;
    }
  }

  .btn{
    width: 690/75rem;
    height: 88/75rem;
    margin: 0 auto;
    line-height: 88/75rem;
    text-align: center;
    font-size: 32/75rem;
    color: #ccc;
    -webkit-border-radius: 10/75rem;
    -moz-border-radius: 10/75rem;
    border-radius: 10/75rem;
    background-color: #e5ebf1;
    &.active{
      color: #fff;
      background-color: #5b87d3;
    }
  }
</style>
