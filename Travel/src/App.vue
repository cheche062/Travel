<template>
  <div id="app">
    <!-- <keep-alive>
      <router-view :key="111"/>
    </keep-alive>-->

    <!-- <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <keep-alive>
      <router-view :key="111"/>
    </keep-alive>-->

    App.vue
    <input v-model="formData.age" />

    <about/>
  </div>
</template>

<script>
import about from "./components/about";

export default {
  name: "App",
  components: {
    about
  },
  data() {
    return {
      name: "cheche",
      visible: true,
      formData: {
        age: 1
      },
    };
  },
  created() {
    // const loading = Loading({ text: '正在加载。。。' })
    // 三秒钟后关闭
    // setTimeout(() => {
    //   loading.close()
    // }, 3000)
  },
  watch: {
    formData: {
      handler(newValue, oldValue) {
        console.log("new", newValue.age);
        
      },
      deep: true,
      immediate: true
    },
  },
  pageVisible() {
    console.log("App.vue page show");
    
  },
  mounted() {
    this.$loading();

    window.addEventListener("resize", this.$_handleResizeChart);
    // 通过hook监听组件销毁钩子函数，并取消监听事件
    this.$once("hook:beforeDestroy", () => {
      window.removeEventListener("resize", this.$_handleResizeChart);
    });
  },
  methods: {
    handleChildUpdated(e) {
      // console.log("子组件变化", e);
    }
  }
};
</script>

<style>
</style>
