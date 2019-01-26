<template>
  <div>
    <head-top :titile="myaddress">
      <a slot="left">
        <i class="el-icon-search"></i>
      </a>
      <a slot="right">
          <span>登陆|注册</span>
      </a>
    </head-top>
    <my-banner></my-banner>
     <el-row>
      <el-col :span="24">
        <p class="fujin"><i class="el-icon-document"></i>附近商家</p>
      </el-col>
    </el-row>
   <shop-list></shop-list>
  </div>
</template>
<style lang="less"> 
.fujin{
    border-top: 1px solid gainsboro;
    margin-top: 5px;
    text-align: left;
    text-indent: 10px;
    line-height: 30px;
}
</style>
<script>
import myBanner from "../components/index/banner";
import headTop from "../components/index/HeadTop";
import shopList from "../components/index/shoplist";
import VueResouce from  "@/resource"//#endregion
export default {
    data(){
        return {
              myaddress:''
        }
    },
  components: {
    myBanner,
    headTop,
    shopList
  },
  mounted(){
      this.getAddress();
  },
  methods:{
      getAddress(){
          let  latitude= this.$store.state.latitude; // 纬度
          let longitude= this.$store.state.longitude // 经度
          this.$http.get('/position/'+latitude+','+longitude).then((responce)=>{
             this.myaddress=responce.body.data.name;
          },(error)=>{
              console.log('失败')
          });

      }
  }
};
</script>

