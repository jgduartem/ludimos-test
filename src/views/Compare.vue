<template>
  <div class="home">
    <div class='columns'>
      <div class='column is-2'></div>
      <div class='column is-4'>
       <ComparationCard id='video1' :videoURL='videos[0].source_url' :title='videos[0].title'/>
      </div>
      <div class='column is-4'>
       <ComparationCard id='video2' :videoURL='videos[1].source_url' :title='videos[1].title'/>
      </div>
      <div class='column is-2'></div>
    </div>
    <b-button type="is-primary" v-on:click='playVideos'>Play</b-button>
  </div>
</template>

<script>
// @ is an alias to /src
import {getVideosToCompare} from '@/api/api.js'
import ComparationCard from '@/components/ComparationCard.vue'
import Swal from 'sweetalert2'
export default {
  name: 'CompareFeed',
  components: {
     ComparationCard
  },
  data() {
    return {
      videos: []
    }
  },
  methods: {
    test: function(){
      console.log('test')
    },
    playVideos: function(){
      let videoElements = this.$el.querySelectorAll('video')
      for(let i = 0; i< videoElements.length; i++){
        videoElements[i].play()
      }
    }
  },
  async beforeMount() {
    this.videos = await getVideosToCompare(this.$store.state.checkedVideos[0], this.$store.state.checkedVideos[1])
    if(this.videos.length <2){
      Swal.fire({
          icon: 'error',
          title: 'Select two videos before open this page',
        })
      this.$router.push('/')
    }
  }
}
</script>
