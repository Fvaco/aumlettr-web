<template>
  <v-container fluid class="pa-0">
    <v-layout row>
      <recent-letters></recent-letters>
    </v-layout>
    
  </v-container>
</template>

<script>
import RecentLetters from "../components/RecentLetters.vue";

export default {
  components: {
    RecentLetters
  }
};
</script>

<style lang="scss" scoped>
</style>
