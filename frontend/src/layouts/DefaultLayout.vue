<template>
  <el-container class="layout">
    <el-aside width="240px" class="sidebar">
      <div class="brand">
        <div class="brand__logo">P</div>
        <div>
          <div class="brand__title">ParkOps</div>
          <div class="brand__subtitle">停车运营中心</div>
        </div>
      </div>
      <el-menu
        class="menu"
        :default-active="activeMenu"
        router
      >
        <el-menu-item index="/">
          <el-icon><Monitor /></el-icon>
          <span>总览</span>
        </el-menu-item>
        <el-menu-item index="/parking">
          <el-icon><Location /></el-icon>
          <span>车场管理</span>
        </el-menu-item>
        <el-menu-item index="/vehicles">
          <el-icon><Van /></el-icon>
          <span>车辆监控</span>
        </el-menu-item>
        <el-menu-item index="/staff">
          <el-icon><User /></el-icon>
          <span>人员排班</span>
        </el-menu-item>
        <el-menu-item index="/settings">
          <el-icon><Setting /></el-icon>
          <span>系统设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="header">
        <div class="header__left">
          <h2>{{ pageTitle }}</h2>
          <span class="header__hint">实时更新 · 今日值班 {{ currentShift }}</span>
        </div>
        <div class="header__right">
          <el-input
            v-model="searchKeyword"
            placeholder="搜索车场、车牌或员工"
            class="header__search"
            prefix-icon="Search"
          />
          <el-button type="primary">新增工单</el-button>
          <el-avatar size="large">OP</el-avatar>
        </div>
      </el-header>
      <el-main class="main">
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { Location, Monitor, Setting, User, Van } from "@element-plus/icons-vue";

const route = useRoute();
const searchKeyword = ref("");
const currentShift = "早班组";

const pageTitle = computed(() => {
  switch (route.name) {
    case "parking":
      return "车场管理";
    case "vehicles":
      return "车辆监控";
    case "staff":
      return "人员排班";
    case "settings":
      return "系统设置";
    default:
      return "运营总览";
  }
});

const activeMenu = computed(() => route.path);
</script>

<style scoped>
.layout {
  min-height: 100vh;
  background: #f5f7fb;
}

.sidebar {
  background: #0f172a;
  color: #e2e8f0;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 24px 20px;
}

.brand__logo {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: #38bdf8;
  color: #0f172a;
  font-weight: 700;
  font-size: 20px;
}

.brand__title {
  font-size: 18px;
  font-weight: 600;
}

.brand__subtitle {
  font-size: 12px;
  color: #94a3b8;
}

.menu {
  border-right: none;
  background: transparent;
}

.menu :deep(.el-menu-item) {
  color: #cbd5f5;
}

.menu :deep(.el-menu-item.is-active) {
  background: rgba(56, 189, 248, 0.15);
  color: #38bdf8;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  padding: 20px 28px;
  border-bottom: 1px solid #e2e8f0;
}

.header__left h2 {
  margin: 0;
}

.header__hint {
  font-size: 12px;
  color: #64748b;
}

.header__right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.header__search {
  width: 240px;
}

.main {
  padding: 24px 28px;
}
</style>
