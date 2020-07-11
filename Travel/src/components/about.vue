<template>
  <div>
    <h1>关于</h1>
    <p @click="$emit('update:name', 'about666')">我是关于的内容55 {{$attrs.name}}</p>
    <h3>我喜欢的水果 {{like}}</h3>
    <button @click="like=like=='apple'?'orange':'apple'">变</button>
    <h6 @click="updateScene">季节：{{scence}}</h6>
  </div>
</template>

<script>
import {store, mutations} from '../observable/observable'
import mixin from "../mixin/mixin";

export default {
  name: 'About',
  props:　{
    // name: {
    //   type: String,
    //   value: ""
    // }
  },
  data() {
    return {
      like: 'apple'
    }
  },
  computed: {
    scence() {
      return store.scence
    }
  },
  mixins: [mixin],
  mounted() {
    // console.log("about==", this.$attrs);
    // console.log("mixin==", mixin);
    
  },
  pageVisible() {
    console.log("about.vue page show");
    
  },
  methods: {
    updateScene() {
      mutations.setScence('autumn')
    }
  },
}
</script>

<style>

</style>
