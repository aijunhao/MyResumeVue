<template>
  <div id="register-body">
    <!-- 步骤条 -->
    <el-steps :active="active" align-center>
      <el-step description="设置您的账户" title="步骤1"></el-step>
      <el-step description="填写您的个人信息" title="步骤2"></el-step>
      <el-step description="编辑您的专业技能" title="步骤3"></el-step>
    </el-steps>
    <!-- 注册主体 -->
    <router-view></router-view>
    <!-- 下一步按钮 -->
    <!-- <el-button @click="pre" style="margin-top: 12px;">上一步</el-button> -->
    <el-button @click="next" style="margin-top: 12px;">下一步</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  methods: {
    // pre() {
    //   if (this.active > 0) this.active--
    //   this.show()
    // },
    next() {
      if (this.active < 3) this.active ++
      this.show()
    },
    show() {
      switch (this.active) {
        case 0:
          this.$router.push({ path: '/register/firststep' })
          break;
        case 1:
          this.$router.push({ path: '/register/secondstep' })
          break;
        case 2:
          this.$router.push({ path: '/register/thirdstep' })
          break;
        default:
          console.log('提交中，请稍等')
          break;
      }
    }
  }
}
</script>

<style>
#register-body {
  width: 80%;
  margin: 50px auto;
  text-align: center;
}
</style>
