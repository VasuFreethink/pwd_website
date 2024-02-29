<template>
  <a
    :href="jsonData.Data.Link"
    :target="jsonData.Data.OpenInNewTab ? '_blank' : ''"
  >
    <q-card class="my-card shadow-1" style="border-radius: 7px">
      <q-img
        :src="jsonData.Data.Image"
        style="height: 250px !important"
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
