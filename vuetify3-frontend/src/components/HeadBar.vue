<script lang="ts" setup>
import {ref} from 'vue'

const items = ref([
    {id: 1, value: "首页", to: "/"},
    {id: 2, value: "学堂", to: "/school"},
    {id: 3, value: "博客", to: "/blog"},
    {id: 4, value: "影片", to: "/film"},
    {id: 5, value: "测试专用", to: "/test"},
])
const isFluid = ref(true)
const tab = ref(null)
</script>

<template>
    <v-container :fluid="isFluid">
        <v-row>
            <v-col :cols="4">
                <v-img inline="60" src="@/assets/logo.svg">
                </v-img>
            </v-col>

            <v-tabs
                v-model="tab"
                align-tabs="center"
                center-active
                class="align-content-center"
            >
                <v-tab
                    v-for="item in items"
                    :key="item.id"
                    :text="item.value"
                    :to="item.to"
                    :value="item.value"
                >
                </v-tab>
            </v-tabs>
        </v-row>


    </v-container>
</template>


<style scoped>

</style>
