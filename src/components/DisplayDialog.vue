<template>
  <q-dialog
    persistent
    @update:value="updateDialogDisplayVisible"
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
          <q-toolbar-title> {{ data.SectionTitle }} </q-toolbar-title>
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
          <!-- Links -->
          <div v-if="data.SectionType == 'links'">
            <!-- Display Card View -->
            <div v-if="data.Display === 'card'">
              <!-- Display Card View -->
              <q-card
                class="q-ma-md my-card q-pa-none"
                v-for="(item, index) in data.Data"
                :key="index"
                clickable
                v-ripple
              >
                <q-card-section class="q-pa-none">
                  <q-item>
                    <q-item-section avatar>
                      <q-avatar color="primary" text-color="white">
                        <q-icon name="link" />
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>
                        <a
                          v-if="item.Link"
                          :href="item.Link"
                          :target="item.OpenNewTab ? '_blank' : null"
                          class="text-subtitle1"
                          style="text-decoration: none; color: inherit"
                          >{{ item.Name }}</a
                        >
                        <a
                          v-if="item.OpenInfoDialog"
                          @click="
                            openDialog(
                              additionalData[item.DataSource].Data,
                              additionalData[item.DataSource]
                            )
                          "
                          class="text-subtitle1"
                          style="text-decoration: none; color: inherit"
                          >{{ item.Name }}</a
                        >
                        <a
                          v-if="item.OpenDisplayDialog"
                          @click="
                            openDisplayDialog(additionalData[item.DataSource])
                          "
                          class="text-subtitle1"
                          style="text-decoration: none; color: inherit"
                          >{{ item.Name }}</a
                        >
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-card-section>
              </q-card>
            </div>
            <!-- Display List View -->
            <div v-else>
              <q-item
                v-for="(item, index) in data.Data"
                :key="index"
                clickable
                v-ripple
                class="q-my-sm"
              >
                <q-item-section avatar>
                  <q-avatar color="primary" text-color="white">
                    <q-icon name="link" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>
                    <a
                      v-if="item.Link"
                      :href="item.Link"
                      class="text-subtitle1"
                      style="text-decoration: none; color: inherit"
                      >{{ item.Name }}</a
                    >
                    <a
                      v-if="item.OpenInfoDialog"
                      @click="
                        openDialog(
                          additionalData[item.DataSource].Data,
                          additionalData[item.DataSource]
                        )
                      "
                      class="text-subtitle1"
                      style="text-decoration: none; color: inherit"
                      >{{ item.Name }}</a
                    >
                    <a
                      v-if="item.OpenDisplayDialog"
                      @click="
                        openDisplayDialog(additionalData[item.DataSource])
                      "
                      class="text-subtitle1"
                      style="text-decoration: none; color: inherit"
                      >{{ item.Name }}</a
                    >
                  </q-item-label>
                </q-item-section>
                <!-- <q-item-section side>
          <q-icon name="chat_bubble" color="green" />
        </q-item-section> -->
              </q-item>
            </div>
          </div>

          <!-- announcements -->
          <div v-if="data.SectionType == 'announcements'">
            <q-item v-for="(item, index) in data.Data" :key="index">
              <!-- clickable
              v-ripple
              @click="openDialog(item, data)" -->
              <q-item-section side>
                <q-icon color="" :name="data.BulletIcon" />
              </q-item-section>
              <q-item-section
                class="hoveritem"
                style="padding: 2px"
                clickable
                v-ripple
                @click="openDialog(item, data)"
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
          </div>
          <!-- Display Dialog -->
          <display-dialog
            :data="selectedDisplayData"
            v-model="dialogDisplayVisible"
          />
          <!-- Info Dialog -->
          <InfoDialog
            :item="selectedItem"
            :data="selectedData"
            v-model="dialogVisible"
          />
        </q-page>
      </q-page-container>
      <q-footer class="text-right bg-white">
        <!-- Download Button -->
      </q-footer>
    </q-layout>
  </q-dialog>
</template>
<script>
import InfoDialog from "./InfoDialog.vue";
// import DisplayDialog from "DisplayDialog.vue";
import { useGeneralStore } from "src/stores/generalStore";
import additionalData from "assets/jsons/additionalData.json";

const generalStore = useGeneralStore();

export default {
  name: "DisplayDialog",
  components: {
    InfoDialog,
    // DisplayDialog,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    // to get fontsize
    fontSize() {
      return this.generalStore.fontSize;
    },
  },
  methods: {
    closeDialog() {
      this.$emit("update:value", false); // Emit the update:value event to update the value prop
    },
    openDialog(item, data1) {
      this.selectedItem = item;
      this.selectedData = data1;
      this.dialogVisible = true;
    },
    openDisplayDialog(data) {
      console.log("hiiii", data);
      this.selectedDisplayData = data;
      this.dialogDisplayVisible = true;
    },
  },
  data() {
    return {
      selectedDisplayData: null,
      dialogDisplayVisible: false,

      //Info Dialog
      selectedItem: null,
      selectedData: null,
      dialogVisible: false,

      generalStore,

      additionalData: additionalData,
    };
  },
};
</script>

<style scoped>
.hoveritem:hover {
  background-color: rgba(0, 0, 0, 0.12); /* Change background color on hover */
  cursor: pointer; /* Change cursor on hover */
}
</style>
