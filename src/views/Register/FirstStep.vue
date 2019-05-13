<template>
  <div class="first-step">
    <div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        class="demo-ruleForm"
        label-width="100px"
        ref="ruleForm"
        status-icon
      >
        <el-form-item label="邮箱" prop="email">
          <el-input autocomplete="off" type="email" v-model="ruleForm.email"></el-input>
        </el-form-item>
        <!-- <el-form-item label="手机号" prop="tel">
          <el-input autocomplete="off" type="tel" v-model="ruleForm.tel"></el-input>
        </el-form-item>-->
        <el-form-item label="密码" prop="pass">
          <el-input autocomplete="off" type="password" v-model="ruleForm.pass"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input autocomplete="off" type="password" v-model="ruleForm.checkPass"></el-input>
        </el-form-item>
        <el-button @click="checkForm('ruleForm')" type="primary">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form>
    </div>
    {{ $store.state.form }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        email: '',
        pass: '',
        checkPass: ''
      },
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
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        checkPass: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // ...mapActions({
    //   submitForm: "register"
    // }),
    checkForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
          console.log(this.ruleForm)
          this.register()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    register() {
      this.$store.dispatch('register', {
        email: this.ruleForm.email,
        pass: this.ruleForm.pass
      })
    }
  }
  // computed: {
  //   // 绑定 vuex 中的 form 数据
  //   ruleForm: {
  //     get () {
  //       return this.$store.state.form
  //     },
  //     set (value) {
  //       this.$store.commit('updateForm', value)
  //     }
  //   }
  // },
}
</script>

<style>
.first-step {
  margin: 50px auto;
  width: 500px;
}
</style>
