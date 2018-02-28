<template>
  <ul class="public-footer">
    <li>
      <router-link to="/index">
        <i :class="['icon-home', {'active': active == 1}]"></i>
        <span :class="{'blue': active == 1}">延保介绍</span>
      </router-link>
    </li>
    <li>
      <router-link to="/consult">
        <i :class="['icon-consult', {'active': active == 2}]"></i>
        <span :class="{'blue': active == 2}">咨询购买</span>
      </router-link>
    </li>
    <li>
      <router-link to="/personal">
        <i :class="['icon-person', {'active': active == 3}]"></i>
        <span :class="{'blue': active == 3}">个人中心</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "v-footer",
    props: ["active"],
  }
</script>

<style scoped lang="less">
  .public-footer {
    position: fixed;
    width: 100%;
    max-width: 600px;
    bottom: 0;
    height: 96/75rem;
    border-top: 1px solid #d9e1e8;
    background-color: rgba(255, 255, 255, .9);
    display: flex;
    align-items: center;
    li{
      width: 33.33333333%;
      height: 100%;
      a{
        display: block;
        width: 180/75rem;
        height: 100%;
        margin: 0 auto;
        text-align: center;
      }
      span{
        font-size: 20/75rem;
        color: #aaa;
        &.blue{
          color: #5172c1;
        }
      }
      i{
        display: block;
        width: 50/75rem;
        height: 48/75rem;
        background-repeat: no-repeat;
        background-position: center;
        -webkit-background-size: 50/75rem 48/75rem;
        background-size: 50/75rem 48/75rem;
        box-sizing: content-box;
        margin: 4/75rem auto 0;
        padding-top: 2/75rem;
        &.icon-home{
          background-image: url("../assets/img/icon_home.png");
          &.active{
            background-image: url("../assets/img/icon_home_color.png");
          }
        }
        &.icon-consult{
          background-image: url("../assets/img/icon_consult.png");
          &.active{
            background-image: url("../assets/img/icon_consult_color.png");
          }
        }
        &.icon-person{
          -webkit-background-size: 42/75rem 48/75rem;
          background-size: 42/75rem 48/75rem;
          background-image: url("../assets/img/icon_person.png");
          &.active{
            background-image: url("../assets/img/icon_person_color.png");
          }
        }
      }
    }
  }
</style>
