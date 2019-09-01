<template>
  <div>
    <div class="banner" @click="handleShowGallery">
      <img src="https://imgs.qunarzz.com/vs_ceph_vs_tts/374383c0-c692-4db1-9b97-e88383cd734f.jpg_r_390x260x90_7989a74a.jpg" alt="" class="banner-img">
      <div class="banner-info">
        <div class="banner-title">大连圣亚亚海洋世界（AAAA景区）</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe632;</span>
          39
        </div>
      </div>
    </div>
    <common-gallery :imgs="list" v-show="showGallery" @close="handleHideGallery"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from "common/gallery/Gallery";
export default {
  name: 'DetailBanner',
  components: {
    CommonGallery
  },
  data () {
    return {
      showGallery: false,
      list: ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg',
      'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg']
    }
  },
  methods: {
    handleShowGallery () {
      this.showGallery = true
    },
    handleHideGallery () {
      this.showGallery = false
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
