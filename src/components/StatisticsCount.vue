<template>
  <!-- Cards  -->
  <div
    class="row q-pa-md q-gutter-sm q-mt-lg"
    v-if="!$q.screen.lt.md"
    style="width: 82vw; margin-left: auto; margin-right: auto"
  >
    <div
      v-for="(item, index) in jsonData.Data"
      :key="index"
      :class="$q.screen.lt.md ? 'col-12' : 'col'"
    >
      <q-card
        class="my-card q-py-md"
        flat
        bordered
        :style="{
          backgroundColor: item.BackgroundColorCode,
        }"
      >
        <q-card-section>
          <div class="row">
            <div class="col-9">
              <div class="text-h5 q-mt-sm q-mb-xs text-bold text-white">
                {{ item.Stats }}
              </div>
              <div class="text-h5 text-white">{{ item.Title }}</div>
            </div>
            <div class="col-3 flex items-center justify-center">
              <q-icon :name="item.Icon" size="xl" class="text-white"></q-icon>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
  <!-- carousel  -->
  <div v-if="$q.screen.lt.md" class="q-mt-lg">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="grey-3"
      style="height: 100%"
      class="rounded-borders"
      infinite
      :autoplay="autoplay"
      transition-duration="1500"
    >
      <!-- navigation -->
      <q-carousel-slide
        v-for="(item, index) in jsonData.Data"
        :key="index"
        :name="index + 1"
        class="column no-wrap"
      >
        <div class="row fit justify-start items-center no-wrap">
          <q-card
            class="my-card q-pt-md q-pb-lg"
            style="width: 100%"
            flat
            bordered
            :style="{
              backgroundColor: item.BackgroundColorCode,
            }"
          >
            <q-card-section>
              <div class="row">
                <div class="col-9">
                  <div class="text-h5 q-mt-sm q-mb-xs text-bold text-white">
                    {{ item.Stats }}
                  </div>
                  <div class="text-h5 text-white">{{ item.Title }}</div>
                </div>
                <div class="col-3 flex items-center justify-center">
                  <q-icon
                    :name="item.Icon"
                    size="xl"
                    class="text-white"
                  ></q-icon>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<script>
export default {
  props: {
    jsonData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      slide: 1,
      autoplay: true,
    };
  },
  mounted() {},
  computed: {},
  methods: {},
};
</script>
