<template>
  <q-page :style="{ fontSize: fontSize }">
    <!-- <q-card v-for="(item, index) in testData" :key="index" class="q-my-md">
      <q-card-section>
        <q-list>
          <q-item
            v-if="item.Subject"
            clickable
            @click="downloadFile(item.Link)"
          >
            <q-item-section>
              <q-item-label>{{ item.Subject }}</q-item-label>
              <q-item-label caption>{{ item.LastUpdatedDate }}</q-item-label>
            </q-item-section>
            <q-item-section side top>
              <q-btn
                flat
                dense
                icon="cloud_download"
                @click="downloadFile(item.Link)"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card> -->

    <data-table :jsonData="contactsData" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useGeneralStore } from "src/stores/generalStore";
import contactsPageData from "../assets/jsons/contactsData.json";
import DataTable from "src/components/DataTable.vue";

const generalStore = useGeneralStore();

export default defineComponent({
  name: "ContactPage",

  components: {
    DataTable,
  },
  data() {
    return {
      contactsPageData: contactsPageData,
      generalStore,
      filter: "",
      // testData: [
      //   {
      //     Subject: "LIST OF PIO's and APIO's",
      //     Link: "https://example.com/list_of_pios_and_apios.pdf",
      //     LastUpdatedDate: "30th April 2021",
      //   },
      //   {
      //     Subject: "Annual Returns Under RTI",
      //     Link: "https://example.com/annual_returns_under_rti.pdf",
      //     LastUpdatedDate: "30th April 2021",
      //   },
      // ],
    };
  },
  mounted() {},
  computed: {
    contactsData() {
      return this.contactsPageData.ContactsData;
    },
  },
  methods: {},
});
</script>
<style scoped></style>
