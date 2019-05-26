<template>
  <div id="echarts" ref="echarts"></div>
</template>

<script>
export default {
  mounted() {
    var myChart = this.$echarts.init(this.$refs.echarts)
    myChart.setOption(this.option)
    window.addEventListener('resize', () => {
      // 页面监听，自适应图表
      myChart.resize()
    })
  },
  props: ['option']
}
</script>

<style lang="stylus">
#echarts
  width 100%
  height 500px
</style>
