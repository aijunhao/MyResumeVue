<template>
  <div id="echarts"></div>
</template>

<script>
export default {
  data() {
    return {
      // 指定图表的配置项和数据
      option: {
        // 标题
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        // 图例
        legend: {
          data: ['销量']
        },
        // x轴
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        // y轴
        yAxis: {},
        // 数据
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 10, 30, 20, 10, 20]
          }
        ]
      }
    }
  },
  methods: {},
  mounted() {
    let myChart = this.$echarts.init(document.getElementById('echarts'))
    myChart.setOption(this.option)
  }
}
</script>

<style lang="stylus">
#echarts
  width 400px
  height 400px
</style>
