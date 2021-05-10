import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPokemons: [],
      selectedPokemon: {},
      selectedPokemonEvolution: {},
      pokemonList: [],
    },
    mutations: {
      setPokemons(state, pokemons) {
        state.loadedPokemons = pokemons
      },
      setSelectedPokemon(state, pokemon) {
        state.selectedPokemon = pokemon
      },
      setSelectedPokemonEvolution(state, pokemon) {
        state.selectedPokemonEvolution = pokemon
      },
      setPokemonList(state, pokemonList) {
        state.pokemonList = pokemonList
      },
    },
    actions: {
      setPokemons(vuexContext, total) {
        // console.log(total)
        this.$axios
          .$get(`/pokemon?limit=${total}&offset=0`)
          .then((data) => {
            // console.log(data)
            vuexContext.commit('setPokemons', data.results)
            return this.$axios.$get(`/pokemon?limit=${data.count}&offset=0`)
          })
          .then((data) => {
            // console.log(data.results)
            vuexContext.commit('setPokemonList', data.results)
          })
          .catch((err) => {
            console.log(err)
          })
      },
      setPokemon(vuexContext, id) {
        const evolution_chain = []

        this.$axios
          .$get('/pokemon/' + id)
          .then((data) => {
            vuexContext.commit('setSelectedPokemon', data)

            return this.$axios.$get('/pokemon-species/' + id)
          })
          .then((data) => {
            return this.$axios.$get(data.evolution_chain.url)
          })
          .then((data) => {
            evolution_chain.push(data.chain.species)

            if (data.chain.evolves_to.length === 0) {
              //   console.log('No Evolution')
            } else if (data.chain.evolves_to.length > 0) {
              evolution_chain.push(data.chain.evolves_to[0].species)
              if (data.chain.evolves_to[0].evolves_to.length === 0) {
                // console.log('No Evolution')
              } else {
                evolution_chain.push(
                  data.chain.evolves_to[0].evolves_to[0].species
                )
                if (
                  data.chain.evolves_to[0].evolves_to[0].evolves_to.length === 0
                ) {
                  //   console.log('No Evolution')
                } else {
                  evolution_chain.push(
                    data.chain.evolves_to[0].evolves_to[0].evolves_to[0].species
                  )
                }
              }
            }

            vuexContext.commit('setSelectedPokemonEvolution', evolution_chain)
          })
          .catch((err) => {
            console.log(err)
          })
      },
    },
    getters: {
      loadedPokemons(state) {
        return state.loadedPokemons
      },
      selectedPokemon(state) {
        return state.selectedPokemon
      },
      selectedPokemonEvolution(state) {
        return state.selectedPokemonEvolution
      },
      pokemonList(state) {
        return state.pokemonList
      },
    },
  })
}

export default createStore
