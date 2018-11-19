<template>
  <v-container fluid class="pa-0">
    <v-layout row> <recent-letters></recent-letters> </v-layout>
  </v-container>
</template>

<script>
import RecentLetters from "../components/RecentLetters.vue";
import AppToolbar from "../components/AppToolbar.vue";

export default {
  components: {
    RecentLetters,
    AppToolbar
  }
};
</script>

<style lang="scss" scoped></style>
