<template>
    <div>
        <v-parallax height="800" src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
            <div class="d-flex flex-column fill-height justify-center align-center text-white">
                <h1 class="text-h4 font-weight-thin mb-4">
                    Build Your Dream Yourself !
                    <b><span>Time files ! </span></b>
                </h1>
                <h3 class="subheading">
                    Come on !!!
                </h3>
            </div>
        </v-parallax>
        <v-window>
            <v-window-item v-for="n in 3" :key="n" :value="n">
                <v-container fluid>
                    <v-row>
                        <v-col v-for="i in 6" :key="i" cols="12" md="4">
                            <v-img :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                                :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`" aspect-ratio="1"></v-img>
                        </v-col>
                    </v-row>

                </v-container>
            </v-window-item>
        </v-window>
    </div>
</template>

<script lang="ts" setup>


import { toast } from "vue3-toastify";

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
