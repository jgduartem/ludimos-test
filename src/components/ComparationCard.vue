<template lang="">
<div class="card pt-6 mb-4">
  <div class="card-image">
    <figure>
      <video :src='videoURL' alt="Placeholder image" controls type='video/mp4'/>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="subtitle is-6">{{title}}</p>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
    name: 'ComparationCard',
    props: {
      videoURL: String,
      title: String
    }
}
</script>
<style lang="">
    
</style>