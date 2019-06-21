<template>
  <div id="comment-list">
    <!-- 查询头部 -->
    <div class="comment-list-header">
      <div class="comment-select">
        <el-input placeholder="输入关键字查询" prefix-icon="el-icon-search" v-model="input"></el-input>
      </div>
      <el-dropdown @command="handleCommand">
        <el-button type="primary">
          {{ select }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="1">最新评论</el-dropdown-item>
          <el-dropdown-item command="2">最早评论</el-dropdown-item>
          <el-dropdown-item command="3">人气评论</el-dropdown-item>
          <el-dropdown-item command="4">与我相关</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- 评论主体，vue-infinite-scroll无限加载组件 -->
    <div
      class="comment-list-body"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
      v-infinite-scroll="loadMore"
    >
      <ul class="comment-list">
        <li :key="i" v-for="(item, i) in comments">
          <div class="comment">
            <img :src="item.img_url" class="portrait">
            <div class="comment-content">
              <h1>{{ item.user_name }}</h1>
              <p>{{ item.content }}</p>
              <div class="comment-content-footer">
                <span>{{ item.time }}</span>
                <span>{{ item.thumbs }} 人赞</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import config from '../config.js'

export default {
  data() {
    return {
      // 查看类型
      select: '最新评论',
      // 当前页码
      currentPage: 1,
      // 无限滚动繁忙
      busy: false,
      // 输入查询
      input: '',
      // 评论内容
      comments: [
        {
          user_name: '玫瑰与剑匣',
          img_url: `${config.PUBLIC_IMAGES}/1.jpg`,
          content:
            '测试中，请勿打扰。测试中，请勿打扰。测试中，请勿打扰。测试中，请勿打扰。测试中，请勿打扰。测试中，请勿打扰。测试中，请勿打扰。测试中，请勿打扰。测试中，请勿打扰。',
          time: new Date().toLocaleString(),
          thumbs: 100
        },
        {
          user_name: '玫瑰与剑匣',
          img_url: `${config.PUBLIC_IMAGES}/1.jpg`,
          content: '测试中，请勿打扰。',
          time: new Date().toLocaleString(),
          thumbs: 100
        }
      ]
    }
  },
  methods: {
    handleCommand(command) {
      this.$message(command)
      switch (command) {
        case '1':
          this.select = '最新评论'
          break
        case '2':
          this.select = '最早评论'
          break
        case '3':
          this.select = '人气评论'
          break
        case '4':
          this.select = '与我相关'
          break
        default:
          break
      }
    },
    // 加载更多
    loadMore: function() {
      // 开启繁忙模式
      this.busy = true
      setTimeout(() => {
        // 添加一个新的
        this.comments.push({
          user_name: '玫瑰与剑匣',
          img_url: `${config.PUBLIC_IMAGES}/1.jpg`,
          content: '测试中，请勿打扰。',
          time: new Date().toLocaleString(),
          thumbs: 100
        })
        // 关闭繁忙模式
        this.busy = false
      }, 1000)
    }
  }
}
</script>

<style lang="stylus">
#comment-list
  .comment-list-header
    margin 20px 5px
    display -webkit-flex
    display flex
    justify-content space-between

    .comment-select
      max-width 150px

  .comment-list-body
    .comment-list
      padding 0px
      margin 0px
      list-style none

    .comment
      border-top 1px solid #ccc
      margin-top 5px
      display flex
      display -webkit-flex
      justify-content space-between

      .portrait
        width 60px
        height 60px
        margin-top 20px
        margin-left 10px
        border-radius 50%

      .comment-content
        width 100%
        margin-left 10px
        padding 5px

        > h1
          font-size 16px
          margin 5px

        > p
          margin 5px

        .comment-content-footer
          display flex
          display -webkit-flex
          justify-content space-between
          font-size 12px
          margin 5px
          color #ccc

  .comment-list-footer
    text-align center
</style>
