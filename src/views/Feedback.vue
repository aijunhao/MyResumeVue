<template>
  <div id="feedback">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>问题反馈</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="comment" shadow="never">
      <!-- 评论框 -->
      <comment></comment>
      <!-- 评论列表 -->
      <comment-list></comment-list>
    </el-card>
  </div>
</template>

<script>
import comment from '../components/Comment.vue'
import commentlist from '../components/CommentList.vue'

export default {
  components: {
    comment,
    'comment-list': commentlist
  }
}
</script>

<style lang="stylus">
#feedback
  width 70%
  min-width 350px
  margin 0 auto

  .breadcrumb 
    margin 20px
    font 20px
</style>
