<template>
  <div class="home">
    <div class='columns'>
      <div class='column is-4'></div>
      <div class='column is-4'>
        <div v-for='(video, index) in videos' :key='index' >
          <VideoCard 
            :videoURL='video.thumbnail_url'
            :firstName='video.user.firstname'
            :lastName='video.user.lastname'
            :title='video.title'
            :id='video.id'
             />
        </div>
      </div>
      <div class='column is-4'></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VideoCard from '@/components/VideoCard.vue'
import {getInitialVideos} from '@/api/api.js'
export default {
  name: 'Home',
  components: {
    VideoCard
  },
  data() {
    return {
      videos: [],
      first: 0,
      next: 5
    }
  },
  methods: {
    async fetchVideos(){
      this.videos = await getInitialVideos(this.first, this.next)
    },
    async getNextUsers() {
      window.onscroll = async () => {
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
          let newVideos = await getInitialVideos(this.first, this.next)
          newVideos.map((video) => {
            this.videos.push(video)
          })
          this.first+=5
          this.next+=5
        }
      };
    }
  },
  beforeMount() {
    this.fetchVideos()
  },
  mounted() {
    this.getNextUsers()
  },
}
</script>
