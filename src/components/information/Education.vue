<template>
  <div id="educationInformation">
    <el-card class="information-card" shadow="hover">
      <!-- 标题及上传 -->
      <div class="center information-header">
        <h1 class="information-title">教育经历</h1>
        <el-button type="success" :loading="upload" @click="educationUpload()">保存</el-button>
      </div>
      <div class="information-body"></div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      upload: false
    }
  },
  methods: {
    educationUpload() {
      this.$message('保存成功')
    }
  }
}
</script>

<style lang="stylus">
#educationInformation
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
</style>
