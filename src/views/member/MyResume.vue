<template>
  <div id="myresume">
    <!-- 头部 -->
    <div class="myresume-header flex-box horizontal-center space-between">
      <span>当前共有 {{ resumeList.length }} 份简历</span>
      <el-button type="primary">导入简历</el-button>
    </div>

    <!-- 我的简历 -->
    <ul class="myresume-list">
      <li :key="i" v-for="(resume, i) in resumeList">
        <el-card shadow="hover">
          <div class="flex-box flex-start">
            <!-- 左侧大图标 -->
            <div class="myresume-img-box flex-box horizontal-center vertical-center">
              <img src="../../assets/word.png">
            </div>
            <!-- 右侧描述内容 -->
            <div class="myresume-box-main">
              <h1 class="myresume-box-title">{{ resume.title }}</h1>
              <div class="flex-box flex-start myresume-box-description">
                <span class="myresume-level">{{ resume.level }}</span>
                <span class="myresume-score">完整度:{{ resume.score }}%</span>
                <span class="myresume-type">{{ resume.type }}</span>
              </div>
              <div class="flex-box space-between myresume-box-bottom">
                <span class="time">{{ resume.time }}</span>
                <span class="myresume-box-icon">
                  <i @click="myresumeEdit()" class="el-icon-edit"></i>
                  <i @click="myresumeShare()" class="el-icon-share"></i>
                  <i @click="myresumeDel(i)" class="el-icon-delete"></i>
                </span>
              </div>
            </div>
          </div>
        </el-card>
      </li>
    </ul>

    <!-- 新建简历 -->
    <div class="flex-box myresume-footer">
      <el-button type="danger" class="new-resume" @click="newResume()"><i class="el-icon-plus"/> 新建简历</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resumeList: [
        {
          title: 'Web前端工程师_艾俊豪0',
          level: '中',
          score: 66,
          type: '程序员模板',
          time: '2019/05/20 12:12'
        },
        {
          title: 'Web前端工程师_艾俊豪1',
          level: '中',
          score: 66,
          type: '程序员模板',
          time: '2019/05/20 12:12'
        }
      ]
    }
  },
  methods: {
    /**
     * 编辑选中简历模板
     */
    myresumeEdit() {
      this.$message('点击了编辑')
    },
    /**
     * 分享选中简历模板
     */
    myresumeShare() {
      this.$message('分享')
    },
    /**
     * 删除选中简历模板
     */
    myresumeDel(index) {
      this.resumeList.splice(index, 1)
      this.$message({
        message: '已删除该模板，可在回收站恢复文件',
        type: 'warning'
      })
    },
    /**
     * 新建简历
     */
    newResume() {
      this.$message('新建简历')
    }
  }
}
</script>

<style lang="stylus">
#myresume
  .flex-box
    display flex
    display -webkit-flex

  .space-between
    justify-content space-between

  .flex-start
    justify-content flex-start

  .horizontal-center
    align-items center

  .vertical-center
    justify-content center

  .myresume-header
    height 60px
    padding 0 10px
    background #fff

  .myresume-list
    list-style none
    padding 0
    margin 0

    >li
      margin 5px 0

      .myresume-img-box
        height 98px
        width 98px
        min-width 100px
        border-radius 10px
        border 1px solid #bfbfbf

        >img
          height 64px
          height 64px

      .myresume-box-main
        margin-left 15px
        height 100px
        width 100%

        .myresume-box-title
          font-size 15px
          font-weight 600
          margin 0

        .myresume-box-description
          margin-top 10px

          >span
            margin-right 3px
            padding 3px 5px
            background-color yellow
            border-radius 4px
            font-size 12px

          .myresume-level
            background-color #9CCDFF

          .myresume-score
            background-color #F5C6C6

          .myresume-type
            background-color #FFFC9E

        .myresume-box-bottom
          margin-top 25px
          align-items center

          .myresume-box-icon > i
            margin-left 5px

          .time
            font-size 12px

  .myresume-footer
    justify-content flex-end

    .new-resume
      margin-top 10px
      width 250px
      border-radius 10px
      font-size 18px
      line-height 18px
</style>
