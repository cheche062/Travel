<template>
    <div class="header">
        <div class="header-left">
          <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
          <span class="iconfont">&#xe632;</span>
          输入城市/景点/游玩主题
          </div>
        <router-link to='/city'>
          <div class="header-right">
            {{this.city}}
            <span class="iconfont arrow-icon">&#xe64a;</span>
          </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display :flex
    height :.86rem
    line-height: .86rem
    background-color :$bgColor
    color :#fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align :center
        font-size :.4rem
    .header-input
      flex: 1
      height :.64rem
      line-height :.64rem
      margin : .1rem 0 0 .2rem
      padding-left :.2rem
      background :#fff
      border-radius :.1rem
      color :#ccc
    .header-right
      min-width: 1.24rem
      padding 0 .1rem
      float: right
      text-align :center
      color #fff
      .arrow-icon
        margin-left :-0.04rem
        font-size :.24rem
</style>
