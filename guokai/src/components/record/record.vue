<template>
  <div id="record">
    <div class="public-header">
      <div class="search-wrap">
        <router-link to="/suggest">
          <i class="search-icon"></i>
          <span>搜索课程名称</span>
        </router-link>
      </div>
    </div>

    <section class="container">
      <ul class="list clearFix">
        <li>
          <router-link to="/video">
            <div class="img-box">
              <img src="../../assets/img/course_img1.png" alt="">
            </div>
            <p class="text-info">影响长时记忆效果的因素影响长时记忆效果的因素</p>
            <p class="progress">观看至10%</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <div class="img-box">
              <img src="../../assets/img/course_img2.png" alt="">
            </div>
            <p class="text-info">影响长时记忆效果的因素影响长时记忆效果的因素</p>
            <p class="progress">观看至10%</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <div class="img-box">
              <img src="../../assets/img/course_img3.png" alt="">
            </div>
            <p class="text-info">影响长时记忆效果的因素影响长时记忆效果的因素</p>
            <p class="progress">观看至10%</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <div class="img-box">
              <img src="../../assets/img/course_img4.png" alt="">
            </div>
            <p class="text-info">影响长时记忆效果的因素影响长时记忆效果的因素</p>
            <p class="progress">观看至10%</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <div class="img-box">
              <img src="../../assets/img/course_img1.png" alt="">
            </div>
            <p class="text-info">影响长时记忆效果的因素影响长时记忆效果的因素</p>
            <p class="progress">观看至10%</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <div class="img-box">
              <img src="../../assets/img/course_img2.png" alt="">
            </div>
            <p class="text-info">影响长时记忆效果的因素影响长时记忆效果的因素</p>
            <p class="progress">观看至10%</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <div class="img-box">
              <img src="../../assets/img/course_img3.png" alt="">
            </div>
            <p class="text-info">影响长时记忆效果的因素影响长时记忆效果的因素</p>
            <p class="progress">观看至10%</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <div class="img-box">
              <img src="../../assets/img/course_img4.png" alt="">
            </div>
            <p class="text-info">影响长时记忆效果的因素影响长时记忆效果的因素</p>
            <p class="progress">观看至10%</p>
          </router-link>
        </li>
      </ul>
    </section>

    <v-nav :current="1"></v-nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="less" scoped>
  .container{
    padding-bottom: 96/75rem;
  }
  .list {
    width: 100%;
    padding: 10/75rem 10/75rem;
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
</style>
