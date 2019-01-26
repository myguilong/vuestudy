<template>
  <div class="shop-list">
    <ul>
      <li class="inerrshoplist" v-for="(item,index) in ShopList" :key="index" @click="$router.push('/shops')">
        <a>
          <div class="shop_list_left">
            <img :src="baseImgUrl+item.image_path" alt="暂无图片">
          </div>
          <div class="shop_list_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">{{item.name}}</h4>
              <ul class="shop_detail_ul">
                <li
                  class="supports"
                  v-for="(support, index) in item.supports"
                  :key="index"
                >{{support.icon_name}}</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <div class="rating_section">{{item.rating}}</div>
                <div class="order_section">月售{{item.recent_order_num}}单</div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">卖家自送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥{{item.float_minimum_order_amount}}起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥{{item.float_delivery_fee}}</span>
              </p>
            </section>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import VueResource from "@/resource";
export default {
  data() {
    return {
      ShopList: [],
      baseImgUrl: "http://cangdu.org:8001/img/"
    };
  },
  mounted() {
    this.getShopList();
  },
  methods: {
    getShopList() {
      let latitude = this.$store.state.latitude; // 纬度
      let longitude = this.$store.state.longitude; // 经度
      let addressStr = "latitude=" + latitude + "&" + "longitude" + longitude;
      this.$http.get("/shops?" + addressStr).then(
        responce => {
          this.ShopList = responce.body.data;
        },
        error => {
          console.log("失败");
        }
      );
    }
  }
};
</script>
<style lang="less">
.shop-list {
  padding-bottom: 50px;
  .inerrshoplist {
    height: 80px;
    border-bottom: 1px solid grey;
    padding-top: 15px;
    a{
        color: black;
    }
  }
}
.shop_list_left {
  margin-left: 4%;
  width: 20%;
  float: left;
  height: 60px;
  border: 1px solid gray;
}
.shop_list_right {
  width: 70%;
  float: left;
  height: 80px;
  .shop_detail_header {
    height: 25px;
    h4 {
      float: left;
      text-align: left;
      float: left;
      margin-left: 25px;
      width: 170px;
    }
    ul {
      width: 30%;
      height: 20px;
      float: right;
      li {
        float: left;
        margin-left: 1px;
        border: 1px solid gray;
        height: 20px;
      }
    }
  }
  .shop_rating_order {
    height: 20px;
    .shop_rating_order_left {
      padding-left: 30px;
      float: left;
      div {
        float: left;
      }
    }
  }
  .shop_rating_order_right {
    span {
      border: 1px solid green;
      margin-left: 40px;
      font-size: 12px;
    }
  }
  .shop_delivery_msg {
    text-align: left;
    margin-left: 32px;
    font-size: 12px;
  }
}
</style>
