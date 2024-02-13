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
          >
            <!-- v-for="(item, index) in jsonData.Data" -->
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
                      :href="item.Link"
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
                    :href="item.Link"
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
        <div class="text-center">
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
  </div>
</template>

<script>
import DisplayDialog from "./DisplayDialog.vue";

export default {
  props: {
    jsonData: {
      type: Object,
      required: true,
    },
  },
  components: {
    DisplayDialog,
  },
  data() {
    return {
      selectedDisplayData: null,
      dialogDisplayVisible: false,
    };
  },
  methods: {
    openDisplayDialog(data) {
      this.selectedDisplayData = data;
      this.dialogDisplayVisible = true;
    },
  },
};
</script>

<style scoped>
.contact-link {
  color: #007bff; /* Blue color for links */
  text-decoration: underline; /* Underline the link */
  cursor: pointer; /* Show pointer cursor on hover */
}

.contact-link:hover {
  color: #0056b3; /* Darker blue color on hover */
}
</style>
