<template>
  <div class="inside-chain" v-html="content"></div>
</template>

<script>
  import {conf} from "../assets/js/main"
  export default {
    name: "inside-chain",
    data() {
      return {
        content: ""
      }
    },
    mounted() {
      this.content = conf.getItem("content");
    },
  }
</script>

<style scoped lang="less">
  .inside-chain{
    padding: 30/75rem;
  }
</style>
<style>
  img{
    width: 100%;
  }
</style>
