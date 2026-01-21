<template>
  <div class="dashboard">
    <el-row :gutter="20" class="summary">
      <el-col :span="6">
        <el-card>
          <div class="summary__item">
            <div>
              <p>当前车位占用率</p>
              <h3>{{ store.occupancyRate }}%</h3>
            </div>
            <el-progress type="dashboard" :percentage="store.occupancyRate" />
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div class="summary__item">
            <div>
              <p>正在处理工单</p>
              <h3>{{ store.activeTickets }} 项</h3>
            </div>
            <el-tag type="warning">+3</el-tag>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div class="summary__item">
            <div>
              <p>今日营收</p>
              <h3>¥{{ store.revenueToday.toLocaleString() }}</h3>
            </div>
            <el-tag type="success">目标达成 92%</el-tag>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div class="summary__item">
            <div>
              <p>高峰拥堵指数</p>
              <h3>轻度</h3>
            </div>
            <el-tag type="info">预计 18:20 缓解</el-tag>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="content">
      <el-col :span="16">
        <el-card>
          <template #header>
            <div class="card-title">车场实时状态</div>
          </template>
          <el-table :data="parkingRows" border>
            <el-table-column prop="name" label="车场" width="180" />
            <el-table-column prop="capacity" label="总车位" width="120" />
            <el-table-column prop="occupied" label="已占用" width="120" />
            <el-table-column prop="trend" label="近 1 小时" />
            <el-table-column label="状态">
              <template #default="scope">
                <el-tag :type="scope.row.statusType">{{ scope.row.status }}</el-tag>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <template #header>
            <div class="card-title">运营提醒</div>
          </template>
          <el-timeline>
            <el-timeline-item
              v-for="alert in store.alerts"
              :key="alert.id"
              :type="alert.level"
            >
              {{ alert.message }}
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { useDashboardStore } from "@/stores/useDashboardStore";

const store = useDashboardStore();

const parkingRows = [
  { name: "中心城 P1", capacity: 780, occupied: 612, trend: "上升 8%", status: "高负载", statusType: "warning" },
  { name: "滨江枢纽 P2", capacity: 520, occupied: 386, trend: "稳定", status: "正常", statusType: "success" },
  { name: "市民广场 P3", capacity: 430, occupied: 408, trend: "下降 3%", status: "接近满位", statusType: "danger" }
];
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.summary__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.summary__item h3 {
  margin: 4px 0 0;
}

.card-title {
  font-weight: 600;
}
</style>
