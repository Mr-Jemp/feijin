<template>
  <div id="suggest">
    <div class="public-header">
      <div class="search-wrap">
        <i class="search-icon"></i>
        <input type="text" placeholder="搜索课程名称"/>
      </div>
    </div>

    <div class="container">
      <div v-if="!existList" class="no-course">
        <img src="../../assets/img/search_img1.png" alt="">
        <p class="tips">没有找到相关课程</p>
      </div>
      <ul v-else class="course-list clearFix">
        <li>
          <router-link to="/cover">
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
    </div>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        existList: true,
      }
    }
  }
</script>

<style lang="less" scoped>
  .public-header {
    .search-wrap {
      display: flex;
      align-items: center;
      i.search-icon {
        display: inline-block;
        width: 27/75rem;
        height: 27/75rem;
        background: url("../../assets/img/search_icon.png") 0 0 no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
        margin-right: 10/75rem;
        margin-left: 244/75rem;
      }
      input {
        width: 180/75rem;
        height: 100%;
        color: #fff;
        line-height: normal;
        font-size: 30/75rem;
        &::-webkit-input-placeholder {
          color: #fff;
          opacity: .8;
        }
        /* 使用webkit内核的浏览器 */
        &::-moz-placeholder {
          color: #fff;
          opacity: .8;
        }
      }
    }
  }

  .container {
    text-align: center;
    .no-course {
      padding-top: 250/75rem;
      img {
        width: 298/75rem;
      }
      .tips {
        padding: 50/75rem 0;
        font-size: 30/75rem;
        color: #666;
      }
    }
  }

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
</style>
