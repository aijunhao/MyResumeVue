<template>
  <div id="overview">
    <el-card class="box-card top" shadow="hover">
      <h3>我的技能</h3>
      <echarts :option="option"></echarts>
    </el-card>
    <el-card class="box-card top" shadow="hover">
      <h3>在校经历</h3>
      <timeline :timeline="this.timelineData"></timeline>
    </el-card>
  </div>
</template>

<script>
import echarts from '../../components/EChats.vue'
import timeline from '../../components/Timeline.vue'

export default {
  data() {
    return {
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
      ],
      // 指定图表的配置项和数据
      option: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br> {b} : {c} ({d}%)'
        },
        legend: {
          x: 'center',
          y: 'bottom',
          data: [
            'Vue',
            'Node',
            'Android',
            'Element',
            'ES6',
            'CSS3',
            'MySQL',
            'MongoDB'
          ]
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ['pie', 'funnel']
            },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        series: [
          {
            name: '基础语言',
            type: 'pie',
            radius: ['10%', '50%'],
            center: ['25%', '50%'],
            roseType: 'area',
            data: [
              { value: 60, name: 'Vue' },
              { value: 50, name: 'Node' },
              { value: 40, name: 'Android' },
              { value: 35, name: 'HTML5' },
              { value: 45, name: 'ES6' },
              { value: 35, name: 'CSS3' },
              { value: 45, name: 'MySQL' },
              { value: 40, name: 'MongoDB' }
            ]
          },
          {
            name: '框架及技能',
            type: 'pie',
            radius: ['10%', '50%'],
            center: ['75%', '50%'],
            roseType: 'area',
            data: [
              { value: 60, name: 'Vue-cli' },
              { value: 50, name: 'Element' },
              { value: 40, name: 'Echarts' },
              { value: 35, name: 'BootStrap' },
              { value: 45, name: 'Git' },
              { value: 35, name: 'Vuex' }
            ]
          }
        ]
      }
    }
  },
  components: {
    echarts,
    timeline
  }
}
</script>

<style lang="stylus">
#overview
  padding 5px

  .top
    margin-top 10px
</style>
