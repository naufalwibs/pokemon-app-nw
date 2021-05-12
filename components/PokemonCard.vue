<template>
  <v-col lg="3" md="4" sm="6" cols="6">
    <v-hover>
      <template v-slot:default="{ hover }">
        <nuxt-link :to="toPokemonDetail">
          <transition appear appear-active-class="animated flipInY">
            <v-card
              @click="selectedPokemon(pokemonId)"
              outlined
              shaped
              :class="`rounded-bl-xl elevation-${
                hover ? 6 : 24
              } img-hover-zoom`"
              :color="`${hover ? '#3f371b' : '#314574'}`"
            >
              <transition appear appear-active-class="animated jackInTheBox">
                <v-card-title class="justify-center delay-title">
                  {{ pokemonName }}
                </v-card-title>
              </transition>
              <v-col class="img-card-preview">
                <transition appear appear-active-class="animated fadeInDown">
                  <v-col class="delay-image">
                    <v-img
                      :src="`https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`"
                      :alt="pokemonId"
                      lazy-src="https://i.imgur.com/SbaAnMC.png"
                      class="img-src"
                    >
                    </v-img>
                  </v-col>
                </transition>
              </v-col>
            </v-card>
          </transition>
        </nuxt-link>
      </template>
    </v-hover>
  </v-col>
</template>

<script>
export default {
  props: ['pokemon'],
  methods: {
    selectedPokemon(id) {
      // console.log(id)
      this.$store.dispatch('setPokemon', id)
    },
  },
  computed: {
    pokemonId() {
      return this.pokemon.url.split('/')[6]
    },
    toPokemonDetail() {
      return `/pokemon/${this.pokemonId}`
    },
    pokemonName() {
      return this.pokemon.name.toUpperCase()
    },
  },
  created() {
    // console.log(this.pokemon)
  },
}
</script>

<style scoped>
.delay-title {
  animation-delay: 0.5s;
}

.delay-image {
  animation-delay: 1s;
}

.img-hover-zoom {
  overflow: visible;
}

.img-hover-zoom .img-card-preview .delay-image .img-src,
.img-hover-zoom .delay-title {
  transition: transform 0.8s ease;
}

.img-hover-zoom:hover .img-card-preview .delay-image .img-src,
.img-hover-zoom:hover .delay-title {
  transform: scale(1.1);
}
</style>
