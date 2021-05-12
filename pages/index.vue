<template>
  <v-container>
    <v-carousel
      cycle
      height="auto"
      hide-delimiter-background
      show-arrows-on-hover
      class="my-10"
    >
      <v-carousel-item v-for="(banner, i) in banners" :key="i">
        <v-img
          class="rounded-xl"
          :lazy-src="LazyLoading"
          width="100%"
          height="auto"
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
import Banner1 from '@/assets/banners/banner-pokemon-1.png'
import Banner2 from '@/assets/banners/banner-pokemon-2.jpg'
import Banner3 from '@/assets/banners/banner-pokemon-3.png'
import LazyLoading from '@/assets/banners/lazy-loading-1.png'

export default {
  components: {
    PokemonCard,
  },
  data() {
    return {
      banners: [Banner1, Banner2, Banner3],
      total: 20,
      value: '',
      isNotFound: false,
      LazyLoading,
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
