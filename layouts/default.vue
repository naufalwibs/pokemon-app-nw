<template>
  <v-app>
    <v-app-bar fixed app color="#1b233f">
      <nuxt-link to="/">
        <v-toolbar-title v-text="title" class="color-vtt" />
      </nuxt-link>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,
      title: 'PokéLib',
    }
  },
}
</script>

<style lang="scss">
.color-vtt {
  color: #fff;
  font-weight: 600;
}

a {
  text-decoration: none;
}
</style>
