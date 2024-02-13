<template>
  <q-page>
    <div class="q-pa-md">
      <h4 class="text-center text-bold">{{ albums.SectionTitle }}</h4>
      <div class="q-col-gutter-md row items-start">
        <div
          class="col-4 col-md-2"
          v-for="(item, index) in albums.Data"
          :key="index"
          @click="fetchAlbumData(item.Name)"
        >
          <q-img
            :src="item.Image"
            fit="cover"
            :style="{ height: $q.platform.is.mobile ? '120px' : '230px' }"
          >
            <div class="absolute-bottom text-center">
              {{ item.Title }}
            </div>
          </q-img>
        </div>
      </div>
    </div>
    <gallery-grid :jsonData="selectedAlbumData" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import galleryPageData from "../assets/jsons/galleryPageData.json";
import GalleryGrid from "src/components/GalleryGrid.vue";

export default defineComponent({
  name: "GalleryPage",
  components: {
    GalleryGrid,
  },
  data() {
    return {
      galleryPageData: galleryPageData,
      selectedAlbumData: [],
    };
  },
  computed: {
    albums() {
      return this.galleryPageData.Albums;
    },
  },
  methods: {
    fetchAlbumData(name) {
      this.selectedAlbum = name;
      switch (name) {
        case "GalleryWaterSupply":
          this.selectedAlbumData = this.galleryPageData.GalleryWaterSupply;
          break;
        case "GalleryRoads":
          this.selectedAlbumData = this.galleryPageData.GalleryRoads;
          break;
        case "GalleryBridges":
          this.selectedAlbumData = this.galleryPageData.GalleryBridges;
          break;
        default:
          this.selectedAlbumData = [];
      }
    },
  },
});
</script>
<style scoped></style>
