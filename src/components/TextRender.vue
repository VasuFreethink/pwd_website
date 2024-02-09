<template>
  <div class="q-pa-md">
    <div v-for="(section, index) in jsonArray.Content" :key="index">
      <h6 v-if="section.Title" class="text-bold q-my-xs">
        {{ section.Title }}
      </h6>
      <div v-if="section.Description">
        <p v-if="section.Description" class="text-justify">
          {{ section.Description }}
        </p>
      </div>
      <ul v-if="section.Sublist" style="list-style-type: none">
        <li v-for="(subItem, subIndex) in section.Sublist" :key="subIndex">
          {{ subItem }}
        </li>
      </ul>

      <div v-if="section.Content.length > 0">
        <div v-for="(item, itemIndex) in section.Content" :key="itemIndex">
          <div v-if="item.Title" class="text-bold">{{ item.Title }}</div>
          <p v-if="item.Description" class="text-justify">
            {{ item.Description }}
          </p>
          <ul v-if="item.Sublist" style="list-style-type: i">
            <li v-for="(subItem, subIndex) in item.Sublist" :key="subIndex">
              {{ subItem }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useGeneralStore } from "src/stores/generalStore";

const generalStore = useGeneralStore();
export default {
  props: {
    jsonArray: {
      type: Array,
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
  components: {},
  methods: {},
};
</script>
