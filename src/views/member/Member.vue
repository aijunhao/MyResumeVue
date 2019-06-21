<template>
  <div id="member">
    <!-- 左侧头像卡片 -->
    <div class="hidden-sm-and-down">
      <el-card class="member-info" shadow="hover">
        <img :src="userMessage.imageUrl" class="member-header">
        <div class="member-info-box">
          <p class="member-username">{{ userMessage.userName }}</p>
          <p class="member-level">{{ level[userMessage.level] }}会员</p>
          <p class="member-email">邮箱：{{ userMessage.email }}</p>
          <p class="member-message">留言：{{ userMessage.message }}</p>
        </div>
      </el-card>
    </div>
    <!-- 右侧详细信息 -->
    <div class="member-more">
      <el-menu :default-active="$route.path" background-color="#f2f2f2" mode="horizontal" router>
        <el-menu-item index="/member/overview">全局总览</el-menu-item>
        <el-menu-item index="/member/myresume">我的简历</el-menu-item>
        <el-menu-item index="/member/information">信息管理</el-menu-item>
      </el-menu>
      <div id="member-view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
import config from '../../config.js'

export default {
  data() {
    return {
      level: ['普通', '白银', '黄金', '铂金'],
      userMessage: {
        imageUrl: `${config.PUBLIC_IMAGES}/1.jpg`,
        level: 1,
        userName: '玫瑰与剑匣',
        email: '1172949809@qq.com',
        message: '留言：他很懒，什么都没有留下...'
      }
    }
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
    text-align center
    margin-right 10px

    .member-header
      width 200px
      height 200px
      border-radius 5%

    .member-info-box
      width 200px

      >p
        margin 5px
        font-size 14px

      .member-username
        font-size 20px
        font-family '微软雅黑'
        font-weight 100

      .member-email, .member-message
        text-align left

  .member-more
    margin 10px 10px 50px 10px
    width 60%
    min-width 350px

#member-view
  padding 15px 5px
</style>
