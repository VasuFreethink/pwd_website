<template>
  <a
    :href="jsonData.Data.Link"
    :target="jsonData.Data.OpenInNewTab ? '_blank' : ''"
  >
    <q-card class="my-card shadow-1" style="border-radius: 7px">
      <q-img
        v-if="jsonData.Data.Image"
        :src="jsonData.Data.Image"
        :style="{ height: jsonData.Data.Height + 'px' }"
        fit="container"
      ></q-img>
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
