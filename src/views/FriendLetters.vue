<template>
  <v-container fluid>
    <v-layout class="px-2" justify-space-between align-center row>
      <v-layout align-start column>
        <v-flex class="subheading font-weight-medium py-1"> Guy Brooks </v-flex>
        <v-layout row>
          <v-layout row justify-center align-baseline>
            <v-flex d-flex align-baseline>
              <v-icon class="body-1 pr-1" color="primary"
                >mdi-zodiac-aries</v-icon
              >
              <div class="grey--text text--darken-2">Aries</div>
            </v-flex>
            <div class="mx-1"></div>
            <v-flex d-flex align-baseline>
              <v-icon class="body-1 pr-1" color="primary"
                >mdi-cake-variant</v-icon
              >
              <div class="grey--text text--darken-2">Mar 25th (27)</div>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-layout>
      <v-layout class="text-xs-right">
        <v-flex>
          <v-badge color="purple" left bottom overlap>
            <v-tooltip left slot="badge">
              <v-avatar size="24" slot="activator">
              <v-img
                src="https://image.flaticon.com/icons/svg/197/197430.svg"
              ></v-img>
            </v-avatar>
            Canada
            </v-tooltip>
            
            <v-avatar>
              <v-img src="https://picsum.photos/200/300/?random"></v-img>
            </v-avatar>
          </v-badge>
        </v-flex>
      </v-layout>
    </v-layout>
    <v-layout row class="pt-4 px-5" justify-center>
      <v-flex> <v-divider></v-divider> </v-flex>
    </v-layout>
    <v-layout row> <letter-card-list></letter-card-list> </v-layout>
  </v-container>
</template>

<script>
import LetterCardList from "../components/LetterCardList.vue";
export default {
  components: {
    LetterCardList
  }
};
</script>

<style lang="scss" scoped></style>
