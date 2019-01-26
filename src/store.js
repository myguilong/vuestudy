import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
import VueResource from 'vue-resource';
Vue.use(Vuex)
Vue.use(VueResource);

export default new Vuex.Store({
  state: {
    latitude: 40.10038, // 纬度
    longitude: 116.36867, // 经度
    address: {}, //地址相关信息对象
    categorys: [], // 食品分类数组
    shops: [], // 商家数组
    userInfo: {}, // 用户信息
    goods: [], // 商品列表
    ratings: [], // 商家评价列表
    info: {}, // 商家信息
    cartFoods: [], // 购物车中食物的列表
    searchShops: [], // 搜索得到的商家列表
    name:"hello"
=======

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

>>>>>>> init
  },
  mutations: {

  },
  actions: {
<<<<<<< HEAD
=======

>>>>>>> init
  }
})
