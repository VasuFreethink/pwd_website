const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/second",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/SecondPage.vue") }],
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/AboutPage.vue"),
      },
    ],
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/GalleryPage.vue"),
      },
    ],
  },
  {
    path: "/json",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/JsonEditor.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
