<template>
  <div id="details">
    <div class="public-header-2">
      <i class="icon-back" onclick="history.back()"></i>
      <span class="title">明细</span>
    </div>

    <div class="container">
      <ul class="list">
        <li>
          <div class="item-left">
            <p class="type-text">打赏</p>
            <p class="balance">余额：100个金币</p>
            <p class="date-time">2017-05-06</p>
          </div>
          <div class="item-right">-100个金币</div>
        </li>
        <li>
          <div class="item-left">
            <p class="type-text">打赏</p>
            <p class="balance">余额：100个金币</p>
            <p class="date-time">2017-05-06</p>
          </div>
          <div class="item-right">-100个金币</div>
        </li>
        <li>
          <div class="item-left">
            <p class="type-text">被打赏</p>
            <p class="balance">余额：100个金币</p>
            <p class="date-time">2017-05-06</p>
          </div>
          <div class="item-right">+100个金币</div>
        </li>
        <li>
          <div class="item-left">
            <p class="type-text">充值</p>
            <p class="balance">余额：100个金币</p>
            <p class="date-time">2017-05-06</p>
          </div>
          <div class="item-right">-100个金币</div>
        </li>
        <li>
          <div class="item-left">
            <p class="type-text">提现</p>
            <p class="balance">余额：100个金币</p>
            <p class="date-time">2017-05-06</p>
          </div>
          <div class="item-right">-100个金币</div>
        </li>
        <li>
          <div class="item-left">
            <p class="type-text">打赏</p>
            <p class="balance">余额：100个金币</p>
            <p class="date-time">2017-05-06</p>
          </div>
          <div class="item-right">-100个金币</div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script></script>

<style lang="less" scoped>
  #details{
    width: 100%;
    min-height: 100vh;
  }

  .container{
    .list{
      padding: 0 25/75rem;
      li{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 25/75rem 0;
        border-bottom: 1px solid #e7e7e7;
        min-height: 95/75rem;
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
        .item-left{
          .type-text{
            font-size: 28/75rem;
            color: #333;
          }
          .balance,.date-time{
            font-size: 24/75rem;
            color: #666;
          }
          .balance{
            padding: 15/75rem 0;
          }
        }
        .item-right{
          font-size: 32/75rem;
          color: #e74c54;
        }
      }
    }
  }
</style>
