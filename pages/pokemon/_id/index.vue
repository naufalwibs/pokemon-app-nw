<template>
  <v-card max-width="800" class="mx-auto">
    <v-app-bar dark color="pink">
      <v-row>
        <h2 class="headline pl-5">PokéLib</h2>
      </v-row>
    </v-app-bar>

    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card color="#385F73" dark>
            <v-card-title class="text-h3 justify-center text-edit">
              {{ selectedPokemon.name }}
            </v-card-title>
            <v-row>
              <v-col cols="12" xl="6" md="6" sm="12" xs="12">
                <v-col class="img-card-detail">
                  <v-img
                    contain
                    :src="`https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`"
                    height="400"
                  >
                  </v-img>
                </v-col>
              </v-col>
              <v-col cols="12" xl="6" md="6" sm="12" xs="12">
                <v-col class="pokemon-info">
                  <v-col
                    justify="center"
                    align="center"
                    class="pokemon-info-heading"
                  >
                    <v-btn text> Pokemon Info </v-btn>
                  </v-col>
                  <v-row class="pokemon-base-exp">
                    <v-col class="pa-0">
                      <v-card-subtitle>Base Experience</v-card-subtitle>
                    </v-col>
                    <v-col class="pa-0">
                      <v-card-subtitle
                        >{{
                          selectedPokemon.base_experience
                        }}
                        Exp</v-card-subtitle
                      >
                    </v-col>
                  </v-row>
                  <v-row class="pokemon-height">
                    <v-col class="pa-0">
                      <v-card-subtitle>Height</v-card-subtitle>
                    </v-col>
                    <v-col class="pa-0">
                      <v-card-subtitle
                        >{{ selectedPokemon.height }} m</v-card-subtitle
                      >
                    </v-col>
                  </v-row>
                  <v-row class="pokemon-weight">
                    <v-col class="pa-0">
                      <v-card-subtitle>Weight</v-card-subtitle>
                    </v-col>
                    <v-col class="pa-0">
                      <v-card-subtitle
                        >{{ selectedPokemon.weight }} Kg</v-card-subtitle
                      >
                    </v-col>
                  </v-row>
                </v-col>
                <v-col class="pokemon-type">
                  <v-col
                    justify="center"
                    align="center"
                    class="pokemon-type-heading"
                  >
                    <v-btn text> Pokemon Type </v-btn>
                  </v-col>
                  <v-col
                    justify="center"
                    align="center"
                    class="pokemon-type-logo"
                  >
                    <v-btn
                      v-for="(type, i) in selectedPokemon.types"
                      :key="i"
                      text
                    >
                      {{ type.type.name }}
                    </v-btn>
                  </v-col>
                </v-col>
              </v-col>
            </v-row>

            <v-col class="pokemon-evolution-container">
              <v-col
                justify="center"
                align="center"
                class="pokemon-evolution-heading"
              >
                <v-btn text> Pokemon Evolution Chain </v-btn>
              </v-col>
              <v-col class="evolution-card">
                <v-row class="evolution-card-container">
                  <v-col
                    v-for="pokemonEv in selectedPokemonEvolution"
                    :key="pokemonEv.url.split('/')[6]"
                    cols="12"
                    xl="4"
                    md="4"
                    sm="6"
                    xs="12"
                  >
                    <v-card
                      outlined
                      shaped
                      :class="`rounded-bl-xl elevation-6`"
                      color="#314574"
                      @click="toPokemonDet(pokemonEv.url.split('/')[6])"
                    >
                      <v-card-title class="justify-center">
                        {{ pokemonEv.name.toUpperCase() }}
                      </v-card-title>
                      <v-col class="img-card-evolution">
                        <v-img
                          :src="`https://pokeres.bastionbot.org/images/pokemon/${
                            pokemonEv.url.split('/')[6]
                          }.png`"
                          :alt="pokemonEv.url.split('/')[6]"
                          lazy-src="https://i.imgur.com/SbaAnMC.png"
                        >
                        </v-img>
                      </v-col>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  methods: {
    toPokemonDet(id) {
      // console.log(id)
      this.$router.push('/pokemon/' + id)
    },
  },
  computed: {
    selectedPokemon() {
      return this.$store.getters.selectedPokemon
    },
    selectedPokemonEvolution() {
      return this.$store.getters.selectedPokemonEvolution
    },
    pokemonId() {
      return this.$route.params.id
    },
    toPokemonDetail() {
      return `/pokemon/${this.pokemonId}`
    },
  },
  created() {
    this.$store.dispatch('setPokemon', this.$route.params.id)
  },
}
</script>

<style scoped>
.text-edit {
  text-transform: uppercase;
}
</style>
