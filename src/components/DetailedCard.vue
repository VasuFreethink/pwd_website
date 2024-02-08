<template>
  <section class="bg-primary" style="padding-bottom: 50px; padding-top: 1px">
    <h4
      :class="$q.platform.is.mobile ? 'text-h5' : 'text-h5'"
      class="text-bold text-center text-white text-uppercase"
    >
      {{ jsonData.SectionTitle }}
    </h4>
    <div
      v-if="!$q.platform.is.mobile"
      class=""
      style="
        width: 82vw;
        margin-left: auto;
        margin-right: auto;
        margin-top: 50px;
      "
    >
      <div v-if="jsonData" class="row no-wrap">
        <div
          v-for="(item, index) in jsonData.Data.slice(
            0,
            jsonData.SummaryLength
          )"
          :key="index"
          class="col-3 q-px-sm"
        >
          <q-card class="my-card" style="height: 100%">
            <img :src="item.Image" style="object-fit: cover; height: 200px" />

            <q-card-section class="q-pb-none">
              <div class="text-subtitle1 text-bold text-uppercase">
                {{ truncateText(item.Title, 30) }}
              </div>
              <div class="text-body2 text-grey-9 q-mt-xs text-justify">
                {{ truncateText(item.Description, 80) }}
              </div>
              <div class="text-right">
                <q-btn
                  flat
                  color="primary"
                  class="q-my-sm"
                  label="Read More"
                  clickable
                  v-ripple
                  @click="openDialog(item, jsonData)"
                />
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div v-if="$q.platform.is.mobile">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        :autoplay="autoplay"
        animated
        control-color="black"
        navigation
        arrows
        class="bg-primary shadow-none q-pa-none"
        v-if="jsonData"
      >
        <q-carousel-slide
          v-for="(item, index) in jsonData.Data.slice(
            0,
            jsonData.SummaryLength
          )"
          :key="index"
          :name="index + 1"
          class="column no-wrap shadow-1"
        >
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-card class="my-card" style="height: 100%">
              <img :src="item.Image" style="object-fit: cover; height: 200px" />

              <q-card-section class="q-pb-none">
                <div class="text-subtitle1 text-bold text-uppercase">
                  {{ truncateText(item.Title, 30) }}
                </div>
                <div class="text-body2 text-grey-9 q-mt-xs text-justify">
                  {{ truncateText(item.Description, 80) }}
                </div>
                <div class="text-right">
                  <q-btn
                    flat
                    color="primary"
                    class="q-my-sm"
                    label="Read More"
                    clickable
                    v-ripple
                    @click="openDialog(item, jsonData)"
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <!-- InfoDialog -->
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
      slide: 1,
      autoplay: true,
      //openDialog
      selectedItem: null,
      selectedData: null,
      dialogVisible: false,
    };
  },
  methods: {
    truncateText(text, value) {
      if (text.length <= value) {
        return text;
      } else {
        return text.slice(0, value) + "...";
      }
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
