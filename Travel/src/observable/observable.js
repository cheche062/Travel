import Vue from 'vue'


export const store = Vue.observable({
  scence: 'summer',
})

export const mutations = {
  setScence(v) {
    store.scence = v
  }
}
