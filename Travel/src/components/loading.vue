<template>
  <transition name="custom-loading-fade">
    <!--loading蒙版-->
    <div v-show="visible" class="custom-loading-mask">
      <!--loading中间的图标-->
      <div class="custom-loading-spinner">
        <i class="custom-spinner-icon"></i>
        <!--loading上面显示的文字-->
        <p class="custom-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  // props: {
  // // 是否显示loading
  //   visible: {
  //     type: Boolean,
  //     default: false
  //   },
  //   // loading上面的显示文字
  //   text: {
  //     type: String,
  //     default: ''
  //   }
  // },
  data() {
    return {
      text: '',
      visible: false
    }
  }
}
</script>
<style lang="stylus" scoped>
.custom-loading-mask{
  background: rgba(0,0,0,0.3)
}
</style>
