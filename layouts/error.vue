<template>
  <v-app dark>
    <v-container>
      <v-col justify="center" align="center">
        <v-img
          src="https://i.kym-cdn.com/photos/images/original/001/206/008/6bb.gif"
          lazy-src="https://i.kym-cdn.com/photos/images/original/001/206/008/6bb.gif"
          height="700"
          width="700"
          alt="pikasad"
          class="rounded-lg"
        >
        </v-img>
        <v-col class="pt-5">
          <h1 v-if="error.statusCode === 404">
            {{ pageNotFound }}
          </h1>
          <h1 v-else>
            {{ otherError }}
          </h1>
          <NuxtLink to="/"> Home page </NuxtLink>
        </v-col>
      </v-col>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
