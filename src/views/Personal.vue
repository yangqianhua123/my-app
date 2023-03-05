<template>
  <el-container class="personal">
    <el-header class="title">个人中心</el-header>
    <el-container>
      <el-aside width="200px">
        <img class="user" src="../assets/images/wallhaven.png" alt="" />
        <el-tree
          :data="data"
          :props="defaultProps"
          default-expand-all="true"
          class="tree"
        ></el-tree>
      </el-aside>
      <el-main>
        <el-descriptions class="margin-top" :column="3" :size="size" border>
          <template slot="extra">
            <el-button type="primary" size="small" @click="back"
              >返回</el-button
            >
          </template>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-user"></i>
              用户名
            </template>
            Joey
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-mobile-phone"></i>
              手机号
            </template>
            18584900621
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-location-outline"></i>
              居住地
            </template>
            成都市
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-tickets"></i>
              备注
            </template>
            <el-tag size="small">暂无</el-tag>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building"></i>
              个人介绍
            </template>
            时间紧任务重，还暂未找到合适的个人中心ui设计，这部分只能暂告一段落
          </el-descriptions-item>
        </el-descriptions>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          label: "用户名",
          children: [
            {
              label: "Joey",
            },
          ],
        },
        {
          label: "手机号",
          children: [
            {
              label: "18584900621",
            },
          ],
        },
        {
          label: "IP地址",
          children: [
            {
              label: "四川省",
            },
          ],
        },
        {
          label: "邮箱",
          children: [
            {
              label: "211242073@qq.com",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    back() {
      this.$router.push("/home");
    },
  },
};
</script>

<style lang="less" scoped>
.personal {
  //   margin: 250px auto;
  //   width: 50%;
  //   height: 300px;
  .title {
    font-size: 30px;
    text-align: center;
    font-weight: 800;
  }
}
.user {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-left: 50px;
  margin-bottom: 20px;
}
.tree {
  font-weight: 800;
}
</style>
