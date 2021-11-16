// 所有组件的入口

import Button from "./button/index";
// import Button from './button/index'

const install = (Vue) => {
  Vue.component(Button.name, Button);
};
if (typeof window.Vue !== "undefined") {
  install(window.Vue);
}
// 有可能 组件会通过script 引用的
export default { install };
