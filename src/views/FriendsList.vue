<template>
  <div class="pt-2">
    <div v-if="$vuetify.breakpoint.smAndDown">
      <app-toolbar>
        <v-toolbar-title>Pen friends</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-sort</v-icon>
        </v-btn>
      </app-toolbar>
      <app-friends></app-friends>
    </div>
    <div v-else>
      <v-container fill-height>
        <v-layout fill-height row align-center justify-center>
          Hello Friends list web version
        </v-layout>
      </v-container>
    </div>

  </div>
</template>

<script>
import AppFriends from '../components/AppFriends.vue';
import AppToolbar from "../components/AppToolbar.vue";
export default {
  components: {
    AppFriends,
    AppToolbar
  }
}
</script>

<style>
</style>
