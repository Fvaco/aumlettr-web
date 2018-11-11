<template>
    <v-container grid-list-md class="pt-5">
        <v-layout row wrap>
            <v-flex xs12 sm6 lg4 :key="index" v-for="index in 5"> 
                <letter-card></letter-card>
            </v-flex>
        </v-layout>
    </v-container> 
</template>

<script>
import LetterCard from "./LetterCard.vue";
export default {
    components: {
        LetterCard
    }
};
</script>

<style>
</style>
