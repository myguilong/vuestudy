<template>
  <div class="shophead">
    <nav class="shop-nav" :style="{backgroundImage:`url(${background})`}">
      <a class="back" @click="$router.back()">
        <i class="el-icon-arrow-left"></i>
      </a>
    </nav>
    <div class="shop-content">
      <img class="content-image shop_img " :src="foodinfo.avatar">
      <div class="header-content">
        <h2 class="content-title">
          <span class="content-tag">
            <span class="mini-tag">品牌</span>
          </span>
          <span class="content-name">{{foodinfo.name}}</span>
        </h2>
        <div class="shop-message">
          <span class="shop-message-detail">{{foodinfo.score}}</span>
          <span class="shop-message-detail">月售{{foodinfo.sellCount}}单</span>
          <span class="shop-message-detail">
            {{foodinfo.description}}
            <span>约{{foodinfo.deliveryTime}}分钟</span>
          </span>
          <span class="shop-message-detail">距离{{foodinfo.distance}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      foodinfo: {},
      background: ""
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      this.$http.get("http://localhost:8080/mock/data.json").then(
        res => {
          this.foodinfo = res.data.info;
        
          this.background = res.data.info.bgImg;
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
</script>
<style lang="less">
.shop-header {
  height: 100%;
  position: relative;
  background: #fff;
  color: #fff;
  overflow: hidden;
}
.shop-nav {
  background-size: cover;
  background-repeat: no-repeatd;
  height: 40px;
  padding: 5px 10px;
  position: relative;
}
.shop-content {
  padding: 30px 20px 5px 20px;
  position: relative;
  display: flex;
  background: #fff;
  text-align: center;
}

.back {
  position: absolute;
  top: 10px;
  left: 0;
}
.icon-arrow_left {
  display: block;
  padding: 5px;
  font-size: 20px;
  color: #fff;
}

.shop_img {
  box-shadow: 0 0 0.4vw 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  top:0px;
  left: 50%;
  width: 66px;
  height: 66px;
  border-radius: 2px;
  margin-left: -33px;
  margin-top: -40px;
}
.header-content {
  flex: 1;
  width: 72%;
}
.content-title {
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  white-space: nowrap;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
}
.content-tag {
  border-radius: 2px;
  background-image: linear-gradient(90deg, #fff100, #ffe339);
  width: 36px;
  height: 18px;
  margin-right: 10px;
  color: #6a3709;
  font-style: normal;
  font-weight: 700;
  position: relative;
}
.content-name {
  font-weight: 700;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
}
.content-icon {
  width: 20px;
  position: relative;
  height: 16px;
}
  .shop-message
  {
        white-space :nowrap;
        height: 12px;
        margin-top :8px;
        font-size: 11px;
        color: #333;
  }
      .shop-message-detail:not(:last-child)::after
      {
          content:" \B7 ";
          opacity:0.2;
      }
      .shop-notice
      {
        width:63%;
        font-size: 11px;
        font-weight: 300;
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 8px auto 10px;
        white-space: nowrap;
      }
</style>

