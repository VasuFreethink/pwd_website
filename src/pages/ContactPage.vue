<template>
  <q-page :style="{ fontSize: fontSize }">
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
