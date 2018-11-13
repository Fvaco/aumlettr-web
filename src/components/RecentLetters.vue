<template>
<div id="recent-letters">
  <v-container>
    <h2 class="">Recently received</h2>
  </v-container>
  
  <div class="letter-cards-list_wrapper">
    <div class="letter-card__wrapper" :key="index" v-for="index in 8">
      <letter-card></letter-card>
    </div>
  </div>
  <v-container class="mt-4">
    <v-layout row align-baseline justify-center>
      <v-flex class="title text-xs-center grey--text">
          <v-icon class="pr-2">inbox</v-icon> No incoming letters at this moment
      </v-flex>
    </v-layout>
  </v-container>
  
</div>
  
</template>

<script>
import LetterCard from './LetterCard.vue';
export default {
    components:{
      LetterCard
    },
    data () {
      return {
        items: []
      }
    }
  }
</script>

<style lang="scss">
  #recent-letters {
    width: 100%;
    overflow: hidden;
    .letter-cards-list_wrapper {
      position: relative;
      
      white-space: nowrap;
      padding: 10px;
      padding-left: 60px;
      overflow-x: auto;
      overflow-y: hidden;
    }
    .letter-card__wrapper {
      display: inline-block;
      overflow: hidden;
      white-space: normal;
      padding: 10px;
      width: 230px;
    }
  }
</style>
