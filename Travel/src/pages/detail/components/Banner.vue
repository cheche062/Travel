<template>
  <div>
    <div class="banner" @click="handleShowGallery">
      <img :src="bannerImg" alt="" class="banner-img">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe632;</span>
          {{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <common-fade>
      <common-gallery :imgs="gallaryImgs" v-show="showGallery" @close="handleHideGallery"></common-gallery>
    </common-fade>
  </div>
</template>

<script>
import CommonGallery from "common/gallery/Gallery";
import CommonFade from "common/fade/Fade";
export default {
  name: 'DetailBanner',
  components: {
    CommonGallery,
    CommonFade
  },
  props: {
    bannerImg: String,
    sightName: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallery: false,
    }
  },
  methods: {
    handleShowGallery () {
      this.showGallery = true
    },
    handleHideGallery () {
      this.showGallery = false
    }
  },
  computed: {
    gallaryImgsLength () {
      return this.gallaryImgs.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      righ 0
      bottom 0
      width 100%
      line-height .6rem
      height .6rem
      color #fff
      background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        position absolute
        right 0.1rem
        height .32rem
        line-height .32rem
        margin-top .14rem
        padding 0 .4rem
        border-radius .2rem
        background rgba(0,0,0,.8)
        font-size .24rem
        .banner-icon
          font-size .24rem
    
</style>
