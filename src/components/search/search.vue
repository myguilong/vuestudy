<template>
  <header>
    <el-row>
      <el-col :span="24">
        <div class="search_wrap">
            <i class="el-icon-search"></i>
          <input type="text" placeholder="请输入内容">
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
  color: white;
  .search_wrap{
    width: 90%;
    height: 30px;
    margin-top: 6px;
    i{
        position: absolute;
        left: 12%;
        color: gray;
        top:35%
    }
    input {
      border-radius: 15px;
      outline: none;
      text-indent: 40px;
      border: none;
       width: 80%;
       height: 30px;
    }
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
