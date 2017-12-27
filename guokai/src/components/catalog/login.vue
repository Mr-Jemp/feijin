<template>
  <div id="login">
    <div class="img-box">
      <img src="../../assets/img/logo.png" alt="">
    </div>
    <div class="container">
      <p class="caption">公开课学习登录</p>
      <ul class="form-list">
        <li>
          <input type="text" class="name" placeholder="您的姓名">
        </li>
        <li>
          <input type="number" class="mobile" placeholder="您的手机号码">
          <span class="get-code">获得验证码</span>
        </li>
        <li>
          <input type="text" class="qrcode" placeholder="请输入验证码">
        </li>
        <li>
          <input type="button" class="login-btn" value="登录">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

</script>

<style lang="less" scoped>
  #login {
    width: 100%;
    height: 100vh;
  }

  .img-box {
    width: 420/75rem;
    height: 260/75rem;
    margin: 132/75rem auto 0;
    img {
      display: block;
      width: 100%;
    }
  }

  .caption {
    text-align: center;
    padding: 60/75rem 0;
    font-size: 36/75rem;
  }

  .form-list {
    width: 620/75rem;
    margin: 0 auto;
    li {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30/75rem;
      &:last-child{
        margin-top: 50/75rem;
      }
      input {
        width: 100%;
        height: 70/75rem;
        border: 1px solid #e7e7e7;
        padding: 0 30/75rem;
        ::-webkit-input-placeholder {
          color: #999;
        }
        :-moz-placeholder {
          color: #999;
        }
        ::-moz-placeholder {
          color: #999;
        }
        :-ms-input-placeholder {
          color: #999;
        }
      }
      .mobile {
        width: 390/75rem;
      }
      .get-code {
        display: block;
        width: 200/75rem;
        height: 70/75rem;
        line-height: 70/75rem;
        text-align: center;
        color: #fff;
        font-size: 24/75rem;
        background-color: #db4950;
      }
      .login-btn {
        -webkit-border-radius: 5/75rem;
        -moz-border-radius: 5/75rem;
        border-radius: 5/75rem;
        border: none;
        background-color: #ca151e;
        color: #fff;
        font-size: 30/75rem;
      }
    }
  }
</style>
