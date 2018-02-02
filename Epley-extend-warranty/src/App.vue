<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import 'normalize.css/normalize.css'

export default {
  name: 'App'
}
</script>

<style>
  body{
    color: #333;
  }

  li {
    list-style-type: none;
  }

  button {
    background-color: transparent;
    outline: none;
    border: none;
  }

  .mint-indicator-mask {
    background-color: rgba(0, 0, 0, .5);
  }

  * {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-style: normal;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: "Microsoft YaHei", serif;
    /*删除点击高亮*/
    -webkit-tap-highlight-color: transparent;
  }

  /*删除select默认样式*/
  select {
    outline: none;
    border: none;
    appearance: none;
  }

  /*删除input默认样式*/
  input[type=text], input[type=number], input[type=tel], input[type=password], input[type=button],input[type=email] {
    border: none;
    outline: none;
    background-color: transparent;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }

  /*.swiper-pagination-bullet-active {
    !*修改轮播图 小圆点*!
    background: #e5b688;
  }*/

  /*清浮动*/
  .clearfix{
    *zoom: 1;
  }
  .clearfix:after{
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
    overflow: hidden;
  }

</style>
