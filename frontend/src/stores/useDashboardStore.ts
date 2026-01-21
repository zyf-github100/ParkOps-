import { defineStore } from "pinia";

export const useDashboardStore = defineStore("dashboard", {
  state: () => ({
    occupancyRate: 72,
    activeTickets: 18,
    revenueToday: 26480,
    alerts: [
      { id: 1, level: "warning", message: "B2 区域摄像头离线" },
      { id: 2, level: "info", message: "西侧入口排队 12 辆" },
      { id: 3, level: "success", message: "晚班人员已签到" }
    ]
  })
});
