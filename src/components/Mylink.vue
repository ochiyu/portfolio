<template>
    <v-card
    class="mx-auto"
    max-width="200"
    :href="url"
  >
    <v-img
      class="white--text align-end"
      height="100px"
      :src="imgname"
    >
    </v-img>
    <v-card-title>{{title}}</v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    url: String,
    title: String,
    imgname: String

  }
}
</script>

<style scoped>
</style>
