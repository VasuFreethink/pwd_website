<template>
  <q-page :style="{ fontSize: fontSize }">
    <!-- {{ contactsPageData }} -->
    <data-table :jsonData="contactsData" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useGeneralStore } from "src/stores/generalStore";
import contactsPageData from "../assets/jsons/contactsData.json";
import DataTable from "src/components/DataTable.vue";
import axios from "axios";

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
    };
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    contactsData() {
      return this.contactsPageData.ContactsData;
    },
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(
          "https://hub.mapflows.com/data/pwd_contacts.json"
        );

        // console.log("contactsPageData", this.contactsPageData);
        // console.log("response.data", response.data);
        // Append fetched rows to the existing Rows array in contactsPageData
        this.contactsPageData.ContactsData.Data.Rows.push(...response.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    },
  },
});
</script>
<style scoped></style>
