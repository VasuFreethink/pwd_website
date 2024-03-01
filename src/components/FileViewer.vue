<template>
  <div v-for="(list, index) in jsonData" :key="index">
    <h6 class="q-mb-none q-mt-md" v-if="list.MainTitle">
      {{ list.MainTitle }}
    </h6>
    <q-card class="q-my-md shadow-1 bg-grey-2" style="">
      <q-card-section class="q-pa-none">
        <q-list class="q-ma-none">
          <q-item v-if="list.Title" clickable @click="downloadItem(list)">
            <q-item-section>
              <p class="q-mb-none" style="font-size: 110%">
                {{ list.Title }}
              </p>
              <p class="q-mb-none text-grey-7" v-if="list.Date" caption>
                {{ list.Date }}
              </p>
            </q-item-section>
            <q-item-section side top>
              <q-btn
                flat
                dense
                icon="cloud_download"
                @click="downloadItem(list)"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import additionalData from "../assets/jsons/additionalData.json";

export default {
  props: {
    jsonData: {
      type: Object,
      required: true,
    },
  },
  components: {},
  data() {
    return {
      additionalData: additionalData,
    };
  },
  mounted() {},
  methods: {
    downloadItem(item) {
      if (item.DownloadLink) {
        const downloadLink = item.DownloadLink;
        const anchor = document.createElement("a");
        anchor.href = downloadLink;
        anchor.setAttribute("download", ""); // This attribute ensures the file is downloaded instead of opened
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
      }
    },
  },
};
</script>

<style scoped></style>
