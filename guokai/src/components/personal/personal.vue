<template>
  <div id="personal">
    <div class="header">我的账户</div>
    <div class="head-box">
      <div class="head-img-box">
        <img src="../../assets/img/default_head.png" alt="">
      </div>
      <span class="nickname">张先生</span>
      <div v-if="ifSign" class="is-sign">
        <i></i>
        <span>已连续签到一天</span>
      </div>
      <div v-else class="no-sign" @click="signIn">
        <i></i>
        <span>签到+100金币</span>
      </div>
    </div>

    <ul class="list">
      <li>
        <router-link to="" class="item-box">
          <div class="left">
            <i class="item-icon"></i>
            <span class="item-text">金币</span>
          </div>
          <i class="right-icon"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/details" class="item-box">
          <div class="left">
            <i class="item-icon"></i>
            <span class="item-text">明细</span>
          </div>
          <i class="right-icon"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/collect" class="item-box">
          <div class="left">
            <i class="item-icon"></i>
            <span class="item-text">我的收藏</span>
          </div>
          <i class="right-icon"></i>
        </router-link>
      </li>
    </ul>

    <v-nav :current="3"></v-nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ifSign: false,
      }
    },
    methods:{
      signIn(){
        this.ifSign = true;
      }
    }
  }
</script>

<style lang="less" scoped>
  #personal {
    width: 100%;
    height: 100vh;
    background-color: #f6f6f6;
  }

  .header {
    width: 100%;
    height: 88/75rem;
    background-color: #ca151e;
    color: #fff;
    line-height: 88/75rem;
    text-align: center;
  }
  .head-box{
    width: 100%;
    height: 420/75rem;
    padding-top: 70/75rem;
    background-color: #ca151e;
  }
  .head-img-box{
    width: 160/75rem;
    height: 160/75rem;
    background-color: rgba(255,255,255,.8);
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    margin: 0 auto;
    img{
      display: block;
      width: 100%;
      height: 100%;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
    }
  }
  .nickname{
    display: block;
    text-align: center;
    font-size: 30/75rem;
    color: #fff;
    padding: 17/75rem 0;
  }
  .no-sign{
    width: 300/75rem;
    height: 47/75rem;
    -webkit-border-radius: 20/75rem;
    -moz-border-radius: 20/75rem;
    border-radius: 20/75rem;
    background-color: #f69421;
    display: flex;
    align-items: center;
    margin: 35/75rem auto;
    text-align: center;
    padding-left: 49/75rem;
    i{
      display: inline-block;
      width: 26/75rem;
      height: 27/75rem;
      background: url("../../assets/img/sign_icon.png") 0 0 no-repeat;
      background-size: cover;
    }
    span{
      font-size: 26/75rem;
      color: #fff;
      padding-left: 12/75rem;
    }
  }
  .is-sign{
    width: 300/75rem;
    height: 47/75rem;
    -webkit-border-radius: 20/75rem;
    -moz-border-radius: 20/75rem;
    border-radius: 20/75rem;
    background-color: rgba(255,255,255,.3);
    display: flex;
    align-items: center;
    margin: 35/75rem auto;
    text-align: center;
    padding-left: 49/75rem;
    i{
      display: inline-block;
      width: 29/75rem;
      height: 29/75rem;
      background: url("../../assets/img/check_icon.png") 0 0 no-repeat;
      background-size: cover;
    }
    span{
      font-size: 26/75rem;
      color: #fff;
      padding-left: 12/75rem;
    }
  }

  .list{
    width: 100%;
    li{
      height: 90/75rem;
      padding: 0 15/75rem;
      background-color: #fff;
      .item-box{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        padding: 0 20/75rem;
        .left{
          display: flex;
          align-items: center;
        }
        .item-icon{
          display: block;
          background-size: cover;
        }
        .item-text{
          padding-left: 20/75rem;
          font-size: 30/75rem;
          font-weight: 500;
        }
        .right-icon{
          display: block;
          width: 12/75rem;
          height: 21/75rem;
          background: url("../../assets/img/more_icon.png") 0 0 no-repeat;
          -webkit-background-size: cover;
          background-size: cover;
        }
      }
      &:nth-of-type(1){
        .item-icon{
          width: 33/75rem;
          height: 33/75rem;
          background-image: url("../../assets/img/gold_icon.png");
        }
      }
      &:nth-of-type(2){
        .item-icon{
          width: 30/75rem;
          height: 25/75rem;
          background-image: url("../../assets/img/Calendar_icon.png");
        }
      }
      &:nth-of-type(3){
        margin-top: 20/75rem;
        .item-box{
          border-bottom: none;
        }
        .item-icon{
          width: 31/75rem;
          height: 31/75rem;
          background-image: url("../../assets/img/collect_icon.png");
        }
      }
    }
  }
</style>
