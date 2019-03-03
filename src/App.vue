<template>
  <div id="app">
    <span>登陆</span>
    账号：
    <el-input v-model="input" placeholder="请输入内容"></el-input>密码：
    <el-input placeholder="请输入密码" v-model="input11" show-password></el-input>
    <div class="login">
      <el-row>
        <el-button type="primary"><span class="present">提交</span></el-button>
        <el-button><span class="reset">重置</span></el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      input: "",
      input11: ""
    };
  },

  mounted: function() {
    // 请求数据
    this.$axios.get("").then(res => {
      // console.log(res)
      console.log(res.data);
    });
  }
};
</script>

<style>
span {
  display: block;
  color: blue;
  font-size: 18px;
  text-align: center;
}
.login {
  text-align: center;
}
.login .present{
  color:#fff;
}
.login .reset{
  color:#000;
}
</style>
