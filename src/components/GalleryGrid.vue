<template>
  <div class="q-pa-md">
    <h4 class="text-center text-bold">{{ jsonData.SectionTitle }}</h4>
    <div class="q-col-gutter-md row items-start">
      <div
        class="col-6 col-md-3"
        v-for="(item, index) in jsonData.Data"
        :key="index"
      >
        <q-img
          :src="item.Image"
          v-if="item.Image"
          fit="cover"
          :style="{ height: $q.platform.is.mobile ? '170px' : '300px' }"
        >
          <div class="absolute-bottom text-center">
            {{ item.Title }}
          </div>
        </q-img>
        <div v-else class="video-container" style="height: 100% !important">
          <iframe
            :src="item.Video"
            frameborder="0"
            allowfullscreen
            style="width: 100%"
            :style="{ height: $q.platform.is.mobile ? '170px' : '300px' }"
          >
            <div class="absolute-bottom text-center">
              {{ item.Title }}
            </div>
          </iframe>
        </div>
      </div>
    </div>
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
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped></style>
