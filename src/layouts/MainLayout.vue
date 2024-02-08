<template>
  <q-layout view="lHh lpr lFf" :style="{ fontSize: fontSize }">
    <!-- style="font-size: 160%" -->
    <q-header elevated>
      <q-toolbar class="bg-white text-black" style="height: 70px !important">
        <!-- <q-btn flat round dense icon="menu" class="q-mr-sm" /> -->
        <q-avatar>
          <img
            alt="Logo"
            src="src/assets/government-of-goa-logo.png"
            class="q-mx-md"
            style="width: 50px"
          />
          <!-- src="./assets/government-of-goa-logo.png" -->
        </q-avatar>

        <q-toolbar-title>PWD Goa</q-toolbar-title>

        <q-btn
          color="grey-6"
          size="sm"
          class="shadow-none q-mx-xs"
          @click="decreaseFontSize"
          >A-</q-btn
        >
        <q-btn
          color="grey-6"
          size="sm"
          class="shadow-none q-mx-xs"
          @click="resetFontSize"
          >A</q-btn
        >
        <q-btn
          color="grey-6"
          size="sm"
          class="shadow-none q-mx-xs"
          @click="increaseFontSize"
          >A+</q-btn
        >
      </q-toolbar>
      <q-toolbar class="row justify-between">
        <q-btn
          flat
          dense
          round
          icon="menu"
          class="q-mr-md"
          aria-label="Menu"
          v-if="$q.platform.is.mobile"
          @click="toggleLeftDrawer"
        />
        <q-tabs v-model="tab" v-if="!$q.platform.is.mobile" class="q-mx-auto">
          <!-- <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          /> -->
          <q-tab name="home" label="Home" />
          <q-tab name="aboutus" label="ABOUT US">
            <q-menu menu-anchor="hover">
              <q-list>
                <q-item>
                  <q-item-label> HISTORY OF PWD Goa</q-item-label>
                </q-item>
                <q-item>
                  <q-item-label>ORGANISATION CHART</q-item-label>
                </q-item>
                <q-item>
                  <q-item-label>CONTACT US</q-item-label>
                </q-item>
              </q-list>
            </q-menu>
          </q-tab>
          <q-tab name="schemes" label="SCHEMES">
            <q-menu menu-anchor="hover" class="hover-menu">
              <q-list>
                <q-item>
                  <q-item-label>BUILDINGS</q-item-label>
                </q-item>
                <q-item>
                  <q-item-label>ROADS & BRIDGES</q-item-label>
                </q-item>
                <q-item>
                  <q-item-label>WATER SUPPLY & SANITATION</q-item-label>
                </q-item>
                <q-item>
                  <q-item-label>NATIONAL HIGHWAY</q-item-label>
                </q-item>
              </q-list>
            </q-menu>
          </q-tab>
          <q-tab name="circulars" label="CIRCULARS">
            <q-menu menu-anchor="hover">
              <q-list>
                <q-item>
                  <q-item-label>ORDERS</q-item-label>
                </q-item>
                <q-item>
                  <q-item-label>CIRCULARS</q-item-label>
                </q-item>
                <q-item>
                  <q-item-label>DOCUMENTS </q-item-label>
                </q-item>
              </q-list>
            </q-menu>
          </q-tab>
          <q-tab name="easeofdoingbusiness" label="EASE OF DOING BUSINESS" />
          <q-tab name="sitemap" label="SITEMAP" />
          <q-tab name="employeecorner" label="EMPLOYEE CORNER" />
          <q-tab name="publicgrievance" label="PUBLIC GRIEVANCE" />
        </q-tabs>
        <div class="q-px-xl"></div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above>
      <!-- :width="200"
      :breakpoint="500" -->
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <q-item active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section> Home </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="info" />
            </q-item-section>

            <q-item-section> About Us </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="receipt_long" />
            </q-item-section>

            <q-item-section> Schemes </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="text_snippet" />
            </q-item-section>

            <q-item-section> Circulars </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="map" />
            </q-item-section>

            <q-item-section> Sitemap </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="assignment_ind" />
            </q-item-section>

            <q-item-section> Employee Corner </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="public" />
            </q-item-section>

            <q-item-section> Public Grievance </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { useGeneralStore } from "src/stores/generalStore";

const generalStore = useGeneralStore();

export default {
  name: "MainLayout",

  components: {},

  data() {
    return {
      leftDrawerOpen: false,
      generalStore,
    };
  },
  computed: {
    // to get fontsize
    fontSize() {
      return this.generalStore.fontSize;
    },
  },

  methods: {
    //Toggle for Drawer
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    //Font Size Functions
    increaseFontSize() {
      this.generalStore.increaseFontSize();
    },
    decreaseFontSize() {
      this.generalStore.decreaseFontSize();
    },
    resetFontSize() {
      this.generalStore.resetFontSize();
    },
  },

  mounted() {
    this.leftDrawerOpen = false;
  },
};
</script>
<style scoped>
.hover-menu:hover .q-menu {
  display: block !important;
}
</style>
