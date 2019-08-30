<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list 
      :hotCities="hotCities" 
      :cities="cities"
      :letter="letter"
      >
    </city-list>
    <city-alphabet 
      :cities="cities"
      @change="handleLetterChange"
      >
    </city-alphabet>
  </div>
</template>

<script>
import CityHeader from "./component/Header"
import CitySearch from "./component/Search"
import CityList from "./component/List"
import CityAlphabet from "./component/Alphabet"
import axios from 'axios'

export default {
  name: "City",
  components: {
    CityHeader,
    CityList,
    CityAlphabet,
    CitySearch
  },
  data() {
    return {
      hotCities: [],
      cities: {},
      letter: ""
    }
  },
  methods: {
    getInfo() {
      axios.get("/api/city.json").then((res)=>{
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.cities = data.cities
          this.hotCities = data.hotCities
          console.log(res)
        }
      })
    },
    handleLetterChange(letter) {
      this.letter = letter;
    }
  },
  mounted() {
    this.getInfo();
  }

}
</script>

<style lang="stylus" scoped>

</style>

