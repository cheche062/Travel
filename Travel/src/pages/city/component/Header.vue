<template>
  <div>
    <div class="header">城市选择</div>
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CityHeader"
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
  .header
    position relative
    overflow hidden
    height .86rem
    line-height .86rem
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
  .header-back
    position absolute
    left 0
    top 0
    font-size .4rem
    width .64rem
    text-align center
    color #fff
    height .86rem
    line-height .86rem
      
</style>
