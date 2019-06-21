<template>
  <div id="educationInformation">
    <!-- 标题及上传 -->
    <div class="center information-header">
      <h1 class="information-title">教育经历</h1>
      <el-button :loading="upload" @click="educationUpload()" type="success">保存</el-button>
    </div>
    <div class="information-body">
      <!-- 添加表单 -->
      <el-form :model="newEducation" label-width="80px">
        <el-form-item label="起始年月">
          <el-col :span="11">
            <el-date-picker
              placeholder="开始年月"
              style="width: 100%;"
              type="month"
              v-model="newEducation.start"
              value-format="yyyy/MM"
            ></el-date-picker>
          </el-col>
          <el-col :span="2" class="line">&nbsp</el-col>
          <el-col :span="11">
            <el-date-picker
              placeholder="结束年月"
              style="width: 100%;"
              type="month"
              v-model="newEducation.end"
              value-format="yyyy/MM"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="院校">
          <el-input placeholder="浙江xx大学" v-model="newEducation.school"></el-input>
        </el-form-item>
        <el-form-item label="专业">
          <el-input placeholder="计算机科学与技术/电子信息技术" v-model="newEducation.major"></el-input>
        </el-form-item>
        <el-form-item label="学历">
          <el-select placeholder="请选择" v-model="newEducation.level">
            <el-option
              :key="item.value"
              :label="item.label"
              :value="item.value"
              v-for="item in options"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          :key="index - 1"
          :label="'描述' + index"
          v-for="index in newEducation.content.length"
        >
          <el-input placeholder="获得的奖项、荣誉、奖学金、竞赛情况等" v-model="newEducation.content[index - 1]"></el-input>
          <el-button @click.prevent="removeContent(index - 1)">删除</el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="addClubData()" type="warning">完成</el-button>
          <el-button @click="addContent()">添加描述</el-button>
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
      newEducation: {
        start: '',
        end: '',
        school: '',
        major: '',
        level: '',
        content: ['']
      },
      options: [
        {
          value: '选项1',
          label: '大专'
        },
        {
          value: '选项2',
          label: '本科'
        },
        {
          value: '选项3',
          label: '硕士'
        },
        {
          value: '选项4',
          label: '博士'
        },
        {
          value: '选项5',
          label: 'MBA'
        }
      ],
      educationData: [
        {
          start: '2016/09',
          end: '2020/07',
          school: '浙江工业大学之江学院',
          major: '计算机科学与技术',
          level: '本科',
          content: [
            '创新创业奖学金（2017-2018）',
            '优秀团干（2016-2018）',
            '程序设计竞赛（市赛三等奖、校赛二等奖、三等奖）',
            '如皋黑客松大赛第七名',
            '2018年全国大学生物联网设计大赛、2018年如皋黑客松大赛、绍兴市第十一届大学生计算机技能“程序设计”竞赛、2017年浙江省大学生程序设计竞赛、“互联网+”、PAT程序设计天梯赛、大学生创新创业大赛及校级院级小型比赛项目'
          ]
        }
      ]
    }
  },
  methods: {
    educationUpload() {
      this.$message('保存成功')
    },
    // 添加社团组织经历
    addClubData() {
      this.educationData.push(this.newEducation)
    },
    /**
     * 添加主要事件
     * index === null 没有传参，是在表单中添加事件
     * index ！== null 有传参，表示在 educationData 中的位置
     */

    addContent(index = -1) {
      if (index !== -1) {
        this.educationData[index].content.push('')
        return
      }
      this.newEducation.content.push('')
    },
    /**
     * 删除描述
     * index1 事件在 content 中的位置
     * index2 选中的组织经历在 educationData 中的位置
     * 如果 index2 不为 null 表示在表单中编辑，还未添加到 educationData 中
     */
    removeContent(index1, index2 = -1) {
      if (index2 !== -1) {
        this.educationData[index2].content.splice(index1, 1)
        return
      }
      this.newEducation.content.splice(index1, 1)
    }
  }
}
</script>

<style lang="stylus">
#educationInformation
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
</style>
