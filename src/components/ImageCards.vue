<template>
  <section class="" style="padding-bottom: 50px; padding-top: 40px">
    <h4
      :class="$q.screen.lt.md ? 'text-h6' : 'text-h5'"
      class="text-bold text-center text-uppercase"
    >
      {{ jsonData.SectionTitle }}
    </h4>
    <div
      class=""
      style="margin-top: 50px"
      :style="
        $q.screen.lt.md
          ? ''
          : 'width: 82vw; margin-left: auto; margin-right: auto; margin-top: 50px;'
      "
    >
      <div class="row q-pa-none">
        <div
          v-for="(item, index) in jsonData.Data.slice(
            0,
            jsonData.SummaryLength
          )"
          :key="index"
          class="col-6 col-md-3 q-pa-sm"
          @click="openDialog(item, jsonData)"
        >
          <q-card
            class="my-card item-card q-pb-none q-mb-none"
            :style="{ height: cardWidth + 'px' }"
          >
            <q-img :src="item.Image" style="height: 100%">
              <div
                class="absolute-bottom text-subtitle2 text-center"
                :class="jsonData.TitleTextStyle"
              >
                {{ item.Title }}
              </div>
            </q-img>
          </q-card>
        </div>
      </div>
    </div>

    <InfoDialog
      :item="selectedItem"
      :data="selectedData"
      v-model="dialogVisible"
    />
  </section>
</template>

<script>
import InfoDialog from "src/components/InfoDialog.vue";

export default {
  props: {
    jsonData: {
      type: Object,
      required: true,
    },
  },
  components: {
    InfoDialog,
  },
  data() {
    return {
      //openDialog
      selectedItem: null,
      selectedData: null,
      dialogVisible: false,
      //Card
      cardWidth: 0,
    };
  },
  mounted() {
    this.cardWidth = document.querySelector(".item-card").clientWidth;
    window.addEventListener("resize", this.updateCardWidth);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateCardWidth);
  },
  // mounted() {
  //   this.cardWidth = document.querySelector(".item-card").clientWidth;
  // },
  methods: {
    updateCardWidth() {
      this.cardWidth = document.querySelector(".item-card").clientWidth;
    },
    openDialog(item, data) {
      this.selectedItem = item;
      this.selectedData = data;
      this.dialogVisible = true;
    },
  },
};
</script>

<style scoped></style>
