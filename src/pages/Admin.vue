<template>
  <div class="admin-container">
    <el-container>
      <!-- 左侧菜单栏 -->
      <el-aside width="200px">Aside</el-aside>
      <!-- 右侧内容区域 -->
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 引入组件
import Aside from "../components/Aside";

export default {
  name: "admin-index",
  // 注册组件，注意组件名称不要和html的标签名重复
  components: {
    "app-aside": Aside
  }
};
</script>

<style>
/* container外层的div */
.admin-container {
  /* 固定定位 */
  position: fixed;
  width: 100%;
  top:0;
  bottom: 0;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
  /*继承admin-container的高度*/
  height: 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
