<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm6 lg4 xl3 :key="index" v-for="index in 8">
        <letter-card></letter-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LetterCard from "./LetterCard.vue";
export default {
  components: {
    LetterCard
  }
};
</script>

<style>
</style>
