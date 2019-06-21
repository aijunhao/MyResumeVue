<template>
  <div id="information">
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
  </div>
</template>

<script>
import person from '../../components/information/Person.vue'
import education from '../../components/information/Education.vue'
import club from '../../components/information/Club.vue'
import project from '../../components/information/Project.vue'
import ability from '../../components/information/Ability.vue'

export default {
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
#information
  .information-box
    margin-bottom 10px
</style>
