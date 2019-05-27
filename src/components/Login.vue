<template>
  <div id="login">
    <el-button @click="dialogLoginFormVisible = true" round type="primary">登录</el-button>
    <!-- 登录表单弹出框 -->
    <el-dialog :visible.sync="dialogLoginFormVisible" center title="登录" width="450px">
      <el-form
        :model="loginRuleForm"
        :rules="rules"
        class="demo-ruleForm"
        label-width="100px"
        ref="loginRuleForm"
        status-icon
      >
        <el-form-item label="邮箱" prop="email">
          <el-input autocomplete="off" type="email" v-model="loginRuleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input autocomplete="off" show-password type="password" v-model="loginRuleForm.pass"></el-input>
        </el-form-item>
      </el-form>
      <div class="dialog-footer" slot="footer">
        <el-button @click="checkForm('loginRuleForm')" type="primary">登录</el-button>
        <el-button @click="resetForm('loginRuleForm')">重置</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import config from '../config.js'

export default {
  data() {
    return {
      dialogLoginFormVisible: false,
      // 登录表单内容
      loginRuleForm: {
        email: '',
        pass: ''
      },
      // 表单验证规则
      rules: {
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: 'blur'
          }
        ],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 表单检查
    checkForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login(this.loginRuleForm.email, this.loginRuleForm.pass)
        } else {
          this.$message.error('用户名或密码错误，请注意格式!')
          return false
        }
      })
    },
    // 登录
    login(email, pass) {
      this.$axios({
        method: 'post',
        url: config.EXECUTE_USER_LOGIN,
        data: {
          email: email,
          pass: pass
        }
      })
        .then(results => {
          console.log(results)
          if (results.status === 200) {
            // 登录成功
            this.$message({
              message: `登录成功，欢迎您：${results.data.User_Name}`,
              type: 'success'
            })
            // 取消登录对话框
            this.dialogLoginFormVisible = false
            // 保存到 session
            sessionStorage.setItem('User_Id', results.data.User_Id)
            sessionStorage.setItem('User_Name', results.data.User_Name)
            // 存储到 vuex
            this.$store.dispatch('setUser', {
              User_Id: results.data.User_Id,
              User_Name: results.data.User_Name
            })
          } else {
            this.$message.error('用户名或密码错误，请重试！')
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="stylus">
#login
  margin 0 5px
</style>