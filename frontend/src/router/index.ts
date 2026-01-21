import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import DashboardView from "@/views/DashboardView.vue";
import ParkingView from "@/views/ParkingView.vue";
import VehiclesView from "@/views/VehiclesView.vue";
import StaffView from "@/views/StaffView.vue";
import SettingsView from "@/views/SettingsView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      children: [
        { path: "", name: "dashboard", component: DashboardView },
        { path: "parking", name: "parking", component: ParkingView },
        { path: "vehicles", name: "vehicles", component: VehiclesView },
        { path: "staff", name: "staff", component: StaffView },
        { path: "settings", name: "settings", component: SettingsView }
      ]
    }
  ]
});

export default router;
