<template>
  <div id="timeline">
    <div class="block">
      <el-timeline>
        <template v-for="time in timeline">
          <el-timeline-item :timestamp="time.start + ' - ' + time.end" placement="top">
            <el-card>
              <h4 class="timeline-title">{{ time.title }}</h4>
              <h5 class="timeline-title">{{ time.subtitle }}</h5>
              <ul>
                <li v-for="con in time.content">{{ con }}</li>
              </ul>
            </el-card>
          </el-timeline-item>
        </template>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  props: ['timeline']
}
</script>

<style lang="stylus">
#timeline
  .timeline-title
    margin 5px 0
</style>

