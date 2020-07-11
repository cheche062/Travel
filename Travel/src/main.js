// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from "./store";
// import 'styles/reset.css'
import 'styles/border.css'
import 'styles/animation.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import Loading from './components/loading/index.js'
import { init, bind} from './hook/hookPageVisible'


Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(Loading)


window.Vue = Vue

Vue.mixin({
  mounted() {
    // console.log('全局混入 mounted');
    
  }
})

// 初始化生命周期函数, 必须在Vue实例化之前确定合并策略
init()

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
  // render(createElement) {
  //   return createElement(App)
  // }

})

// 将rootVm 绑定到生命周期函数监听里面
bind(vm)
