<template>
  <div id="mentoring">
    <div class="header">
      <ul>
        <li>
          <span :class="{'active':type === 1}" @click="type = 1">待解答</span>
        </li>
        <li>
          <span :class="{'active':type === 2}" @click="type = 2">已解答</span>
        </li>
      </ul>
    </div>

    <div class="public-header">
      <div class="search-wrap">
        <router-link to="">
          <i class="search-icon"></i>
          <span>搜索课程名称</span>
        </router-link>
      </div>
    </div>

    <div class="to-answer" v-if="type == 1">
      <ul class="list">
        <li>
          <router-link to="">
            <div class="box">
              <div class="left-icon-box">问</div>
              <div class="right-box">
                <h4 class="item-caption">老师请问管理学什么时候开始考试呢？</h4>
                <p class="item-text">我想知道管理学这个学期的期末考试时间是什么时候？是网考还是笔试？</p>
                <ul class="img-list clearFix">
                  <li>
                    <img src="../../assets/img/mentor_img1.png" alt="">
                  </li>
                  <li>
                    <img src="../../assets/img/mentor_img2.png" alt="">
                  </li>
                  <li>
                    <img src="../../assets/img/mentor_img3.png" alt="">
                  </li>
                </ul>
                <p class="item-name">邓廷英 2017-03-07 提问</p>
                <p class="item-from">来自：影响长时记忆效果的因素>清楚什么是职业能力</p>
              </div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <div class="box">
              <div class="left-icon-box">问</div>
              <div class="right-box">
                <h4 class="item-caption">老师请问管理学什么时候开始考试呢？</h4>
                <p class="item-text">我想知道管理学这个学期的期末考试时间是什么时候？是网考还是笔试？</p>
                <ul class="img-list clearFix">
                  <li>
                    <img src="../../assets/img/mentor_img1.png" alt="">
                  </li>
                  <li>
                    <img src="../../assets/img/mentor_img2.png" alt="">
                  </li>
                  <li>
                    <img src="../../assets/img/mentor_img3.png" alt="">
                  </li>
                </ul>
                <p class="item-name">邓廷英 2017-03-07 提问</p>
                <p class="item-from">来自：影响长时记忆效果的因素>清楚什么是职业能力</p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>

    <div class="have-to-solve" v-if="type == 2">
      <ul class="list">
        <li>
        <router-link to="">
          <div class="box">
            <div class="left-icon-box">问</div>
            <div class="right-box">
              <h4 class="item-caption">老师请问管理学什么时候开始考试呢？</h4>
              <p class="item-text">我想知道管理学这个学期的期末考试时间是什么时候？是网考还是笔试？</p>
              <ul class="img-list clearFix">
                <li>
                  <img src="../../assets/img/mentor_img1.png" alt="">
                </li>
                <li>
                  <img src="../../assets/img/mentor_img2.png" alt="">
                </li>
                <li>
                  <img src="../../assets/img/mentor_img3.png" alt="">
                </li>
              </ul>
              <p class="item-name">邓廷英 2017-03-07 提问</p>
              <p class="item-from">来自：影响长时记忆效果的因素>清楚什么是职业能力</p>
            </div>
          </div>
          <div class="reply-box">
            <div class="left-icon-box">答</div>
            <div class="right-box">
              <h4 class="item-caption">李志斌 2017-05-25<span class="label">回答</span></h4>
              <p class="item-text">同学你好，请关注相关考试通知！</p>
              <ul class="img-list clearFix">
                <li>
                  <img src="../../assets/img/mentor_img1.png" alt="">
                </li>
              </ul>
            </div>
          </div>
        </router-link>
      </li>
        <li>
          <router-link to="">
            <div class="box">
              <div class="left-icon-box">问</div>
              <div class="right-box">
                <h4 class="item-caption">老师请问管理学什么时候开始考试呢？</h4>
                <p class="item-text">我想知道管理学这个学期的期末考试时间是什么时候？是网考还是笔试？</p>
                <ul class="img-list clearFix">
                  <li>
                    <img src="../../assets/img/mentor_img1.png" alt="">
                  </li>
                  <li>
                    <img src="../../assets/img/mentor_img2.png" alt="">
                  </li>
                  <li>
                    <img src="../../assets/img/mentor_img3.png" alt="">
                  </li>
                </ul>
                <p class="item-name">邓廷英 2017-03-07 提问</p>
                <p class="item-from">来自：影响长时记忆效果的因素>清楚什么是职业能力</p>
              </div>
            </div>
            <div class="reply-box">
              <div class="left-icon-box">答</div>
              <div class="right-box">
                <h4 class="item-caption">李志斌 2017-05-25<span class="label">回答</span></h4>
                <p class="item-text">同学你好，请关注相关考试通知！</p>
                <ul class="img-list clearFix">
                  <li>
                    <img src="../../assets/img/mentor_img1.png" alt="">
                  </li>
                </ul>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>

    <v-nav :current="2"></v-nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        type: 1,
      }
    }
  }
