<template>
  <div>
    <transition appear appear-active-class="animated fadeInDown">
      <v-card
        max-width="800"
        class="mx-auto mt-10 delay-pokemon-container-card"
      >
        <!--------------- POKEMON CARD HEAD --------------->
        <v-app-bar dark color="#73694a">
          <v-col justify="center" align="center" class="justify-center">
            <h1 class="headline pl-5 poke-card">
              <v-icon class="pr-2" color="yellow">mdi-cards</v-icon> PokéCard
              <v-icon class="pr-2" color="yellow">mdi-cards</v-icon>
            </h1>
          </v-col>
        </v-app-bar>

        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card color="#1b353f" dark>
                <!--------------- POKEMON NAME --------------->
                <transition appear appear-active-class="animated jackInTheBox">
                  <v-card-title
                    class="text-h3 justify-center text-header delay-pokemon-title"
                  >
                    {{ selectedPokemon.name }}
                  </v-card-title>
                </transition>
                <v-row>
                  <v-col cols="12" xl="6" md="6" sm="12" xs="12">
                    <!--------------- POKEMON IMAGE --------------->
                    <transition appear appear-active-class="animated zoomInUp">
                      <v-col class="img-card-detail delay-pokemon-image">
                        <v-img
                          contain
                          :src="`https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`"
                          height="400"
                        >
                        </v-img>
                      </v-col>
                    </transition>
                  </v-col>
                  <v-col cols="12" xl="6" md="6" sm="12" xs="12">
                    <!--------------- POKEMON INFO --------------->
                    <v-col class="pokemon-info">
                      <v-col
                        justify="center"
                        align="center"
                        class="pokemon-info-heading"
                      >
                        <transition
                          appear
                          appear-active-class="animated fadeInDown"
                        >
                          <v-btn text class="btn-title delay-pokemon-info-title"
                            ><v-icon class="pr-2" color="yellow"
                              >mdi-lightbulb-on</v-icon
                            >
                            Pokemon Info
                          </v-btn>
                        </transition>
                      </v-col>
                      <!--------------- POKEMON INFO - BASE EXP --------------->
                      <transition
                        appear
                        appear-active-class="animated fadeInUp"
                      >
                        <v-row class="pokemon-base-exp delay-pokemon-info">
                          <v-col class="py-0">
                            <p class="py-1 my-2 text-center custom-btn">
                              Base Experience
                            </p>
                          </v-col>
                          <v-col class="py-0">
                            <p class="py-1 my-2 text-center custom-btn">
                              {{ selectedPokemon.base_experience }} Exp
                            </p>
                          </v-col>
                        </v-row>
                      </transition>
                      <!--------------- POKEMON INFO - HEIGHT --------------->
                      <transition
                        appear
                        appear-active-class="animated fadeInUp"
                      >
                        <v-row class="pokemon-height delay-pokemon-info">
                          <v-col class="py-0">
                            <p class="py-1 my-2 text-center custom-btn">
                              Height
                            </p>
                          </v-col>
                          <v-col class="py-0">
                            <p class="py-1 my-2 text-center custom-btn">
                              {{ selectedPokemon.height }} m
                            </p>
                          </v-col>
                        </v-row>
                      </transition>
                      <!--------------- POKEMON INFO - WEIGHT --------------->
                      <transition
                        appear
                        appear-active-class="animated fadeInUp"
                      >
                        <v-row class="pokemon-weight delay-pokemon-info">
                          <v-col class="py-0">
                            <p class="py-1 my-2 text-center custom-btn">
                              Weight
                            </p>
                          </v-col>
                          <v-col class="py-0">
                            <p class="py-1 my-2 text-center custom-btn">
                              {{ selectedPokemon.weight }} Kg
                            </p>
                          </v-col>
                        </v-row>
                      </transition>
                    </v-col>
                    <!--------------- POKEMON TYPE --------------->
                    <v-col class="pokemon-type">
                      <v-col
                        justify="center"
                        align="center"
                        class="pokemon-type-heading"
                      >
                        <transition
                          appear
                          appear-active-class="animated fadeInDown"
                        >
                          <v-btn class="btn-title delay-pokemon-type-title" text
                            ><v-icon class="pr-2" color="yellow"
                              >mdi-arrow-decision</v-icon
                            >
                            Pokemon Type
                          </v-btn>
                        </transition>
                      </v-col>
                      <v-col
                        justify="center"
                        align="center"
                        class="pokemon-type-logo py-0"
                      >
                        <transition
                          appear
                          appear-active-class="animated fadeInUp"
                        >
                          <v-row class="delay-pokemon-type">
                            <v-col
                              cols="6"
                              v-for="(type, i) in selectedPokemon.types"
                              :key="i"
                              text
                            >
                              <p class="py-1 custom-btn">
                                <v-icon class="pr-2" color="yellow"
                                  >mdi-chemical-weapon</v-icon
                                >
                                {{ type.type.name }}
                              </p>
                            </v-col>
                          </v-row>
                        </transition>
                      </v-col>
                    </v-col>
                    <!--------------- POKEMON ABILITIES --------------->
                    <v-col class="pokemon-abilities">
                      <v-col
                        justify="center"
                        align="center"
                        class="pokemon-abilities-heading pt-0"
                      >
                        <transition
                          appear
                          appear-active-class="animated fadeInDown"
                        >
                          <v-btn
                            class="btn-title delay-pokemon-abilities-title"
                            text
                            ><v-icon class="pr-2" color="yellow"
                              >mdi-atom</v-icon
                            >
                            Pokemon Abilities
                          </v-btn>
                        </transition>
                      </v-col>
                      <v-col
                        justify="center"
                        align="center"
                        class="pokemon-abilities-logo"
                      >
                        <transition
                          appear
                          appear-active-class="animated fadeInUp"
                        >
                          <v-row class="delay-pokemon-abilities">
                            <v-col
                              cols="6"
                              v-for="(ability, i) in selectedPokemon.abilities"
                              :key="i"
                              class="py-0"
                            >
                              <p class="py-1 custom-btn">
                                <v-icon class="pr-2" color="yellow"
                                  >mdi-battlenet</v-icon
                                >
                                {{ ability.ability.name }}
                              </p>
                            </v-col>
                          </v-row>
                        </transition>
                      </v-col>
                    </v-col>
                  </v-col>
                </v-row>

                <!--------------- POKEMON EVOLUTION CHAIN --------------->
                <v-col class="pokemon-evolution-container">
                  <v-col
                    justify="center"
                    align="center"
                    class="pokemon-evolution-heading"
                  >
                    <transition
                      appear
                      appear-active-class="animated fadeInDown"
                    >
                      <v-btn
                        class="btn-title delay-pokemon-evolution-chain-title"
                        text
                        ><v-icon class="pr-2" color="yellow"
                          >mdi-atom-variant</v-icon
                        >
                        Pokemon Evolution Chain
                      </v-btn>
                    </transition>
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
                        <transition
                          appear
                          appear-active-class="animated flipInX"
                        >
                          <v-col
                            class="delay-pokemon-evolution-chain ma-0 pa-0"
                          >
                            <PokemonEvolutionCard :pokemonEv="pokemonEv" />
                          </v-col>
                        </transition>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-col>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </transition>
  </div>
