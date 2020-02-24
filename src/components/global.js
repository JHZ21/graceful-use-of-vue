import Vue from "vue";

function changeStr(str) {
  if (!str) return;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
// 对文件内的vue组件们，自动化注册
const requireComponet = require.context(".", false, /\.vue$/);

requireComponet.keys().forEach(fileName => {
  const config = requireComponet(fileName).default;
  console.log(requireComponet(fileName));
  const componentName = changeStr(
    fileName.replace(/^.\//, "").replace(/\.vue$/, "")
  );
  // 注册全局组件
  Vue.component(componentName, config);
});