</script>

<style lang="less" scoped>
  #mentoring {
    width: 100%;
    min-height: 100vh;
    background-color: #f6f6f6;
    .public-header {
      background-color: #fff;
      .search-wrap {
        background-color: #e5e5e5;
        .search-icon {
          background-image: url("../../assets/img/search_icon1.png");
        }
        span {
          color: #666;
        }
      }
    }
  }

  .header {
    width: 100%;
    height: 80/75rem;
    background-color: #ca151e;
    ul {
      height: 100%;
      display: flex;
      li {
        width: 50%;
        height: 100%;
        font-size: 36/75rem;
        color: #fff;
        line-height: 80/75rem;
        span {
          &.active{
            border-bottom: 1px solid #fff;
          }
          padding-bottom: 8/75rem;
        }
        &:nth-of-type(1) {
          text-align: right;
          span {
            margin-right: 30/75rem;
          }
        }
        &:nth-of-type(2) {
          span {
            margin-left: 30/75rem;
          }
        }
      }
    }
  }

  .list {
    padding-bottom: 116/75rem;
    > li {
      width: 100%;
      min-height: 410/75rem;
      background-color: #fff;
      padding: 25/75rem 30/75rem;
      margin-top: 20/75rem;
      a {
        display: block;
        width: 100%;
        height: 100%;
        .left-icon-box {
          width: 50/75rem;
          height: 50/75rem;
          color: #fff;
          font-size: 28/75rem;
          text-align: center;
          line-height: 50/75rem;
          background-color: #ca151e;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
        }
        .box {
          display: flex;
          justify-content: space-between;
        }
        .right-box {
          width: 635/75rem;
          height: 100%;
          .item-caption {
            font-size: 34/75rem;
            color: #333;
            font-weight: 500;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding-top: 8/75rem;
          }
          .item-text {
            font-size: 28/75rem;
            color: #666;
            padding: 20/75rem 0;
          }
          .img-list {
            li {
              float: left;
              width: 200/75rem;
              height: 150/75rem;
              overflow: hidden;
              margin-right: 15/75rem;
              &:last-child {
                margin-right: 0;
              }
              img {
                display: block;
                width: 100%;
              }
            }
          }
          .item-name {
            padding: 20/75rem 0;
          }
          .item-name, .item-from {
            font-size: 24/75rem;
            color: #999;
          }
        }
      }
    }
  }

  .have-to-solve{
    .list{
      .box{
        .right-box{
          padding-bottom: 20/75rem;
          border-bottom: 1px solid #e5e5e5;
        }
      }
      .reply-box{
        display: flex;
        justify-content: space-between;
        margin-top: 15/75rem;
        .left-icon-box{
          background-color: #23ac38;
        }
        .right-box{
          .label{
            color: #23ac38;
            margin-left: 10/75rem;
          }
        }
      }
    }
  }
</style>
