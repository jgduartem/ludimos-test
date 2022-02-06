<template lang="">
<div class="card pt-6 mb-4">
  <div class="card-image">
    <figure>
      <img :src='videoURL' alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img :src='videoURL' alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{firstName}} {{lastName}}</p>
        <p class="subtitle is-6">{{title}}</p>
      </div>
    </div>

    <div class="content">
      <br>
      <b-checkbox v-model='checked' :native-value='id' >Select for compare</b-checkbox>
    </div>
  </div>
</div>
</template>
<script>

export default {
    name: 'VideoCard',
    props: {
        videoURL: String,
        avatarURL: String,
        firstName: String,
        lastName: String,
        title: String,
        id: Number
    },
    data (){
      return {
      }
    },
    computed: {
      checked: {
        get() {
          return this.$store.state.checkedVideos
        },
        set (value) { 
          this.$store.commit('selectVideos', value )
        }
      }
    },
    methods: {

    }
}
</script>
<style lang="">
</style>