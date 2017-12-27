<template>
  <div id="nav">
    <ul>
      <li :class="{'active': current === 0}">
        <router-link to="/home">
          <i class="home"></i>
          <span>课程列表</span>
        </router-link>
      </li>
      <li :class="{'active': current === 1}">
        <router-link to="/record">
          <i class="record"></i>
          <span>学习记录</span>
        </router-link>
      </li>
      <li :class="{'active': current === 2}">
        <router-link to="/mentoring">
          <i class="mentoring"></i>
          <span>我的答疑</span>
        </router-link>
      </li>
      <li :class="{'active': current === 3}">
        <router-link to="/personal">
          <i class="personal"></i>
          <span>个人中心</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "nav",
    props: ['current'],
  }
</script>

<style lang="less">
  #nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 96/75rem;
    background-color: #fff;
    max-width: 600px;
    border-top: 1px solid #d9d9d9;
    ul {
      display: flex;
      display: -webkit-flex;
      height: 100%;
      li {
        flex: 1;
        a {
          width: 100%;
          height: 100%;
          display: flex;
          display: -webkit-flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: column;
          padding: 10/75rem 0;
          i {
            display: block;
            background: no-repeat 0 0;
            -webkit-background-size: cover;
            background-size: cover;
          }
          i.home {
            width: 48/75rem;
            height: 40/75rem;
            background-image: url("../../assets/img/home_icon.png");
          }
          i.record {
            width: 40/75rem;
            height: 40/75rem;
            background-image: url("../../assets/img/record_icon.png");
          }
          i.mentoring {
            width: 41/75rem;
            height: 41/75rem;
            background-image: url("../../assets/img/mentoring_icon.png");
          }
          i.personal {
            width: 40/75rem;
            height: 40/75rem;
            background-image: url("../../assets/img/personal_icon.png");
          }
          span {
            font-size: 20/75rem;
            color: #666;
          }
        }
        &.active {
          i.home {
            background-image: url("../../assets/img/home_icon1.png");
          }
          i.record{
            background-image: url("../../assets/img/record_icon1.png");
          }
          i.mentoring{
            background-image: url("../../assets/img/mentoring_icon1.png");
          }
          i.personal{
            background-image: url("../../assets/img/personal_icon1.png");
          }
          span{
            color: #ca151e;
          }
        }
      }
    }
  }
</style>
