import {defineStore} from "pinia";

interface State {
  miniSidebar: boolean;
  darkTheme: boolean;
}

export const useCustomizeTheme = defineStore({
  id: "customizeTheme",
  state: (): State => ({
    miniSidebar: false,
    darkTheme: false,
  }),
  getters: {},
  actions: {
    setMiniSideBar(payload: boolean) {
      this.miniSidebar = payload;
    },
  }
})
