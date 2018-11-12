<template>
<div id="recent-letters">
  <h2 class="mt-4 ml-4">Recently received</h2>
  <div class="letter-cards-list_wrapper">
    <div class="letter-card__wrapper" :key="index" v-for="index in 8">
      <letter-card></letter-card>
    </div>
  </div>
  <v-layout class="mt-4" row align-baseline justify-center>
    <v-flex class="title text-xs-center grey--text">
         <v-icon class="pr-2">inbox</v-icon> No incoming letters at this moment
    </v-flex>
  </v-layout>
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
      padding-left: 50px;
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
