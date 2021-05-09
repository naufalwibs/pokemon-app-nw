<template>
  <v-app>
    <v-app-bar fixed app color="#1b233f">
      <v-toolbar-title v-text="title" class="color-vtt" />
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
      title: 'Pokemon',
    }
  },
}
</script>

<style lang="scss">
.color-vtt {
  color: #fff;
  font-weight: 600;
}
</style>
