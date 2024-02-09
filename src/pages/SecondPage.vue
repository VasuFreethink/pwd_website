<template>
  <q-page>
    <ImageCarousel />

    <div
      :class="$q.platform.is.mobile ? '' : 'q-pa-md'"
      style="margin-top: 50px"
      :style="
        $q.platform.is.mobile
          ? ''
          : 'width: 82vw; margin-left: auto; margin-right: auto; margin-top: 50px;'
      "
    >
      <!-- Main Structure 8-4 -->
      <div class="row">
        <!-- Main Structure 8 -->
        <div
          class="q-pa-md"
          :class="$q.platform.is.mobile ? 'col-12' : 'col-8'"
        >
          <!-- Introduction Card -->
          <h5 class="q-my-sm text-h4 text-bold">PUBLIC WORKS DEPARTMENT</h5>
          <p style="text-align: justify">
            The Public Works Department plays a major role in the economic,
            Commercial and tourist development of the State of Goa. Being a
            service Department, it is entrusted with all the developmental
            activities like Planning, Design, Construction, Operation and
            Maintenance of all types of construction works in this State of Goa.
          </p>

          <!-- Message by CM Card -->
          <message-card />
        </div>
        <!-- Main Structure 4 -->
        <div
          class="q-pa-md"
          :class="$q.platform.is.mobile ? 'col-12' : 'col-4'"
        >
          <display-links :json-data="importantLinks" />

          <announcement-panel :json-data="importantNotices" />
        </div>
      </div>

      <!-- Notices sections -->
      <section>
        <div class="row">
          <!-- Main Structure 4 -->
          <div
            class="q-pa-md"
            :class="$q.platform.is.mobile ? 'col-12' : 'col-4'"
          >
            <announcement-panel :json-data="importantNotices" />
          </div>
          <!-- Main Structure 4 -->
          <div
            class="q-pa-md"
            :class="$q.platform.is.mobile ? 'col-12' : 'col-4'"
          >
            <announcement-panel :json-data="importantNotices" />
          </div>
          <!-- Main Structure 4 -->
          <div
            class="q-pa-md"
            :class="$q.platform.is.mobile ? 'col-12' : 'col-4'"
          >
            <announcement-panel :json-data="importantNotices" />
          </div>
        </div>
      </section>
    </div>

    <!-- Recent Work Section-->
    <detailed-card :jsonData="recentWork" />

    <!-- Schemes Section -->
    <image-cards :jsonData="schemes" />

    <!-- InfoDialog -->
    <InfoDialog
      :item="selectedItem"
      :data="selectedData"
      v-model="dialogVisible"
    />
  </q-page>
</template>

<script>
import ImageCarousel from "src/components/ImageCarousel.vue";
import AnnouncementPanel from "src/components/AnnouncementPanel.vue";
import { defineComponent } from "vue";
import homePageData from "../assets/jsons/homePageData.json";
import InfoDialog from "src/components/InfoDialog.vue";
import DisplayLinks from "src/components/DisplayLinks.vue";
import ImageCards from "src/components/ImageCards.vue";
import DetailedCard from "src/components/DetailedCard.vue";
import MessageCard from "src/components/MessageCard.vue";

export default defineComponent({
  name: "SecondPage",
  components: {
    ImageCarousel,
    AnnouncementPanel,
    InfoDialog,
    DisplayLinks,
    ImageCards,
    DetailedCard,
    MessageCard,
  },
  data() {
    return {
      homePageData: homePageData,
      selectedItem: null,
      selectedData: null,
      dialogVisible: false,
    };
  },
  computed: {
    recentWork() {
      return this.homePageData.RecentWork;
    },
    importantNotices() {
      return this.homePageData.ImportantNotices;
    },
    importantLinks() {
      return this.homePageData.ImportantLinks;
    },
    schemes() {
      return this.homePageData.Schemes;
    },
    displayedWorks() {
      return this.recentWork.Data.slice(0, 4);
    },
  },
  methods: {
    truncateText(text, value) {
      if (text.length <= value) {
        return text;
      } else {
        return text.slice(0, value) + "...";
      }
    },
    openDialog(item, data) {
      this.selectedItem = item;
      this.selectedData = data;
      this.dialogVisible = true;
    },
  },
});
</script>
<style scoped></style>
