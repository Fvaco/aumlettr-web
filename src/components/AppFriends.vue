<template>
<div>
  <v-toolbar v-if="$vuetify.breakpoint.mdAndUp" ref="drawerToolbar" class="elevation-1">
    <v-toolbar-title style="cursor:pointer" @click="$router.push({ name: 'home' });">
      Aumlettr
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn icon flat color="primary">
        <v-icon>search</v-icon>
      </v-btn>

      <v-menu left offset-y bottom>
        <v-btn icon flat color="primary" slot="activator">
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list dense>
          <v-list-tile @click="$store.dispatch('toggleDarkMode');">
            <v-list-tile-title v-if="$store.getters.darkMode">Light mode</v-list-tile-title>
            <v-list-tile-titlev v-else>Dark mode</v-list-tile-titlev>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>

  <div :style="palsListStyle">
    <v-list two-line :dense="$vuetify.breakpoint.smAndDown" class="transparent">
      <template v-for="(item, index) in friends">
        <v-list-tile :to="{ name: 'friend' }" :key="item.title + index" avatar>
          <v-list-tile-avatar>
            <img style="border: 2px solid teal; background: rgba(184, 184, 184, 0.6)" :src="item.avatar"/>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
              <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon v-if="item.hasNew" class="red--text lighten-2 body-1 font-weight-medium">mdi-checkbox-blank-circle</v-icon>
              <v-icon v-if="item.sending" class="lighten-2 body-1 font-weight-medium">mdi-redo-variant</v-icon>
            </v-list-tile-action>
        </v-list-tile>
        <v-divider inset :key="index"></v-divider>
      </template>

    </v-list>
  </div>
</div>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex';
export default {
  data() {
    return {
      drawerToolbarHeight: undefined,
      palsListStyle: {},
    };
  },
  computed: {
    ...mapGetters(["friends"])
  },
  methods: {
    ...mapActions(["fetchFriends"]),
    updateStyle() {
      console.log;
      this.drawerToolbarHeight =
        this.$refs.drawerToolbar && this.$refs.drawerToolbar.$el.clientHeight;
      this.palsListStyle = {
        height: `calc(100vh - ${this.drawerToolbarHeight}px)`,
        paddingBottom: "10px",
        overflowX: "hidden",
        overflowY: "auto"
      };
    }
  },
  mounted() {
    this.updateStyle();
  },
  created(){
    this.fetchFriends();
  }
};
</script>

<style>
</style>
