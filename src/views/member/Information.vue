<template>
  <div id="information">
    <el-card class="information-mine top" shadow="hover">
      <h1 class="information-title">我的个人信息</h1>
      <!-- 头像框 -->
      <div class="head">
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
      </div>

      <el-form :model="form" class="top" label-width="80px" ref="form">
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="出生年月">
          <el-date-picker placeholder="选择日期" style="width: 100%;" type="date" v-model="form.date"></el-date-picker>
        </el-form-item>
        <el-form-item label="微信">
          <el-input v-model="form.wechat"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.tel"></el-input>
        </el-form-item>
        <el-form-item label="博客">
          <el-input v-model="form.blog"></el-input>
        </el-form-item>
        <el-form-item label="爱好">
          <el-input v-model="form.hobby"></el-input>
        </el-form-item>
      </el-form>
    </el-card>
    <el-button class="button" plain type="danger">提交</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        date: '',
        wechat: '',
        tel: '',
        blog: '',
        hobby: ''
      },
      imageUrl: ''
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
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
    }
  }
}
</script>

<style lang="stylus">
#information
  text-align left
  padding 5px

  .button
    margin-top 50px

  .information-title
    font 20px
    font-weight 200
    margin-top 0

  .top
    margin-top 10px

  .head
    text-align center

  .information-mine
    background white
    padding 10px

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
      width 178px
      height 240px
      line-height 240px
      text-align center

    .avatar
      width 178px
      height 240px
      display block
</style>
