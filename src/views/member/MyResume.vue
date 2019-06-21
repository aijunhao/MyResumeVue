<template>
  <div id="myresume">
    <!-- 搜索框 -->

    <!-- 我的简历 -->
    <div>
      <el-card class="myresume-box" shadow="hover">
        <div class="flex-start">
          <!-- 左侧大图标 -->
          <div class="myresume-img-box center">
            <img src="../../assets/word.png">
          </div>
          <!-- 右侧描述内容 -->
          <div class="myresume-box-main">
            <h1 class="myresume-box-title">Web前端工程师_艾俊豪</h1>
            <div class="flex-start myresume-box-description">
              <div class="myresume-level">中</div>
              <div class="myresume-score">简历评分：66分</div>
              <div class="myresume-type">程序员模板</div>
            </div>
            <div class="space-between myresume-box-bottom">
              <span class="time">上次编辑时间：2019年5月20日 12:12</span>
              <div class="myresume-box-icon">
                <i class="el-icon-edit"></i>
                <i class="el-icon-share"></i>
                <i class="el-icon-delete"></i>
                <i class="el-icon-star-off"></i>
                <i class="el-icon-lock"></i>
              </div>
            </div>
          </div>
        </div>
      </el-card>
    </div>

    <!-- 新建简历 -->
  </div>
</template>

<style lang="stylus">
#myresume
  .myresume-box
    padding 10px

  .space-between
    display flex
    display -webkit-flex
    justify-content space-between

  .flex-start
    display flex
    display -webkit-flex
    justify-content flex-start

  .center
    display flex
    display -webkit-flex
    align-items center
    justify-content center

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
    margin-left 20px
    height 100px
    width 100%

    .myresume-box-title
      font-size 18px
      font-weight 600
      margin 0

    .myresume-box-description
      margin-top 10px

      >div
        margin-right 5px
        padding 3px 10px
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
      margin-top 20px

    .myresume-box-icon > img
      width 20px
      height 20px

    .time
      font-size 12px
</style>
