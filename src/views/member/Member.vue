<template>
  <div id="member">
    <!-- 左侧头像卡片 -->
    <div class="hidden-sm-and-down">
      <el-card class="member-info" shadow="hover">
        <!-- 头像上传框 -->
        <el-upload
          :before-upload="beforeAvatarUpload"
          :on-success="handleAvatarSuccess"
          :show-file-list="false"
          action="https://jsonplaceholder.typicode.com/posts/"
          class="avatar-uploader"
        >
          <img :src="imageUrl" class="avatar" v-if="imageUrl">
          <i class="el-icon-plus avatar-uploader-icon" v-else></i>
        </el-upload>
        <h1 class="username">用户名</h1>
      </el-card>
    </div>
    <div class="member-more">
      <el-tabs @tab-click="handleClick" v-model="activeName">
        <el-tab-pane label="总览" name="overview">
          <overview></overview>
        </el-tab-pane>
        <el-tab-pane label="我的简历" name="my-resume">
          <my-resume></my-resume>
        </el-tab-pane>
        <el-tab-pane label="信息管理" name="information">
          <information></information>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
import overview from './Overview.vue'
import information from './Information.vue'
import myresume from './MyResume.vue'
import config from '../../config.js'

export default {
  data() {
    return {
      imageUrl: `${config.PUBLIC_IMAGES}/1.jpg`,
      activeName: 'information'
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    handleClick(tab, event) {
      console.log(tab, event)
    }
  },
  components: {
    overview,
    information,
    'my-resume': myresume
  }
}
</script>

<style lang="stylus">
#member
  display -webkit-flex
  display flex
  justify-content center
  margin-top 40px

  .member-info
    width 200px
    height 240px
    padding-top 20px
    text-align center
    margin-right 10px

    .username
      font-size 18px
      font-family '微软雅黑'
      font-weight 200
      margin-top 20px

    .avatar-uploader .el-upload
      border 1px dashed #d9d9d9
      border-radius 6px
      cursor pointer
      position relative
      overflow hidden

    .avatar-uploader .el-upload:hover
      border-color #409EFF

    .avatar-uploader-icon
      font-size 28px
      color #8c939d
      width 150px
      height 150px
      line-height 150px
      text-align center

    .avatar
      width 150px
      height 150px
      display block

  .member-more
    margin 10px 10px 50px 10px
    width 60%
    min-width 350px
</style>
