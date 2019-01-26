<template>
  <div class="nav-banner">
    <div class="swiper-container" v-if="navCategorys.length">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(navCategorys,index) in goodlistArr" v-bind:key="index">
          <a  href="javacript:void()" class="link-food" v-for="(item,index) in navCategorys" :key="index">
            <div class="food_container">
              <img :src="baseImageUrl+item.image_url">
            </div>
            <span>{{item.title}}</span>
          </a>
        </div>
      </div>
    </div>
    
    <img src="./images/msite_back.svg" v-else>
  </div>
</template>
<style lang="less">
.nav-banner {
  margin-top: 50px;
  li {
    float: left;
    width: 100px;
    img {
      width: 100%;
    }
  }
  .swiper-container {
    width: 100%;
    height: 100%;
    .link-food {
      float: left;
      width: 25%;
      color: black;
      img {
        width: 80%;
      }
    }
  }
  a {
    text-decoration: none;
  }
}
</style>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import VueResource from "@/resource";
export default {
  data() {
    return {
      baseImageUrl: "https://fuss10.elemecdn.com",
      navCategorys: []
    };
  },
  mounted() {
    this.getFoodList();
  },
  methods: {
    getFoodList() {
      this.$http.get("/index_category").then(
        response => {
          let a = JSON.parse(response.bodyText);
          this.navCategorys = a.data;
          this.$store.state.categorys = this.navCategorys;
        },
        error => {
          console.log(error);
        }
      );
    },
    showvuexNum() {
      console.log(this.$store.state.categorys);
    }
  },
  computed: {
    goodlistArr() {
      const arr = [];
      //建立一个空的二维数组
      let minArr = [];
      //创建小的数组
      this.navCategorys.forEach(c => {
        if (minArr.length === 8) {
          minArr = [];
        }
        //如果当前小数组已经满了创建一个新的小数组
        if (minArr.length === 0) {
          arr.push(minArr);
        }
        //如果新的数组是空的就保存至大的数组
        minArr.push(c);
        //抛入数组
      });
      return arr;
    }
  },
  watch: {
    navCategorys(value) {
      console.log("a");
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          loop: true, // 可以循环轮播
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  }
};
</script>
