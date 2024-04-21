import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home.vue";
import PackageView from "@/views/Package.vue";
import PackageReserveView from "@/views/PackageReserve.vue";
import GalleryView from "@/views/Gallery.vue";
import AboutView from "@/views/About.vue";
import TaskView from "@/views/Task.vue";
import TrainerView from "@/views/Trainer.vue";
import ReservationView from "@/views/Reservation.vue";
import MyProfileView from "@/views/Account/MyProfile.vue";
import MyReservationsView from "@/views/Account/MyReservations.vue";
import LoginView from "@/views/Login.vue";

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
      path: "/package/:id",
      name: "package-reserve",
      component: PackageReserveView,
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
      path: "/tasks",
      name: "tasks",
      component: TaskView,
    },
    {
      path: "/trainers",
      name: "trainers",
      component: TrainerView,
    },
    {
      path: "/reservations",
      name: "reservations",
      component: ReservationView,
    },
    {
      path: "/account/my-profile",
      name: "account/my-profile",
      component: MyProfileView,
    },
    {
      path: "/account/my-reservations",
      name: "account/my-reservations",
      component: MyReservationsView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
});

export default router;
