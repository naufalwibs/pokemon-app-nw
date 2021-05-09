<template>
  <v-col lg="3" md="4" sm="6" cols="6">
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card
          outlined
          shaped
          :class="`rounded-bl-xl elevation-${hover ? 6 : 24}`"
          color="#314574"
        >
          <v-card-title> Pokemon Name </v-card-title>
          <v-img
            src="https://pokeres.bastionbot.org/images/pokemon/26.png"
            alt="26"
          >
          </v-img>
        </v-card>
      </template>
    </v-hover>
  </v-col>
</template>
