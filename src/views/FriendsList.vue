<template>
  <v-container fill-height fluid class="pt-2 px-0">
    <v-layout v-if="$vuetify.breakpoint.smAndDown">
      <v-flex>
        <app-toolbar>
          <v-toolbar-title>Pen friends</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon> <v-icon>mdi-sort</v-icon> </v-btn>
        </app-toolbar>
        <app-friends></app-friends>
      </v-flex>
    </v-layout>
    <v-layout
      v-else
      fill-height
      justify-center
      align-center
      class="grey--text">
      <v-layout column justify-center align-center>
        <v-flex justify-center align-center class="py-3 text-xs-center">
          <v-img width="300" :src="require('../assets/meet-friends.png')">
          </v-img>
        </v-flex>
        <v-flex justify-center align-center class="text-xs-center">
          <h1 class="pb-4">Ready to meet a new pal?</h1>
          <v-btn large primary class="primary">Explore the world now!</v-btn>
          <v-flex
            d-flex
            justify-center
            align-center
            class="px-5 py-4 grey--text"
          >
            <v-divider></v-divider>
            <h4>or</h4>
            <v-divider></v-divider>
          </v-flex>

          <v-flex align-center class="text-xs-center">
            <span class="subheading pr-3 font-weight-medium">
              <v-icon class="pr-2">mdi-reply</v-icon>
              Select one of your amazing pen friends!
            </span>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import AppFriends from "../components/AppFriends.vue";
import AppToolbar from "../components/AppToolbar.vue";
export default {
  components: {
    AppFriends,
    AppToolbar
  },
  created() {
    console.log(this.$vuetify);
  }
};
</script>

<style></style>
