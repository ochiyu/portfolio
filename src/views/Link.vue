<template>
  <div class="link">
    <div class="title">
      <h1>Link</h1>
    </div>
    <div class="main-content">
      <v-container align ="center">
        <v-row class="mb-6">
          <Mylink title="名古屋工業大学" url="https://www.nitech.ac.jp/" imgname = "./img/nitech.jpeg"></Mylink>
          <Mylink title="新谷・大囿研究室" url="http://www-toralab.ics.nitech.ac.jp/" imgname = "./img/toralab.jpg"></Mylink>
          <Mylink title="バドミントン部" url="http://nitech-badminton.club.nitech.ac.jp/" imgname = "./img/badminton.jpg"></Mylink>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
import Mylink from '../components/Mylink.vue'
export default {
  components: {
    Mylink
  },

  data: () => ({
    //
  })
}
</script>
