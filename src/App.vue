<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
    <router-link  to="/">
      <div class="my-2">
        <v-btn text>Home</v-btn>
      </div>
    </router-link>
    <router-link  to="/profile">
      <div class="my-2">
        <v-btn text>Profile</v-btn>
      </div>
    </router-link>
    <router-link  to="/activity">
      <div class="my-2">
        <v-btn text>Activity</v-btn>
      </div>
    </router-link>
    <router-link  to="/link">
      <div class="my-2">
        <v-btn text>Link</v-btn>
      </div>
    </router-link>
    </v-app-bar>
    <v-container fluid>
      <router-view></router-view>
    </v-container>

  </v-app>
</template>
<style>
.title{
      position: fixed;
      right: 70px;
      top: 20%;
      border-left: thick solid red;
      padding-left: 10px;
}
h1{
      font-size: 70px;
      -ms-writing-mode: tb-rl;
      writing-mode: vertical-rl;
      font-family: 'Oswald', sans-serif;
      }
.main-content{
  padding: 90px 120px 40px 120px;
}
</style>
<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  })
}
</script>
