import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./components/global";
import { checkArray } from "./components/array";
Vue.config.productionTip = false;

// 全局自定义权限管理命令
Vue.directive("display-key", {
  inserted(el, binding) {
    let displayKey = binding.value;
    if (displayKey) {
      console.log(typeof displayKey);
      let hasPermission = checkArray(displayKey);
      //如果没有权限，则删除dom节点
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error("需要传key");
    }
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
