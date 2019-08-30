<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from "axios";

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      iconList: [],
      swiperList: [],
      recommendList: [],
      weekendList: [],
      city: "北京"
    }
  },
  methods: {
    getHomeInfo() {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res) {
      // if ()
      let {iconList, recommendList, swiperList, weekendList} = res.data.data
      this.iconList = iconList;
      this.recommendList = recommendList;
      this.swiperList = swiperList;
      this.weekendList = weekendList;
      this.city = "上海"
      console.log(res);
    }
  },
  mounted() {
    this.getHomeInfo()
  }
}
</script>

<style>
</style>
