<template>
    <v-container fluid>
    <v-layout row>
        <v-flex>
            asd
        </v-flex>
        <v-spacer></v-spacer>
        <v-layout align-center column>
            <v-flex>
                <v-avatar>
                    <v-img
                        src="https://picsum.photos/200/300/?random"
                    ></v-img>
                </v-avatar>
            </v-flex>
            <v-flex>Guy Brooks</v-flex>
        </v-layout>
        <v-spacer></v-spacer>
        <v-flex>
        </v-flex>
    </v-layout>
    <v-layout row>
       <letter-card-list></letter-card-list>
    </v-layout>
    
        
</v-container>
</template>

<script>
import LetterCardList from '../components/LetterCardList.vue'
export default {
    components:{
        LetterCardList
    }
};
</script>

<style lang="scss" scoped>
</style>
