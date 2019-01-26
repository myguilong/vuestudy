<template>
  <div id="app">
<<<<<<< HEAD
    <el-container>
      <router-view></router-view>
      <el-footer v-show="$route.meta.menushow">
        <router-link class="menu_li" to="/index">
          <i class="el-icon-news"></i>
          <span>首页</span>
        </router-link>
        <router-link class="menu_li" to="/search">
          <i class="el-icon-search"></i>
          <span>搜索</span>
        </router-link>
        <router-link class="menu_li" to="/order">
          <i class="el-icon-tickets"></i>
          <span>订单</span>
        </router-link>
        <router-link class="menu_li" to="/user">
          <i class="el-icon-setting"></i>
          <span>用户</span>
        </router-link>
      </el-footer>
    </el-container>
  </div>
</template>

<script>

export default {};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-footer {
  position: fixed;
  bottom: 0;
  background-color: #0085ff;
  color: #333;
  text-align: center;
  line-height: 30px;
  width: 100%;
  z-index: 1000;
}
.menu_li {
    float: left;
    width: 25%;
    color: white;
    text-decoration: none;
    i{
        display:block;
        margin-top: 6px;
        font-size: 20px;
    }
}
=======
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
>>>>>>> init
</style>
