<template>
  <div class="settings">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card>
          <template #header>
            <div class="card-title">通知与预警</div>
          </template>
          <el-form label-position="top">
            <el-form-item label="车位利用率告警阈值">
              <el-slider v-model="thresholds.occupancy" :min="50" :max="100" />
            </el-form-item>
            <el-form-item label="异常停留时长 (分钟)">
              <el-input-number v-model="thresholds.stay" :min="30" :max="240" />
            </el-form-item>
            <el-form-item label="告警通知方式">
              <el-checkbox-group v-model="thresholds.channels">
                <el-checkbox label="短信" />
                <el-checkbox label="企业微信" />
                <el-checkbox label="邮件" />
              </el-checkbox-group>
            </el-form-item>
            <el-button type="primary">保存配置</el-button>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <template #header>
            <div class="card-title">收费策略</div>
          </template>
          <el-form label-position="top">
            <el-form-item label="高峰计费">
              <el-select v-model="pricing.peak" placeholder="请选择">
                <el-option label="按时段加价" value="time" />
                <el-option label="按占用率加价" value="occupancy" />
              </el-select>
            </el-form-item>
            <el-form-item label="夜间优惠">
              <el-switch v-model="pricing.nightDiscount" />
            </el-form-item>
            <el-form-item label="月卡额度">
              <el-input-number v-model="pricing.monthQuota" :min="200" :max="1000" />
            </el-form-item>
            <el-button type="primary" plain>同步到所有车场</el-button>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const thresholds = reactive({
  occupancy: 75,
  stay: 120,
  channels: ["企业微信"]
});

const pricing = reactive({
  peak: "time",
  nightDiscount: true,
  monthQuota: 600
});
</script>

<style scoped>
.settings {
  display: grid;
  gap: 20px;
}

.card-title {
  font-weight: 600;
}
</style>
