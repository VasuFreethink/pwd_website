<template>
  <q-page>
    <ImageCarousel :jsonData="mainImageCarousel" />

    <div
      :class="$q.screen.lt.md ? '' : 'q-pa-md'"
      style="margin-top: 50px"
      :style="
        $q.screen.lt.md
          ? ''
          : 'width: 82vw; margin-left: auto; margin-right: auto; margin-top: 50px;'
      "
    >
      <!-- Main Structure 8-4 -->
      <div class="row">
        <!-- Main Structure 8 -->
        <div class="q-pa-md" :class="$q.screen.lt.md ? 'col-12' : 'col-8'">
          <image-card-description :jsonData="aboutImageCard" />

          <div class="row q-mt-md" style="">
            <div
              class="col-md-6 col-12"
              :class="{ 'q-pr-sm': !$q.screen.lt.md }"
            >
              <image-card :jsonData="swachhBharatMissionImageCard" />
            </div>
            <div
              class="col-md-6 col-12"
              :class="{
                'q-pl-sm': !$q.screen.lt.md,
                'q-mt-md': $q.screen.lt.md,
              }"
            >
              <icon-card :jsonData="billIconCard" />
            </div>
          </div>
        </div>
        <div class="q-pa-md" :class="$q.screen.lt.md ? 'col-12' : 'col-4'">
          <display-links :json-data="importantLinks" />
        </div>
      </div>
    </div>

    <!-- Noticifications/Circular -->
    <section class="bg-grey-3 q-py-xl">
      <!-- style="margin-top: 50px" -->
      <div
        :class="$q.screen.lt.md ? '' : 'q-pa-md'"
        :style="
          $q.screen.lt.md
            ? ''
            : 'width: 82vw; margin-left: auto; margin-right: auto;'
        "
      >
        <div class="row">
          <div class="q-pa-md col-md-4 col-12">
            <announcement-panel
              :json-data="importantNotices"
              style="height: 100%"
            />
          </div>
          <div class="q-pa-md col-md-4 col-12">
            <!-- <announcement-panel
              :json-data="notifications"
              style="height: 100%"
            /> -->
            <announcement-panel :json-data="circulars" style="height: 100%" />
          </div>
          <div class="q-pa-md col-md-4 col-12">
            <announcement-panel
              :json-data="noticeInvitingTenders"
              style="height: 100%"
            />
          </div>
        </div>
      </div>
    </section>
    <section>
      <!-- Recent Work Section-->
      <detailed-card :jsonData="recentWork" />

      <!-- Schemes Section -->
      <image-cards :jsonData="schemes" />
    </section>
    <!-- InfoDialog -->
    <!-- <InfoDialog
      :item="selectedItem"
      :data="selectedData"
      v-model="dialogVisible"
    /> -->
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import homePageData from "../assets/jsons/homePageData.json";
import aboutPageData from "../assets/jsons/aboutPageData.json";
import ImageCarousel from "src/components/ImageCarousel.vue";
import ImageCardDescription from "src/components/ImageCardDescription.vue";
import AnnouncementPanel from "src/components/AnnouncementPanel.vue";
import ImageCard from "src/components/ImageCard.vue";
import IconCard from "src/components/IconCard.vue";
import DisplayLinks from "src/components/DisplayLinks.vue";
// import InfoDialog from "src/components/InfoDialog.vue";
import ImageCards from "src/components/ImageCards.vue";
import DetailedCard from "src/components/DetailedCard.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    ImageCarousel,
    ImageCardDescription,
    AnnouncementPanel,
    ImageCard,
    IconCard,
    DisplayLinks,
    // InfoDialog,
    ImageCards,
    DetailedCard,
  },
  data() {
    return {
      homePageData: homePageData,
      aboutPageData: aboutPageData,
      // selectedItem: null,
      // selectedData: null,
      // dialogVisible: false,
    };
  },
  computed: {
    mainImageCarousel() {
      return this.homePageData.MainImageCarousel;
    },
    aboutImageCard() {
      return this.aboutPageData.AboutImageCard;
    },
    importantNotices() {
      return this.homePageData.ImportantNotices;
    },
    circulars() {
      return this.homePageData.Circulars;
    },
    swachhBharatMissionImageCard() {
      return this.homePageData.SwachhBharatMissionImageCard;
    },
    billIconCard() {
      return this.homePageData.BillIconCard;
    },
    importantLinks() {
      return this.homePageData.ImportantLinks;
    },
    notifications() {
      return this.homePageData.Notifications;
    },
    noticeInvitingTenders() {
      return this.homePageData.NoticeInvitingTenders;
    },
    recentWork() {
      return this.homePageData.RecentWork;
    },
    schemes() {
      return this.homePageData.Schemes;
    },
  },
  methods: {},
});
</script>
<style scoped></style>
