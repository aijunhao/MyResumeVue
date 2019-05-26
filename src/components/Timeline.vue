<template>
  <div>
    <div class="block">
      <el-timeline>
        <template v-for="time in timeline">
          <el-timeline-item :timestamp="time.start + ' - ' + time.end" placement="top">
            <el-card>
              <h4>{{ time.title }}</h4>
              <h5>{{ time.subtitle }}</h5>
              <!-- <p>{{ time.content }}</p> -->
              <ul v-for="con in time.content">
                <li>{{ con }}</li>
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
