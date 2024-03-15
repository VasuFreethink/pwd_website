<template>
  <a
    :href="jsonData.Data.Link"
    :target="jsonData.Data.OpenInNewTab ? '_blank' : ''"
    style="text-decoration: none; color: inherit"
  >
    <q-card
      data-aos="zoom-in"
      class="my-card shadow-1"
      flat
      bordered
      style="border: 2px solid; border-radius: 7px; height: 100% !important"
      :style="{
        borderColor: jsonData.Data.Color,
        backgroundColor: jsonData.Data.BackgroundColorCode
          ? jsonData.Data.BackgroundColorCode
          : '',
      }"
      :class="
        jsonData.Data.BackgroundColorClass
          ? jsonData.Data.BackgroundColorClass
          : ''
      "
    >
      <!-- :style="{ borderColor: jsonData.Data.Color }" -->
      <q-card-section class="text-center">
        <svg-icon type="mdi" :path="jsonData.Data.Icon"></svg-icon>
        <q-icon
          :name="jsonData.Data.Icon"
          size="6em"
          class="q-pa-md"
          :style="{ color: jsonData.Data.Color }"
        ></q-icon>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="text-h6 q-mb-xs text-center text-bold">
          {{ jsonData.Data.Title }}
        </div>
        <div class="text-center">
          {{ jsonData.Data.Description }}
        </div>
      </q-card-section>
    </q-card>
  </a>
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
