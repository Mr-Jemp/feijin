<template>
  <div class="public-header">
    <div class="back">
      <i class="icon-back"></i>
      <span>返回</span>
    </div>

    <h1 class="title">{{title}}</h1>
  </div>
</template>

<script>
  export default {
    name: "v-header",
    props: ["title"]
  }
</script>

<style scoped lang="less">
  .public-header {
    height: 88/75rem;
    background-color: #2d2c32;
    line-height: 89/75rem;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 30/75rem;

    .back{
      .icon-back{
        display: inline-block;
        width: 24/75rem;
        height: 42/75rem;
        background: url("../assets/img/icon_Back.png") 0 0 no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
        vertical-align: middle;
        margin-right: 15/75rem;
      }
      span{
        font-size: 32/75rem;
        vertical-align: middle;
      }
    }

    .title{
      height: 100%;
      font-size: 36/75rem;
      margin: 0 auto;
      transform: translateX(-45/75rem);
    }

  }
</style>
