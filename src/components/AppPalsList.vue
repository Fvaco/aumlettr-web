<template>
<v-layout>
    <v-flex>
        <v-toolbar flat color="accent" class="elevation-1" extended>
            <v-text-field 
                solo
                clearable
                flat
                append-icon="search"
                slot="extension" 
                type="search" placeholder="Search...">
            </v-text-field>

            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn icon>
                    <v-icon>add</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>more_vert</v-icon>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-list two-line>
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :inset="item.inset"
              :key="index"
            ></v-divider>

            <v-list-tile
              v-else
              :key="item.title"
              avatar
              @click=""
            >
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
    </v-flex>
</v-layout>
    
</template>

<script>
export default {
    data() {
        return {
            items: [
                // { header: "Today" },
                {
                    avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                    title: "Guy Brooks",
                    subtitle:
                        "<span class='text--primary'>Canada</span> &mdash; Oct 23"
                },
                { divider: true, inset: true },
                {
                    avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
                    title:
                        'Paolo Pietri <span style="font-size: 0.9em" class="grey--text text--lighten-1 material-icons">reply</span>',
                    subtitle:
                        "<span class='text--primary'>Italy</span> &mdash; Oct 12"
                },
                { divider: true, inset: true },
                {
                    avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
                    title: "Sandra Adams",
                    subtitle:
                        "<span class='text--primary'>Indonesia</span> &mdash; Last week"
                }
            ]
        };
    }
};
</script>

<style>
</style>
