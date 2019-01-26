<template>
  <div>
    <shop-header></shop-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/shops/shopsfoods">点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shops/shopsracting">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shops/shopsinfo">简介</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<style lang="stylus">
 .tab
    height 40px
    line-height 40px
    background #fff
    bottom-border-1px (rgba(7, 17, 27, 0.1))
    .tab-item
      float left
      width: 33.33333%
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      a
        display block
        position relative
        &.router-link-active
          color #02a774
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 35px
            height 2px
            transform translateX(-50%)
            background #02a774
</style>
<script>
import VueResource from "@/resource";
import shopHeader from "../components/shop/shopHead";

export default {
  mounted() {
    this.getMockce();
  },
  methods: {
    getMockce() {
      this.$http.get("http://localhost:8080/mock/data.json").then(
        res => {
         
        },
        err => {
          console.log("失败");
        }
      );
    }
  },
  components: {
    shopHeader
  }
};
</script>