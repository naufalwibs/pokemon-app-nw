<template>
  <v-container>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
      class="my-10"
    >
      <v-carousel-item v-for="(banner, i) in banners" :key="i">
        <v-img
          class="rounded-xl"
          lazy-src="https://picsum.photos/id/11/10/6"
          width="100%"
          height="400"
          :src="banners[i]"
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
        >Load More Pokemons</v-btn
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
      banners: [
        'https://pokemongamesharkcodes.files.wordpress.com/2016/09/banner-pokemon.png',
        'https://pokemonrevolution.net/forum/uploads/monthly_2021_01/pokemon_play_pokemon_banner-02-2x.jpg.b76ae96fa2fca38a128c2a5483744e4f.jpg',
        'https://www.ytgraphics.com/wp-content/uploads/2014/12/pokmeon.jpg',
      ],
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
