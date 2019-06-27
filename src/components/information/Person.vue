<template>
  <div id="personalInformation">
    <!-- 标题及上传 -->
    <div class="center information-header">
      <h1 class="information-title">个人信息</h1>
      <el-button :loading="upload" @click="personUpload()" type="success">保存</el-button>
    </div>
    <div class="information-body">
      <el-form :model="personalInformationForm" class="top" label-width="80px" ref="form">
        <el-form-item label="姓名">
          <el-input v-model="personalInformationForm.name"></el-input>
        </el-form-item>
        <el-form-item label="出生年月">
          <el-date-picker
            placeholder="出生年月"
            style="width: 100%;"
            type="month"
            v-model="personalInformationForm.date"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="微信">
          <el-input v-model="personalInformationForm.wechat"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="personalInformationForm.tel"></el-input>
        </el-form-item>
        <el-form-item label="博客">
          <el-input v-model="personalInformationForm.blog"></el-input>
        </el-form-item>
        <el-form-item label="爱好">
          <el-select
            allow-create
            default-first-option
            filterable
            multiple
            placeholder="请选择爱好"
            style="width: 100%;"
            v-model="personalInformationForm.hobby"
          >
            <el-option
              :key="item.value"
              :label="item.label"
              :value="item.value"
              v-for="item in hobbyOptions"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      upload: false,
      // 个人信息表单
      personalInformationForm: {
        name: '艾俊豪',
        date: '1998-06',
        wechat: '18248602820',
        tel: '18248602820',
        blog: 'https://aijunhao.github.io/',
        hobby: ['宠物', '甜点']
      },
      hobbyOptions: [
        {
          value: 'HTML',
          label: 'HTML'
        },
        {
          value: 'CSS',
          label: 'CSS'
        },
        {
          value: 'JavaScript',
          label: 'JavaScript'
        }
      ]
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    personUpload() {
      this.$message('保存成功')
    }
  }
}
</script>

<style lang="stylus">
#personalInformation
  .center
    display -webkit-flex
    display flex
    justify-content space-between
    align-items center

  .information-header
    margin-bottom 20px

    .information-title
      font 20px
      font-weight 200
      margin 0

    .upload-img
      height 30px
      width 40px

</style>
