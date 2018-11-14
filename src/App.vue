<template>
  <v-app id="app">
    
    <!-- <v-toolbar app flat fixed></v-toolbar> -->
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
  // watch:{
  //   isMobileViewport(newValue, oldValue){
  //     if(oldValue !== newValue) 
  //     this.$store.dispatch('setMobileNavigation', newValue);
  //   }
  // },
  // computed:{
  //   isMobileViewport(){
  //     return this.$vuetify.breakpoint.smAndDown;
  //   }
  // },
  // created() {
  //   this.$store.dispatch('setMobileNavigation', this.isMobileViewport);
  // }
};
</script>
