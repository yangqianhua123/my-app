<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <common-aside />
      </el-aside>
      <el-container>
        <el-header>
          <common-header />
        </el-header>
        <common-tag></common-tag>
        <el-main>
          <!-- 路由出口 -->
          <!-- 路由匹配到的组件将渲染在这里 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from "../components/CommonAside.vue";
import CommonHeader from "@/components/CommonHeader.vue";
import commonTag from "@/components/commonTag.vue";

export default {
  components: { CommonAside, CommonHeader, commonTag },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.el-header {
  padding: 0;
}
</style>
