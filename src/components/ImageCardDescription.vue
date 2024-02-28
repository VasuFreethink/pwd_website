<template>
  <q-card
    class="my-card shadow-1"
    :style="{
      backgroundColor: jsonData.BackgroundColorCode
        ? jsonData.BackgroundColorCode
        : '',
    }"
    :class="jsonData.BackgroundColorClass ? jsonData.BackgroundColorClass : ''"
  >
    <div class="row">
      <div class="col-12 col-md-4 q-pa-md">
        <q-card class="my-card image-card">
          <q-parallax
            v-if="jsonData.ShowParallax"
            :src="jsonData.Image"
            :style="{ height: cardWidth + 'px' }"
          />
          <q-img
            v-else
            :src="jsonData.Image"
            :style="{ height: cardWidth + 'px' }"
            fit="cover"
          ></q-img>
        </q-card>
      </div>
      <div class="col-12 col-md-8 q-pa-md">
        <h4 class="q-my-none text-bold">{{ jsonData.Title }}</h4>
        <p
          class="about-text text-justify q-mt-md"
          :style="{ fontSize: jsonData.TextFontSize }"
        >
          {{ jsonData.Description }}
        </p>
      </div>
    </div>
  </q-card>
</template>
<script>
import { useGeneralStore } from "src/stores/generalStore";

const generalStore = useGeneralStore();
export default {
  props: {
    jsonData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      generalStore,
      //Card
      cardWidth: 0,
    };
  },
  mounted() {
    this.cardWidth = document.querySelector(".image-card").clientWidth;
    this.cardWidth = this.cardWidth * 0.75;
  },
  computed: {
    fontSize() {
      return this.generalStore.fontSize;
    },
  },
  methods: {},
};
</script>
