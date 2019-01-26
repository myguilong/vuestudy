<template>
    <div class="goods">
        <div class="menu-wrapper">
        <ul>
          <!--current-->
          <li class="menu-item" v-for="(good, index) in goods" :key="index"
              :class="{current: index===currentIndex}" @click="clickMenuItem(index)">
            <span class="text bottom-border-1px">
              <img class="icon" :src="good.icon" v-if="good.icon">
              {{good.name}}
            </span>
          </li>
        </ul>
      </div>
    </div>
</template>
<style lang="stylus" scoped>

</style>
<script>
import VueResource from "@/resource";
export default {
    data(){
        return {
          goods:{},
        }
    },
    mounted(){
      this.reqFoodslist();
    },
    methods:{
        reqFoodslist(){
         this.$http.get("http://localhost:8080/mock/data.json").then(res=>{
             this.goods=res.data.goods
         },err=>{
                 console.log(err);
         })
        }
    }
}
</script>
