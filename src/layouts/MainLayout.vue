<!--<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>-->

<template>
  <q-layout view="lHh lpr lFf">
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

        <!-- <q-btn flat round dense icon="whatshot" /> -->
      </q-toolbar>
      <q-toolbar class="row justify-between">
        <q-btn
          flat
          dense
          round
          icon="menu"
          class="q-mr-md"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-tabs v-model="tab">
          <!-- <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          /> -->
          <q-tab name="home" label="Home" />
          <q-tab name="staff" label="Staff" />
          <q-tab name="about" label="About" />
          <q-tab name="circular" label="Circulars" />
          <q-tab name="contact" label="Contact" />
        </q-tabs>
        <div class="q-px-xl"></div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { defineComponent, ref } from "vue";
// import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];
export default {
  name: "MainLayout",

  components: {
    // EssentialLink,
  },

  data() {
    return {
      essentialLinks: linksList,
      leftDrawerOpen: false,
    };
  },

  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
  },

  mounted() {
    this.leftDrawerOpen = false;
  },
};

// export default defineComponent({
//   name: "MainLayout",

//   components: {
//     // EssentialLink,
//   },

//   setup() {
//     const leftDrawerOpen = ref(false);

//     return {
//       essentialLinks: linksList,
//       leftDrawerOpen,
//       toggleLeftDrawer() {
//         leftDrawerOpen.value = !leftDrawerOpen.value;
//       },
//     };
//   },
// });
</script>
