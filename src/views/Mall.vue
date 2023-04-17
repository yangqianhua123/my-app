<template>
  <div class="mange">
    <el-dialog title="提示" :visible.sync="dialogVisible" width="50%">
      <el-form
        ref="form"
        :rules="rules"
        :inline="true"
        :model="goodsList"
        label-width="80px"
        :before-close="handleClose"
      >
        <el-form-item label="品牌" prop="name">
          <el-input
            placeholder="请输入品牌"
            v-model="goodsList.name"
          ></el-input>
        </el-form-item>
        <el-form-item label="价格" prop="price">
          <el-input
            placeholder="请输入价格"
            v-model="goodsList.price"
          ></el-input>
        </el-form-item>
        <el-form-item label="库存" prop="status">
          <el-input
            placeholder="请输入库存"
            v-model="goodsList.status"
          ></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="stock">
          <el-select v-model="goodsList.stock" placeholder="请选择">
            <el-option label="在售" :value="1"></el-option>
            <el-option label="下架" :value="0"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button click="cancel">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </span>
    </el-dialog>
    <div class="goods-list">
      <div class="toolbar">
        <el-button @click="addCommodity" type="primary">添加商品</el-button>
      </div>
      <el-table stripe :data="goodsList" style="width: 100%">
        <el-table-column prop="name" label="商品名称"></el-table-column>
        <el-table-column prop="price" label="价格"></el-table-column>
        <el-table-column prop="stock" label="库存"></el-table-column>
        <el-table-column prop="status" label="状态"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="success">编辑</el-button>
            <el-button type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      goodsList: [
        {
          id: 1,
          name: "Oppo",
          price: 3000,
          stock: 30,
          status: "在售",
        },
        {
          id: 2,
          name: "Vivo",
          price: 3200,
          stock: 0,
          status: "下架",
        },
        {
          id: 3,
          name: "Apple",
          price: 5900,
          stock: 41,
          status: "在售",
        },
        {
          id: 3,
          name: "小米",
          price: 3000,
          stock: 10,
          status: "在售",
        },
        {
          id: 3,
          name: "三星",
          price: 4000,
          stock: 20,
          status: "在售",
        },
        {
          id: 3,
          name: "魅族",
          price: 3000,
          stock: 14,
          status: "在售",
        },
      ],
      rules: {
        name: [{ required: true, message: "请输入品牌" }],
        price: [{ required: true, message: "请输入价格" }],
        stock: [{ required: true, message: "请输入库存" }],
        status: [{ required: true, message: "请选择状态" }],
      },
    };
  },
  methods: {
    //添加商品
    addCommodity() {
      this.dialogVisible = true;
    },
    //弹窗关闭时触发
    handleClose() {
      // 清空表单
      this.$refs.goodsList.resetFields();
      this.dialogVisible = false;
    },
  },
};
</script>

<style lang="less" scoped>
.toolbar {
  margin-bottom: 20px;
}
.mange {
  height: 90%;
}
</style>
