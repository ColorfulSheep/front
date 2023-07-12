/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import {loadFonts} from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import Vue3Toasity, {ToastContainerOptions} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import {App} from "vue";

export function registerPlugins(app: App) {
    loadFonts()
    app
        .use(vuetify)
        .use(router)
        .use(pinia)
        .use(Vue3Toasity, {
            autoClose: 3000
        } as ToastContainerOptions)

}
