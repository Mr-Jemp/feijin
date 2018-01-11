<template>
  <div id="video">
    <!--头部开始-->
    <div class="course-video">
      <i class="icon-back" onclick="history.back()"></i>
      <img src="../../assets/img/curriculum_img.png" alt="">
      <div class="control-wrap">
        <div class="video-play-btn"></div>
      </div>
    </div>
    <!--头部结束-->

    <!--导航开始-->
    <ul class="nav">
      <li>
        <span :class="{'active':type === 1}" @click="type = 1">讨论</span>
      </li>
      <li>
        <span :class="{'active':type === 2}" @click="type = 2">答疑</span>
      </li>
    </ul>
    <!--导航结束-->

    <div class="container">
      <!--讨论开始-->
      <transition name="fade-1">
        <div class="discuss" v-show="type === 1">
          <!--无内容状态-->
          <div v-if="ifContent" class="no-content">
            <img src="../../assets/img/no_img1.png" alt="">
            <p class="hint">发表一下你的想法吧...</p>
          </div>

          <!--有内容状态-->
          <div v-else class="content">
            <div class="item-wrap">
              <div class="head-img">
                <img src="../../assets/img/head_img.png" alt="">
              </div>
              <div class="right-box">
                <span class="nickname">李志斌</span>
                <span class="time">3分钟前</span>
                <p class="item-text">课程内容不错，课程是关于心理学的学习资源，主要通过加工水平理论和编码特异性原则讲授了影响长时记忆效果的因素等内容。</p>
                <div class="img-list">
                  <img src="../../assets/img/mentor_img1.png" alt="">
                  <img src="../../assets/img/mentor_img2.png" alt="">
                  <img src="../../assets/img/mentor_img1.png" alt="">
                </div>

                <!--回复点赞打赏区开始-->
                <div class="operate-wrap">
                  <div class="operate">
                    <div class="reply"></div>
                    <div @click="upWindow = true" class="reward">
                      <span>99+</span>
                      <i class="reward-icon"></i>
                    </div>
                    <div class="praise">
                      <span>99+</span>
                      <i class="praise-icon"></i>
                    </div>
                  </div>
                </div>
                <!--回复点赞打赏区结束-->

                <!--回复区开始-->
                <div class="revert">
                  <ul class="list">
                    <li>
                      <div class="user-name">
                        <span class="from-name">小小苏回复</span>
                        <span class="to-name">李志斌</span>
                      </div>
                      <div class="time">3分钟前</div>
                    </li>
                    <li>
                      <p class="item-text">课程内容不错，课程是关于心理学的学习资源，主要通过加工水平理论和编码特异性原则讲授了影响长时记忆效果的因素等内容。</p>
                    </li>
                    <li>
                      <div class="item-operate">
                        <i class="reply"></i>
                        <div class="praise">
                          <span>99+</span>
                          <i class="praise-icon"></i>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul class="list">
                    <li>
                      <div class="user-name">
                        <span class="from-name">沈飞回复</span>
                        <span class="to-name">李志斌</span>
                      </div>
                      <div class="time">3分钟前</div>
                    </li>
                    <li>
                      <p class="item-text">
                        课程内容不错，课程是关于心理学的学习资源，主要通过加工水平理论和编码特异性原则讲授了影响长时记忆效果的因素等内容。课程内容不错，课程是关于心理学的学习资源，主要通过加工水平理论和编码特异性原则讲授了影响长时记忆效果的因素等内容。</p>
                    </li>
                    <li>
                      <div class="item-operate">
                        <i class="reply"></i>
                        <div class="praise">
                          <span>99+</span>
                          <i class="praise-icon"></i>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <!--回复区结束-->

              </div>
            </div>
            <div class="item-wrap">
              <div class="head-img">
                <img src="../../assets/img/head_img.png" alt="">
              </div>
              <div class="right-box">
                <span class="nickname">李志斌</span>
                <span class="time">3分钟前</span>
                <p class="item-text">课程内容不错，课程是关于心理学的学习资源，主要通过加工水平理论和编码特异性原则讲授了影响长时记忆效果的因素等内容。</p>
                <div class="img-list">
                  <img src="../../assets/img/mentor_img1.png" alt="">
                  <img src="../../assets/img/mentor_img2.png" alt="">
                  <img src="../../assets/img/mentor_img1.png" alt="">
                </div>

                <!--回复点赞打赏区开始-->
                <div class="operate-wrap">
                  <div class="operate">
                    <div class="reply"></div>
                    <div @click="upWindow = true" class="reward">
                      <span>99+</span>
                      <i class="reward-icon"></i>
                    </div>
                    <div class="praise">
                      <span>99+</span>
                      <i class="praise-icon"></i>
                    </div>
                  </div>
                </div>
                <!--回复点赞打赏区结束-->

                <!--回复区开始-->
                <div class="revert">
                  <ul class="list">
                    <li>
                      <div class="user-name">
                        <span class="from-name">小小苏回复</span>
                        <span class="to-name">李志斌</span>
                      </div>
                      <div class="time">3分钟前</div>
                    </li>
                    <li>
                      <p class="item-text">课程内容不错，课程是关于心理学的学习资源，主要通过加工水平理论和编码特异性原则讲授了影响长时记忆效果的因素等内容。</p>
                    </li>
                    <li>
                      <div class="item-operate">
                        <i class="reply"></i>
                        <div class="praise">
                          <span>99+</span>
                          <i class="praise-icon"></i>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul class="list">
                    <li>
                      <div class="user-name">
                        <span class="from-name">沈飞回复</span>
                        <span class="to-name">李志斌</span>
                      </div>
                      <div class="time">3分钟前</div>
                    </li>
                    <li>
                      <p class="item-text">
                        课程内容不错，课程是关于心理学的学习资源，主要通过加工水平理论和编码特异性原则讲授了影响长时记忆效果的因素等内容。课程内容不错，课程是关于心理学的学习资源，主要通过加工水平理论和编码特异性原则讲授了影响长时记忆效果的因素等内容。</p>
                    </li>
                    <li>
                      <div class="item-operate">
                        <i class="reply"></i>
                        <div class="praise">
                          <span>99+</span>
                          <i class="praise-icon"></i>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <!--回复区结束-->

              </div>
            </div>
          </div>

        </div>
      </transition>
      <!--讨论结束-->

      <!--答疑开始-->
      <transition name="fade-2">
        <div class="mentoring" v-show="type === 2">
          <!--无内容状态-->
          <div v-if="ifContent" class="no-content">
            <img src="../../assets/img/no_img2.png" alt="">
            <p class="hint">向老师提出你的疑问...</p>
          </div>

          <!--有内容状态-->
          <div v-else class="content">
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

        </div>
      </transition>
      <!--答疑结束-->

      <!--打赏弹出框开始-->
      <transition name="upWin">
        <div v-show="upWindow" class="reward-up-window">
          <div class="reward-wrap">
            <div class="one">
              <ul class="left-box">
                <li :class="{'active':rewardType === 1}" @click="rewardType=1">打赏</li>
                <li :class="{'active':rewardType === 2}" @click="rewardType=2">排行</li>
              </ul>
              <i class="right-icon" @click="upWindow = false"></i>
            </div>
            <div class="reward-1" v-show="rewardType === 1">
              <!--赏银足够-->
              <div v-if="enough === 1" class="box1">
                <div class="icon">
                  <img class="reward-icon-1" src="../../assets/img/reward_icon-1.png" alt="">
                </div>
                <span class="gold-num">10个金币</span>
                <div class="reward-btn">
                  <span>打赏一下</span>
                  <span>X1</span>
                </div>
                <p class="reward-text">成功打赏 10 个金币，剩余 <span>10</span> 个金币</p>
              </div>
              <!--赏银不足-->
              <div v-if="enough === 2" class="box2">
                <img class="reward-icon-2" src="../../assets/img/no_reward.png" alt="">
                <div class="tips">赏银不足</div>
                <div class="reward-btn">返回</div>
              </div>
            </div>
            <div class="reward-2" v-show="rewardType === 2">
              <div class="two">共被赏 <span>2000</span> 个金币</div>
              <ul class="three">
                <li>
                  <div class="item-left">
                    <i class="No1"></i>
                    <div class="user">
                      <img src="../../assets/img/head_img1.png" alt="">
                      <span class="nickname">冯绍峰</span>
                    </div>
                  </div>
                  <div class="item-right">打赏150个金币</div>
                </li>
                <li>
                  <div class="item-left">
                    <i class="No2"></i>
                    <div class="user">
                      <img src="../../assets/img/head_img1.png" alt="">
                      <span class="nickname">冯绍峰</span>
                    </div>
                  </div>
                  <div class="item-right">打赏150个金币</div>
                </li>
                <li>
                  <div class="item-left">
                    <i class="No3"></i>
                    <div class="user">
                      <img src="../../assets/img/head_img2.png" alt="">
                      <span class="nickname">陈晓</span>
                    </div>
                  </div>
                  <div class="item-right">打赏150个金币</div>
                </li>
                <li>
                  <div class="item-left">
                    <div class="sort">4</div>
                    <div class="user">
                      <img src="../../assets/img/head_img2.png" alt="">
                      <span class="nickname">陈晓</span>
                    </div>
                  </div>
                  <div class="item-right">打赏150个金币</div>
                </li>
                <li>
                  <div class="item-left">
                    <div class="sort">5</div>
                    <div class="user">
                      <img src="../../assets/img/head_img2.png" alt="">
                      <span class="nickname">陈晓</span>
                    </div>
                  </div>
                  <div class="item-right">打赏150个金币</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </transition>
      <!--打赏弹出框结束-->

    </div>

    <!--底部按钮开始-->
    <transition name="fade-3">
      <div class="btn" v-show="type === 1">
        <router-link to="/discuss">发讨论</router-link>
      </div>
    </transition>
    <transition name="fade-4">
      <div class="btn" v-show="type === 2">
        <router-link to="/discuss">提问题</router-link>
      </div>
    </transition>
    <!--底部按钮结束-->

  </div>
