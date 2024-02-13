<template>
  <div>
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="jsonData.AutoPlay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      :style="{ height: jsonData.Height }"
    >
      <q-carousel-slide
        v-for="(item, index) in jsonData.Data"
        :key="index"
        :name="index + 1"
        :img-src="item.Image"
      />
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
    };
  },
};
</script>

<style scoped></style>
