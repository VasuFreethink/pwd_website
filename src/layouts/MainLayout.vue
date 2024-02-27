<template>
  <q-layout view="lHh lpr lFf" :style="{ fontSize: fontSize }">
    <!-- style="font-size: 160%" -->
    <q-header elevated>
      <!-- <q-btn flat round dense icon="menu" class="q-mr-sm" /> -->
      <!-- <q-toolbar class="bg-white text-black" style="height: 150px">
        <div class="row full-width">
          <div class="col-md-6 flex">
            <img
              alt="Logo"
              src="src/assets/government-of-goa-logo.png"
              class="q-mx-md"
              style="height: 100px"
            />
            <div class="q-ml-sm">
              <h4 class="text-h4 q-ma-none text-bold">
                PUBLIC WORKS DEPARTMENT
              </h4>
              <p class="text-h6 q-ma-none">Government of Goa</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="float-right">
              <q-btn
                class="shadow-none q-mx-xs"
                size="sm"
                @click="decreaseFontSize"
                color="grey-6"
                round
              >
                A-
              </q-btn>
              <q-btn
                size="sm"
                color="grey-6"
                @click="resetFontSize"
                class="shadow-none q-mx-xs"
                round
              >
                A
              </q-btn>
              <q-btn
                color="grey-6"
                size="sm"
                @click="increaseFontSize"
                round
                class="shadow-none q-mx-xs"
              >
                A+
              </q-btn>
            </div>
          </div>
        </div>
      </q-toolbar> -->

      <q-toolbar
        class="bg-white text-black"
        :style="{
          height: $q.screen.gt.sm ? '150px' : $q.screen.lt.md ? '100px' : '',
        }"
      >
        <div class="row full-width">
          <div class="col-md-6 flex">
            <img
              alt="Logo"
              src="src/assets/government-of-goa-logo.png"
              class="q-mx-md"
              :style="{
                height: $q.screen.gt.sm
                  ? '100px'
                  : $q.screen.lt.md
                  ? '80px'
                  : '',
              }"
            />
            <!-- :style="height: 80px" -->
            <div class="q-ml-sm">
              <p
                class="q-ma-none text-bold"
                :class="{
                  'text-h4': $q.screen.gt.sm,
                  '': $q.screen.lt.md,
                }"
              >
                PUBLIC WORKS DEPARTMENT
              </p>
              <p
                class="q-ma-none"
                :class="{
                  'text-h6': $q.screen.gt.sm,
                  '': $q.screen.lt.md,
                }"
              >
                Government of Goa
              </p>
            </div>
          </div>
          <!-- -->
          <div
            class="col-md-6"
            :class="{
              '': $q.screen.gt.sm,
              'full-width': $q.screen.lt.md,
            }"
          >
            <div
              class="float-right d-flex align-items-center justify-content-center gt-sm"
            >
              <q-btn
                class="shadow-none q-mx-xs"
                size="sm"
                @click="decreaseFontSize"
                color="grey-6"
                round
              >
                A-
              </q-btn>
              <q-btn
                size="sm"
                color="grey-6"
                @click="resetFontSize"
                class="shadow-none q-mx-xs"
                round
              >
                A
              </q-btn>
              <q-btn
                color="grey-6"
                size="sm"
                @click="increaseFontSize"
                round
                class="shadow-none q-mx-xs"
              >
                A+
              </q-btn>
            </div>
          </div>
        </div>
      </q-toolbar>
      <!-- <q-toggle v-model="darkMode" label="Dark Mode" color="primary" /> -->
      <q-toolbar class="row justify-between">
        <!-- v-if="$q.platform.is.mobile" -->
        <div class="justify-between lt-md" style="width: 100%">
          <q-btn
            flat
            dense
            round
            icon="menu"
            class="q-mr-md"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />

          <div class="float-right">
            <q-btn
              class="shadow-none q-mx-xs text-grey-9"
              size="sm"
              @click="decreaseFontSize"
              color="grey-2"
              round
            >
              A-
            </q-btn>
            <q-btn
              size="sm"
              color="grey-2"
              @click="resetFontSize"
              class="shadow-none q-mx-xs text-grey-9"
              round
            >
              A
            </q-btn>
            <q-btn
              color="grey-2"
              size="sm"
              @click="increaseFontSize"
              round
              class="shadow-none q-mx-xs text-grey-9"
            >
              A+
            </q-btn>
          </div>
        </div>

        <div class="gt-sm"></div>
        <div>
          <q-btn-group class="gt-sm" flat stretch>
            <template
              v-for="(menuItem, index) in navBarTabs.Data"
              :key="'menu-' + index"
            >
              <q-btn-dropdown
                v-if="menuItem.SubMenu && menuItem.SubMenu.length > 0"
                color="primary"
                :label="menuItem.Label"
              >
                <q-list>
                  <template
                    v-for="(subItem, subIndex) in menuItem.SubMenu"
                    :key="'submenu-' + subIndex"
                  >
                    <q-item
                      clickable
                      v-close-popup
                      @click="handleNavigation(subItem)"
                    >
                      <q-item-section>
                        <q-item-label>{{ subItem.Label }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </template>
                </q-list>
              </q-btn-dropdown>
              <q-btn
                v-else
                :label="menuItem.Label"
                @click="handleNavigation(menuItem)"
                :key="'button-' + index"
              />
            </template>
          </q-btn-group>
        </div>
        <div class=""></div>
      </q-toolbar>
    </q-header>

    <!-- Side Bar -->
    <!-- class="lt-md" show-if-above-->
    <q-drawer v-model="leftDrawerOpen">
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <template
            v-for="(menuItem, index) in navBarTabs.Data"
            :key="'menu-' + index"
          >
            <q-expansion-item
              v-if="menuItem.SubMenu && menuItem.SubMenu.length > 0"
              group="somegroup"
              expand-separator
            >
              <template v-slot:header>
                <q-item-section avatar>
                  <q-icon color="grey-10" :name="menuItem.Icon" />
                </q-item-section>

                <q-item-section class="text-uppercase">
                  {{ menuItem.Label }}
                </q-item-section>
              </template>
              <q-separator />

              <template
                v-for="(subItem, subIndex) in menuItem.SubMenu"
                :key="'submenu-' + subIndex"
              >
                <q-item clickable v-ripple @click="handleNavigation(subItem)">
                  <q-item-section class="q-pl-lg">{{
                    subItem.Label
                  }}</q-item-section>
                </q-item>
              </template>
            </q-expansion-item>
            <q-item
              v-else
              clickable
              v-ripple
              @click="handleNavigation(menuItem)"
            >
              <q-item-section avatar>
                <q-icon color="grey-10" :name="menuItem.Icon" />
              </q-item-section>
              <q-item-section class="text-uppercase">{{
                menuItem.Label
              }}</q-item-section>
            </q-item>
          </template>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <!-- <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar> -->
          <!-- <div class="text-weight-bold">Razvan Stoenescu</div>
          <div>@rstoenescu</div> -->
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { useGeneralStore } from "src/stores/generalStore";
import mainLayoutData from "../assets/jsons/mainLayoutData.json";

const generalStore = useGeneralStore();

export default {
  name: "MainLayout",

  components: {},

  data() {
    return {
      leftDrawerOpen: false,
      generalStore,
      mainLayoutData: mainLayoutData,
      darkMode: false,
    };
  },
  computed: {
    // to get fontsize
    fontSize() {
      return this.generalStore.fontSize;
    },
    navBarTabs() {
      return this.mainLayoutData.NavBarTabs;
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

    handleNavigation(menuItem) {
      if (menuItem.Path) {
        // Navigate to internal route if Path attribute exists
        this.$router.push({ path: menuItem.Path });
      } else if (menuItem.Link) {
        // Navigate to external link if Link attribute exists
        window.open(menuItem.Link, "_blank");
      }
    },
  },
  watch: {
    darkMode(newDarkMode) {
      this.$q.dark.set(newDarkMode);
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
