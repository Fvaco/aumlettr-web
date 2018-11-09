<template>
  <v-app id="app">
      <!-- <v-toolbar app flat fixed></v-toolbar> -->
      <v-navigation-drawer app>
        <app-pals-list></app-pals-list>
      </v-navigation-drawer>
      <v-content app>
          <router-view></router-view>
      </v-content>    
  </v-app>
</template>

<script>
import AppPalsList from './components/AppPalsList.vue';

export default {
    name: "App",
    components:{
      AppPalsList
    },
    data() {
        return {
            //
        };
    }
};
</script>
