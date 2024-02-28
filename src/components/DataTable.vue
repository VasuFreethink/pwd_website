<template>
  <h3 class="text-bold text-center" v-if="jsonData.SectionTitle">
    {{ jsonData.SectionTitle }}
  </h3>

  <div class="q-pa-md" style="max-width: 100%">
    <!-- grid -->
    <!-- hide-header -->
    <q-table
      flat
      bordered
      :title="jsonData.Title"
      :rows="jsonData.Data.Rows"
      :columns="jsonData.Data.Columns"
      row-key="name"
      :filter="filter"
      :visible-columns="jsonData.Data.VisibleColumns"
    >
      <template v-slot:top-right>
        <q-input
          v-if="!jsonData.HideSearchBar"
          borderless
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
          class="q-mr-md"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <!-- <q-select
          v-model="jsonData.Data.VisibleColumns"
          multiple
          outlined
          dense
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="jsonData.Data.Columns"
          option-value="name"
          options-cover
          style="min-width: 150px"
        /> -->
      </template>
    </q-table>
  </div>
</template>

<script>
import { useGeneralStore } from "src/stores/generalStore";

const generalStore = useGeneralStore();

export default {
  props: {
    jsonData: {
      type: Object,
      required: true,
    },
  },
  components: {},
  computed: {
    fontSize() {
      return this.generalStore.fontSize;
    },
  },
  data() {
    return {
      generalStore,
      filter: "",
      visibleColumns: [
        "name",
        "designation",
        "officeAddress",
        "officeNumber",
        "mobileNumber",
        "emailId",
        "jurisdictionDuties",
      ],
    };
  },
  methods: {},
};
</script>

<style scoped></style>
