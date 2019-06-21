<template>
  <div id="app">
    <!-- 头部 -->
    <el-row class="row-bg" justify="space-between" type="flex">
      <!-- 左侧主页图标 -->
      <el-col :lg="3" :md="3" :sm="6" :xl="8" :xs="10">
        <div class="grid-content">
          <router-link tag="span" to="/">
            <img class="logo" src="./assets/myLogo.png">
          </router-link>
        </div>
      </el-col>
      <!-- 中间的东西 -->
      <el-col :lg="14" :md="14" :sm="8" :xl="4" :xs="0">
        <div class="grid-content hidden-sm-and-down menu">
          <span>网站介绍</span>
          <el-divider direction="vertical"></el-divider>
          <span>简历大厅</span>
          <el-divider direction="vertical"></el-divider>
          <router-link to="/forum">论坛中心</router-link>
          <el-divider direction="vertical"></el-divider>
          <router-link to="/aboutme">关于作者</router-link>
        </div>
      </el-col>
      <!-- 右侧账户 -->
      <el-col :lg="5" :md="5" :sm="8" :xl="10" :xs="14">
        <div class="grid-content">
          <template v-if="isLogin">
            <div class="head-username">{{ user.User_Name }}</div>
            <!-- 账户下拉框，通过 handleCommand 方法来编程式导航 -->
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                <img class="head-img" src="http://120.79.254.54:3001/public/images/1.jpg">
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="member">个人中心</el-dropdown-item>
                <el-dropdown-item command="setting">账号设置</el-dropdown-item>
                <el-dropdown-item command="feedback">问题反馈</el-dropdown-item>
                <el-dropdown-item command="logout">退出账户</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
          <template v-else>
            <login></login>
            <register></register>
          </template>
        </div>
      </el-col>
    </el-row>
    <!-- 主体 -->
    <router-view></router-view>
    <!-- 页脚，底部备案号 -->
    <div class="app-footer">
      <p>
        <span>Design by: 艾俊豪</span>
        <span>&nbsp&nbsp</span>
        <span>备案号：浙ICP备18031478号-1</span>
      </p>
    </div>
  </div>
</template>

<script>
import login from './components/Login.vue'
import register from './components/Register.vue'
import config from './config.js'
import 'element-ui/lib/theme-chalk/display.css'
import { mapState } from 'vuex'

export default {
  components: {
    login,
    register
  },
  methods: {
    // 编程式路由加载
    handleCommand(command) {
      if (command === 'logout') {
        this.logout()
        return
      }
      this.$router.push({ name: command })
    },
    // 退出
    logout() {
      this.$message('退出成功')
      // 清空 sessionStorage
      sessionStorage.setItem('User_Id', '')
      sessionStorage.setItem('User_Name', '')
      // 清空 vuex
      this.$store.commit('SETUSER', null)
    }
  },
  computed: {
    ...mapState(['user']),
    isLogin() {
      if (
        sessionStorage.getItem('User_Name') &&
        sessionStorage.getItem('User_Id')
      ) {
        console.log(sessionStorage.getItem('User_Id'))
        // 将用户名和 ID 放入 vuex
        this.$store.commit('SETUSER', {
          User_Id: sessionStorage.getItem('User_Id'),
          User_Name: sessionStorage.getItem('User_Name')
        })
      } else {
        this.$store.commit('SETUSER', null)
      }
      return this.$store.getters.isLogin
    }
  }
}
</script>

<style lang="stylus">
#app
  min-width 350px

  .logo
    height 44px

  .menu
    height 48px

    >a
      text-decoration none
      color #000

  .el-col
    border-radius 4px

  .row-bg
    padding 10px 0
    background-color #f9fafc

    .grid-content
      border-radius 4px
      min-height 36px
      display -webkit-flex
      justify-content center
      align-items center

  .head-username
    margin-right 20px

  .head-img
    width 44px
    height 44px
    border-radius 50%

  .app-footer
    height 60px
    line-height 60px
    font-size 14px
    background-color white
    text-align center
</style>
