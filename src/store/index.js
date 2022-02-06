import Vue from 'vue'
import Vuex from 'vuex'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    checkedVideos: []
  },
  mutations: {
    selectVideos(state, payload) {
      if(payload.length <=2){
        state.checkedVideos = payload
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'You Cant add more than 2 videos',
        })
      }
      console.log('this.state.checkedVideos', this.state.checkedVideos)
    },
  },
  getters: {
    checkSelectedLength(state) {
      return state.checkedVideos.length
    }
  },
  actions: {
  },
  modules: {
  }
})
