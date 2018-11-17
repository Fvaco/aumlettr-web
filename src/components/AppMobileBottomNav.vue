<template>
  <div v-if="$vuetify.breakpoint.smAndDown">
    <v-bottom-nav
      app
      fixed
      shift
      :value="$vuetify.breakpoint.smAndDown">
      <v-btn
        color="primary"
        :ripple="false"
        exact
        :to="{ name: 'home' }"
        flat
        value="home"
      >
        <span>Home</span>
        <v-icon>mdi-google-circles-communities</v-icon>
      </v-btn>

      <v-btn
        color="primary"
        :ripple="false"
        :to="{ name: 'friends' }"
        flat
        value="friends"
      >
        <span>Friends</span>
        <v-icon>people</v-icon>
      </v-btn>

      <v-btn color="primary" disabled :ripple="false" flat value="explore">
        <span>Explore</span>
        <v-icon>explore</v-icon>
      </v-btn>
      <v-btn color="primary" disabled :ripple="false" flat value="drafts">
        <span>Drafts</span>
        <v-icon>edit</v-icon>
      </v-btn>

      <v-btn color="primary" disabled :ripple="false" flat value="configure">
        <span>Configure</span>
        <v-icon>tune</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
