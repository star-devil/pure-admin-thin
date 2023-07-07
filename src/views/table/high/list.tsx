/*
 * @Author: wangqiaoling
 * @Date: 2023-07-03 16:43:39
 * @LastEditTime: 2023-07-03 16:51:40
 * @LastEditors: wangqiaoling
 * @Description: 高级表格渲染列表
 */
import Adaptive from "./adaptive/Index.vue";

const rendContent = (val: string) =>
  `代码位置：src/views/pure-table/high/${val}/index.vue`;

export const list = [
  {
    key: "adaptive",
    content: rendContent("Adaptive"),
    title: "自适应内容区高度",
    component: Adaptive
  }
];
