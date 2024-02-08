import { defineStore } from "pinia";

export const useGeneralStore = defineStore("generalStore", {
  state: () => ({
    fontSizes: ["84%", "92%", "100%", "108%", "116%", "124%"],
    fontSizeIndex: 2, // Default to 100%
  }),
  getters: {
    fontSize(state) {
      return state.fontSizes[state.fontSizeIndex];
    },
  },
  actions: {
    increaseFontSize() {
      if (this.fontSizeIndex < this.fontSizes.length - 1) {
        this.fontSizeIndex++;
      }
    },
    decreaseFontSize() {
      if (this.fontSizeIndex > 0) {
        this.fontSizeIndex--;
      }
    },
    resetFontSize() {
      this.fontSizeIndex = 2; // Reset to default (100%)
    },
  },
});
