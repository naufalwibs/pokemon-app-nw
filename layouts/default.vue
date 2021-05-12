<template>
  <v-app>
    <v-app-bar fixed app color="#1b233f">
      <v-col cols="12">
        <!-- <nuxt-link to="/"> -->
        <v-row justify="center" align="center">
          <img
            class="rounded-xl logo-img"
            height="50"
            src="https://i.imgur.com/M4PmsVW.png"
            @click="toHomePage"
          />
          <p @click="toHomePage" class="color-vtt ma-0 pl-5">
            {{ title }}
          </p>
        </v-row>
        <!-- </nuxt-link> -->
      </v-col>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app class="justify-center">
      <span
        >Created and Developed by Naufal W. &copy;
        {{ new Date().getFullYear() }}</span
      >
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
  methods: {
    toHomePage() {
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss">
.color-vtt {
  color: #fff;
  font-weight: 500;
  font-size: 30px;
  cursor: pointer;
}

.logo-img {
  cursor: pointer;
}

a {
  text-decoration: none;
}
</style>
