<template>
  <div id="overview">
    <el-card shadow="hover">
      <h3>我的技能</h3>
      <echarts :list="abilities" :type="0"></echarts>
    </el-card>
  </div>
</template>

<script>
import echarts from '../../components/ECharts.vue'

export default {
  data() {
    return {
      abilities: [
        { value: 60, name: 'Vue' },
        { value: 50, name: 'Node' },
        { value: 40, name: 'Android' },
        { value: 35, name: 'HTML5' },
        { value: 45, name: 'ES6' },
        { value: 35, name: 'CSS3' },
        { value: 45, name: 'MySQL' },
        { value: 40, name: 'MongoDB' },
        { value: 60, name: 'Vue-cli' },
        { value: 50, name: 'Element' },
        { value: 40, name: 'Echarts' },
        { value: 35, name: 'BootStrap' },
        { value: 45, name: 'Git' },
        { value: 35, name: 'Vuex' }
      ]
    }
  },
  components: {
    echarts
  }
}
</script>


