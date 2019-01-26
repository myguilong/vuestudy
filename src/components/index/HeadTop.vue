<template>
  <header>
    <el-row>
      <el-col :span="8">
        <div class="left">
            <slot name="left"></slot>
        </div>
      </el-col>
      <el-col :span="8">
            <p class="ellipsis">{{titile}}</p>  
      </el-col>
      <el-col :span="8">
        <div class="right">
            <slot name="right"></slot>
        </div>
      </el-col>
    </el-row>
  </header>
</template>
<style lang="less">
header {
  width: 100%;
  height: 50px;
  background: #0085ff;
  position: fixed;
  color: white;
  z-index: 1000;
  p {
    text-align: center;
    line-height: 50px;
    font-size: 20px;
  }
  .left{
      height: 50px;
      font-size: 26px;
      line-height: 50px;
      
      }
  .right{
      height: 50px;
      font-size: 1.2em;
      line-height: 50px;
      
  }    
}
</style>
<script>
export default {
  props: {
    titile: String
  }
};
</script>
