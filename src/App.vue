<template>
  <v-app id="app" :dark="darkMode">
    <v-navigation-drawer
      app
      v-if="$vuetify.breakpoint.mdAndUp"
      :mobile-break-point="960">
      <app-friends></app-friends>
    </v-navigation-drawer>
    <v-content app> 
      <router-view></router-view> 
    </v-content>
    <app-bottom-nav></app-bottom-nav>
  </v-app>
</template>

<script>
import {mapGetters} from 'vuex';

import AppFriends from "./components/AppFriends.vue";
import AppBottomNav from "./components/AppMobileBottomNav.vue";

export default {
  name: "App",
  components: {
    AppFriends,
    AppBottomNav
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['darkMode'])
  },

};
</script>
