<template>
  <div class="car-brand">
    <!--品牌列表-->
    <mt-index-list>
      <mt-index-section v-for="(item, index) in carData" :index="String.fromCharCode(index+65)" v-if="item.length > 0">
        <template v-for="i in item">
          <mt-cell v-if="i.type === 0" :title="i.brandName + ' — ' + i.manufacturerName" is-link
                   :to="'/consult?id=' + i.id + '&brandName=' + i.brandName + ' — ' + i.manufacturerName + '&seriesName=' + i.seriesName
                   + '&seriesId=' + i.seriesId "></mt-cell>
          <div v-else-if="i.type === 1"  @click="tips">
            <mt-cell  style="color: #999;"
                     :title="i.brandName + ' — ' + i.manufacturerName">
            </mt-cell>
          </div>
        </template>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
  import {conf} from "../assets/js/main"

  export default {
    name: "car-brand",
    data() {
      return {
        carData: []
      }
    },
    mounted() {
      this.getBrandList();
    },
    methods: {
      getBrandList() {
        conf.loading("加载中...");
        conf.get("/api/screening/brand/list", response => {
          if (response.result === 1) {
            conf.closeLoading();
            for (var i = 0; i < 26; i++) {
              this.carData.push([]);
            }
            var item;
            for (var i = 0; i < response.data.length; i++) {
              item = response.data[i];
              this.carData[item.rank - 1].push(item);
            }
          } else {
            conf.closeLoading();
            conf.toast(response.msg);
          }
        })
      },
      tips() {
        conf.toast("该品牌不承保");
      }
    }
  }
</script>

<style scoped lang="less">

</style>
