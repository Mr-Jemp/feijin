<template>
  <div class="setting">
    <ul class="list">
      <li>
        <router-link to="/changePassword">
          <span class="item-text">修改密码</span>
          <i class="icon-more"></i>
        </router-link>
      </li>
    </ul>

    <div class="btn-logout" @click="logout">退出当前账号</div>
  </div>
</template>

<script>
  import {conf} from "../assets/js/main"

  export default {
    name: "setting",
    data() {
      return {}
    },
    created() {
      conf.setTitle("设置");
    },
    methods: {
      logout() {
        conf.post("/api/security/logout", {}, response => {
          if(response.result === 1){
            conf.toast(response.msg);
            setTimeout(() => {
              this.$router.push("/personal");
            }, 1000);
          }else{
            conf.toast(response.msg);
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .setting {
    min-height: 100vh;
    background-color: #f5f5f5;
  }

  .list {
    padding-top: 20/75rem;
    li {
      height: 96/75rem;
      margin-bottom: 20/75rem;
      background-color: #fff;
      border-top: 1px solid #e5e5e5;
      border-bottom: 1px solid #e5e5e5;
      a {
        display: flex;
        height: 100%;
        padding: 0 30/75rem;
        align-items: center;
        justify-content: space-between;
      }
      .item-text {
        font-size: 30/75rem;
        color: #333;
      }
      i.icon-more {
        display: block;
        width: 14/75rem;
        height: 24/75rem;
        background: url("../assets/img/arrow_more_gray.png") 0 0 no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
      }
    }
  }

  .btn-logout {
    height: 96/75rem;
    line-height: 96/75rem;
    text-align: center;
    font-size: 30/75rem;
    color: #5b87d3;
    background-color: #fff;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
  }
</style>
