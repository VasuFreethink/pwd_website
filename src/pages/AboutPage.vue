<template>
  <q-page :style="{ fontSize: fontSize }">
    <h3 class="text-bold text-center">ABOUT US</h3>
    <section
      :class="$q.platform.is.mobile ? '' : 'q-pa-md'"
      style="margin-top: 50px"
      :style="
        $q.platform.is.mobile
          ? ''
          : 'width: 82vw; margin-left: auto; margin-right: auto; margin-top: 50px;'
      "
    >
      <image-card-description :jsonData="aboutImageCard" />

      <div class="body-text q-pa-md q-mt-lg">
        <!-- probgrams -->
        <p class="text-justify">
          Following are the programmes which are under the Public Works
          Department:
        </p>

        <!-- Cards -->
        <div class="row">
          <div
            v-for="(item, index) in programmesData.Data"
            :key="index"
            class="q-pa-sm"
            :class="[
              'col-' + 12 / programmesData.ColSizeSm,
              'col-md-' + 12 / programmesData.ColSizeMd,
            ]"
          >
            <simple-card :jsonData="item" />
          </div>
        </div>
      </div>

      <!-- Render About Text -->
      <text-render :jsonArray="aboutUsText" />
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useGeneralStore } from "src/stores/generalStore";
import aboutPageData from "../assets/jsons/aboutPageData.json";
import ImageCardDescription from "src/components/ImageCardDescription.vue";
import SimpleCard from "src/components/SimpleCard.vue";
import TextRender from "src/components/TextRender.vue";

const generalStore = useGeneralStore();

export default defineComponent({
  name: "AboutPage",
  components: {
    ImageCardDescription,
    SimpleCard,
    TextRender,
  },
  data() {
    return {
      aboutPageData: aboutPageData,
      generalStore,
    };
  },
  mounted() {},
  computed: {
    aboutImageCard() {
      return this.aboutPageData.AboutImageCard;
    },
    programmesData() {
      return this.aboutPageData.ProgrammesData;
    },
    aboutUsText() {
      return this.aboutPageData.AboutUsText;
    },
    componentName() {
      switch (this.item.ComponentName) {
        case "SimpleCard":
          return "SimpleCard";
        default:
          return "";
      }
    },
    fontSize() {
      return this.generalStore.fontSize;
    },
  },
  methods: {},
});
</script>
<style scoped>
/* .my-card {
  width: 100%;
  max-width: 500px;
} */

.about-text,
.body-text {
  /* font-size: 18px; */
  line-height: 1.5;
  font-family: Arial, sans-serif;
}
</style>
