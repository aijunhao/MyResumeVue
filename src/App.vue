<template>
  <div id="app">
    <!-- 头部 -->
    <el-row class="row-bg" justify="space-between" type="flex">
      <!-- 左侧主页图标 -->
      <el-col :lg="3" :md="3" :sm="6" :xl="8" :xs="10">
        <div class="grid-content">
          <router-link tag="span" to="/">简历</router-link>
        </div>
      </el-col>
      <!-- 中间的东西 -->
      <el-col :lg="14" :md="14" :sm="8" :xl="4" :xs="0">
        <div class="grid-content hidden-sm-and-down">一堆我的简历一堆我的简历一堆我的简历一堆我的简历一堆我的简历一堆我的简历一堆我的简历</div>
      </el-col>
      <!-- 右侧账户 -->
      <el-col :lg="5" :md="5" :sm="8" :xl="10" :xs="14">
        <div class="grid-content">
          <template v-if="isLogin">
            <div class="head-username">艾俊豪</div>
            <!-- 账户下拉框，通过 handleCommand 方法来编程式导航 -->
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                <el-button circle icon="el-icon-user"></el-button>
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
            <el-button @click="dialogLoginFormVisible = true" round type="primary">登录</el-button>
            <!-- <el-button @click="handleCommand('register')" round type="success">注册</el-button> -->
            <el-button @click="dialogRegisterFormVisible = true" round type="success">注册</el-button>
          </template>
        </div>
      </el-col>
    </el-row>
    <!-- 注册表单弹出框 -->
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
          <el-input autocomplete="off" type="password" v-model="loginRuleForm.pass"></el-input>
        </el-form-item>
      </el-form>
      <div class="dialog-footer" slot="footer">
        <el-button @click="checkForm('loginRuleForm')" type="primary">登录</el-button>
        <el-button @click="resetForm('loginRuleForm')">重置</el-button>
      </div>
    </el-dialog>
    <!-- 登录表单弹出框 -->
    <el-dialog :visible.sync="dialogRegisterFormVisible" center title="注册" width="450px">
      <el-form
        :model="registerRuleForm"
        :rules="rules"
        class="demo-ruleForm"
        label-width="100px"
        ref="registerRuleForm"
        status-icon
      >
        <el-form-item label="邮箱" prop="email">
          <el-input autocomplete="off" type="email" v-model="registerRuleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-col :span="13">
            <el-input autocomplete="off" placeholder="请使用 1234" v-model="registerRuleForm.code"></el-input>
          </el-col>
          <el-col :span="1" class="line">&nbsp</el-col>
          <el-col :span="10">
            <el-button @click="sendCode()" style="width: 100%;" type="primary">获取验证码</el-button>
          </el-col>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input autocomplete="off" type="password" v-model="registerRuleForm.pass"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input autocomplete="off" type="password" v-model="registerRuleForm.checkPass"></el-input>
        </el-form-item>
      </el-form>
      <div class="dialog-footer" slot="footer">
        <el-button @click="checkForm('registerRuleForm')" type="primary">注册</el-button>
        <el-button @click="resetForm('registerRuleForm')">重置</el-button>
      </div>
    </el-dialog>
    <!-- 主体 -->
    <router-view></router-view>
  </div>
</template>

<script>
import config from './config.js'
import 'element-ui/lib/theme-chalk/display.css'
import { mapState } from 'vuex'

export default {
  data() {
    // 重复密码验证
    var validatePass = (rule, value, callback) => {
      if (value !== this.registerRuleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      // 登录、注册表单显示
      dialogLoginFormVisible: false,
      dialogRegisterFormVisible: false,
      // 注册表单内容
      registerRuleForm: {
        email: '',
        pass: '',
        checkPass: '',
        code: ''
      },
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
        ],
        checkPass: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          {
            min: 8,
            max: 16,
            message: '长度在 8 到 16 个字符',
            trigger: 'blur'
          },
          { validator: validatePass, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 4, max: 4, message: '您输入的验证码长度有误', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 编程式路由加载
    handleCommand(command) {
      // console.log(command)
      this.$router.push({ name: command })
    },
    // 表单检查
    checkForm(formName) {
      console.log(formName)
      switch (formName) {
        case 'registerRuleForm':
          this.$refs[formName].validate(valid => {
            if (valid && this.registerRuleForm.code === '1234') {
              this.register({ email: this.registerRuleForm.email, pass: this.registerRuleForm.pass})
            } else {
              this.$message.error('提交错误，请正确填写注册信息!')
              return false
            }
          })
          break
        case 'loginRuleForm':
          this.$refs[formName].validate(valid => {
            if (valid) {
              this.login({ email: this.loginRuleForm.email, pass: this.loginRuleForm.pass})
            } else {
              this.$message.error('用户名或密码错误，请注意格式!')
              return false
            }
          })
          break
        default:
          break
      }
    },
    login({ email, pass }) {
      console.log('登录成功')
      // this.$axios({
      //   method: 'post',
      //   url: config.EXECUTE_USER_LOGIN,
      //   data: {
      //     email: email, 
      //     pass: pass
      //   }
      // })
      // this.$message('登录成功')
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    // 表单提交并注册
    register({ email, pass }) {
      this.$message('正在访问服务器，请稍等...')
      this.$axios({
        method: 'post',
        url: config.EXECUTE_USER_REGISTER,
        data: {
          email: email,
          pass: pass
        }
      })
        .then(data => {
          console.log(data)
          if (data.status === 200) {
            this.$message({
              message: '账号注册成功！',
              type: 'success'
            })
            this.dialogRegisterFormVisible = false
            this.$store.dispatch('login', {
              email: email,
              pass: pass
            })
          } else if (data.status === 201) {
            this.$message.error(
              `对不起，邮箱：'${email}' 已被注册，请重试！`
            )
          } else {
            this.$message.error('服务器繁忙，请稍后重试！')
          }
        })
        .catch(err => console.log(err))
    },
    // 获取验证码
    sendCode() {
      this.$message({
        message:
          '验证码获取成功，请打开邮箱注意查收（暂未开通，请使用模拟验证码）',
        type: 'success'
      })
    }
  },
  computed: mapState(['isLogin'])
}
</script>

<style lang="stylus">
#app
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
</style>
