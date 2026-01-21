<template>
  <div class="vehicles">
    <el-card>
      <template #header>
        <div class="card-title">重点车辆监控</div>
      </template>
      <el-table :data="vehicles" stripe>
        <el-table-column prop="plate" label="车牌" width="140" />
        <el-table-column prop="owner" label="车主" />
        <el-table-column prop="lastSeen" label="最近入场" width="160" />
        <el-table-column prop="location" label="所在车场" />
        <el-table-column label="状态">
          <template #default="scope">
            <el-tag :type="scope.row.statusType">{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="160">
          <template #default>
            <el-button size="small" type="primary" plain>查看轨迹</el-button>
            <el-button size="small">备注</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
const vehicles = [
  {
    plate: "京A-9823B",
    owner: "安检白名单",
    lastSeen: "15:32",
    location: "中心城 P1",
    status: "在场",
    statusType: "success"
  },
  {
    plate: "沪C-1029X",
    owner: "欠费关注",
    lastSeen: "14:50",
    location: "市民广场 P3",
    status: "待处理",
    statusType: "warning"
  },
  {
    plate: "粤B-5571K",
    owner: "VIP",
    lastSeen: "13:16",
    location: "滨江枢纽 P2",
    status: "已离场",
    statusType: "info"
  }
];
</script>

<style scoped>
.vehicles {
  display: grid;
  gap: 20px;
}

.card-title {
  font-weight: 600;
}
</style>
