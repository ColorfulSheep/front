<script lang="ts" setup>
const icons = [
    { icon: 'mdi-home-floor-b', text: '作者B站个人中心' },
    { icon: 'mdi-github', text: '作者Github' },
    { icon: 'mdi-qqchat', text: '作者QQ' },
    { icon: 'mdi-wechat', text: '作者微信' },

]
</script>

<template>
    <v-footer class="d-flex flex-column">
        <div class="bg-teal d-flex w-100 align-center px-4">
            <strong>点击右侧社交方式与我取得联系</strong>

            <v-spacer></v-spacer>

            <v-tooltip v-for="icon in icons" :text="icon.text">
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" :key="icon.icon" class="mx-4" :icon="icon.icon" variant="plain"
                        size="small"></v-btn>
                </template>
            </v-tooltip>

        </div>

        <div class="px-4 py-2 bg-black text-center w-100">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </div>
    </v-footer>
</template>

<style scoped></style>
