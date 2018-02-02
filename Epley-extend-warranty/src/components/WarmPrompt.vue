<template>
  <div class="warm-prompt">

    <div class="head">
      <div class="double-line"></div>
      <div class="title">
        <h2 class="caption">准入条件说明</h2>
        <p class="small-title">DESCRIPTION OF ACCESS CONDITIONS</p>
      </div>
      <div class="double-line"></div>
    </div>

    <div class="content">
      <p>（1） 原厂保修期截止前三个月和保修里程截止前5000公里内的车辆（保修时间和保修里程同时满足，例如原厂质保期3年十万公里，33个月以内且行驶里程不超过95000公里，以新车购车发票日期为准计算）；</p>
      <p>（2） 车辆为7座以下家庭自用车（非营运）；</p>
      <p>（3） 混动、电动、天然气、转子发动机等以外的纯燃油车辆；</p>
      <p>（4） 特殊用途的车辆，例如教练车、赛车、改装车等不承保；</p>
      <p>（5） 超豪华车、非量产车、平行进口车等不承保。</p>
    </div>

    <p class="tips">是否符合准入条件？</p>

    <div class="btn-box">
      <router-link to="/index" class="btn-no">否</router-link>
      <router-link to="/extendService" class="btn-yes">是</router-link>
    </div>

  </div>
</template>

<script>
  import {conf} from "../assets/js/main"

  export default {
    name: "warm-prompt",
    data() {
      return {}
    },
    created() {
      conf.setTitle("温馨提示");
    }
  }
</script>

<style scoped lang="less">
  .head{
    width: 500/75rem;
    height: 70/75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 60/75rem auto;
    .double-line{
      height: 44/75rem;
      width: 6px;
      border-left: 3/75rem solid #333;
      border-right: 3/75rem solid #333;
    }
    .title{
      text-align: center;
      .caption{
        font-size: 36/75rem;
        color: #000;
        font-weight: 700;
      }
      .small-title{
        font-size: 20/75rem;
        color: #999;
        margin-top: 20/75rem;
      }
    }
  }

  .content{
    padding: 0 30/75rem;
    p{
      text-indent: 10/75rem;
      font-size: 30/75rem;
      color: #666;
      line-height: 50/75rem;
    }
  }

  .tips{
    text-align: center;
    margin-top: 75/75rem;
    font-size: 30/75rem;
    color: #000;
    font-weight: 600;
  }

  .btn-box{
    margin: 60/75rem auto;
    width: 560/75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    >a{
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
</style>
