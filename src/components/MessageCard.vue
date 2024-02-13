<template>
  <q-card
    class="my-card shadow-1"
    :class="$q.platform.is.mobile ? 'q-mt-md' : 'q-mt-lg'"
  >
    <q-item>
      <q-item-section avatar>
        <q-avatar style="height: 70px; width: 70px">
          <img :src="jsonData.Data.Image" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <h5 class="q-my-xs">{{ jsonData.Data.Title }}</h5>
        <p caption>{{ jsonData.Data.SubTitle }}</p>
      </q-item-section>
    </q-item>
    <q-separator inset />
    <q-card-section>
      <p style="text-align: justify">
        {{ jsonData.Data.Description }}
      </p>
    </q-card-section>
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
  computed: {},
  methods: {},
};
</script>
