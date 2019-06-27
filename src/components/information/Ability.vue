<template>
  <div id="abilityInformation">
    <!-- 标题及上传 -->
    <div class="center information-header">
      <div>
        <h1 class="information-title">我的技能</h1>
        <span>显示模式：</span>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            {{ modelName }}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="0">滑块模式</el-dropdown-item>
            <el-dropdown-item command="1">水平进度条模式</el-dropdown-item>
            <el-dropdown-item command="2">圆环进度条模式</el-dropdown-item>
            <el-dropdown-item command="3">柱状图</el-dropdown-item>
            <el-dropdown-item command="4">玫瑰图</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <el-button :loading="upload" @click="abilityUpload()" type="success">保存</el-button>
    </div>
    <!-- 主体 -->
    <div class="information-body">
      <!-- 技能添加框 -->
      <div class="center">
        <div class="add-ability">
          <el-input placeholder="请输入技能名称" v-model="ability"></el-input>
        </div>
        <el-button @click="addAbility" type="warning">添加技能</el-button>
      </div>
      <div class="ability-box">
        <!-- 滑块模式 -->
        <div v-if="model === 0">
          <ul>
            <li :key="i" class="ability-slider-list-li" v-for="(ability, i) in abilities">
              <div class="center">
                <span>{{ ability.name }}</span>
                <i @click="abilityDelete(i)" class="el-icon-delete"></i>
              </div>
              <el-slider :marks="marks" v-model="ability.value"></el-slider>
            </li>
          </ul>
        </div>
        <!-- 水平进度条模式 -->
        <div v-else-if="model === 1">
          <ul>
            <li :key="i" class="ability-horizon-list-li" v-for="(ability, i) in abilities">
              <div class="center">
                <span class="ability-name">{{ ability.name }}</span>
                <div class="ability-horizon-progress-box">
                  <el-progress :percentage="ability.value" :stroke-width="18" :text-inside="true"></el-progress>
                </div>
                <i @click="abilityDelete(i)" class="el-icon-delete"></i>
              </div>
            </li>
          </ul>
        </div>
        <!-- 圆环进度条模式 -->
        <div v-else-if="model === 2">
          <ul>
            <li :key="i" class="ability-circle-list-li" v-for="(ability, i) in abilities">
              <div>
                <div class="between ability-circle-box-title">
                  <span class="ability-name">{{ ability.name }}</span>
                  <i @click="abilityDelete(i)" class="el-icon-delete"></i>
                </div>
                <div class="ability-circle-box-content">
                  <el-progress
                    :percentage="ability.value"
                    :stroke-width="10"
                    :width="100"
                    type="circle"
                  ></el-progress>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- 柱状图 -->
        <div v-else-if="model === 3">
          <echarts :list="abilities" :type="1"></echarts>
        </div>
        <!-- 玫瑰图 -->
        <div v-else-if="model === 4">
          <echarts :list="abilities" :type="0"></echarts>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from '../ECharts.vue'

export default {
  data() {
    return {
      // 上传
      upload: false,
      // 显示模式
      model: 4,
      // 添加技能时的数值
      ability: '',
      // 技能列表
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
      ],
      // 滑块模式下的标注
      marks: {
        10: {
          style: {
            color: '#CCD2F8'
          },
          label: '了解'
        },
        30: {
          style: {
            color: '#B1BDF4'
          },
          label: '熟悉'
        },
        50: {
          style: {
            color: '#94A8EF'
          },
          label: this.$createElement('strong', '熟练')
        },
        70: {
          style: {
            color: '#7494EB'
          },
          label: this.$createElement('strong', '大牛')
        },
        90: {
          style: {
            color: '#4D80E6'
          },
          label: this.$createElement('strong', '宗师')
        }
      }
    }
  },
  methods: {
    /**
     * 添加技能
     */
    addAbility() {
      if (this.ability) {
        this.abilities.push({ name: this.ability, value: 10 })
        this.ability = ''
      } else {
        this.$message.error('请先输入技能名称')
      }
    },
    /**
     * 删除技能
     */
    abilityDelete(index) {
      this.abilities.splice(index, 1)
    },
    /**
     * 上传
     */
    abilityUpload() {
      this.$message('保存成功')
      console.log(this.abilities)
    },
    /**
     * 切换模式
     */
    handleCommand(command) {
      command = parseInt(command)
      this.model = command
      sessionStorage.setItem('abilityModel', command)
    }
  },
  mounted() {
    /**
     * 本地存储，待修改
     */
    if (sessionStorage.getItem('abilityModel')) {
      this.model = parseInt(sessionStorage.getItem('abilityModel'))
    }
  },
  components: {
    echarts
  },
  computed: {
    modelName() {
      if (this.model === 0) {
        return '滑块模式'
      } else if (this.model ===  1) {
        return '水平进度条模式'
      } else if (this.model === 2) {
        return '圆环进度条模式'
      } else if (this.model === 3) {
        return '柱状图'
      } else if (this.model === 4) {
        return '玫瑰图'
      }
    }
  }
}
</script>


<style lang="stylus">
#abilityInformation
  ul
    padding 0
    list-style-type none

  .between
    display -webkit-flex
    display flex
    justify-content space-between

  .center
    display -webkit-flex
    display flex
    justify-content space-between
    align-items center

  .information-header
    margin-bottom 20px

    .information-title
      font 20px
      font-weight 200
      margin 0 0 5px 0

  .information-body
    .ability-box
      margin-top 5px

      .add-ability
        display inline-block

      .ability-name
        width 100px
        font-size 1rem
        font-weight 200px

      .ability-slider-list-li
        height 80px
        border 1px solid #ccc
        border-radius 5px
        padding 8px
        margin 5px 0px

      .ability-horizon-list-li
        height 30px

        .ability-horizon-progress-box
          width 100%
          margin 0 5px

      .ability-circle-list-li
        width 110px
        padding 10px
        margin 3px
        display inline-block
        border 1px solid #ccc
        border-radius 5px

        .ability-circle-box-title
          margin 10px 0

        .ability-circle-box-content
          text-align center
</style>
