<template>
  <q-dialog
    persistent
    @update:value="updateDialogVisible"
    :style="{ fontSize: fontSize }"
  >
    <q-layout
      view="Lhh lpR fff"
      container
      class="bg-white text-dark"
      style="height: 80vh"
    >
      <q-header class="bg-primary">
        <q-toolbar>
          <q-toolbar-title>
            {{ data.SectionTitle }}
            <!-- <q-icon
              v-if="item.newIcon"
              color="red"
              class="blinking-icon"
              name="fiber_new"
              size="26px"
            /> -->
          </q-toolbar-title>
          <q-btn
            flat
            v-close-popup
            round
            dense
            icon="close"
            @click="closeDialog"
          />
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-page class="q-pa-lg">
          <!-- Title -->
          <h6 class="q-ma-none q-my-sm">
            {{ item.Title }}
          </h6>
          <!-- Image -->
          <q-card class="my-card" v-if="item.Image">
            <q-img style="object-fit: cover; height: 250px" :src="item.Image">
              <!-- <div class="absolute-bottom text-subtitle2 text-center">Image Title</div> -->
            </q-img>
          </q-card>
          <!-- Description -->
          <p
            v-if="item.DisplayDescription"
            style=""
            class="text-justify q-mt-md"
          >
            {{ item.Description }}
          </p>
          <!-- Details -->
          <div v-if="item.Details && item.Details.length > 0" class="q-my-md">
            <div v-for="(detail, index) in item.Details" :key="index">
              <p class="text-justify">
                <strong
                  >{{ detail.Name }}
                  <span v-if="detail.Name && detail.Value">:</span></strong
                >
                {{ detail.Value }}
              </p>
            </div>
          </div>
        </q-page>
      </q-page-container>
      <q-footer class="text-right bg-white">
        <!-- Button -->
        <q-btn
          :outline="item.ButtonDesignType === 'outline'"
          :flat="item.ButtonDesignType === 'flat'"
          v-if="item.Button"
          class="q-my-sm q-mx-sm shadow-none"
          color="primary"
          :icon="item.ButtonIcon"
          :label="item.ButtonLabel"
          size="md"
          @click="callFunction(item.ButtonFunction, item)"
        />

        <!-- Download Button -->
        <q-btn
          v-if="item.DownloadButton"
          class="q-my-sm q-mx-sm shadow-none"
          color="primary"
          icon="download"
          label="Download"
          size="md"
          @click="downloadItem(item)"
        />
      </q-footer>
    </q-layout>
  </q-dialog>
</template>
<script>
import { useGeneralStore } from "src/stores/generalStore";

const generalStore = useGeneralStore();
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    value: {
      type: Boolean,
      required: true,
    },
    data: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      generalStore,
    };
  },
  computed: {
    fontSize() {
      return this.generalStore.fontSize;
    },
  },
  methods: {
    closeDialog() {
      this.$emit("update:value", false); // Emit the update:value event to update the value prop
    },
    //Main function to call other function based on config
    callFunction(funcName, item) {
      if (typeof this[funcName] === "function") {
        this[funcName](item);
      } else {
        console.error(`Function "${funcName}" does not exist.`);
      }
    },
    applyForScheme() {
      console.log("APPLY FOR SCHEME");
    },
    downloadItem(item) {
      // Download;
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
    viewFile(item) {
      // VIEW IN NEW TAB
      if (item.DownloadLink) {
        window.open(item.DownloadLink, "_blank");
      }
    },
  },
};
</script>
