<template>
  <v-row justify="center" align="center">
    <PokemonCard />
    <PokemonCard />
    <PokemonCard />
    <PokemonCard />
    <PokemonCard />
  </v-row>
</template>

<script>
import PokemonCard from '@/components/PokemonCard'

export default {
  components: {
    PokemonCard,
  },
}
</script>
