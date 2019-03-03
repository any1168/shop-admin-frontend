import Vue from 'vue'
import App from './App.vue'

// 引入axios
import axios from 'axios';

// 1、引入element-ui 
import ElementUI from 'element-ui';

// 2、引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css';


// 导入vue-router
import VueRouter from "vue-router";

// 导入组件
import Login from "./pages/Login.vue";
import Admin from "./pages/Admin.vue";

// 注册插件
Vue.use(VueRouter)

// element-ui:3、注册插件

Vue.use(ElementUI);
Vue.config.productionTip = false;


// 配置路由
const routes = [{
    path: "/",
    redirect: "admin"
  },
  {
    path: "/login",
    component: Login,
    meta: "登陆页"
  },
  {
    path: "/admin",
    component: Admin,
    meta: "首页"
  }
]

// 创建路由对象

const router = new VueRouter({
  routes
});


// 给vue构造函数的原型链添加 $axios
Vue.prototype.$axios = axios;
new Vue({
  // 把路由挂载到跟实例
  router,
  render: h => h(App),
}).$mount('#app')