</template>

<script>
import PokemonEvolutionCard from '@/components/PokemonEvolutionCard'

export default {
  components: {
    PokemonEvolutionCard,
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
  },
  head() {
    return {
      title: this.selectedPokemon.name,
    }
  },
  created() {
    this.$store.dispatch('setPokemon', this.$route.params.id)
  },
}
</script>

<style scoped>
.text-header {
  text-transform: uppercase;
  font-weight: 300;
}

.custom-btn {
  text-transform: uppercase;
  background-color: #3f1b23;
  font-weight: 500;
  font-size: 14px;
  border-radius: 12.5px;
  cursor: default;
}

.btn-title {
  cursor: default;
  font-weight: 300;
  font-size: 20px;
}

.poke-card {
  font-size: 150px;
  font-weight: 400;
}

.type-info {
  background-color: #3f1b23;
}

.delay-pokemon-container-card {
  animation-delay: 0.5s;
}

.delay-pokemon-title {
  animation-delay: 1s;
}

.delay-pokemon-image {
  animation-delay: 1.5s;
}

.delay-pokemon-info-title {
  animation-delay: 1.8s;
}

.delay-pokemon-info {
  animation-delay: 2s;
}

.delay-pokemon-type-title {
  animation-delay: 2.3s;
}

.delay-pokemon-type {
  animation-delay: 2.5s;
}

.delay-pokemon-abilities-title {
  animation-delay: 2.8s;
}

.delay-pokemon-abilities {
  animation-delay: 3s;
}

.delay-pokemon-evolution-chain-title {
  animation-delay: 3.3s;
}

.delay-pokemon-evolution-chain {
  animation-delay: 3.5s;
}
</style>
