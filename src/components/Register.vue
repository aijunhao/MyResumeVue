<template>
  <div id="register">
    <el-button @click="dialogRegisterFormVisible = true" round type="success">注册</el-button>
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
          <el-input
            autocomplete="off"
            show-password
            type="password"
            v-model="registerRuleForm.pass"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            autocomplete="off"
            show-password
            type="password"
            v-model="registerRuleForm.checkPass"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="dialog-footer" slot="footer">
        <el-button @click="checkForm('registerRuleForm')" type="primary">注册</el-button>
        <el-button @click="resetForm('registerRuleForm')">重置</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>
import config from '../config.js'

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
      dialogRegisterFormVisible: false,
      // 注册表单内容
      registerRuleForm: {
        email: '',
        pass: '',
        checkPass: '',
        code: ''
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
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    // 注册
    register(email, pass) {
      this.$message('正在访问服务器，请稍等...')
      this.$axios({
        method: 'post',
        url: config.EXECUTE_USER_REGISTER,
        data: {
          email: email,
          pass: pass
        }
      })
        .then(results => {
          if (results.status === 200) {
            this.$message({
              message: '账号注册成功！正在登录，请稍等！',
              type: 'success'
            })
            this.dialogRegisterFormVisible = false
            // 注册成功，后端直接登录
            // 保存到 session
            sessionStorage.setItem('User_Id', results.data.User_Id)
            sessionStorage.setItem('User_Name', results.data.User_Name)
            // 存储到 vuex
            this.$store.dispatch('setUser', {
              User_Id: results.data.User_Id,
              User_Name: results.data.User_Name
            })
          } else if (data.status === 201) {
            this.$message.error(`对不起，邮箱：'${email}' 已被注册，请重试！`)
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
    },
    // 表单检查
    checkForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid && this.registerRuleForm.code === '1234') {
          this.register(this.registerRuleForm.email, this.registerRuleForm.pass)
        } else {
          this.$message.error('提交错误，请正确填写注册信息!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="stylus">
#register
  margin 0 5px
</style>
