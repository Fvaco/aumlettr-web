<template>
<v-app id="app" :dark="darkMode">
  <v-navigation-drawer app v-if="$vuetify.breakpoint.mdAndUp" :mobile-break-point="960">
    <app-friends></app-friends>
  </v-navigation-drawer>
  <v-content app>
    <router-view></router-view>
  </v-content>
  <app-bottom-nav></app-bottom-nav>
</v-app>
</template>

<script>
import {
  mapGetters
} from "vuex";

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
    ...mapGetters(["darkMode"])
  }
};
</script>

<style lang="scss">
*{
  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background-color: transparent
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: rgba(85, 85, 85, 0.1);
  }
}
</style>