</template>

<script>
  export default {
    data() {
      return {
        type: 1,
        rewardType: 1,
        ifContent: false,
        upWindow: false,
        enough: 1,
      }
    }
  }
</script>

<style lang="less" scoped>
  .fade-1-enter, .fade-2-enter, .fade-3-enter, .fade-4-enter {
    opacity: 0;
  }

  .fade-1-enter-active, .fade-2-enter-active, .fade-3-enter-active, .fade-4-enter-active {
    transition: .5s;
  }

  .fade-1-enter-to, .fade-2-enter-to, .fade-3-enter-to, .fade-4-enter-to {
    opacity: 1;
  }

  .upWin-enter {
    transform: scale(0);
  }

  .upWin-enter-active, .upWin-leave-active {
    transition: .3s;
  }

  .upWin-enter-to {
    transform: scale(1);
  }

  .upWin-leave {
    transform: scale(1);
  }

  .upWin-leave-to {
    transform: scale(0);
  }

  #video {
    width: 100%;
    min-height: 100vh;
    background-color: #f6f6f6;
  }

  .course-video {
    width: 100%;
    height: 440/75rem;
    overflow: hidden;
    position: relative;
    i.icon-back {
      position: absolute;
      top: 10/75rem;
      left: 25/75rem;
      z-index: 2;
      width: 21/75rem;
      height: 77/75rem;
      background: url("../../assets/img/icon_back.png") left center no-repeat;
      background-size: 21/75rem 37/75rem;
      padding: 10/75rem 30/75rem;
    }
    img {
      display: block;
      width: 100%;
      position: absolute;
    }
    .control-wrap {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: rgba(0, 0, 0, .5);
      .video-play-btn {
        width: 100/75rem;
        height: 100/75rem;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        background: url("../../assets/img/play.png") 0 0 no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
        position: absolute;
        left: 0;
        right: 0;
        top: 140/75rem;
        margin: auto;
      }
    }
  }

  .nav {
    width: 100%;
    height: 90/75rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      width: 50%;
      height: 100%;
      span {
        display: block;
        width: 100%;
        height: 100%;
        line-height: 90/75rem;
        text-align: center;
        font-size: 30/75rem;
        &.active {
          border-bottom: 2/75rem solid #ca151e;
        }
      }
    }
  }

  .container {
    margin-top: 20/75rem;
    padding-bottom: 88/75rem;
    > div {
      .no-content {
        text-align: center;
        padding-top: 235/75rem;
        img {
          width: 86/75rem;
          height: 82/75rem;
        }
        .hint {
          font-size: 28/75rem;
          color: #aaa;
          padding: 30/75rem 0;
        }
      }
    }
    .discuss {
      .content {
        .item-wrap {
          padding: 25/75rem;
          background-color: #fff;
          display: flex;
          justify-content: space-between;
          margin-bottom: 20/75rem;
          .head-img {
            width: 84/75rem;
            height: 84/75rem;
            img {
              display: block;
              width: 100%;
              height: 100%;
              -webkit-border-radius: 50%;
              -moz-border-radius: 50%;
              border-radius: 50%;
            }
          }
          .right-box {
            width: 616/75rem;
            padding-top: 10/75rem;
            .nickname, .time {
              display: block;
              padding-left: 20/75rem;
            }
            .nickname {
              font-size: 34/75rem;
              color: #984444;
              font-weight: 500;
            }
            .time {
              font-size: 22/75rem;
              color: #666;
              padding-top: 14/75rem;
            }
            .item-text {
              font-size: 28/75rem;
              color: #666;
              padding: 25/75rem 0 25/75rem 20/75rem;
              line-height: 35/75rem;
            }
            .img-list {
              padding-left: 20/75rem;
              display: flex;
              align-items: center;
              justify-content: space-between;
              img {
                width: 190/75rem;
                height: 143/75rem;
              }
            }
            .reply {
              display: block;
              width: 33/75rem;
              height: 33/75rem;
              background: url("../../assets/img/reply_icon.png") 0 0 no-repeat;
              -webkit-background-size: cover;
              background-size: cover;
            }
            .praise {
              display: flex;
              align-items: center;
              span {
                font-size: 24/75rem;
                color: #666;
              }
              .praise-icon {
                display: block;
                width: 30/75rem;
                height: 30/75rem;
                background: url("../../assets/img/praise_icon.png") 0 0 no-repeat;
                -webkit-background-size: cover;
                background-size: cover;
              }
            }
            .operate-wrap {
              display: flex;
              justify-content: flex-end;
              margin: 20/75rem 0;
              .operate {
                display: flex;
                justify-content: space-between;
                align-items: center;
                min-width: 289/75rem;
                .reward {
                  display: flex;
                  align-items: center;
                  span {
                    font-size: 24/75rem;
                    color: #666;
                  }
                  i.reward-icon {
                    display: block;
                    width: 33/75rem;
                    height: 32/75rem;
                    background: url("../../assets/img/reward_icon.png") 0 0 no-repeat;
                    -webkit-background-size: cover;
                    background-size: cover;
                  }
                }
              }
            }
            .revert {
              width: 100%;
              .list {
                width: 615/75rem;
                min-height: 260/75rem;
                background: url("../../assets/img/chat_bg.png") 0 0 no-repeat;
                -webkit-background-size: cover;
                background-size: cover;
                padding-left: 13/75rem;
                padding-bottom: 30/75rem;
                margin-bottom: 20/75rem;
                li {
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  padding: 0 20/75rem;
                  .user-name {
                    font-size: 30/75rem;
                    padding-top: 20/75rem;
                    .from-name {
                      color: #984444;
                    }
                    .to-name {
                      color: #666;
                    }
                  }
                  .item-text {
                    font-size: 28/75rem;
                    color: #666;
                    padding: 20/75rem 0;
                    line-height: 35/75rem;
                  }
                  &:last-child {
                    justify-content: flex-end;
                  }
                  .item-operate {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    min-width: 160/75rem;
                  }
                }
              }
            }
          }
        }
      }
    }
    .mentoring {
      .no-content {
        img {
          width: 86/75rem;
          height: 86/75rem;
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
      .content {
        .list {
          .box {
            .right-box {
              padding-bottom: 20/75rem;
              border-bottom: 1px solid #e5e5e5;
            }
          }
          .reply-box {
            display: flex;
            justify-content: space-between;
            margin-top: 15/75rem;
            .left-icon-box {
              background-color: #23ac38;
            }
            .right-box {
              .label {
                color: #23ac38;
                margin-left: 10/75rem;
              }
            }
          }
        }
      }
    }

    .reward-up-window {
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, .5);
      position: fixed;
      top: 0;
      max-width: 600px;
      z-index: 10;
      overflow: hidden;
      .reward-wrap {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 640/75rem;
        height: 620/75rem;
        background-color: #fff;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        -webkit-box-shadow: 0 0 10px rgba(65, 65, 65, 0.35);
        -moz-box-shadow: 0 0 10px rgba(65, 65, 65, 0.35);
        box-shadow: 0 0 10px rgba(65, 65, 65, 0.35);
        .one {
          padding: 0 25/75rem;
          border-bottom: 1px solid #eee;
          display: flex;
          justify-content: space-between;
          .left-box {
            width: 175/75rem;
            height: 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: -1px;
            li {
              height: 100%;
              line-height: 1rem;
              font-size: 30/75rem;
              color: #333;
              &.active {
                border-bottom: 1px solid #ca151e;
              }
            }
          }
          .right-icon {
            display: block;
            width: 30/75rem;
            height: 30/75rem;
            background: url("../../assets/img/close_icon1.png") center no-repeat;
            background-size: 30/75rem 30/75rem;
            padding: 35/75rem;
          }
        }
        .reward-1 {
          height: 543/75rem;
          text-align: center;
          padding-top: 58/75rem;
          .icon {
            .reward-icon-1{
              width: 175/75rem;
              height: 175/75rem;
            }
          }
          .box2{
            padding-top: 22/75rem;
            .reward-icon-2{
              width: 147/75rem;
              height: 166/75rem;
              transform: translateX(10/75rem);
            }
            .tips{
              padding: 45/75rem 0;
            }
          }
          .gold-num {
            font-size: 33/75rem;
            color: #333;
            text-align: center;
            display: block;
            padding: 35/75rem 0 25/75rem 0;
          }
          .reward-btn {
            width: 470/75rem;
            height: 80/75rem;
            background-color: #ca151e;
            border-radius: 50/75rem;
            line-height: 80/75rem;
            text-align: center;
            font-size: 36/75rem;
            color: #fff;
            margin: 0 auto;
          }
          .reward-text {
            padding: 45/75rem 0;
            text-align: center;
            font-size: 28/75rem;
            color: #333;
            span {
              color: #ca151e;
            }
          }
        }

        .two {
          text-align: center;
          height: 65/75rem;
          line-height: 65/75rem;
          border-bottom: 1px solid #eee;
          color: #000;
          font-size: 24/75rem;
          font-weight: 600;
          span {
            color: #ca151e;
          }
        }
        .three {
          height: 475/75rem;
          overflow-y: auto;
          &::-webkit-scrollbar {
            display: none;
          }
          li {
            height: 100/75rem;
            border-bottom: 1px solid #eee;
            padding: 0 25/75rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .item-left {
              width: 240/75rem;
              display: flex;
              align-items: center;
              justify-content: space-between;
              .sort {
                width: 46/75rem;
                text-align: center;
                color: #666;
              }
              .No1, .No2, .No3 {
                display: block;
                width: 42/75rem;
                height: 50/75rem;
                background-size: cover;
                background-repeat: no-repeat;
              }
              .No1 {
                background-image: url("../../assets/img/No_1.png");
              }
              .No2 {
                background-image: url("../../assets/img/No_2.png");
              }
              .No3 {
                background-image: url("../../assets/img/No_3.png");
              }
              .user {
                width: 160/75rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                img {
                  width: 60/75rem;
                  height: 60/75rem;
                  display: block;
                  -webkit-border-radius: 50%;
                  -moz-border-radius: 50%;
                  border-radius: 50%;
                }
                .nickname {
                  font-size: 28/75rem;
                  text-align: left;
                  display: block;
                  width: 85/75rem;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }
            }
            .item-right {
              font-size: 24/75rem;
              color: #666;
            }
          }
        }
      }
    }
  }

  .btn {
    width: 100%;
    height: 88/75rem;
    background-color: #ca151e;
    position: fixed;
    max-width: 600px;
    bottom: 0;
    a{
      display: block;
      width: 100%;
      height: 100%;
      line-height: 88/75rem;
      text-align: center;
      color: #fff;
      font-size: 36/75rem;
    }
  }
</style>
