<template>
    <div class="grid-container" style="width:94%;">
      <div class="error-page">
        <div v-if="error.statusCode === 404">
          <h1>
            <i class="iconfont icon-chucuo"></i>
            &nbsp;
            <span>您访问的页面不存在...</span>
          </h1>
          <el-button type="info" plain @click="goHome">回到首页</el-button>
        </div>
        <div v-else>
          <h1><i class="iconfont icon-chucuo"></i>&nbsp;未知的错误发生了...</h1>
          <el-button type="primary" plain  @click="reflash">刷新页面</el-button>
          <el-button type="info" plain @click="goHome">回到首页</el-button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout:'default',
  methods:{
    reflash(){
      this.$router.go(0)
    },
    goHome(){
      this.$router.push('/')
    }
  },
  mounted(){
    $(".error-page").css('height',document.documentElement.clientHeight-70-236)
    // if(this.error.statusCode){
    //   this.$router.push('/')
    // }
  }
}
</script>
<style lang="less">
  .error-page{
    min-height:600px; 
    color:#333;
    text-align: center;
    padding-top:20%;
    div{
      h1{
        font-size:38px;
      }
      .el-button{
        width:100px;
        height:48px;
        padding:0!important;
        margin-top:40px;
      }
      .iconfont{
        font-size:40px;
      }
    }
  }
</style>