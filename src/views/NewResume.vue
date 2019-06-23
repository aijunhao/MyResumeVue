<template>
  <div id="newResume">
    <el-steps :active="step" :direction="direction" finish-status="success">
      <el-step description="这是一段很长很长很长的描述性文字" title="步骤 1"></el-step>
      <el-step description="这是一段很长很长很长的描述性文字" title="步骤 2"></el-step>
      <el-step description="这段就没那么长了" title="步骤 3"></el-step>
    </el-steps>
    <!-- 个人信息 -->
    <el-card class="information-box" shadow="hover">
      <person></person>
    </el-card>
    <!-- 教育经历 -->
    <el-card class="information-box" shadow="hover">
      <education></education>
    </el-card>
    <!-- 我的技能 -->
    <el-card class="information-box" shadow="hover">
      <ability></ability>
    </el-card>
    <!-- 项目经验 -->
    <el-card class="information-box" shadow="hover">
      <project></project>
    </el-card>
    <!-- 社团组织经验 -->
    <el-card class="information-box" shadow="hover">
      <club></club>
    </el-card>
    <el-button @click="next">下一步</el-button>
  </div>
</template>

<script>
import person from '../components/information/Person.vue'
import education from '../components/information/Education.vue'
import club from '../components/information/Club.vue'
import project from '../components/information/Project.vue'
import ability from '../components/information/Ability.vue'

export default {
  data() {
    return {
      step: 1,
      direction: 'horizontal'
    }
  },
  methods: {
    /**
     * 下一步
     */
    next() {
      if (this.step++ > 2) this.step = 1
    },
    /**
     * 切换步奏条方向
     */
    loadStep() {
      if (document.body.clientWidth > 992) {
        this.direction = 'horizontal'
      } else {
        this.direction = 'vertical'
      }
    }
  },
  created() {
    this.loadStep()
    window.onresize = () => {
      this.loadStep()
    }
  },
  components: {
    person,
    education,
    project,
    club,
    ability
  }
}
</script>

<style lang="stylus">
#newResume
  width 70%
  min-width 350px
  margin 10px auto
</style>
