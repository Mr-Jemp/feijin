<template>
  <div class="home">
    <div class="public-header">
      <div class="search-wrap">
        <router-link to="">
          <i class="search-icon"></i>
          <span>搜索课程名称</span>
        </router-link>
      </div>
    </div>

    <section class="container">
      <ul class="course-list clearFix">
        <li>
          <router-link to="">
            <div class="item-img-box">
              <img src="../../assets/img/course_img1.png" alt="">
            </div>
            <p class="item-caption">影响长时记忆效果的因素影响长时记忆效果的因素影响长时记忆效果的因素</p>
            <span class="item-name">主讲：李老师</span>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <div class="item-img-box">
              <img src="../../assets/img/course_img2.png" alt="">
            </div>
            <p class="item-caption">影响长时记忆效果的因素影响长时记忆效果的因素影响长时记忆效果的因素</p>
            <span class="item-name">主讲：李老师</span>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <div class="item-img-box">
              <img src="../../assets/img/course_img3.png" alt="">
            </div>
            <p class="item-caption">影响长时记忆效果的因素影响长时记忆效果的因素影响长时记忆效果的因素</p>
            <span class="item-name">主讲：李老师</span>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <div class="item-img-box">
              <img src="../../assets/img/course_img4.png" alt="">
            </div>
            <p class="item-caption">影响长时记忆效果的因素影响长时记忆效果的因素影响长时记忆效果的因素</p>
            <span class="item-name">主讲：李老师</span>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <div class="item-img-box">
              <img src="../../assets/img/course_img1.png" alt="">
            </div>
            <p class="item-caption">影响长时记忆效果的因素影响长时记忆效果的因素影响长时记忆效果的因素</p>
            <span class="item-name">主讲：李老师</span>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <div class="item-img-box">
              <img src="../../assets/img/course_img2.png" alt="">
            </div>
            <p class="item-caption">影响长时记忆效果的因素影响长时记忆效果的因素影响长时记忆效果的因素</p>
            <span class="item-name">主讲：李老师</span>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <div class="item-img-box">
              <img src="../../assets/img/course_img3.png" alt="">
            </div>
            <p class="item-caption">影响长时记忆效果的因素影响长时记忆效果的因素影响长时记忆效果的因素</p>
            <span class="item-name">主讲：李老师</span>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <div class="item-img-box">
              <img src="../../assets/img/course_img4.png" alt="">
            </div>
            <p class="item-caption">影响长时记忆效果的因素影响长时记忆效果的因素影响长时记忆效果的因素</p>
            <span class="item-name">主讲：李老师</span>
          </router-link>
        </li>
      </ul>
    </section>

    <v-nav :current="0"></v-nav>
  </div>
</template>

<script>

</script>

<style lang="less" scoped>
  #home{
    width: 100%;
  }

  .container{
    padding-bottom: 96/75rem;
    .course-list{
      li{
        float: left;
        margin: 10/75rem;
        width: 360/75rem;
        min-height: 310/75rem;
        &:nth-of-type(even){
          margin-left: 0;
        }
        .item-img-box{
          width: 360/75rem;
          height: 210/75rem;
          background-color: #000;
          overflow: hidden;
          img{
            display: block;
            width: 100%;
          }
        }
        .item-caption{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 27/75rem;
          padding: 20/75rem 15/75rem;
        }
        .item-name{
          font-size: 22/75rem;
          color: #666;
          display: block;
          padding: 0 15/75rem;
        }
      }
    }
  }
</style>
