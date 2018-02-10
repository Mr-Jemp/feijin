<template>
  <div class="info-detail">
    <p class="text" v-html="details.content"></p>
    <p class="time">{{details.time}}</p>
  </div>
</template>

<script>
  import {conf} from "../assets/js/main"

  export default {
    name: "info-detail",
    data() {
      return {
        id: this.$route.query.id,
        details: {}
      }
    },
    created() {
      conf.setTitle("消息详情");
    },
    mounted() {
      this.getInfoDetail();
    },
    methods: {
      getInfoDetail() {
        conf.get("/api/news/detail?id=" + this.id, response => {
          if(response.result === 1){
            this.details = response.data;
          }else{
            conf.toast(response.msg);
          }
        })
      }
    }
  }
</script>

<style lang="less">
  .info-detail{
    padding: 30/75rem;
    p{
      margin: 30/75rem 0;
    }
    .text{
      font-size: 28/75rem;
      color: #333;
      text-indent: 50/75rem;
      line-height: 45/75rem;
    }
    .time{
      font-size: 26/75rem;
      color: #999;
      text-align: right;
    }
  }
</style>
