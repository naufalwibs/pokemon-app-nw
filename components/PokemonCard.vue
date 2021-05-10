<template>
  <v-col lg="3" md="4" sm="6" cols="6">
    <v-hover>
      <template v-slot:default="{ hover }">
        <nuxt-link :to="toPokemonDetail">
          <v-card
            @click="selectedPokemon(pokemonId)"
            outlined
            shaped
            :class="`rounded-bl-xl elevation-${hover ? 6 : 24}`"
            color="#314574"
          >
            <v-card-title class="justify-center">
              {{ pokemonName }}
            </v-card-title>
            <v-col class="img-card-preview">
              <v-img
                :src="`https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`"
                :alt="pokemonId"
                lazy-src="https://i.imgur.com/SbaAnMC.png"
              >
              </v-img>
            </v-col>
          </v-card>
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
    }
  },
  created() {
    // console.log(this.pokemon)
  },
}
</script>
