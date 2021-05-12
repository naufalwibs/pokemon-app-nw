<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        outlined
        shaped
        :class="`rounded-bl-xl elevation-${hover ? 6 : 24} card-evolution`"
        :color="`${hover ? '#3f371b' : '#314574'}`"
        @click="toPokemonDet(pokemonEv.url.split('/')[6])"
      >
        <transition appear appear-active-class="animated jackInTheBox">
          <v-card-title class="justify-center card-evolution-title">
            {{ pokemonEv.name.toUpperCase() }}
          </v-card-title>
        </transition>
        <v-col class="card-evolution-img-container">
          <v-img
            :src="`https://pokeres.bastionbot.org/images/pokemon/${
              pokemonEv.url.split('/')[6]
            }.png`"
            :alt="pokemonEv.url.split('/')[6]"
            lazy-src="https://i.imgur.com/SbaAnMC.png"
            class="img-evolution"
          >
          </v-img>
        </v-col>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  props: ['pokemonEv'],
  methods: {
    toPokemonDet(id) {
      this.$router.push('/pokemon/' + id)
    },
  },
}
</script>

<style scoped>
.card-evolution {
  overflow: visible;
}

.card-evolution .card-evolution-img-container .img-evolution,
.card-evolution .card-evolution-title {
  transition: transform 0.8s ease;
}

.card-evolution:hover .card-evolution-img-container .img-evolution,
.card-evolution:hover .card-evolution-title {
  transform: scale(1.1);
}
</style>
