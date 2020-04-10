<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
    <router-link  to="/">
      <a>Home</a>
    </router-link>
    </v-app-bar>

    <v-content>
      <vue-particles color="#dedede"></vue-particles>
    </v-content>
  </v-app>
</template>

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
