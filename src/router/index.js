import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home.vue";
import PackageView from "@/views/Package.vue";
import PackageReserveView from "@/views/PackageReserve.vue";
import GalleryView from "@/views/Gallery.vue";
import AboutView from "@/views/About.vue";
import TrainerView from "@/views/Trainer.vue";
import ReservationView from "@/views/Reservation.vue";
import MyProfileView from "@/views/Account/MyProfile.vue";
import LoginView from "@/views/Login.vue";
import { currentUser } from "@/utils/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { requiredType: ["guest", "trainer", "employee"] },
    },
    {
      path: "/package",
      name: "package",
      component: PackageView,
      meta: { requiredType: ["guest", "trainer"] },
    },
    {
      path: "/package/:id",
      name: "package-reserve",
      component: PackageReserveView,
      meta: { requiredType: ["guest", "trainer"] },
    },
    {
      path: "/gallery",
      name: "gallery",
      component: GalleryView,
      meta: { requiredType: ["guest", "trainer"] },
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
      meta: { requiredType: ["guest", "trainer"] },
    },
    {
      path: "/trainers",
      name: "trainers",
      component: TrainerView,
      meta: { requiredType: ["employee"] },
    },
    {
      path: "/reservations",
      name: "reservations",
      component: ReservationView,
      meta: { requiredType: ["employee"] },
    },
    {
      path: "/account/my-profile",
      name: "account/my-profile",
      component: MyProfileView,
      meta: { requiredType: ["trainer"] },
    },
    {
      path: "/account/my-reservations",
      name: "account/my-reservations",
      component: MyProfileView,
      meta: { requiredType: ["trainer"] },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: { requiredType: ["guest"] },
    },
  ],
});

// Route guard
router.beforeEach((to, from, next) => {
  const userType = currentUser.type;

  if (to.meta.requiredType.includes(userType)) {
    next();
  } else {
    next({ name: "home" });
  }
});

export default router;
