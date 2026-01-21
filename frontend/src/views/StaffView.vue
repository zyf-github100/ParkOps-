<template>
  <div class="staff">
    <el-row :gutter="20">
      <el-col :span="10">
        <el-card>
          <template #header>
            <div class="card-title">今日排班</div>
          </template>
          <el-timeline>
            <el-timeline-item
              v-for="shift in shifts"
              :key="shift.id"
              :type="shift.type"
              :timestamp="shift.time"
            >
              <div class="shift">
                <strong>{{ shift.title }}</strong>
                <span>{{ shift.desc }}</span>
              </div>
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>
      <el-col :span="14">
        <el-card>
          <template #header>
            <div class="card-title">人员绩效</div>
          </template>
          <el-table :data="staff" height="360">
            <el-table-column prop="name" label="员工" width="120" />
            <el-table-column prop="role" label="岗位" width="140" />
            <el-table-column prop="response" label="平均响应" />
            <el-table-column prop="score" label="评分" width="120" />
            <el-table-column label="状态" width="120">
              <template #default="scope">
                <el-tag :type="scope.row.statusType">{{ scope.row.status }}</el-tag>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
const shifts = [
  { id: 1, time: "08:00-12:00", title: "早班巡检", desc: "赵敏 / 李昊", type: "primary" },
  { id: 2, time: "12:00-18:00", title: "中班值守", desc: "陈晓 / 王霞", type: "success" },
  { id: 3, time: "18:00-22:00", title: "晚班应急", desc: "刘健 / 韩雨", type: "warning" }
];

const staff = [
  { name: "赵敏", role: "值班主管", response: "2 分 18 秒", score: 4.8, status: "在线", statusType: "success" },
  { name: "李昊", role: "巡检员", response: "3 分 05 秒", score: 4.6, status: "执行中", statusType: "warning" },
  { name: "陈晓", role: "客服", response: "1 分 45 秒", score: 4.9, status: "在线", statusType: "success" },
  { name: "王霞", role: "调度", response: "2 分 32 秒", score: 4.7, status: "在线", statusType: "success" }
];
</script>

<style scoped>
.staff {
  display: grid;
  gap: 20px;
}

.card-title {
  font-weight: 600;
}

.shift {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.shift span {
  color: #64748b;
  font-size: 12px;
}
</style>
