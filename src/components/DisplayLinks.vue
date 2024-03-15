<template>
  <div>
    <q-card
      class="shadow-1"
      style="height: 100% !important"
      :style="{
        backgroundColor: jsonData.BackgroundColorCode
          ? jsonData.BackgroundColorCode
          : '',
      }"
      :class="
        jsonData.BackgroundColorClass ? jsonData.BackgroundColorClass : ''
      "
    >
      <q-card-section class="bg-primary text-white q-py-sm">
        <div class="text-h6">
          {{ jsonData.SectionTitle }}
        </div>
      </q-card-section>
      <q-card-section>
        <!-- Display Card View -->
        <div v-if="jsonData.Display === 'card'">
          <!-- Display Card View -->
          <q-card
            class="q-ma-md my-card q-pa-none"
            v-for="(item, index) in jsonData.Data.slice(
              0,
              jsonData.SummaryLength
            )"
            :key="index"
            clickable
            v-ripple
            style="cursor: pointer"
          >
            <q-card-section class="q-pa-none">
              <a
                v-if="item.Link"
                :href="item.Link"
                style="text-decoration: none; color: inherit"
              >
                <q-item>
                  <q-item-section avatar>
                    <q-avatar color="primary" text-color="white">
                      <q-icon name="link" />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>
                      <span class="text-subtitle1">{{ item.Name }}</span>
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </a>
              <a
                v-if="item.OpenInfoDialog"
                @click="
                  openDialog(
                    additionalData[item.DataSource].Data,
                    additionalData[item.DataSource]
                  )
                "
                style="text-decoration: none; color: inherit"
              >
                <q-item>
                  <q-item-section avatar>
                    <q-avatar color="primary" text-color="white">
                      <q-icon name="link" />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>
                      <span class="text-subtitle1">{{ item.Name }}</span>
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </a>
              <a
                v-if="item.OpenDisplayDialog"
                @click="openDisplayDialog(additionalData[item.DataSource])"
                style="text-decoration: none; color: inherit"
              >
                <q-item>
                  <q-item-section avatar>
                    <q-avatar color="primary" text-color="white">
                      <q-icon name="link" />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>
                      <span class="text-subtitle1">{{ item.Name }}</span>
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </a>

              <!-- <q-item>
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
              </q-item> -->
            </q-card-section>
          </q-card>
        </div>
        <!-- Display List View -->
        <div v-else>
          <q-list>
            <q-item
              v-for="(item, index) in jsonData.Data.slice(
                0,
                jsonData.SummaryLength
              )"
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
                </q-item-label>
              </q-item-section>
              <!-- <q-item-section side>
          <q-icon name="chat_bubble" color="green" />
        </q-item-section> -->
            </q-item>
          </q-list>
        </div>
        <div
          class="text-center"
          v-if="jsonData.Data.length > jsonData.SummaryLength"
        >
          <q-btn
            v-if="jsonData.Display === 'card'"
            color="white"
            class="q-mt-sm q-mb-md no-shadow"
            text-color="primary"
            label="View More >>>"
            @click="openDisplayDialog(jsonData)"
          />
          <q-btn
            v-else
            outline
            color="primary"
            class="q-mt-sm q-mb-md no-shadow"
            text-color="primary"
            label="View More >>>"
            @click="openDisplayDialog(jsonData)"
          />
        </div>
      </q-card-section>
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
import additionalData from "assets/jsons/additionalData.json";

export default {
  props: {
    jsonData: {
      type: Object,
      required: true,
    },
  },
  components: {
    DisplayDialog,
    InfoDialog,
  },
  data() {
    return {
      selectedDisplayData: null,
      dialogDisplayVisible: false,

      //Info Dialog
      selectedItem: null,
      selectedData: null,
      dialogVisible: false,

      additionalData: additionalData,
    };
  },
  methods: {
    openDisplayDialog(data) {
      this.selectedDisplayData = data;
      this.dialogDisplayVisible = true;
    },
    openDialog(item, data) {
      // console.log("Item", item);
      // console.log("Data", data);
      this.selectedItem = item;
      this.selectedData = data;
      this.dialogVisible = true;
    },
    // test(item) {
    //   console.log("1", item);

    //   console.log("1", additionalData[item.DataSource]);
    //   console.log("2", additionalData[item.DataSource].Data);
    // },
  },
};
</script>

<style scoped>
.contact-link {
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
}

.contact-link:hover {
  color: #0056b3;
}
</style>
