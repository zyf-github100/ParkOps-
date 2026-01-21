<template>
  <div class="parking">
    <el-row :gutter="20">
      <el-col :span="8" v-for="lot in lots" :key="lot.id">
        <el-card class="parking-card">
          <div class="parking-card__header">
            <h3>{{ lot.name }}</h3>
            <el-tag :type="lot.statusType">{{ lot.status }}</el-tag>
          </div>
          <p>{{ lot.address }}</p>
          <el-progress :percentage="lot.occupancy" :status="lot.progressStatus" />
          <div class="parking-card__footer">
            <div>
              <span>今日入场</span>
              <strong>{{ lot.entries }}</strong>
            </div>
            <div>
              <span>今日营收</span>
              <strong>¥{{ lot.revenue }}</strong>
            </div>
            <el-button type="primary" plain>查看详情</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
const lots = [
  {
    id: 1,
    name: "中心城 P1",
    address: "南区 1 号入口 · 780 个车位",
    occupancy: 78,
    entries: 1234,
    revenue: 18230,
    status: "高负载",
    statusType: "warning",
    progressStatus: "warning"
  },
  {
    id: 2,
    name: "滨江枢纽 P2",
    address: "北区 3 号入口 · 520 个车位",
    occupancy: 64,
    entries: 842,
    revenue: 12640,
    status: "稳定运行",
    statusType: "success",
    progressStatus: "success"
  },
  {
    id: 3,
    name: "市民广场 P3",
    address: "东区 2 号入口 · 430 个车位",
    occupancy: 94,
    entries: 1120,
    revenue: 15890,
    status: "接近满位",
    statusType: "danger",
    progressStatus: "exception"
  }
];
</script>

<style scoped>
.parking-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.parking-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.parking-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.parking-card__footer strong {
  display: block;
  margin-top: 4px;
}
</style>
