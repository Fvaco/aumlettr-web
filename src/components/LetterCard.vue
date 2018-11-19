<template>
  <v-card
    tile
    color="whitesmoke"
    @mouseover="mouseover = true;"
    @mouseout="mouseover = false;"
    :to="{ name: 'letter' }"
    :class="{
      'elevation-5': mouseover
    }"
    class="black--text px-4 py-3 friend-letter__card"
  >
    <v-layout row align-center>
      <v-icon class="caption red--text font-weight-bold"
        >mdi-checkbox-blank-circle</v-icon
      >
      <v-spacer></v-spacer>
      <template v-if="sent">
        <v-icon class="caption">check</v-icon>
        <v-icon v-if="read" class="caption" color="primary">check</v-icon>
      </template>

      <!--
        <template v-else>
            <v-icon class="caption">reply</v-icon>
        </template>
      -->
    </v-layout>

    <v-layout row class="pt-2">
      <p class="grey--text">
        Dear man, <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's...
      </p>
    </v-layout>
    <v-divider></v-divider>

    <v-layout class="pt-2" d-flex column justify-center>
      <h4 class="grey--text text--darken-1">Guy Brooks</h4>
      <span class="caption grey--text">{{ $moment().format("ll") }}</span>
      <v-spacer></v-spacer>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      mouseover: false,
      sent: true,
      read: true
    };
  }
};
</script>

<style lang="scss" scoped>
.friend-letter__card {
  cursor: pointer;
}
</style>
