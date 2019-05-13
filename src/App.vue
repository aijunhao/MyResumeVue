<template>
  <div id="app">
    <!-- 头部 -->
    <el-row class="row-bg" justify="space-between" type="flex">
      <!-- 左侧主页图标 -->
      <el-col :lg="3" :md="4" :sm="8" :xl="1" :xs="8">
        <div class="grid-content">
          <router-link tag="span" to="/">简历</router-link>
        </div>
      </el-col>
      <!-- 中间的东西 -->
      <el-col :lg="15" :md="14" :sm="8" :xl="1" :xs="8">
        <div class="grid-content hidden-sm-and-down">一堆我的简历一堆我的简历一堆我的简历一堆我的简历一堆我的简历一堆我的简历一堆我的简历</div>
      </el-col>
      <!-- 右侧账户 -->
      <el-col :lg="4" :md="4" :sm="8" :xl="1" :xs="8">
        <div class="grid-content">
          <template v-if="isLogin">
            <div class="head-username">艾俊豪</div>
            <!-- 账户下拉框，通过 handleCommand 方法来编程式导航 -->
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                <el-button circle icon="el-icon-user"></el-button>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="member">我的会员</el-dropdown-item>
                <el-dropdown-item command="setting">账号设置</el-dropdown-item>
                <el-dropdown-item command="feedback">问题反馈</el-dropdown-item>
                <el-dropdown-item command="logout">退出账户</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
          <template v-else>
            <el-button @click="handleCommand('login')" round type="primary">登录</el-button>
            <el-button @click="handleCommand('register')" round type="success">注册</el-button>
          </template>
        </div>
      </el-col>
    </el-row>
    <!-- 主体 -->
    <router-view></router-view>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'

export default {
  data() {
    return {
      isLogin: false
    }
  },
  methods: {
    // 编程式路由加载
    handleCommand(command) {
      // console.log(command)
      this.$router.push({ name: command})
    }
  }
}
</script>

<style>
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-dropdown-menu__item {
  width: 100px;
  text-align: center;
}
.head-username {
  margin-right: 20px;
}
/* a { text-decoration: none}  */
</style>
