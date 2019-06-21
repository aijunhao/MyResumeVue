<template>
  <div id="projectInformation">
    <!-- 标题及上传 -->
    <div class="center information-header">
      <h1 class="information-title">项目经历</h1>
      <el-button :loading="upload" @click="projectUpload()" type="success">保存</el-button>
    </div>
    <div class="information-body"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      upload: true
    }
  },
  methods: {
    projectUpload() {
      this.$message('保存成功')
    }
  }
}
</script>

<style lang="stylus">
#projectInformation
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
</style>
