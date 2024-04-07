import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import PackageView from "../views/Package.vue";
import GalleryView from "../views/Gallery.vue";
import AboutView from "../views/About.vue";
import LoginView from "../views/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/package",
      name: "package",
      component: PackageView,
    },
    {
      path: "/gallery",
      name: "gallery",
      component: GalleryView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
});

export default router;
