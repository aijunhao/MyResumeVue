<template>
  <div id="abilityInformation">
    <el-card class="information-card" shadow="hover">
      <!-- 标题及上传 -->
      <div class="center information-header">
        <div>
          <h1 class="information-title">我的技能</h1>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              {{ model }}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="滑块模式">滑块模式</el-dropdown-item>
              <el-dropdown-item command="水平进度条模式">水平进度条模式</el-dropdown-item>
              <el-dropdown-item command="圆环进度条模式">圆环进度条模式</el-dropdown-item>
              <el-dropdown-item command="柱状图">柱状图</el-dropdown-item>
              <el-dropdown-item command="玫瑰图">玫瑰图</el-dropdown-item>
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
          <div v-if="model === '滑块模式'">
            <ul>
              <li :key="i" class="ability-slider-list-li" v-for="(ability, i) in abilities">
                <div class="center">
                  <span>{{ ability.name }}</span>
                  <i @click="abilityDelete(i)" class="el-icon-delete"></i>
                </div>
                <el-slider :marks="marks" v-model="ability.level"></el-slider>
              </li>
            </ul>
          </div>
          <!-- 水平进度条模式 -->
          <div v-else-if="model === '水平进度条模式'">
            <ul>
              <li :key="i" class="ability-horizon-list-li" v-for="(ability, i) in abilities">
                <div class="center">
                  <span class="ability-name">{{ ability.name }}</span>
                  <div class="ability-horizon-progress-box">
                    <el-progress :percentage="ability.level" :stroke-width="18" :text-inside="true"></el-progress>
                  </div>
                  <i @click="abilityDelete(i)" class="el-icon-delete"></i>
                </div>
              </li>
            </ul>
          </div>
          <!-- 圆环进度条模式 -->
          <div v-else-if="model === '圆环进度条模式'">
            <ul>
              <li :key="i" class="ability-circle-list-li" v-for="(ability, i) in abilities">
                <div>
                  <div class="between ability-circle-box-title">
                    <span class="ability-name">{{ ability.name }}</span>
                    <i @click="abilityDelete(i)" class="el-icon-delete"></i>
                  </div>
                  <div class="ability-circle-box-content">
                    <el-progress :percentage="ability.level" type="circle" :width="100" :stroke-width="10"></el-progress>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      upload: false,
      model: '滑块模式',
      ability: '',
      abilities: [
        { level: 60, name: 'Vue' },
        { level: 50, name: 'Node' },
        { level: 40, name: 'Android' },
        { level: 35, name: 'HTML5' },
        { level: 45, name: 'ES6' },
        { level: 35, name: 'CSS3' },
        { level: 45, name: 'MySQL' },
        { level: 40, name: 'MongoDB' }
      ],
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
    addAbility() {
      if (this.ability) {
        this.abilities.push({ name: this.ability, level: 10 })
        this.ability = ''
      } else {
        this.$message.error('请先输入技能名称')
      }
    },
    abilityEdit() {
      this.$message('编辑了')
    },
    abilityDelete(index) {
      this.abilities.splice(index, 1)
    },
    abilityUpload() {
      this.$message('保存成功')
      console.log(this.abilities)
    },
    handleCommand(command) {
      this.model = command
      sessionStorage.setItem('abilityModel', command)
    }
  },
  mounted() {
    if (sessionStorage.getItem('abilityModel')) {
      this.model = sessionStorage.getItem('abilityModel')
    }
  }
}
</script>


<style lang="stylus">
#abilityInformation
  .information-card
    padding 10px
    margin-top 10px

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
          font-size 15px
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
