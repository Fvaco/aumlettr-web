<template>
  <v-container fill-height>
    <v-layout column>
      <v-flex>
        <app-toolbar>
          <v-toolbar-side-icon @click="$router.go(-1)">
            <v-icon>mdi-close</v-icon>
          </v-toolbar-side-icon>
          <v-toolbar-title></v-toolbar-title>
          <v-spacer></v-spacer>
        </app-toolbar>
      </v-flex>
      <v-layout fill-height justify-center>
        <v-flex md10>
          <v-card>
            <v-card-text>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Commodi molestiae voluptate est fugiat dolore, maxime voluptatibus, veniam dolor quas recusandae quisquam dolorum illo asperiores ipsa consequuntur inventore reiciendis ab autem!</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi molestiae voluptate est fugiat dolore, maxime voluptatibus, veniam dolor quas recusandae quisquam dolorum illo asperiores ipsa consequuntur inventore reiciendis ab autem!</p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      
    </v-layout>
  </v-container>
</template>

<script>
import AppToolbar from "../components/AppToolbar.vue";
export default {
  components: {
    AppToolbar
  }
};
</script>

<style>
</style>
