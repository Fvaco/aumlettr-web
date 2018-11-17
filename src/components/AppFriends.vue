<template>
  <div>
    <v-toolbar v-if="$vuetify.breakpoint.mdAndUp" ref="drawerToolbar" class="elevation-1">
      <v-toolbar-title style="cursor:pointer" @click="$router.push({name:'home'})">Aumlettr</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn icon flat color="primary"> <v-icon>search</v-icon> </v-btn>

        <v-menu
          left
          offset-y
          bottom>
          <v-btn icon flat color="primary" slot="activator"> <v-icon>more_vert</v-icon> </v-btn>
          <v-list dense>
            <v-list-tile
            @click="$store.dispatch('toggleDarkMode')">
          <v-list-tile-title v-if="$store.getters.darkMode">Light mode</v-list-tile-title>
          <v-list-tile-titlev v-else>Dark mode</v-list-tile-titlev>
        </v-list-tile>
      </v-list>
        </v-menu>


      </v-toolbar-items>
    </v-toolbar>
    <div :style="palsListStyle">
      <v-list two-line :dense="$vuetify.breakpoint.smAndDown" class="transparent">
        <template v-for="(item, index) in items">
          <v-subheader v-if="item.header" :key="item.header">
            <v-spacer></v-spacer>
            {{ item.header }}
          </v-subheader>

          <v-divider
            v-else-if="item.divider"
            :inset="item.inset"
            :key="index"
          ></v-divider>

          <v-list-tile v-else :to="{name:'friend'}" :key="item.title + index" avatar>
            <v-list-tile-avatar>
              <img :src="item.avatar" />
            </v-list-tile-avatar>

            <v-list-tile-content >
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
              <v-list-tile-sub-title
                v-html="item.subtitle"
              ></v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <p class="primary--text lighten-2 body-1 font-weight-medium">new!</p>
            </v-list-tile-action>
          </v-list-tile>
        </template>
      </v-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawerToolbarHeight: undefined,
      palsListStyle: {},
      items: [
        {
          avatar: "https://image.flaticon.com/icons/svg/702/702003.svg",
          title: "Guy Brooks",
          subtitle: "<span class='text--primary'>Canada</span> &mdash; Oct 23"
        },
        { divider: true, inset: true },
        {
          avatar: "https://image.flaticon.com/icons/svg/701/701997.svg",
          title:
            'Paolo Pietri <span style="font-size: 0.9em" class="grey--text text--lighten-1 material-icons">reply</span>',
          subtitle: "<span class='text--primary'>Italy</span> &mdash; Oct 12"
        },
        { divider: true, inset: true },
        {
          avatar: "https://image.flaticon.com/icons/svg/702/702011.svg",
          title: "Sandra Adams",
          subtitle:
            "<span class='text--primary'>Indonesia</span> &mdash; Last week"
        },
        { divider: true, inset: true },
        {
          avatar: "https://image.flaticon.com/icons/svg/702/702011.svg",
          title: "Sandra Adams",
          subtitle:
            "<span class='text--primary'>Indonesia</span> &mdash; Last week"
        },
        { divider: true, inset: true },
        {
          avatar: "https://image.flaticon.com/icons/svg/702/702011.svg",
          title: "Sandra Adams",
          subtitle:
            "<span class='text--primary'>Indonesia</span> &mdash; Last week"
        },
        { divider: true, inset: true },
        {
          avatar: "https://image.flaticon.com/icons/svg/702/702011.svg",
          title: "Sandra Adams",
          subtitle:
            "<span class='text--primary'>Indonesia</span> &mdash; Last week"
        },
        { divider: true, inset: true },
        {
          avatar: "https://image.flaticon.com/icons/svg/702/702011.svg",
          title: "Sandra Adams",
          subtitle:
            "<span class='text--primary'>Indonesia</span> &mdash; Last week"
        },
        { divider: true, inset: true },
        {
          avatar: "https://image.flaticon.com/icons/svg/702/702011.svg",
          title: "Sandra Adams",
          subtitle:
            "<span class='text--primary'>Indonesia</span> &mdash; Last week"
        },
        { divider: true, inset: true },
        {
          avatar: "https://image.flaticon.com/icons/svg/702/702011.svg",
          title: "Sandra Adams",
          subtitle:
            "<span class='text--primary'>Indonesia</span> &mdash; Last week"
        },
        { divider: true, inset: true },
        {
          avatar: "https://image.flaticon.com/icons/svg/702/702011.svg",
          title: "Sandra Adams",
          subtitle:
            "<span class='text--primary'>Indonesia</span> &mdash; Last week"
        },
        { divider: true, inset: true },
        {
          avatar: "https://image.flaticon.com/icons/svg/702/702011.svg",
          title: "Sandra Adams",
          subtitle:
            "<span class='text--primary'>Indonesia</span> &mdash; Last week"
        },
        { divider: true, inset: true },
        {
          avatar: "https://image.flaticon.com/icons/svg/702/702011.svg",
          title: "Sandra Adams",
          subtitle:
            "<span class='text--primary'>Indonesia</span> &mdash; Last week"
        },
        { divider: true, inset: true },
        {
          avatar: "https://image.flaticon.com/icons/svg/702/702011.svg",
          title: "Sandra Adams",
          subtitle:
            "<span class='text--primary'>Indonesia</span> &mdash; Last week"
        },
        { divider: true, inset: true },
        {
          avatar: "https://image.flaticon.com/icons/svg/702/702003.svg",
          title: "Guy Brooks",
          subtitle: "<span class='text--primary'>Canada</span> &mdash; Oct 23"
        },
        { divider: true, inset: true }
      ]
    };
  },
  methods: {
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
    console.log("mounted!");
    this.updateStyle();
  }
};
</script>

<style>
</style>
