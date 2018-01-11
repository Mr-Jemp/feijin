<template>
  <div class="home">
    <div class="public-header">
      <div class="search-wrap">
        <router-link to="/suggest">
          <i class="search-icon"></i>
          <span>搜索课程名称</span>
        </router-link>
      </div>
    </div>

    <section class="container">
      <ul class="course-list clearFix">
        <li v-for="item in courseList">
          <router-link :to="'/cover?id='+item.id">
            <div class="item-img-box">
              <img :src="item.image" alt="">
            </div>
            <p class="item-caption">{{item.name}}</p>
            <span class="item-name">主讲：{{item.teacher}}</span>
          </router-link>
        </li>
      </ul>
    </section>

    <v-nav :current="0"></v-nav>
  </div>
</template>

<script>
  import {con} from "../../assets/js/common"

  let openid;
  export default {
    data() {
      return {
        courseList: []
      }
    },
    mounted() {
      this.getOpenid(location.href);
    },
    methods: {
      /**
       * 获取openid
       * @param url 页面url地址
       */
      getOpenid(url) {
        if (url.indexOf("?") != -1) {
          let obj = con.urlToObj(url);
          openid = obj.openid;
          localStorage.setItem("openid",JSON.stringify(openid));
          this.getCourseList(openid);
        }else{
          let _openid = localStorage.getItem("openid");
          this.getCourseList(JSON.parse(_openid));
        }
      },
      /**
       * 获取课程列表
       * @param openid
       */
      getCourseList(openid) {
        con.get("/api/course/list?openid=" + openid, (response) => {
          if (response.result === 1) {
            this.courseList = response.data.result;
            //请求数据成功以后把微信带过来的一堆参数去除,设置当前页面的url地址为：
            //http://weike.51feijin.com/wap/#/home
            let _url = window.location.protocol + '//' + window.location.host + '/wap/#/home';
            window.history.pushState({}, "", _url);
          } else {
            con.toast(response.msg);
          }
        })
      }
    }
  }

</script>

<style lang="less" scoped>
  #home {
    width: 100%;
  }

  .container {
    padding-bottom: 96/75rem;
    .course-list {
      li {
        float: left;
        margin: 10/75rem;
        width: 360/75rem;
        min-height: 310/75rem;
        &:nth-of-type(even) {
          margin-left: 0;
        }
        .item-img-box {
          width: 360/75rem;
          height: 210/75rem;
          background-color: #000;
          overflow: hidden;
          -webkit-border-radius: 5/75rem;
          -moz-border-radius: 5/75rem;
          border-radius: 5/75rem;
          img {
            display: block;
            width: 100%;
            -webkit-border-radius: 5/75rem;
            -moz-border-radius: 5/75rem;
            border-radius: 5/75rem;
          }
        }
        .item-caption {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 27/75rem;
          padding: 20/75rem 15/75rem;
        }
        .item-name {
          font-size: 22/75rem;
          color: #666;
          display: block;
          padding: 0 15/75rem;
        }
      }
    }
  }
</style>
