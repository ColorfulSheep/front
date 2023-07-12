<script lang="ts" setup>
import {ref} from "vue";
import {toast} from "vue3-toastify";

const isFluid = ref(true)
const tab = ref(null)
const items = ref([
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"
])


const testInfo = () => {
    toast("我是默认")
}
const testError = () => {
    toast.error("我是失败")
}
const testWarning = () => {
    toast.warn("我是警告默认")
}
const testSuccess = () => {
    toast.success('hello', {
        autoClose: 20000,
        position: "top-center",

    })
}
</script>


<template>
    <v-card>
        <v-toolbar color="primary">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Your Dashboard</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>

            <template v-slot:extension>
                <v-container :fluid="isFluid" class="bg-black">
                    <v-tabs
                        v-model="tab"
                        align-tabs="center"
                        center-active
                        class="align-content-center"
                    >

                        <v-tab
                            v-for="item in items"
                            :key="item"
                            :value="item"
                        >
                        </v-tab>
                    </v-tabs>
                </v-container>
            </template>
        </v-toolbar>


        <v-window v-model="tab">
            <v-window-item
                v-for="n in 3"
                :key="n"
                :value="n"
            >
                <v-container fluid>
                    <v-row>
                        <v-col
                            v-for="i in 6"
                            :key="i"
                            cols="12"
                            md="4"
                        >
                            <v-img
                                :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                                :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                                aspect-ratio="1"
                            ></v-img>
                        </v-col>
                    </v-row>
                    <!-- <v-btn-group>
                        <v-btn @click="testInfo">默认</v-btn>
                        <v-btn @click="testError">错误</v-btn>
                        <v-btn @click="testWarning">警告</v-btn>
                        <v-btn @click="testSuccess">成功</v-btn>
                    </v-btn-group> -->
                    <!-- <v-card> -->
                        <!--                        <v-btn icon>-->
                        <!--                            <v-icon> mdi-menu-left</v-icon>-->
                        <!--                        </v-btn>-->
                        <!-- <v-chip-group -->
                            <!-- selected-class="text-deep-purple-accent-4" -->
                            <!-- show-arrows="true"> -->
                            <!--                            <template #default>-->
                            <!--                                <v-icon>mdi-home</v-icon>-->
                            <!-- <v-chip v-for="(n,i) in 50" :key="i" v>chip + {{ n }}</v-chip> -->
                            <!--                            </template>-->
                        <!-- </v-chip-group> -->
                        <!--                        <v-btn icon>-->
                        <!--                            <v-icon> mdi-menu-right</v-icon>-->
                        <!--                        </v-btn>-->
                    <!-- </v-card> -->
                    <v-window>
                        <v-window-item
                            v-for="n in 5"
                            :key="n"
                            :value="n">
                            <v-container align="center">
                                <v-row>
                                    <v-col v-for="i in 6"
                                           :key="i"
                                           cols="12" md="4">
                                        <v-tooltip text="我是btn">
                                            <template v-slot:activator="{props}">
                                                <v-btn class="bg-red" v-bind="props">Tooltip</v-btn>
                                            </template>
                                        </v-tooltip>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-window-item>
                    </v-window>

                </v-container>
            </v-window-item>
        </v-window>
    </v-card>


</template>

<style scoped>

</style>
