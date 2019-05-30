<template>
  <div id="information">
    <!-- 个人信息 -->
    <person></person>
    <!-- 教育经历 -->
    <education></education>
    <!-- 我的技能 -->
    <ability></ability>
    <!-- 项目经验 -->
    <project></project>
    <!-- 社团组织经验 -->
    <club></club>
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
    person, education, project, club, ability
  },
}
</script>

<style lang="stylus">
#information
  text-align left
  padding 5px

</style>
