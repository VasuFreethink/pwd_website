<template>
  <q-card class="my-card q-pa-md shadow-1" style="height: 100%">
    <p class="text-bold">{{ jsonData.Title }}</p>
    <p v-html="jsonData.Description.replace(/\n/g, '<br>')"></p>
  </q-card>
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
    return {};
  },
  mounted() {},
  computed: {},
  methods: {},
};
</script>
