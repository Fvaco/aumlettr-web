<template>
  <v-card
    tile
    color="whitesmoke"
    @mouseover="mouseover = true;"
    @mouseout="mouseover = false;"
    :class="{
      'elevation-5': mouseover
    }"
    class="black--text pa-4 friend-letter__card"
  >
    <v-layout row>
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

    <v-layout row>
      <p class="grey--text">
        Dear man, <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's...
      </p>
    </v-layout>
    <v-divider></v-divider>

    <v-layout class="pt-1" d-flex column justify-center>
      <h4 class="grey--text text--darken-2">Guy Brooks</h4>
      <span class="caption">{{ $moment().format("ll") }}</span>
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
