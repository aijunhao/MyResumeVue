<template>
  <div id="clubInformation">
    <!-- 标题及上传 -->
    <div class="center information-header">
      <h1 class="information-title">在校经历</h1>
      <el-button :loading="upload" @click="clubUpload()" type="success">保存</el-button>
    </div>
    <div class="information-body">
      <!-- 添加表单 -->
      <el-form :model="newData" label-width="80px">
        <el-form-item label="起始年月">
          <el-col :span="11">
            <el-date-picker
              placeholder="开始年月"
              style="width: 100%;"
              type="month"
              v-model="newData.start"
              value-format="yyyy/MM"
            ></el-date-picker>
          </el-col>
          <el-col :span="2" class="line">&nbsp</el-col>
          <el-col :span="11">
            <el-date-picker
              placeholder="结束年月"
              style="width: 100%;"
              type="month"
              v-model="newData.end"
              value-format="yyyy/MM"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input placeholder="xx活动/xx部门" v-model="newData.title"></el-input>
        </el-form-item>
        <el-form-item label="我的职位">
          <el-input placeholder="队长/部长/成员" v-model="newData.subtitle"></el-input>
        </el-form-item>
        <el-form-item
          :key="index - 1"
          :label="'事件' + index"
          v-for="index in newData.content.length"
        >
          <el-input placeholder="在团队中负责xx/做了xx事情" v-model="newData.content[index - 1]"></el-input>
          <el-button @click.prevent="removeClubContent(index - 1)">删除</el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="addClubData()" type="warning">完成</el-button>
          <el-button @click="addClubContent()">添加事件</el-button>
        </el-form-item>
      </el-form>
      <!-- 时间线 -->
      <el-timeline>
        <el-timeline-item
          :timestamp="timelineData[timelineIndex - 1].start + ' - ' + timelineData[timelineIndex - 1].end"
          placement="top"
          v-for="timelineIndex in timelineData.length"
        >
          <el-card>
            <div class="center">
              <div>
                <h4 class="timeline-title">{{ timelineData[timelineIndex - 1].title }}</h4>
                <h5 class="timeline-title">{{ timelineData[timelineIndex - 1].subtitle }}</h5>
              </div>
              <div>
                <el-button
                  @click="removeClubData(timelineIndex - 1)"
                  circle
                  icon="el-icon-delete"
                  type="danger"
                ></el-button>
              </div>
            </div>
            <ul class="club-content-ul">
              <li
                class="club-content-li"
                v-for="index in timelineData[timelineIndex - 1].content.length"
              >
                <div class="club-content-box">
                  <div class="club-content-main">
                    <el-input
                      autosize
                      placeholder="在团队中负责xx/做了xx事情"
                      resize="none"
                      type="textarea"
                      v-model="timelineData[timelineIndex - 1].content[index - 1]"
                    ></el-input>
                  </div>
                  <i @click="removeClubContent(index - 1, timelineIndex - 1)" class="el-icon-delete"></i>
                </div>
              </li>
            </ul>
            <el-button
              @click="addClubContent(timelineIndex - 1)"
              circle
              icon="el-icon-plus"
              type="warning"
            ></el-button>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      upload: false,
      newData: {
        start: '',
        end: '',
        title: '',
        subtitle: '',
        content: ['']
      },
      timelineData: [
        {
          start: '2016/9',
          end: '2017/7',
          title: '信息学院志愿者',
          subtitle: '成员',
          content: [
            '积极参与校内外志愿者活动',
            '多次参加学校当地的献血志愿活动'
          ]
        },
        {
          start: '2017/9',
          end: '2018/7',
          title: '院勤工助学中心',
          subtitle: '副部长',
          content: ['负责校内外兼职岗位的面试']
        },
        {
          start: '2018/1',
          end: '至今',
          title: '之江学院物联网实验室、物联网协会',
          subtitle: '部长、项目组长',
          content: [
            '2018年1月，本人及同专业若干人在指导老师的帮助下成立之江物联网与人工智能协会。',
            '2018年1月至9月，本人在物联网实验室担任组长，与队员共同个参加省级、国级比赛，取得一定成绩。',
            '如今，本人在实验室内负责新生在前端及Android学习上的指导。'
          ]
        },
        {
          start: '2018/4',
          end: '2018/4',
          title: '2018RoboCup国家机器人发展论坛暨机器人世界杯志愿者',
          subtitle: '成员',
          content: [
            '参与现场管理工作',
            '作为小学组机器人竞赛裁判，评定参赛者成绩'
          ]
        }
      ]
    }
  },
  methods: {
    // 上传
    clubUpload() {
      this.$message('保存成功')
    },
    // 添加社团组织经历
    addClubData() {
      this.timelineData.push(this.newData)
    },
    /**
     * 添加主要事件
     * index === null 没有传参，是在表单中添加事件
     * index ！== null 有传参，表示在 timelineData 中的位置
     */

    addClubContent(index = -1) {
      if (index !== -1) {
        this.timelineData[index].content.push('')
        return
      }
      this.newData.content.push('')
    },
    /**
     * 删除主要事件
     * index1 事件在 content 中的位置
     * index2 选中的组织经历在 timelineData 中的位置
     * 如果 index2 不为 null 表示在表单中编辑，还未添加到 timelineData 中
     */
    removeClubContent(index1, index2 = -1) {
      if (index2 !== -1) {
        this.timelineData[index2].content.splice(index1, 1)
        return
      }
      this.newData.content.splice(index1, 1)
    },
    // 删除社团组织经历
    removeClubData(index) {
      this.timelineData.splice(index, 1)
    }
  }
}
</script>

<style lang="stylus">
#clubInformation
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

.club-content-ul
  list-style none
  padding 0

  .club-content-li
    margin 5px 0

    .club-content-box
      display flex
      justify-content space-between
      align-items center

      .club-content-main
        width 100%
        margin-right 5px
</style>
