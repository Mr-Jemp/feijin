<template>
  <div id="cover">
    <div class="banner">
      <i class="icon-back" onclick="history.back()"></i>
      <img :src="course.image" alt="">
    </div>
    <div class="curriculum">
      <p class="caption">{{course.name}}</p>
      <div class="intro" @click="courseIntro = true">
        <span>课程简介</span>
        <i></i>
      </div>
    </div>

    <div class="container">

      <transition name="slide-1">
        <div v-show="courseIntro" class="course-intro">

          <div>
            <h4 class="title">
              <span><i></i>课程简介</span>
              <span class="icon-close" @click="courseIntro = false">×</span>
            </h4>
            <div class="text-caption">{{course.name}}</div>
            <div class="teacher">主讲教师：{{course.teachers[0].realName}}</div>
            <p class="text-intro">{{course.description}}</p>
          </div>

        </div>
      </transition>
      <transition name="slide-2">
        <div v-show="!courseIntro" class="course-list-wrap">
          <h4 class="title"><span><i></i>课程内容</span></h4>
          <ul class="list clearFix">
            <li v-for="item in videoList">
              <router-link :to="'/video?src='+item.video">
                <div class="img-box">
                  <img :src="item.image" alt="">
                </div>
                <p class="text-info">{{item.name}}</p>
                <p class="progress">观看至0%</p>
              </router-link>
            </li>
          </ul>
        </div>
      </transition>

    </div>

  </div>
</template>

<script>
  import {con} from "../../assets/js/common"

  export default {
    data() {
      return {
        courseIntro: false,
        videoList: [],
        course: {
          teachers: [
            {}
          ],
        },
      }
    },
    mounted() {
      this.getCourseDetail(location.href);
    },
    methods: {
      getCourseDetail(url) {
        if (url.indexOf("?") != -1) {
          let obj = con.urlToObj(url);
          let id = obj.id;
          con.get("/api/course/detail?id=" + id, (response) => {
            if (response.result === 1) {
              this.videoList = response.data.activity;
              this.course = response.data.course;
            } else {
              con.toast(response.msg);
            }
          })
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .slide-1-enter, .slide-2-enter {
    transform: translateY(100%);
  }

  .slide-1-enter-active, .slide-2-enter-active {
    transition: .6s;
  }

  .slide-1-enter-to, .slide-2-enter-to {
    transform: translateY(0);
  }

  #cover {
    width: 100%;
    min-height: 100vh;
    background-color: #f6f6f6;
  }

  .banner {
    width: 100%;
    height: 440/75rem;
    overflow: hidden;
    position: relative;
    background: #000;
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
  }

  .curriculum {
    width: 100%;
    background-color: #fff;
    a {
      display: block;
      width: 100%;
      height: 100%;
    }
    .caption {
      text-align: center;
      font-size: 36/75rem;
      padding-top: 30/75rem;
    }
    .intro {
      padding: 25/75rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        font-size: 24/75rem;
        color: #666;
        padding-right: 5/75rem;
      }
      i {
        display: block;
        width: 26/75rem;
        height: 27/75rem;
        background: url("../../assets/img/arrows_icon.png") 0 0 no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
      }
    }
  }

  .container {
    width: 100%;
    .title {
      width: 100%;
      padding: 0 25/75rem;
      height: 80/75rem;
      span {
        font-size: 36/75rem;
        color: #333;
        font-weight: 500;
        line-height: 80/75rem;
        display: flex;
        align-items: center;
        i {
          display: inline-block;
          width: 6/75rem;
          height: 36/75rem;
          background-color: #ca151e;
          margin-right: 10/75rem;
        }
      }
    }

    .list {
      width: 100%;
      padding: 0 10/75rem;
      li {
        float: left;
        width: 360/75rem;
        min-height: 315/75rem;
        margin-right: 10/75rem;
        &:nth-of-type(even) {
          margin-right: 0;
        }
        a {
          display: block;
          width: 100%;
          height: 100%;
        }
        .img-box {
          width: 100%;
          height: 210/75rem;
          overflow: hidden;
          img {
            display: block;
            width: 100%;
          }
        }
        .text-info {
          padding: 20/75rem 20/75rem 0 20/75rem;
          font-size: 28/75rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .progress {
          padding: 20/75rem;
          font-size: 24/75rem;
          color: #666;
        }
      }
    }
    .course-intro {
      .title {
        padding: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon-close {
          padding-left: 20/75rem;
          color: #ca151e;
          font-size: 0.8rem;
        }
      }
      padding: 0 25/75rem;
      .text-caption {
        font-size: 30/75rem;
        padding: 20/75rem 0;
      }
      .teacher {
        padding-bottom: 50/75rem;
        color: #666;
        font-size: 24/75rem;
      }
      .text-intro {
        font-size: 28/75rem;
        color: #666;
      }
    }
  }
</style>
