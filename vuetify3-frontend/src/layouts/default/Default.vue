<script lang="ts" setup>
import HeadBar from "@/components/HeadBar.vue";
import FooterBar from "@/components/FooterBar.vue";
</script>

<template>
    <v-app-bar dark>
        <head-bar></head-bar>
    </v-app-bar>
    <v-main>
        <v-container>
            <router-view></router-view>
        </v-container>
    </v-main>
    <v-footer>
        <footer-bar></footer-bar>
    </v-footer>

</template>

<style scoped>

</style>
