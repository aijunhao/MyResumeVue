<template>
  <!-- 这是首页 -->
  <div id="home">
    <!-- 首页标题 -->
    <div class="home-title clearfix">
      <h1 class="home-main-title">技术精英都在用的在线简历</h1>
      <h5 class="home-subtitle">百万人才使用的在线简历网站，帮你快速制作一份优秀的在线简历，再也不用担心简历 OUT 了</h5>
      <el-button @click="newResume()" class="new-resume" type="danger">快速生成在线简历</el-button>
    </div>
    <!-- 展示轮播图 -->
    <div class="home-carousel">
      <el-carousel :height="carouselHeight+'px'" :interval="4000" type="card">
        <el-carousel-item :key="item" v-for="item in demoPictures.length - 1">
          <el-image :src="demoPictures[item]" style="width: 100%; height: 100%"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 首页页脚 -->
    <table class="home-table">
      <tr>
        <th>联系我们</th>
        <th>关于我们</th>
        <th>简历模板</th>
        <th>其他产品</th>
      </tr>
      <tr>
        <td>QQ</td>
        <td>产品介绍</td>
        <td>学生简历模板</td>
        <td>敬请等待</td>
      </tr>
      <tr>
        <td>微信</td>
        <td>使用条例</td>
        <td>程序员简历模板</td>
      </tr>
      <tr>
        <td></td>
        <td>隐私协议</td>
        <td>经典简历模板</td>
      </tr>
      <tr>
        <td></td>
        <td>加入我们</td>
        <td>英文简历模板</td>
      </tr>
    </table>
  </div>
</template>

<script>
import config from '../config.js'

export default {
  data() {
    return {
      carouselHeight: 600,
      demoPictures: [
        `${config.PUBLIC_IMAGES}/myresume.gif`,
        `${config.PUBLIC_IMAGES}/myresume.gif`,
        `${config.PUBLIC_IMAGES}/myresume.gif`,
        `${config.PUBLIC_IMAGES}/myresume.gif`,
        `${config.PUBLIC_IMAGES}/myresume.gif`,
        `${config.PUBLIC_IMAGES}/myresume.gif`,
        `${config.PUBLIC_IMAGES}/myresume.gif`
      ]
    }
  },
  mounted() {
    // 当页面渲染完成时，重载轮播图大小
    this.homeCarouselLoad()
    window.addEventListener('resize', () => {
      this.homeCarouselLoad()
    })
  },
  methods: {
    /**
     * 进入创建页面
     */
    newResume() {
      this.$router.push('/newresume')
    },
    /**
     * 轮播图重载
     */
    homeCarouselLoad() {
      this.$nextTick(() => {
        this.carouselHeight =
          window.innerWidth * 0.5 > 220 ? window.innerWidth * 0.5 : 220
      })
    }
  }
}
</script>

<style lang="stylus">
#home
  background-image url('../../public/background.jpg')
  background-repeat no-repeat
  background-size 100%

  .clearfix:before
    /* 添加一个空的内容 */
    content ''
    /* 转换为一个块元素 */
    display table

  .home-title
    text-align center
    margin-bottom 5%

    .new-resume
      font-size 20px
      margin-top 5%

    .home-main-title
      padding 0px
      margin 0px
      font-size 45px
      font-family '微软雅黑'
      margin-top 8%

    .home-subtitle
      font-family '微软雅黑'
      color #6f6f6f
      padding 0px
      margin 0px
      font-size 15px
      margin-top 10px

  .home-carousel
    margin 30px auto
    width 80%
    min-width 350px

    .el-carousel__item h3
      color #475669
      font-size 14px
      opacity 0.75
      line-height 200px
      margin 0

    .el-carousel__item:nth-child(2n)
      background-color #99a9bf

    .el-carousel__item:nth-child(2n + 1)
      background-color #d3dce6

  .home-table
    margin 30px auto
    font-size 13px
    text-align center
    font-family '微软雅黑'

    td
      width 100px
      color darkgray
</style>
