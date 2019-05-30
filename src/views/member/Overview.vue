<template>
  <div id="overview">
    <el-card class="box-card top" shadow="hover">
      <h3>我的技能</h3>
      <echarts :option="option"></echarts>
    </el-card>
  </div>
</template>

<script>
import echarts from '../../components/EChats.vue'

export default {
  data() {
    return {
      
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
    echarts
  }
}
</script>

<style lang="stylus">
#overview
  padding 5px

  .top
    margin-top 10px
</style>
