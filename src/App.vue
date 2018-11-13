<template>
  <v-app id="app">
    <!-- <v-toolbar app flat fixed></v-toolbar> -->
    <v-navigation-drawer app :mobile-break-point="960">
      <app-friends></app-friends>
    </v-navigation-drawer>

    <v-bottom-nav
      v-if="$vuetify.breakpoint.smAndDown"
      app
      fixed
      shift
      
      :value="$vuetify.breakpoint.smAndDown"
      color="white"
    >
      <v-btn color="primary" exact :to="{name: 'home'}" flat value="home">
        <span>Home</span>
        <v-icon>mdi-google-circles-communities</v-icon>
      </v-btn>

      <v-btn color="primary" :to="{name: 'friends'}" flat value="friends">
        <span>Friends</span>
        <v-icon>people</v-icon>
      </v-btn>

      <v-btn color="primary" flat value="explore">
        <span>Explore</span>
        <v-icon>explore</v-icon>
      </v-btn>
      <v-btn color="primary" flat value="drafts">
        <span>Drafts</span>
        <v-icon>edit</v-icon>
      </v-btn>

      <v-btn color="primary" flat value="configure">
        <span>Configure</span>
        <v-icon>tune</v-icon>
      </v-btn>
    </v-bottom-nav>
    <v-content app> <router-view></router-view> </v-content>
  </v-app>
</template>

<script>
import AppFriends from "./components/AppFriends.vue";

export default {
  name: "App",
  components: {
    AppFriends
  },
  data() {
    return {
      bottomNav: "home"
    };
  },
  computed: {
    breakpoint() {
      return this.$vuetify.breakpoint;
    }
  },
  created() {
    // console.log(this.$vuetify);
  }
};
</script>
