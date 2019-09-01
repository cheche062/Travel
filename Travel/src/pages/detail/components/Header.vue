<template>
  <div>
    <router-link 
      tag="div" 
      to="/" 
      class="header-abs" 
      v-show="showAbs"
    >
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opcityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opcityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll() {
      let top = document.documentElement.scrollTop
      if (top > 60) {
        this.showAbs = false
        let opacity = Math.min(top / 140, 1) 
        this.opcityStyle = {
          opacity
        }
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    height .8rem
    line-height .8rem
    border-radius .4rem
    background rgba(0,0,0,.8)
    .header-abs-back
      color #ffffff
      text-align center
      font-size .4rem
  .header-fixed
    z-index 2
    position fixed
    top 0
    left 0
    right 0
    overflow hidden
    height .86rem
    line-height .86rem
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    .header-fixed-back
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
