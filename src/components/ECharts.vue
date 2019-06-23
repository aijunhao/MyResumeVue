<template>
  <div id="echarts" ref="echarts"></div>
</template>

<script>
export default {
  mounted() {
    // 初始化 echarts
    var myChart = this.$echarts.init(this.$refs.echarts)
    // 配置属性
    myChart.setOption(this.option)
    window.addEventListener('resize', () => {
      // 页面监听，自适应图表
      myChart.resize()
    })
  },
  props: ['list', 'type'],
  computed: {
    option() {
      if (this.type === 0) {
        // 玫瑰图的配置项和数据
        let option = {
          // 标题
          title: {
            text: '技能总览',
            subtext: '技能掌握程度范围 0 - 100',
            textAlign: 'center',
            textVerticalAlign: 'middle',
            left: '50%'
          },
          // 提示框组件
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br> {b} : {c}'
          },
          // 图例
          legend: {
            x: 'center',
            y: 'bottom',
            data: []
          },
          // 系列
          series: [
            {
              name: '掌握程度',
              type: 'pie',
              radius: ['10%', '50%'],
              center: ['50%', '45%'],
              roseType: 'area',
              data: []
            }
          ]
        }
        // 置换系列
        option.series[0].data = [...this.list]
        // 置换图例
        for (let obj of this.list.values()) {
          option.legend.data.push(obj.name)
        }
        return option
      } else if (this.type === 1) {
        // 柱状图
        let option = {
          xAxis: {
            type: 'category',
            data: [],
            axisLabel: {
              interval: 0,
              rotate: -30
            }
          },
          yAxis: {
            type: 'value',
            max: 100
          },
          series: [
            {
              data: [],
              type: 'bar'
            }
          ],
          tooltip: {
            trigger: 'axis'
          }
        }
        // 置换图例和系列
        for (let obj of this.list.values()) {
          option.series[0].data.push(obj.value)
          option.xAxis.data.push(obj.name)
        }
        return option
      }
    }
  }
}
</script>

<style lang="stylus">
#echarts
  width 100%
  height 450px
</style>
