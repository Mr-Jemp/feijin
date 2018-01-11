<template>
  <div id="discuss">
    <div class="public-header-2">
      <i class="icon-back" onclick="history.back()"></i>
      <span class="title">发表讨论</span>
      <span class="finish">完成</span>
    </div>

    <div class="container">
      <div class="textarea">
        <textarea maxlength="140" name="" v-model="textarea" id="" placeholder="描述创意内容"></textarea>
        <div class="text-length">
          <span>还可以输入{{140-length}}个字</span>
        </div>
      </div>

      <ul class="img-list">
        <li>
          <div class="img-box">
            <img src="../../assets/img/mentor_img1.png" alt="">
            <i class="delete"></i>
          </div>
        </li>
        <li>
          <div class="img-box">
            <img src="../../assets/img/mentor_img2.png" alt="">
            <i class="delete"></i>
          </div>
        </li>
        <li>
          <div class="uploading">
            <input type="file">
          </div>
        </li>
      </ul>

    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        textarea:"",
        length: "",
      }
    },
    watch:{
      textarea(val){
        this.length = val.length;
      }
    }
  }
</script>

<style lang="less" scoped>
  #discuss {
    width: 100%;
    height: 100vh;
    background-color: #f6f6f6;
    .public-header-2 {
      justify-content: space-between;
      .title {
        margin: 0;
        transform: translateX(0px);
      }
    }
  }

  .container {
    .textarea {
      width: 100%;
      height: 320/75rem;
      background-color: #fff;
      margin: 20/75rem 0;
      textarea {
        width: 100%;
        height: 260/75rem;
        resize: none;
        border: none;
        outline: none;
        overflow: hidden;
        padding: 25/75rem;
        font-family: "微软雅黑 Light";
        color: #333;
        ::-webkit-scrollbar {
          display: none;
        }
      }
      .text-length{
        height: 60/75rem;
        padding: 0 25/75rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        span{
          font-size: 22/75rem;
          color: #888;
        }
      }
    }
    .img-list{
      width: 100%;
      height: 200/75rem;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 0 25/75rem;
      li{
        width: 200/75rem;
        height: 150/75rem;
        .img-box{
          width: 200/75rem;
          height: 150/75rem;
          position: relative;
          img{
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
          }
          .delete{
            width: 28/75rem;
            height: 28/75rem;
            background: url("../../assets/img/delete_icon.png") 0 0 no-repeat;
            -webkit-background-size: cover;
            background-size: cover;
            position: absolute;
            right: -14/75rem;
            top: -14/75rem;
          }
        }
        .uploading{
          width: 100%;
          height: 100%;
          background: url("../../assets/img/file.png") 0 0 no-repeat;
          -webkit-background-size: cover;
          background-size: cover;
          overflow: hidden;
          input[type="file"]{
            width: 100%;
            height: 100%;
            opacity: 0;
          }
        }
      }
    }
  }
</style>
