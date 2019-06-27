<template>
  <div id="comment">
    <textarea placeholder="有什么想对小狼说的..." rows="6"></textarea>
    <div class="comment-buttom">
      <div class="comment-express-img">
        <span>表情</span>
        <span>&nbsp&nbsp</span>
        <span>图片</span>
      </div>
      <input class="comment-submit" type="button" value="发布" @click="commentSubmit">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    commentSubmit() {
      this.$message({
        type: 'success',
        message: '发表成功'
      })
    }
  },
}
</script>

<style lang="stylus">
#comment
  width 100%
  border 1px solid #ccc
  border-radius 5px
  text-align center

  textarea
    font-family 'Micrsofot Yahei'
    resize none
    width 97%
    margin 1% auto
    height 95px
    font-size 1rem
    border-radius 5px
    border none
    color #333

  .comment-buttom
    border-top 1px solid #ccc
    display -webkit-flex
    display flex
    justify-content space-between
    height 40px

    .comment-express-img
      width 150px
      justify-content center
      line-height 40px

    .comment-submit
      width 100px
      line-height 40px
      background-color #656665
      border-radius 0 0 5px 0
      color #ffffff
      font-size 1rem
      border 0
      cursor pointer
</style>
