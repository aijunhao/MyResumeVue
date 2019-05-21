<template>
  <div id="member">
    <el-container>
      <!-- 左侧导航 -->
      <el-aside>
        <div class="member-info">
          <!-- 头像上传框 -->
          <el-upload
            :before-upload="beforeAvatarUpload"
            :on-success="handleAvatarSuccess"
            :show-file-list="false"
            action
            class="avatar-uploader"
          >
            <img :src="imageUrl" class="avatar" v-if="imageUrl">
            <i class="el-icon-plus avatar-uploader-icon" v-else></i>
          </el-upload>
          <h1 class="username">用户名</h1>
        </div>
      </el-aside>
      <el-main>
        <div>
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
      </el-main>
    </el-container>
  </div>
</template>

<script>
import overview from '../components/member/Overview.vue'
import information from '../components/member/Information.vue'
import myresume from '../components/member/MyResume.vue'

export default {
  data() {
    return {
      imageUrl: 'http://127.0.0.1:3001/public/images/1.jpg',
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
  margin 20px auto
  width 1000px

  .member-info
    background #fff
    width 250px
    height 300px
    border-radius 10px
    padding-top 20px

  .username
    font-size 18px
    font-family '微软雅黑'
    font-weight 200
    margin-top 20px

  .el-aside
    color #333
    text-align center
    width 250px
    padding 20px 0

  .el-main
    color #333
    text-align center

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
    width 200px
    height 200px
    line-height 200px
    text-align center

  .avatar
    width 200px
    height 200px
    display block
</style>
