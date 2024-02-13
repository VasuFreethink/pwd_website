<template>
  <div>
    <q-card
      class="my-card shadow-1"
      style="height: 100%"
      :style="{
        backgroundColor: jsonData.BackgroundColorCode
          ? jsonData.BackgroundColorCode
          : '',
      }"
      :class="
        jsonData.BackgroundColorClass ? jsonData.BackgroundColorClass : ''
      "
    >
      <!-- :class="$q.platform.is.mobile ? 'q-mt-md' : 'q-mt-lg'" -->
      <q-card-section
        class="text-white q-py-sm"
        :class="bgColorClass"
        :style="{
          backgroundColor: jsonData.PrimaryColorCode
            ? jsonData.PrimaryColorCode
            : '',
        }"
      >
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
        >
          <!-- clickable
          v-ripple
          @click="openDialog(item, jsonData)" -->
          <q-item-section side>
            <q-icon color="" :name="jsonData.BulletIcon" />
          </q-item-section>
          <q-item-section
            class="hoveritem"
            style="padding: 2px"
            clickable
            v-ripple
            @click="openDialog(item, jsonData)"
          >
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
          :color="jsonData.PrimaryColor ? jsonData.PrimaryColor : ''"
          class="q-mt-sm q-mb-md no-shadow"
          :text-color="jsonData.PrimaryColor ? jsonData.PrimaryColor : ''"
          :style="{
            backgroundColor: jsonData.PrimaryColorCode
              ? jsonData.PrimaryColorCode
              : '',
            color: jsonData.PrimaryColorCode ? jsonData.PrimaryColorCode : '',
          }"
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
  computed: {
    bgColorClass() {
      if (this.jsonData && this.jsonData.PrimaryColor) {
        return "bg-" + this.jsonData.PrimaryColor;
      }
      if (this.jsonData.PrimaryColorCode) {
        return "";
      }
      return "bg-primary";
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

.hoveritem:hover {
  background-color: rgba(0, 0, 0, 0.12); /* Change background color on hover */
  cursor: pointer; /* Change cursor on hover */
  padding: 2px;
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
