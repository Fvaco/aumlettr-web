<template>
  <v-app id="app">
    <!-- <v-toolbar app flat fixed></v-toolbar> -->
    <v-navigation-drawer app v-if="$vuetify.breakpoint.mdAndUp" :mobile-break-point="960">
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
      <v-btn color="primary" :ripple="false"  exact :to="{name: 'home'}" flat value="home">
        <span>Home</span>
        <v-icon>mdi-google-circles-communities</v-icon>
      </v-btn>

      <v-btn color="primary" :ripple="false" :to="{name: 'friends'}" flat value="friends">
        <span>Friends</span>
        <v-icon>people</v-icon>
      </v-btn>

      <v-btn color="primary" :ripple="false" flat value="explore">
        <span>Explore</span>
        <v-icon>explore</v-icon>
      </v-btn>
      <v-btn color="primary" :ripple="false" flat value="drafts">
        <span>Drafts</span>
        <v-icon>edit</v-icon>
      </v-btn>

      <v-btn color="primary" :ripple="false" flat value="configure">
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
