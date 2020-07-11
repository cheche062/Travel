<template>
  <div>
    <detail-banner 
      :bannerImg="bannerImg"
      :sightName="sightName"
      :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
import axios from "axios"

export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      _detailId: null,
      list: [],
      bannerImg: "",
      gallaryImgs: [],
      sightName: ""
    }
  },
  methods: {
    sendInfo() {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
    }).then((res) => {
      res = res.data
      if (res.ret) {
        let data = res.data
        this.sightName = data.sightName
        this.list = data.categoryList
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
      }
    })
    }
  },
  mounted () {
    this._detailId = this.$route.params.id    
    this.sendInfo()
  },
  activated () {
    if (this._detailId !== this.$route.params.id) {
      this._detailId = this.$route.params.id    
      this.sendInfo();
    }
  }
}
</script>

<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>
