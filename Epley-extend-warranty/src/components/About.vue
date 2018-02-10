<template>
  <div class="about">
    <div v-html="content"></div>

    <!--<div class="copy-right">
      Copyright © 2017 gzhy.net Corporation.All rights reserved.
      粤ICP备14021518号
    </div>-->
  </div>
</template>

<script>
  import {conf} from "../assets/js/main"

  export default {
    name: "about",
    data() {
      return {
        content: ""
      }
    },
    created() {
      conf.setTitle("关于艾普利");
    },
    mounted() {
      conf.get("/api/about", response => {
        if(response.result === 1){
          this.content = response.data.about.content;
        }else{
          conf.toast(response.msg);
        }
      })
    }
  }
</script>

<style lang="less">
  .about{
    min-height: 100vh;
    padding: 30/75rem;
    font-size: 28/75rem;
    color: #333;
    div{
      font-size: 28/75rem;
      text-indent: 50/75rem;
      line-height: 45/75rem;
    }
  }
</style>
