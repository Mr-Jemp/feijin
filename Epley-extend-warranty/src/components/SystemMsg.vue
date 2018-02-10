<template>
  <div class="system-msg">
    <router-link :to="'/infoDetail?id=' + item.id" class="box" v-for="item in msg.result">
      <div class="child">
        <div class="label" v-show="item.read"></div>
        <p class="info">{{item.name}}</p>
      </div>
      <p class="time">{{item.time}}</p>
    </router-link>


  </div>
</template>

<script>
  import {conf} from "../assets/js/main"

  export default {
    name: "system-msg",
    data() {
      return {
        msg: {
          result: []
        }
      }
    },
    created() {
      conf.setTitle("系统消息");
    },
    mounted() {
      this.getInfoList();
    },
    methods: {
      getInfoList() {
        conf.get("/api/news/list", response => {
          if(response.result === 1){
            this.msg = response.data;
          }else{
            conf.toast(response.msg);
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .system-msg {
    padding: 30/75rem;
  }

  .box {
    display: block;
    margin-bottom: 50/75rem;
    .child{
      display: flex;
      align-items: center;
      .label{
        width: 5px;
        height: 5px;
        background-color: red;
        font-size: 12/75rem;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        margin-right: 20/75rem;
      }
    }
    p{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-bottom: 5/75rem;
    }
    .info {
      font-size: 28/75rem;
      color: #333;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .time {
      margin-top: 10/75rem;
      font-size: 24/75rem;
      color: #999;
    }
  }
</style>
