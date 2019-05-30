<template>
  <div id="personalInformation">
    <el-card class="information-card" shadow="hover">
      <!-- 标题及上传 -->
      <div class="center information-header">
        <h1 class="information-title">个人信息</h1>
        <el-button type="success" :loading="upload" @click="personUpload()">保存</el-button>
      </div>
      <div class="information-body">
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

        <el-form :model="personalInformationForm" class="top" label-width="80px" ref="form">
          <el-form-item label="姓名">
            <el-input v-model="personalInformationForm.name"></el-input>
          </el-form-item>
          <el-form-item label="出生年月">
            <el-date-picker
              placeholder="出生年月"
              style="width: 100%;"
              type="month"
              v-model="personalInformationForm.date"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="微信">
            <el-input v-model="personalInformationForm.wechat"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="personalInformationForm.tel"></el-input>
          </el-form-item>
          <el-form-item label="博客">
            <el-input v-model="personalInformationForm.blog"></el-input>
          </el-form-item>
          <el-form-item label="爱好">
            <el-select
              allow-create
              default-first-option
              filterable
              multiple
              placeholder="请选择爱好"
              style="width: 100%;"
              v-model="personalInformationForm.hobby"
            >
              <el-option
                :key="item.value"
                :label="item.label"
                :value="item.value"
                v-for="item in hobbyOptions"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>


<script>
export default {
  data() {
    return {
      upload: true,
      personalInformationForm: {
        name: '艾俊豪',
        date: '1998-06',
        wechat: '18248602820',
        tel: '18248602820',
        blog: 'https://aijunhao.github.io/',
        hobby: ['宠物', '甜点']
      },
      imageUrl: '',
      hobbyOptions: [
        {
          value: 'HTML',
          label: 'HTML'
        },
        {
          value: 'CSS',
          label: 'CSS'
        },
        {
          value: 'JavaScript',
          label: 'JavaScript'
        }
      ]
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
    },
    personUpload() {
      this.$message('保存成功')
    }
  }
}
</script>

<style lang="stylus">
#personalInformation
  .information-card
    padding 10px
    margin-top 10px

    .center
      display -webkit-flex
      display flex
      justify-content space-between
      align-items center

    .information-header
      margin-bottom 20px

      .information-title
        font 20px
        font-weight 200
        margin 0

      .upload-img
        height 30px
        width 40px

    .head
      text-align center
      margin 20px

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
