<template>
  <v-container>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
      class="my-10"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <!-- <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">{{ slide }} Slide</div>
          </v-row>
        </v-sheet> -->
        <v-img
          class="rounded-xl"
          lazy-src="https://picsum.photos/id/11/10/6"
          width="100%"
          height="400"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
      </v-carousel-item>
    </v-carousel>
    <v-col>
      <v-autocomplete
        clearable
        dense
        rounded
        solo-inverted
        class="mb-5"
        :items="pokemonList"
        item-text="name"
        v-model="value"
        @keyup="toDetailPageFromSearch"
        label="Search Pokemon and Press Enter"
      ></v-autocomplete>
      <v-alert
        v-if="isNotFound"
        border="bottom"
        color="red"
        dense
        outlined
        prominent
        type="error"
        >Pokemon Not Found, Please Insert Valid Pokemon Name</v-alert
      >
    </v-col>
    <v-row justify="center" align="center">
      <PokemonCard
        v-for="pokemon in loadedPokemons"
        :key="pokemon.url.split('/')[6]"
        :pokemon="pokemon"
      />
    </v-row>
    <v-col justify="center" align="center" class="pt-10">
      <v-btn @click="loadMore" color="secondary" elevation="7" large
        >Load More</v-btn
      >
    </v-col>
  </v-container>
</template>

<script>
import PokemonCard from '@/components/PokemonCard'

export default {
  components: {
    PokemonCard,
  },
  data() {
    return {
      colors: ['indigo', 'warning', 'pink darken-2'],
      slides: ['First', 'Second', 'Third'],
      total: 20,
      value: '',
      isNotFound: false,
    }
  },
  methods: {
    loadMore() {
      this.total += 20
      this.$store.dispatch('setPokemons', this.total)
    },
    toDetailPageFromSearch(e) {
      e.preventDefault()
      if (e.keyCode === 13) {
        const pokemonData = this.pokemonList.find(
          (pokemon) => pokemon.name === this.value
        )
        if (pokemonData) {
          this.$router.push(`/pokemon/${pokemonData.url.split('/')[6]}`)
        } else {
          console.log('Not Exist')
          this.isNotFound = true
        }
      }
    },
  },
  computed: {
    loadedPokemons() {
      return this.$store.getters.loadedPokemons
    },
    pokemonList() {
      return this.$store.getters.pokemonList
    },
  },
  created() {
    this.$store.dispatch('setPokemons', this.total)
  },
}
</script>
