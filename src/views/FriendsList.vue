<template>
  <div>
    <div v-if="this.$vuetify.breakpoint.smAndDown">
      <v-toolbar app flat ref="drawerToolbar" :color="$vuetify.theme.backgroundColor">
        <v-toolbar-title>Pen friends</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-sort</v-icon>
        </v-btn>
      </v-toolbar>
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
export default {
  components: {
    AppFriends
  }
}
</script>

<style>
</style>
