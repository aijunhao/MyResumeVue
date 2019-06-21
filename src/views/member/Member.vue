<template>
  <div id="member">
    <!-- 左侧头像卡片 -->
    <div class="hidden-sm-and-down">
      <el-card class="member-info" shadow="hover">
        <img :src="imageUrl" class="member-header">
        <div class="member-info-box">
          <p class="username">
            用户名
            <span>普通会员</span>
          </p>
          <p>邮箱：117@qq.com</p>
          <p>他很懒，什么都没有留下...</p>
        </div>
      </el-card>
    </div>
    <!-- 右侧详细信息 -->
    <div class="member-more">
      <el-menu :default-active="$route.path" mode="horizontal" background-color="#f2f2f2" router>
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
      imageUrl: `${config.PUBLIC_IMAGES}/1.jpg`,
    }
  },
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

      .username
        font-size 18px
        font-family '微软雅黑'
        font-weight 100
        margin-top 10px

  .member-more
    margin 10px 10px 50px 10px
    width 60%
    min-width 350px

#member-view
  padding 15px 5px
</style>
