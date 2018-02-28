<template>
  <div class="index">
    <!--<v-header :title="title"/>-->

    <!--轮播-->
    <div class="swiper-container banner-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in bannerList">
          <a class="type0" :data-content="item.content" v-if="item.type === 0"><!--内链-->
            <img :src="item.image">
          </a>
          <a v-else="item.type === 1" :href="item.href"><!--外链-->
            <img :src="item.image">
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <!--主内容-->
    <div class="container" v-html="introduce.content">
      <!--<img src="../assets/img/index_image.png" alt="">
      <p class="text">广州艾普利汽车服务有限公司，是一家专业汽车质保解决方案提供商，与英国知名质保公司、国内三大保险公司为战略合作伙伴。以汽车4S店、经销商集团、车行、二手车商为主要服务对象，以新车、在用车、二手车延长质保产品和平行进口车质保为主要产品，为客户提供产品定制，风险管理，营销培训，驻店支持，咨询辅导等相关服务。
        艾普利质保专业团队，为客户定制个性化方案和咨询顾问式服务。提供真正的从产品设计，到落地服务一整套的质保服务解决方案。
      </p>-->
    </div>


    <!--底部导航-->
    <v-footer :active="1"/>

  </div>
</template>

<script>
  import {conf} from "../assets/js/main"
  import "swiper/dist/css/swiper.min.css"
  import Swiper from "swiper/dist/js/swiper.min"

  let swiper1, self;
  export default {
    name: 'index',
    data() {
      return {
        title: "艾普利质保",
        bannerList: [],
        introduce: {}
      }
    },
    created() {
      conf.setTitle("艾普利质保");
      self = this;
    },
    mounted() {
      this.getHomeData();
    },
    methods: {
      /**
       * 初始化swiper
       */
      initSwiper() {
        this.$nextTick(() => {
          swiper1 = new Swiper('.banner-swiper', {
            loop: true,
            pagination: {
              el: ".swiper-pagination"
            },
            observer: true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents: true,//修改swiper的父元素时，自动初始化swiper
            onSlideChangeEnd: function (swiper) {
              swiper.update(); //swiper更新
            }
          });

          $(".banner-swiper .type0").click(function () {
            self.skipInside($(this).attr("data-content"));
          })

        })
      },
      /**
       * 获取首页数据
       */
      getHomeData() {
        conf.loading("加载中...");
        conf.get("/api/home/", response => {
          if (response.result === 1) {
            conf.closeLoading();
            this.bannerList = response.data.banners;
            this.introduce = response.data.introduce;
            this.initSwiper();
          } else {
            conf.closeLoading();
            conf.toast(response.msg);
          }
        })
      },
      skipInside(content) {
        try {
          let con = content;
          conf.setItem("content", con);
          this.$router.push("/insideChain");
        } catch (e) {
          alert(e);
        }
      }
    }
  }
</script>

<style lang="less">
  .index {
    padding-bottom: 100/75rem;
  }

  .swiper-container {
    width: 100%;
    height: 320/75rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .container {
    padding: 0 30/75rem;
    width: 100%;
    img {
      display: block;
      width: 100%;
      margin: 25/75rem auto;
    }
    p {
      font-size: 28/75rem;
      line-height: 40/75rem;
      text-indent: 50/75rem;
    }
  }
</style>
