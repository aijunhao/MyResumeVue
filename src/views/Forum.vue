<template>
  <div id="forum">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>论坛中心</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 评论区 -->
    <el-card class="comment" shadow="never">
      <!-- 评论框 -->
      <comment></comment>
      <!-- 评论列表 -->
      <commentlist></commentlist>
    </el-card>
  </div>
</template>

<script>
import comment from '../components/Comment.vue'
import commentlist from '../components/CommentList.vue'

export default {
  components: {
    comment, commentlist
  }
}
</script>

<style lang="stylus">
#forum
  width 70%
  min-width 350px
  margin 0 auto

  .breadcrumb 
    margin 20px
    font 20px
</style>
