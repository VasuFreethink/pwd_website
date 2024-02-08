<template>
  <div>
    <q-card
      class="my-card shadow-1"
      :class="$q.platform.is.mobile ? 'q-mt-md' : 'q-mt-lg'"
    >
      <q-card-section class="bg-primary text-white q-py-sm">
        <div class="text-h6">
          {{ jsonData.SectionTitle }}
        </div>
      </q-card-section>
      <q-card-section>
        <q-item
          v-for="(item, index) in jsonData.Data.slice(
            0,
            jsonData.SummaryLength
          )"
          :key="index"
          clickable
          v-ripple
          @click="openDialog(item, jsonData)"
        >
          <!--
          @click="openDialog(work, recentWork)"
          -->
          <q-item-section side>
            <q-icon color="" :name="jsonData.BulletIcon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              {{ item.Title }}
              <q-icon
                v-if="item.NewIcon"
                color="red"
                class="blinking-icon"
                name="fiber_new"
                size="26px"
              />
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon v-if="item.DownloadButton" color="" name="download" />
          </q-item-section>
        </q-item>
      </q-card-section>
      <!-- View More Button -->
      <div class="text-center">
        <q-btn
          outline
          color="primary"
          class="q-mt-sm q-mb-md no-shadow"
          text-color="primary"
          label="View More >>>"
          @click="openDisplayDialog(jsonData)"
        />
      </div>
    </q-card>
    <display-dialog
      :data="selectedDisplayData"
      v-model="dialogDisplayVisible"
    />
    <InfoDialog
      :item="selectedItem"
      :data="selectedData"
      v-model="dialogVisible"
    />
  </div>
</template>

<script>
import DisplayDialog from "./DisplayDialog.vue";
import InfoDialog from "./InfoDialog.vue";

export default {
  components: {
    DisplayDialog,
    InfoDialog,
  },
  props: {
    jsonData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      layout: false,
      //Display Dialog
      selectedDisplayData: null,
      dialogDisplayVisible: false,
      //Info Dialog
      selectedItem: null,
      selectedData: null,
      dialogVisible: false,
    };
  },
  methods: {
    openDisplayDialog(data) {
      this.selectedDisplayData = data;
      this.dialogDisplayVisible = true;
    },
    openDialog(item, data) {
      this.selectedItem = item;
      this.selectedData = data;
      this.dialogVisible = true;
    },
  },
};
</script>

<style scoped>
/* New Icon Blinking */
.blinking-icon {
  color: red;
  animation: blink 1s infinite;
}

/* Animation for new icon blink */
@keyframes blink {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
